import { NextResponse } from "next/server";
import crypto from "crypto";
import { getAllOpenings, saveOpening, toggleOpeningStatus, StoredOpening } from "@/lib/data/openings-store";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function verifyAdminToken(request: Request): boolean {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return false;
  }

  const token = authHeader.split(" ")[1];
  const correctPasscode = process.env.CAREERS_ADMIN_PASSCODE || "teknovia2026admin";
  const secret = process.env.NEXTAUTH_SECRET || "teknovia-admin-secret-seed";
  const expectedToken = crypto
    .createHmac("sha256", secret)
    .update(correctPasscode)
    .digest("hex");

  return token === expectedToken;
}

// GET: List all openings (Active & Inactive) for Admin Dashboard
export async function GET(request: Request) {
  if (!verifyAdminToken(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized access." }, { status: 401 });
  }

  try {
    const openings = await getAllOpenings(true);
    return NextResponse.json({ success: true, openings });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : "Failed to load openings." },
      { status: 500 }
    );
  }
}

// POST: Publish / Create New Role
export async function POST(request: Request) {
  if (!verifyAdminToken(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized access." }, { status: 401 });
  }

  try {
    const body: StoredOpening = await request.json();

    if (!body.title || !body.title.trim()) {
      return NextResponse.json({ success: false, error: "Role title is required." }, { status: 400 });
    }

    const result = await saveOpening(body);
    return NextResponse.json({
      success: true,
      message: `Role "${body.title}" published successfully.`,
      id: result.id,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : "Error creating opening." },
      { status: 500 }
    );
  }
}

// PATCH: Toggle Status (Active / Inactive)
export async function PATCH(request: Request) {
  if (!verifyAdminToken(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized access." }, { status: 401 });
  }

  try {
    const body = await request.json();
    if (!body.id || !body.status) {
      return NextResponse.json({ success: false, error: "Missing opening ID or status." }, { status: 400 });
    }

    await toggleOpeningStatus(body.id, body.status as "Active" | "Inactive");
    return NextResponse.json({
      success: true,
      message: `Opening "${body.id}" status updated to ${body.status}.`,
      id: body.id,
      status: body.status,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : "Error updating opening." },
      { status: 500 }
    );
  }
}
