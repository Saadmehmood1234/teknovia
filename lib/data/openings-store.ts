import { openPositions, JobOpening } from "./careers-data";

export interface StoredOpening extends JobOpening {
  status: "Active" | "Inactive";
}

function parseArrayField(val: unknown, fallback: string[] = []): string[] {
  if (Array.isArray(val)) {
    const cleaned = val.map((x) => String(x).trim()).filter(Boolean);
    return cleaned.length > 0 ? cleaned : fallback;
  }
  if (typeof val === "string" && val.trim()) {
    const trimmed = val.trim();
    if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
      try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) {
          const cleaned = parsed.map((x) => String(x).trim()).filter(Boolean);
          if (cleaned.length > 0) return cleaned;
        }
      } catch {
        // Not JSON
      }
    }
    if (trimmed.includes("\n")) {
      const lines = trimmed.split("\n").map((x) => x.trim()).filter(Boolean);
      if (lines.length > 0) return lines;
    }
    return [trimmed];
  }
  return fallback;
}

export type RawOpeningInput = Partial<StoredOpening> | { [key: string]: unknown };

export function normalizeOpening(rawInput: RawOpeningInput): StoredOpening {
  const raw = rawInput as Record<string, unknown>;
  const shortDesc = String(raw.shortDescription || raw.description || "").trim();
  const defaultAbout = shortDesc
    ? [shortDesc]
    : ["Join our team at Teknovia to work on cutting-edge software solutions."];

  const wp = typeof raw.workplaceType === "string" && ["Hybrid", "On-site", "Remote"].includes(raw.workplaceType)
    ? (raw.workplaceType as "Hybrid" | "On-site" | "Remote")
    : "Hybrid";

  return {
    id: String(raw.id || "").trim(),
    title: String(raw.title || "Untitled Role").trim(),
    department: String(raw.department || "Engineering").trim(),
    category: (raw.category === "internship" ? "internship" : "job") as "job" | "internship",
    type: (raw.category === "internship" ? "Internship" : "Full-time") as "Full-time" | "Part-time" | "Internship",
    location: String(raw.location || "Noida, Sector 149").trim(),
    workplaceType: wp,
    experience: String(raw.experience || (raw.category === "internship" ? "Freshers / Students" : "1+ Years")).trim(),
    duration: raw.category === "internship" ? String(raw.duration || raw.experience || "3 - 6 Months").trim() : undefined,
    stipendOrSalary: String(raw.stipendOrSalary || (raw.category === "internship" ? "Competitive Stipend" : "Competitive Salary")).trim(),
    shortDescription: shortDesc || "Exciting opportunity at Teknovia Technologies.",
    aboutRole: parseArrayField(raw.aboutRole, defaultAbout),
    responsibilities: parseArrayField(raw.responsibilities, [
      "Collaborate with engineering teammates to ship clean, reliable code.",
      "Participate in sprint planning, code reviews, and architectural discussions.",
    ]),
    requirements: parseArrayField(raw.requirements, [
      "Solid problem-solving skills and eager mindset to learn.",
      "Hands-on experience with modern development tools and workflows.",
    ]),
    whoYouAre: parseArrayField(raw.whoYouAre, [
      "You take extreme ownership of your work and deliverables.",
      "You communicate with clarity and welcome constructive feedback.",
      "You are driven to build high-quality products that users love.",
    ]),
    benefits: parseArrayField(raw.benefits, [
      "Competitive compensation package reviewed regularly based on merit.",
      "Mentorship from experienced senior developers and tech leads.",
      "Modern workstation equipment, tooling stipends, and flexible work culture.",
    ]),
    featured: Boolean(raw.featured),
    postedDate: raw.postedDate ? String(raw.postedDate) : new Date().toISOString().split("T")[0],
    status: (raw.status === "Inactive" ? "Inactive" : "Active") as "Active" | "Inactive",
  };
}

// Global in-memory storage that survives server module reloads
const globalStore = globalThis as unknown as {
  teknoviaCustomOpenings?: StoredOpening[];
};

if (!globalStore.teknoviaCustomOpenings) {
  globalStore.teknoviaCustomOpenings = [];
}

export function readCustomOpenings(): StoredOpening[] {
  return (globalStore.teknoviaCustomOpenings || []).map(normalizeOpening);
}

export function writeCustomOpenings(openings: StoredOpening[]): void {
  globalStore.teknoviaCustomOpenings = openings.map(normalizeOpening);
}

/**
 * Get all openings, merging base static roles + custom roles + Google Sheet roles
 */
export async function getAllOpenings(includeInactive = false): Promise<StoredOpening[]> {
  const baseOpenings: StoredOpening[] = openPositions.map((p) =>
    normalizeOpening({
      ...p,
      status: "Active" as const,
    })
  );

  const custom = readCustomOpenings();

  // Map to merge by ID
  const map = new Map<string, StoredOpening>();

  for (const item of baseOpenings) {
    map.set(item.id, item);
  }

  for (const item of custom) {
    map.set(item.id, normalizeOpening(item));
  }

  // Attempt to sync from Google Apps Script if reachable and has getOpenings
  const googleScriptUrl = process.env.GOOGLE_SCRIPT_WEBAPP_URL?.trim();
  if (googleScriptUrl) {
    try {
      const url = new URL(googleScriptUrl);
      url.searchParams.set("action", "getOpenings");
      if (includeInactive) url.searchParams.set("all", "true");

      const res = await fetch(url.toString(), {
        next: { revalidate: 30 },
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.openings) && data.openings.length > 0) {
          for (const sheetOpening of data.openings) {
            if (sheetOpening && sheetOpening.id) {
              map.set(sheetOpening.id, normalizeOpening({
                ...sheetOpening,
                status: sheetOpening.status || "Active",
              }));
            }
          }
        }
      }
    } catch {
      // Gracefully fall back to local store
    }
  }

  const all = Array.from(map.values());
  if (includeInactive) {
    return all;
  }
  return all.filter((o) => o.status !== "Inactive");
}

export async function saveOpening(opening: StoredOpening): Promise<{ success: boolean; id: string }> {
  const normalized = normalizeOpening(opening);
  const current = readCustomOpenings();
  const existingIdx = current.findIndex((o) => o.id === normalized.id);

  if (existingIdx >= 0) {
    current[existingIdx] = normalized;
  } else {
    current.unshift(normalized);
  }

  writeCustomOpenings(current);

  // Sync to Google Apps Script in background/parallel
  const googleScriptUrl = process.env.GOOGLE_SCRIPT_WEBAPP_URL?.trim();
  if (googleScriptUrl) {
    try {
      fetch(googleScriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "createOpening",
          opening: normalized,
        }),
      }).catch((err) => console.warn("[Google Apps Script sync warning]:", err));
    } catch (err) {
      console.warn("[Google Apps Script dispatch error]:", err);
    }
  }

  return { success: true, id: normalized.id };
}

export async function toggleOpeningStatus(id: string, newStatus: "Active" | "Inactive"): Promise<boolean> {
  const current = readCustomOpenings();
  const existingIdx = current.findIndex((o) => o.id === id);

  if (existingIdx >= 0) {
    current[existingIdx].status = newStatus;
    writeCustomOpenings(current);
  } else {
    // If it's a static base role, add an override into custom openings
    const base = openPositions.find((o) => o.id === id);
    if (base) {
      current.push(normalizeOpening({ ...base, status: newStatus }));
      writeCustomOpenings(current);
    }
  }

  // Sync to Google Apps Script
  const googleScriptUrl = process.env.GOOGLE_SCRIPT_WEBAPP_URL?.trim();
  if (googleScriptUrl) {
    try {
      fetch(googleScriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "toggleOpeningStatus",
          id,
          status: newStatus,
        }),
      }).catch((err) => console.warn("[Google Apps Script toggle warning]:", err));
    } catch (err) {
      console.warn("[Google Apps Script toggle error]:", err);
    }
  }

  return true;
}
