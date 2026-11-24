"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2, Send, Copy, Check, ArrowRight, ChevronDown } from "lucide-react";
import { FileUploadField, UploadedFilePayload } from "./FileUploadField";
import { Turnstile } from "@/components/ui/Turnstile";

interface JobFormProps {
  defaultJobTitle?: string;
  jobSlug?: string;
}

export function JobForm({ defaultJobTitle = "General Job Application" }: JobFormProps) {
  const jobTitle = defaultJobTitle;
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [qualification, setQualification] = useState("B.Tech / B.E. (Computer Science / IT)");
  const [customQualification, setCustomQualification] = useState("");
  const [totalExperience, setTotalExperience] = useState("1 - 3 Years");
  const [currentCompany, setCurrentCompany] = useState("");
  const [currentCtc, setCurrentCtc] = useState("");
  const [expectedCtc, setExpectedCtc] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("Immediate");
  const [skills, setSkills] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [source, setSource] = useState("LinkedIn");
  const [coverLetter, setCoverLetter] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // Honeypot
  const [cfToken, setCfToken] = useState("");

  const handleVerify = useCallback((token: string) => {
    setCfToken(token);
  }, []);

  const [resumeFile, setResumeFile] = useState<UploadedFilePayload | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{ id: string; message: string } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) newErrors.fullName = "Full name is required";

    const cleanPhone = phone.replace(/[\s\-\+]/g, "").slice(-10);
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = "Enter a valid 10-digit Indian phone number (starts with 6-9)";
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!location.trim()) newErrors.location = "Current location is required";
    if (!skills.trim()) newErrors.skills = "Please list your primary skills";
    if (!resumeFile) newErrors.resumeFile = "Please upload your resume";
    if (!consent) newErrors.consent = "You must agree to the data consent policy";

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
        formType: "job",
        jobTitle,
        fullName,
        phone,
        email,
        location,
        qualification:
          qualification === "Other Equivalent" && customQualification.trim()
            ? customQualification.trim()
            : qualification,
        totalExperience,
        currentCompany,
        currentCtc,
        expectedCtc,
        noticePeriod,
        skills,
        portfolioUrl,
        source,
        coverLetter,
        consent,
        website, // Honeypot
        cfTurnstileToken: cfToken,
        resumeFile,
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
        id: data.applicationId || "JOB-" + Math.floor(100000 + Math.random() * 900000),
        message: data.message || "Your job application has been submitted successfully.",
      });
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 shadow-xl shadow-slate-100/50">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary-50 text-primary ring-8 ring-primary-50/50">
          <CheckCircle2 className="size-8 text-primary" />
        </div>

        <div className="mt-6 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Application Received Successfully
          </span>

          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Thank you for applying, {fullName.split(" ")[0]}!
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-600">
            Your application for <strong className="text-slate-900">{jobTitle}</strong> has been logged in our hiring database. Our talent acquisition team will review your profile.
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

        {/* What Happens Next Roadmap */}
        <div className="mt-10 border-t border-slate-100 pt-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 text-center mb-6">
            What Happens Next?
          </h3>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary-100 text-xs font-bold text-primary">
                1
              </span>
              <h4 className="mt-2 text-xs font-bold text-slate-900">Resume & Profile Review</h4>
              <p className="mt-1 text-xs text-slate-500 leading-5">
                Our hiring manager will review your experience and past work within 2-3 business days.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary-100 text-xs font-bold text-primary">
                2
              </span>
              <h4 className="mt-2 text-xs font-bold text-slate-900">Introductory Conversation</h4>
              <p className="mt-1 text-xs text-slate-500 leading-5">
                If shortlisted, our recruiter will reach out via phone or email for a quick 20-minute chat.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary-100 text-xs font-bold text-primary">
                3
              </span>
              <h4 className="mt-2 text-xs font-bold text-slate-900">Technical Discussion</h4>
              <p className="mt-1 text-xs text-slate-500 leading-5">
                An interactive session with our engineering/marketing lead to dive into real problems.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 border-t border-slate-100 pt-6">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white shadow-sm hover:bg-primary-dark transition"
          >
            Explore Other Openings <ArrowRight className="size-3.5" />
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
        <label htmlFor="website">Leave blank</label>
        <input
          type="text"
          id="website"
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

      {/* Section 1: Candidate Basics */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            1. Candidate Information
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
              className={`w-full rounded-xl border bg-white p-3 text-sm text-slate-900 outline-none transition focus:ring-4 focus:ring-primary/10 ${
                errors.fullName ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-primary"
              }`}
            />
            {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
          </div>

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
                className={`w-full rounded-xl border bg-white py-3 pl-12 pr-3 text-sm text-slate-900 outline-none transition focus:ring-4 focus:ring-primary/10 ${
                  errors.phone ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-primary"
                }`}
              />
            </div>
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full rounded-xl border bg-white p-3 text-sm text-slate-900 outline-none transition focus:ring-4 focus:ring-primary/10 ${
                errors.email ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-primary"
              }`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Current Location (City, State) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={`w-full rounded-xl border bg-white p-3 text-sm text-slate-900 outline-none transition focus:ring-4 focus:ring-primary/10 ${
                errors.location ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-primary"
              }`}
            />
            {errors.location && <p className="mt-1 text-xs text-red-600">{errors.location}</p>}
          </div>
        </div>
      </div>

      {/* Section 2: Professional Profile */}
      <div className="space-y-4 pt-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
          2. Professional Profile & Compensation
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Highest Qualification <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
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
            {qualification === "Other Equivalent" && (
              <input
                type="text"
                required
                value={customQualification}
                onChange={(e) => setCustomQualification(e.target.value)}
                placeholder="Specify your degree / qualification"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Total Professional Experience <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                value={totalExperience}
                onChange={(e) => setTotalExperience(e.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white pl-3.5 pr-11 py-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 cursor-pointer"
              >
                <option>Less than 1 Year</option>
                <option>1 - 2 Years</option>
                <option>2 - 4 Years</option>
                <option>4 - 7 Years</option>
                <option>7+ Years</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Current Company (if employed)
            </label>
            <input
              type="text"
              value={currentCompany}
              onChange={(e) => setCurrentCompany(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Current CTC (LPA)
            </label>
            <input
              type="text"
              value={currentCtc}
              onChange={(e) => setCurrentCtc(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Expected CTC (LPA)
            </label>
            <input
              type="text"
              value={expectedCtc}
              onChange={(e) => setExpectedCtc(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Notice Period <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                value={noticePeriod}
                onChange={(e) => setNoticePeriod(e.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white pl-3.5 pr-11 py-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 cursor-pointer"
              >
                <option>Immediate / Available Now</option>
                <option>15 Days</option>
                <option>30 Days</option>
                <option>45 - 60 Days</option>
                <option>Currently Serving Notice</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              How did you hear about us?
            </label>
            <div className="relative">
              <select
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white pl-3.5 pr-11 py-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 cursor-pointer"
              >
                <option>LinkedIn</option>
                <option>Google Search</option>
                <option>Employee Referral</option>
                <option>Instagram / Social Media</option>
                <option>College Placement</option>
                <option>Other</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Key Technical Skills & Tools <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className={`w-full rounded-xl border bg-white p-3 text-sm text-slate-900 outline-none transition focus:ring-4 focus:ring-primary/10 ${
              errors.skills ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-primary"
            }`}
          />
          {errors.skills && <p className="mt-1 text-xs text-red-600">{errors.skills}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            LinkedIn Profile / GitHub / Portfolio Link
          </label>
          <input
            type="url"
            value={portfolioUrl}
            onChange={(e) => setPortfolioUrl(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Brief Cover Note / Highlights (Optional)
          </label>
          <textarea
            rows={3}
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>
      </div>

      {/* Section 3: Resume Attachment */}
      <div className="space-y-4 pt-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
          3. Resume / CV Attachment
        </h3>

        <FileUploadField
          id="job-resume"
          label="Upload Resume"
          required
          helperText="PDF or DOC (Max 5 MB)"
          value={resumeFile}
          onChange={setResumeFile}
          error={errors.resumeFile}
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
            I certify that the information provided is accurate. I consent to Teknovia Technologies evaluating and securely storing my application data for recruitment under the{" "}
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
              Submitting Application...
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
