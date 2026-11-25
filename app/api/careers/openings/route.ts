import { NextResponse } from "next/server";
import { getAllOpenings } from "@/lib/data/openings-store";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const openings = await getAllOpenings(false);
    return NextResponse.json(
      {
        success: true,
        openings,
        count: openings.length,
        timestamp: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control": "no-store, max-age=0, must-revalidate",
        },
      }
    );
  } catch (err) {
    console.error("[Public Openings API Error]:", err);
    return NextResponse.json(
      {
        success: false,
        openings: [],
        error: "Failed to load openings.",
      },
      { status: 500 }
    );
  }
}
