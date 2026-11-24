import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const { passcode } = await request.json();
    const correctPasscode = process.env.CAREERS_ADMIN_PASSCODE || "teknovia2026admin";

    if (!passcode || passcode.trim() !== correctPasscode.trim()) {
      return NextResponse.json(
        { success: false, error: "Invalid admin passcode." },
        { status: 401 }
      );
    }

    // Generate secure session token derived from passcode & secret
    const secret = process.env.NEXTAUTH_SECRET || "teknovia-admin-secret-seed";
    const token = crypto
      .createHmac("sha256", secret)
      .update(correctPasscode)
      .digest("hex");

    return NextResponse.json({
      success: true,
      token,
      message: "Admin authentication successful.",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Internal authentication error." },
      { status: 500 }
    );
  }
}
