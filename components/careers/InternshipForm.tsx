"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2, Send, ShieldAlert, Copy, Check, ArrowRight, ChevronDown } from "lucide-react";
import { FileUploadField, UploadedFilePayload } from "./FileUploadField";
import { Turnstile } from "@/components/ui/Turnstile";

interface InternshipFormProps {
  defaultJobTitle?: string;
  jobSlug?: string;
}

export function InternshipForm({
  defaultJobTitle = "General Internship",
}: InternshipFormProps) {
  const jobTitle = defaultJobTitle;
  const [fullName, setFullName] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [degree, setDegree] = useState("B.Tech / B.E. (Computer Science / IT)");
  const [customDegree, setCustomDegree] = useState("");
  const [academicStatus, setAcademicStatus] = useState("Currently studying");
  const [gradYear, setGradYear] = useState("2026");
  const [skills, setSkills] = useState("");
  const [internshipDuration, setInternshipDuration] = useState("3 Months");
  const [startDate, setStartDate] = useState("Immediately");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [whyInternship, setWhyInternship] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // Honeypot
  const [cfToken, setCfToken] = useState("");

  const handleVerify = useCallback((token: string) => {
    setCfToken(token);
  }, []);

  const [resumeFile, setResumeFile] = useState<UploadedFilePayload | null>(null);
  const [collegeIdFile, setCollegeIdFile] = useState<UploadedFilePayload | null>(null);
  const [aadhaarFile, setAadhaarFile] = useState<UploadedFilePayload | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{ id: string; message: string } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    if (!parentName.trim()) newErrors.parentName = "Parent/Guardian name is required";

    const cleanPhone = phone.replace(/[\s\-\+]/g, "").slice(-10);
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = "Enter a valid 10-digit Indian phone number (starts with 6-9)";
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!collegeName.trim()) newErrors.collegeName = "College / University name is required";
    if (!degree.trim()) newErrors.degree = "Degree & Course is required";
    if (!skills.trim()) newErrors.skills = "Please list your primary skills or coursework";
    if (!resumeFile) newErrors.resumeFile = "Please upload your resume / CV";
    if (!collegeIdFile) newErrors.collegeIdFile = "College ID card proof is required";
    if (!consent) newErrors.consent = "You must agree to the privacy consent";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        formType: "internship",
        jobTitle,
        fullName,
        parentName,
        phone,
        email,
        dob,
        location,
        collegeName,
        degree: degree === "Other Equivalent" && customDegree.trim() ? customDegree.trim() : degree,
        academicStatus,
        gradYear,
        skills,
        internshipDuration,
        startDate,
        portfolioUrl,
        whyInternship,
        consent,
        website, // Honeypot
        cfTurnstileToken: cfToken,
        resumeFile,
        collegeIdFile,
        aadhaarFile,
      };

      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setSubmitSuccess({
        id: data.applicationId || "INT-" + Math.floor(100000 + Math.random() * 900000),
        message: data.message || "Your internship application has been received.",
      });
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div>
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary-50 text-primary ring-8 ring-primary-50/50">
          <CheckCircle2 className="size-8 text-primary" />
        </div>

        <div className="mt-6 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Internship Application Received
          </span>

          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Best of luck, {fullName.split(" ")[0]}!
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-600">
            Your application for the <strong className="text-slate-900">{jobTitle}</strong> internship at Teknovia has been logged. Our mentorship team evaluates applicants on a rolling basis.
          </p>

          {/* Reference ID Pill */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
              Application ID:
            </span>
            <code className="font-mono font-bold text-primary text-base">
              {submitSuccess.id}
            </code>
            <button
              type="button"
              onClick={() => handleCopyId(submitSuccess.id)}
              className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
              title="Copy Application ID"
            >
              {isCopied ? (
                <>
                  <Check className="size-3 text-emerald-600" /> Copied
                </>
              ) : (
                <>
                  <Copy className="size-3" /> Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 border-t border-slate-100 pt-6">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white shadow-sm hover:bg-primary-dark transition"
          >
            Explore Other Roles <ArrowRight className="size-3.5" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Return to Teknovia Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      {/* Honeypot field (hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="intern-website">Leave blank</label>
        <input
          type="text"
          id="intern-website"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {submitError && (
        <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-xs font-semibold text-red-700">
          <AlertCircle className="size-5 shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      {/* Section 1: Candidate Personal Details */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            1. Personal & Contact Details
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Priya Verma"
              className={`w-full rounded-xl border bg-white p-3 text-sm text-slate-900 outline-none transition focus:ring-4 focus:ring-primary/10 ${
                errors.fullName ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-primary"
              }`}
            />
            {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Father&apos;s / Mother&apos;s Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              placeholder="Parent or Guardian name"
              className={`w-full rounded-xl border bg-white p-3 text-sm text-slate-900 outline-none transition focus:ring-4 focus:ring-primary/10 ${
                errors.parentName ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-primary"
              }`}
            />
            {errors.parentName && <p className="mt-1 text-xs text-red-600">{errors.parentName}</p>}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Phone Number (10 Digits) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-sm font-semibold text-slate-400">+91</span>
              <input
                type="tel"
                required
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                placeholder="9876543210"
                className={`w-full rounded-xl border bg-white py-3 pl-12 pr-3 text-sm text-slate-900 outline-none transition focus:ring-4 focus:ring-primary/10 ${
                  errors.phone ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-primary"
                }`}
              />
            </div>
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="priya@college.edu or gmail"
              className={`w-full rounded-xl border bg-white p-3 text-sm text-slate-900 outline-none transition focus:ring-4 focus:ring-primary/10 ${
                errors.email ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-primary"
              }`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Date of Birth
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Current City & State
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Noida, Uttar Pradesh"
              className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>
      </div>

      {/* Section 2: College & Academic Background */}
      <div className="space-y-4 pt-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
          2. Academic & University Background
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              College / University Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              placeholder="e.g. AKTU / Amity / Delhi University"
              className={`w-full rounded-xl border bg-white p-3 text-sm text-slate-900 outline-none transition focus:ring-4 focus:ring-primary/10 ${
                errors.collegeName ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-primary"
              }`}
            />
            {errors.collegeName && <p className="mt-1 text-xs text-red-600">{errors.collegeName}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Degree & Course <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white pl-3.5 pr-11 py-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 cursor-pointer"
              >
                <optgroup label="── Bachelor's Degrees ──">
                  <option value="B.Tech / B.E. (Computer Science / IT)">B.Tech / B.E. (CSE / IT)</option>
                  <option value="B.Tech / B.E. (Other Branches)">B.Tech / B.E. (Other Branches)</option>
                  <option value="BCA (Computer Applications)">BCA (Computer Applications)</option>
                  <option value="B.Sc (Computer Science / IT)">B.Sc (Computer Science / IT)</option>
                  <option value="B.Sc / B.Com / BBA / BA">B.Sc / B.Com / BBA / BA</option>
                </optgroup>
                <optgroup label="── Master's Degrees ──">
                  <option value="MCA (Computer Applications)">MCA (Computer Applications)</option>
                  <option value="M.Tech / M.E.">M.Tech / M.E.</option>
                  <option value="M.Sc (Computer Science / IT)">M.Sc (Computer Science / IT)</option>
                  <option value="MBA / PGDM">MBA / PGDM</option>
                </optgroup>
                <optgroup label="── Diploma & Others ──">
                  <option value="Diploma in Engineering / IT">Diploma in Engineering / IT</option>
                  <option value="Polytechnic Diploma">Polytechnic Diploma</option>
                  <option value="Other Equivalent">Other Equivalent</option>
                </optgroup>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            </div>
            {degree === "Other Equivalent" && (
              <input
                type="text"
                required
                value={customDegree}
                onChange={(e) => setCustomDegree(e.target.value)}
                placeholder="Specify your degree / course"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            )}
            {errors.degree && <p className="mt-1 text-xs text-red-600">{errors.degree}</p>}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Academic Status <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                value={academicStatus}
                onChange={(e) => setAcademicStatus(e.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white pl-3.5 pr-11 py-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 cursor-pointer"
              >
                <option>Currently studying (Pre-final / Final Year)</option>
                <option>Fresher / Recent Graduate</option>
                <option>Prior Internship Experience</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Year of Graduation <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                value={gradYear}
                onChange={(e) => setGradYear(e.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white pl-3.5 pr-11 py-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 cursor-pointer"
              >
                <option value="2028">2028</option>
                <option value="2027">2027</option>
                <option value="2026">2026</option>
                <option value="2025 or Earlier">2025 or Earlier</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Internship Preferences */}
      <div className="space-y-4 pt-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
          3. Internship Preferences & Skills
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Duration Preference
            </label>
            <div className="relative">
              <select
                value={internshipDuration}
                onChange={(e) => setInternshipDuration(e.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white pl-3.5 pr-11 py-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 cursor-pointer"
              >
                <option>3 Months</option>
                <option>6 Months (Recommended for PPO)</option>
                <option>Summer Internship (2 Months)</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Available Start Date
            </label>
            <div className="relative">
              <select
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white pl-3.5 pr-11 py-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 cursor-pointer"
              >
                <option>Immediately</option>
                <option>Within 15 Days</option>
                <option>Next Month / After Exams</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Key Skills / Tools / Languages <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="e.g. JavaScript, React, HTML/CSS, Python, Figma, or Content Writing"
            className={`w-full rounded-xl border bg-white p-3 text-sm text-slate-900 outline-none transition focus:ring-4 focus:ring-primary/10 ${
              errors.skills ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-primary"
            }`}
          />
          {errors.skills && <p className="mt-1 text-xs text-red-600">{errors.skills}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            GitHub / Portfolio / LinkedIn Link
          </label>
          <input
            type="url"
            value={portfolioUrl}
            onChange={(e) => setPortfolioUrl(e.target.value)}
            placeholder="https://github.com/... or https://linkedin.com/..."
            className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Why do you want this internship at Teknovia?
          </label>
          <textarea
            rows={3}
            value={whyInternship}
            onChange={(e) => setWhyInternship(e.target.value)}
            placeholder="Tell us what excites you about this role and what you are eager to learn..."
            className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>
      </div>

      {/* Section 4: Document Attachments & DPDP Aadhaar Notice */}
      <div className="space-y-4 pt-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
          4. Document Uploads
        </h3>

        {/* DPDP Privacy Alert */}
        <div className="flex items-start gap-3 rounded-2xl border border-teal-200 bg-teal-50/50 p-4 text-xs text-teal-900">
          <ShieldAlert className="size-5 shrink-0 text-primary mt-0.5" />
          <div className="leading-5">
            <strong className="font-bold text-teal-950">DPDP Act Privacy Note (Aadhaar Card):</strong>
            <p className="mt-0.5 text-teal-800">
              Under India&apos;s Digital Personal Data Protection (DPDP) Act, providing your Aadhaar Card at the initial application stage is <span className="font-semibold underline">optional</span>. If you choose to upload it, you may upload a masked copy (first 8 digits hidden). Official government ID verification can also be completed upon selection.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FileUploadField
            id="intern-resume"
            label="Resume / CV"
            required
            helperText="PDF or DOC (Max 5 MB)"
            value={resumeFile}
            onChange={setResumeFile}
            error={errors.resumeFile}
          />

          <FileUploadField
            id="intern-college-id"
            label="College ID Card"
            required
            helperText="Photo or PDF of ID (Max 5 MB)"
            value={collegeIdFile}
            onChange={setCollegeIdFile}
            error={errors.collegeIdFile}
          />
        </div>

        <FileUploadField
          id="intern-aadhaar"
          label="Aadhaar Card (Optional at application stage)"
          helperText="Masked Aadhaar accepted. Max 5 MB."
          value={aadhaarFile}
          onChange={setAadhaarFile}
        />
      </div>

      {/* Cloudflare Turnstile Invisible Bot Protection */}
      <div className="pt-2">
        <Turnstile onVerify={handleVerify} />
      </div>

      {/* Consent & Submit */}
      <div className="space-y-4 pt-2 border-t border-slate-100">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 size-4 rounded border-slate-300 text-primary focus:ring-primary"
          />
          <span className="text-xs leading-5 text-slate-600">
            I certify that the information provided is correct. I consent to Teknovia Technologies processing my application details and storing files securely in accordance with the{" "}
            <Link href="/privacy-policy" target="_blank" className="text-primary underline">
              Privacy Policy
            </Link>
            . <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-600">{errors.consent}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary-dark disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Submitting Internship Application...
            </>
          ) : (
            <>
              <Send className="size-4" />
              Submit Application
            </>
          )}
        </button>
      </div>
    </form>
  );
}
