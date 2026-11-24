import { NextResponse } from "next/server";
import { openPositions, JobOpening } from "@/lib/data/careers-data";

export const revalidate = 60; // Cache for 60 seconds (Incremental Static Regeneration)

export async function GET() {
  const googleScriptUrl = process.env.GOOGLE_SCRIPT_WEBAPP_URL?.trim();

  if (!googleScriptUrl) {
    return NextResponse.json({
      success: true,
      source: "static_fallback",
      openings: openPositions,
    });
  }

  try {
    const url = new URL(googleScriptUrl);
    url.searchParams.set("action", "getOpenings");

    const res = await fetch(url.toString(), {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Google Apps Script responded with ${res.status}`);
    }

    const data = await res.json();
    const dynamicOpenings: JobOpening[] = data.openings || [];

    // If Google Sheet has rows in "Job Openings", use them; otherwise fall back to static list
    if (dynamicOpenings.length > 0) {
      return NextResponse.json({
        success: true,
        source: "google_sheet_cms",
        openings: dynamicOpenings,
      });
    }

    return NextResponse.json({
      success: true,
      source: "static_default",
      openings: openPositions,
    });
  } catch (err) {
    console.warn("[Careers Openings API Warning] Falling back to static openings:", err);
    return NextResponse.json({
      success: true,
      source: "static_fallback",
      openings: openPositions,
    });
  }
}
