import { cache } from "react";
import { openPositions, JobOpening } from "./careers-data";
import { connectToDatabase } from "@/lib/mongodb";
import { OpeningModel } from "@/lib/models/Opening";

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
  teknoviaLastKnownGoodOpenings?: StoredOpening[];
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
 * Fetch live from Google Apps Script (secondary fallback / seed source)
 */
async function fetchGoogleSheetOpenings(includeInactive = false): Promise<StoredOpening[]> {
  const googleScriptUrl = process.env.GOOGLE_SCRIPT_WEBAPP_URL?.trim();
  if (!googleScriptUrl) return [];

  try {
    const url = new URL(googleScriptUrl);
    url.searchParams.set("action", "getOpenings");
    if (includeInactive) url.searchParams.set("all", "true");

    const res = await fetch(url.toString(), {
      cache: "no-store",
      headers: { "Accept": "application/json" },
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && Array.isArray(data.openings) && data.openings.length > 0) {
        return data.openings.map((o: unknown) => normalizeOpening(o as RawOpeningInput));
      }
    }
  } catch (err) {
    console.warn("[Google Apps Script fetch warning]:", err);
  }
  return [];
}

/**
 * Get all openings:
 * 1. Primary: MongoDB (Fast, transactional, 100% reliable)
 * 2. Secondary fallback: Google Apps Script + In-memory store
 * 3. Resilient cache: Never returns empty [] if openings previously existed
 */
export async function getAllOpenings(includeInactive = false): Promise<StoredOpening[]> {
  // 1. Try MongoDB
  try {
    const mongooseConn = await connectToDatabase();
    if (mongooseConn) {
      const query: { status?: "Active" | "Inactive" } = includeInactive ? {} : { status: "Active" };
      const docs = await OpeningModel.find(query).sort({ createdAt: -1 }).lean();

      if (docs && docs.length > 0) {
        const mongoOpenings: StoredOpening[] = docs.map((doc) =>
          normalizeOpening({
            id: doc.id,
            title: doc.title,
            department: doc.department,
            category: doc.category,
            type: doc.type,
            location: doc.location,
            workplaceType: doc.workplaceType,
            experience: doc.experience,
            duration: doc.duration,
            stipendOrSalary: doc.stipendOrSalary,
            shortDescription: doc.shortDescription,
            aboutRole: doc.aboutRole,
            responsibilities: doc.responsibilities,
            requirements: doc.requirements,
            whoYouAre: doc.whoYouAre,
            benefits: doc.benefits,
            featured: doc.featured,
            status: doc.status,
            postedDate: doc.postedDate,
          })
        );

        // Update last-known-good cache
        globalStore.teknoviaLastKnownGoodOpenings = mongoOpenings;
        return mongoOpenings;
      }

      // If MongoDB is connected but empty, auto-migrate/seed from Google Sheet or static
      const sheetOpenings = await fetchGoogleSheetOpenings(true);
      const seedSource = sheetOpenings.length > 0 ? sheetOpenings : openPositions.map((p) => normalizeOpening(p));

      if (seedSource.length > 0) {
        try {
          for (const item of seedSource) {
            await OpeningModel.findOneAndUpdate(
              { id: item.id },
              item,
              { upsert: true, new: true, setDefaultsOnInsert: true }
            );
          }
          console.log(`[MongoDB Auto-Seed] Successfully seeded ${seedSource.length} openings into MongoDB.`);
          const seeded = await OpeningModel.find(query).sort({ createdAt: -1 }).lean();
          const seededOpenings = seeded.map((doc) => normalizeOpening(doc as unknown as RawOpeningInput));
          globalStore.teknoviaLastKnownGoodOpenings = seededOpenings;
          return seededOpenings;
        } catch (seedErr) {
          console.warn("[MongoDB Seed Error]:", seedErr);
        }
      }
    }
  } catch (mongoErr) {
    console.warn("[MongoDB query error, falling back]:", mongoErr);
  }

  // 2. Fallback to Google Sheet & in-memory store
  const map = new Map<string, StoredOpening>();

  for (const item of openPositions) {
    map.set(item.id, normalizeOpening({ ...item, status: "Active" }));
  }

  const sheetOpenings = await fetchGoogleSheetOpenings(includeInactive);
  for (const sheetOpening of sheetOpenings) {
    map.set(sheetOpening.id, sheetOpening);
  }

  const custom = readCustomOpenings();
  for (const item of custom) {
    map.set(item.id, normalizeOpening(item));
  }

  const all = Array.from(map.values());
  const filtered = includeInactive ? all : all.filter((o) => o.status !== "Inactive");

  // Update last-known-good cache if we got results
  if (filtered.length > 0) {
    globalStore.teknoviaLastKnownGoodOpenings = filtered;
    return filtered;
  }

  // Resilient protection against cold-start empty drops:
  if (globalStore.teknoviaLastKnownGoodOpenings && globalStore.teknoviaLastKnownGoodOpenings.length > 0) {
    return includeInactive
      ? globalStore.teknoviaLastKnownGoodOpenings
      : globalStore.teknoviaLastKnownGoodOpenings.filter((o) => o.status !== "Inactive");
  }

  return filtered;
}

export async function saveOpening(opening: StoredOpening): Promise<{ success: boolean; id: string }> {
  const normalized = normalizeOpening(opening);

  // 1. Save to MongoDB if available
  try {
    const mongooseConn = await connectToDatabase();
    if (mongooseConn) {
      await OpeningModel.findOneAndUpdate(
        { id: normalized.id },
        normalized,
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
    }
  } catch (mongoErr) {
    console.error("[MongoDB saveOpening error]:", mongoErr);
  }

  // 2. Update in-memory store
  const current = readCustomOpenings();
  const existingIdx = current.findIndex((o) => o.id === normalized.id);
  if (existingIdx >= 0) {
    current[existingIdx] = normalized;
  } else {
    current.unshift(normalized);
  }
  writeCustomOpenings(current);

  // 3. Sync to Google Apps Script as secondary backup
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
        cache: "no-store",
      }).catch((e) => console.warn("[Google Apps Script sync warning]:", e));
    } catch {
      // non-blocking
    }
  }

  return { success: true, id: normalized.id };
}

export async function toggleOpeningStatus(id: string, newStatus: "Active" | "Inactive"): Promise<boolean> {
  // 1. Update in MongoDB if available
  try {
    const mongooseConn = await connectToDatabase();
    if (mongooseConn) {
      await OpeningModel.findOneAndUpdate(
        { id },
        { $set: { status: newStatus } },
        { new: true }
      );
    }
  } catch (mongoErr) {
    console.error("[MongoDB toggleOpeningStatus error]:", mongoErr);
  }

  // 2. Update in-memory store
  const current = readCustomOpenings();
  const existingIdx = current.findIndex((o) => o.id === id);
  if (existingIdx >= 0) {
    current[existingIdx].status = newStatus;
    writeCustomOpenings(current);
  } else {
    const all = await getAllOpenings(true);
    const found = all.find((o) => o.id === id);
    if (found) {
      current.push(normalizeOpening({ ...found, status: newStatus }));
      writeCustomOpenings(current);
    }
  }

  // 3. Sync to Google Apps Script as secondary backup
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
        cache: "no-store",
      }).catch((e) => console.warn("[Google Apps Script toggle sync warning]:", e));
    } catch {
      // non-blocking
    }
  }

  return true;
}

export async function deleteOpening(id: string): Promise<boolean> {
  try {
    const mongooseConn = await connectToDatabase();
    if (mongooseConn) {
      await OpeningModel.findOneAndDelete({ id });
    }
  } catch (mongoErr) {
    console.error("[MongoDB deleteOpening error]:", mongoErr);
  }

  const current = readCustomOpenings().filter((o) => o.id !== id);
  writeCustomOpenings(current);
  return true;
}

export async function getDynamicOpenings(): Promise<JobOpening[]> {
  try {
    return await getAllOpenings(false);
  } catch {
    return openPositions;
  }
}

export const findJob = cache(async (slug: string): Promise<JobOpening | undefined> => {
  if (!slug) return undefined;
  const cleanSlug = decodeURIComponent(slug).trim().toLowerCase();

  try {
    const all = await getAllOpenings(true);
    const found = all.find((j) => (j.id || "").trim().toLowerCase() === cleanSlug);
    if (found) return found;
  } catch (err) {
    console.warn("[findJob error]:", err);
  }
  return openPositions.find((job) => (job.id || "").trim().toLowerCase() === cleanSlug);
});

