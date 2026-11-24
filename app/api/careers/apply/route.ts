import { NextResponse } from "next/server";

const INDIAN_PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
  "image/webp",
];

// In-Memory IP Rate Limiter (Sliding Window)
// Allows max 5 requests per 15 minutes per IP
interface RateLimitEntry {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Periodically clean up stale entries (every 10 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    const valid = entry.timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
    if (valid.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, { timestamps: valid });
    }
  }
}, 10 * 60 * 1000);

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { timestamps: [] };
  const recent = entry.timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, { timestamps: recent });
  return false;
}

export async function POST(request: Request) {
  try {
    // 0. Extract Client IP
    const clientIp =
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    // 1. IP Rate Limiting check (DDoS / Form Flooding Defense)
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many application attempts detected from this network. Please wait 15 minutes before trying again.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // 2. Honeypot check (Spambot Trap)
    if (body.website) {
      return NextResponse.json({
        success: true,
        message: "Application received.",
        applicationId: "JOB-VERIFIED",
      });
    }

    // 3. Cloudflare Turnstile Verification (if secret key configured)
    const turnstileSecret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY?.trim();
    if (turnstileSecret && body.cfTurnstileToken && body.cfTurnstileToken !== "dev-bypass-token") {
      try {
        const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: turnstileSecret,
            response: body.cfTurnstileToken,
            remoteip: clientIp,
          }),
        });

        const verifyData = await verifyRes.json();
        if (!verifyData.success) {
          console.warn("[Cloudflare Turnstile verification warning]:", verifyData["error-codes"]);
          // Only block if explicitly flagged as an invalid response from a bot; don't block on network or config timeouts
          const errorCodes: string[] = verifyData["error-codes"] || [];
          const isHardBotFail = errorCodes.some((code) => ["invalid-input-response"].includes(code));
          if (isHardBotFail) {
            return NextResponse.json(
              { success: false, error: "Automated verification could not be completed. Please try again." },
              { status: 403 }
            );
          }
        }
      } catch (cfErr) {
        console.warn("[Cloudflare Turnstile verification warning]:", cfErr);
      }
    }

    const formType = body.formType === "internship" ? "internship" : "job";

    // 4. Validate common required fields
    if (!body.fullName || typeof body.fullName !== "string" || !body.fullName.trim()) {
      return NextResponse.json({ success: false, error: "Full Name is required." }, { status: 400 });
    }

    const cleanPhone = (body.phone || "").toString().replace(/[\s\-\+]/g, "").slice(-10);
    if (!INDIAN_PHONE_REGEX.test(cleanPhone)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid 10-digit Indian phone number." },
        { status: 400 }
      );
    }

    if (!body.email || !EMAIL_REGEX.test(body.email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!body.consent) {
      return NextResponse.json(
        { success: false, error: "Please agree to the privacy consent to submit your application." },
        { status: 400 }
      );
    }

    // 5. Validate Resume file
    if (!body.resumeFile || !body.resumeFile.base64) {
      return NextResponse.json(
        { success: false, error: "Please upload your resume." },
        { status: 400 }
      );
    }

    // Validate file sizes
    const filesToValidate = [
      { name: "Resume", file: body.resumeFile },
      { name: "College ID", file: body.collegeIdFile },
      { name: "Aadhaar Card", file: body.aadhaarFile },
    ];

    for (const item of filesToValidate) {
      if (item.file && item.file.base64) {
        const base64Length = item.file.base64.length - (item.file.base64.indexOf(",") + 1);
        const approxBytes = (base64Length * 3) / 4;

        if (approxBytes > MAX_FILE_SIZE_BYTES) {
          return NextResponse.json(
            { success: false, error: `${item.name} exceeds the maximum file size limit of 5 MB.` },
            { status: 400 }
          );
        }

        if (item.file.mimeType && !ALLOWED_MIME_TYPES.includes(item.file.mimeType.toLowerCase())) {
          return NextResponse.json(
            { success: false, error: `${item.name} format is not supported. Use PDF, DOC, DOCX, JPG, or PNG.` },
            { status: 400 }
          );
        }
      }
    }

    // 6. Form type specific validations
    if (formType === "internship") {
      if (!body.parentName || !body.parentName.trim()) {
        return NextResponse.json({ success: false, error: "Father's or Mother's Name is required." }, { status: 400 });
      }
      if (!body.collegeName || !body.collegeName.trim()) {
        return NextResponse.json({ success: false, error: "College Name is required." }, { status: 400 });
      }
      if (!body.degree || !body.degree.trim()) {
        return NextResponse.json({ success: false, error: "Degree / Course is required." }, { status: 400 });
      }
      if (!body.collegeIdFile || !body.collegeIdFile.base64) {
        return NextResponse.json({ success: false, error: "College ID card proof is required for internships." }, { status: 400 });
      }
    } else {
      if (!body.qualification || !body.qualification.trim()) {
        return NextResponse.json({ success: false, error: "Highest Qualification is required." }, { status: 400 });
      }
      if (!body.totalExperience || !body.totalExperience.trim()) {
        return NextResponse.json({ success: false, error: "Total Experience is required." }, { status: 400 });
      }
      if (!body.noticePeriod || !body.noticePeriod.trim()) {
        return NextResponse.json({ success: false, error: "Notice Period is required." }, { status: 400 });
      }
    }

    // 7. Forward to Google Apps Script Web App
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_WEBAPP_URL?.trim();

    if (!googleScriptUrl) {
      console.warn(
        "[Teknovia Careers] GOOGLE_SCRIPT_WEBAPP_URL is not configured in environment variables. Simulating successful submission for local test."
      );

      return NextResponse.json({
        success: true,
        message: "Application submitted successfully (Test Mode: Add GOOGLE_SCRIPT_WEBAPP_URL to record in Google Sheets).",
        applicationId: `TEK-${Date.now().toString().slice(-6)}`,
      });
    }

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...body,
        phone: cleanPhone,
      }),
      redirect: "follow",
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("[Google Apps Script error]:", response.status, errText);
      return NextResponse.json(
        { success: false, error: "Unable to save application to Google Sheets. Please try again shortly." },
        { status: 502 }
      );
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("[Careers API error]:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
