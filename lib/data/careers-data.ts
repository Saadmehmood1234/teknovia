import { cache } from "react";

export type OpeningCategory = "all" | "job" | "internship";

export interface JobOpening {
  id: string; // Used as slug, e.g. "full-stack-engineer"
  title: string;
  department: string;
  type: "Full-time" | "Part-time" | "Internship";
  category: "job" | "internship";
  location: string;
  workplaceType: "Hybrid" | "On-site" | "Remote";
  experience: string;
  duration?: string; // For internships
  stipendOrSalary: string;
  shortDescription: string;
  aboutRole: string[];
  responsibilities: string[];
  requirements: string[];
  whoYouAre: string[];
  benefits: string[];
  featured?: boolean;
  postedDate?: string;
}

export const openPositions: JobOpening[] = [];

export function getJobBySlug(slug: string): JobOpening | undefined {
  return openPositions.find((job) => job.id === slug);
}

export function getAllJobSlugs(): string[] {
  return openPositions.map((job) => job.id);
}

/**
 * Fetch dynamic openings merging base static positions, custom admin creations,
 * and live Google Sheet updates.
 */
export async function getDynamicOpenings(): Promise<JobOpening[]> {
  try {
    const { getAllOpenings } = await import("./openings-store");
    return await getAllOpenings(false);
  } catch {
    return openPositions;
  }
}

export const findJob = cache(async (slug: string): Promise<JobOpening | undefined> => {
  if (!slug) return undefined;
  const cleanSlug = decodeURIComponent(slug).trim().toLowerCase();

  try {
    const { getAllOpenings } = await import("./openings-store");
    const all = await getAllOpenings(true);
    const found = all.find((j) => (j.id || "").trim().toLowerCase() === cleanSlug);
    if (found) return found;
  } catch (err) {
    console.warn("[findJob error]:", err);
  }
  return openPositions.find((job) => (job.id || "").trim().toLowerCase() === cleanSlug);
});
