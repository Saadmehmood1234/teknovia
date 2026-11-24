"use client";

import { useState } from "react";
import { X, Plus, Trash2, Loader2, Sparkles, ChevronDown } from "lucide-react";
import { StoredOpening } from "@/lib/data/openings-store";

interface AdminCreateOpeningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (openingPayload: StoredOpening) => Promise<void>;
  isSubmitting: boolean;
}

export function AdminCreateOpeningModal({
  isOpen,
  onClose,
  onSubmit,
  isSubmitting,
}: AdminCreateOpeningModalProps) {
  const [roleType, setRoleType] = useState<"job" | "internship">("job");
  const [internshipCompensation, setInternshipCompensation] = useState<"paid" | "unpaid">("paid");
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("Software Engineering");
  const [workplaceType, setWorkplaceType] = useState<"Hybrid" | "On-site" | "Remote">("Hybrid");
  const [location, setLocation] = useState("Noida, Sector 149");
  const [experienceOrDuration, setExperienceOrDuration] = useState("1 - 3 Years");
  const [stipendOrSalary, setStipendOrSalary] = useState("Competitive (₹6 - 12 LPA based on skill)");
  const [shortDescription, setShortDescription] = useState("");
  const [aboutRole, setAboutRole] = useState("");
  const [featured, setFeatured] = useState(false);

  const [responsibilities, setResponsibilities] = useState<string[]>([
    "Architect and ship production-grade features using modern frameworks.",
    "Collaborate with product and design to deliver intuitive user interfaces.",
  ]);
  const [requirements, setRequirements] = useState<string[]>([
    "Proficiency with modern web tech stack and clean architecture.",
    "Strong communication skills and problem-solving mindset.",
  ]);
  const [benefits, setBenefits] = useState<string[]>([
    "Competitive salary or paid monthly stipend.",
    "Flexible hybrid schedule and modern development workstation.",
  ]);

  if (!isOpen) return null;

  // Array item helpers
  const addResponsibility = () => setResponsibilities((p) => [...p, ""]);
  const updateResponsibility = (idx: number, val: string) =>
    setResponsibilities((p) => p.map((item, i) => (i === idx ? val : item)));
  const removeResponsibility = (idx: number) =>
    setResponsibilities((p) => p.filter((_, i) => i !== idx));

  const addRequirement = () => setRequirements((p) => [...p, ""]);
  const updateRequirement = (idx: number, val: string) =>
    setRequirements((p) => p.map((item, i) => (i === idx ? val : item)));
  const removeRequirement = (idx: number) =>
    setRequirements((p) => p.filter((_, i) => i !== idx));

  const addBenefit = () => setBenefits((p) => [...p, ""]);
  const updateBenefit = (idx: number, val: string) =>
    setBenefits((p) => p.map((item, i) => (i === idx ? val : item)));
  const removeBenefit = (idx: number) =>
    setBenefits((p) => p.filter((_, i) => i !== idx));

  const handleRoleTypeChange = (type: "job" | "internship") => {
    setRoleType(type);
    if (type === "internship") {
      setExperienceOrDuration("3 - 6 Months");
      setStipendOrSalary(
        internshipCompensation === "unpaid"
          ? "Unpaid (Certificate + PPO Opportunity)"
          : "₹15,000 - ₹25,000 / month"
      );
    } else {
      setExperienceOrDuration("1 - 3 Years");
      setStipendOrSalary("Competitive (₹6 - 12 LPA based on skill)");
    }
  };

  const handleCompensationChange = (comp: "paid" | "unpaid") => {
    setInternshipCompensation(comp);
    if (comp === "unpaid") {
      setStipendOrSalary("Unpaid (Certificate + PPO Opportunity)");
    } else {
      setStipendOrSalary("₹15,000 - ₹25,000 / month");
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const slug = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "");

    const aboutParagraphs = aboutRole
      .split("\n\n")
      .map((p) => p.trim())
      .filter(Boolean);

    const payload: StoredOpening = {
      id: slug,
      title,
      department,
      category: roleType,
      type: roleType === "internship" ? "Internship" : "Full-time",
      location,
      workplaceType,
      experience: roleType === "job" ? experienceOrDuration : "Freshers / Students",
      duration: roleType === "internship" ? experienceOrDuration : undefined,
      stipendOrSalary,
      shortDescription,
      aboutRole: aboutParagraphs.length > 0 ? aboutParagraphs : [shortDescription],
      responsibilities: responsibilities.filter(Boolean),
      requirements: requirements.filter(Boolean),
      benefits: benefits.filter(Boolean),
      whoYouAre: [
        "You take extreme ownership: when you see something broken, you fix it rather than waiting for a ticket.",
        "You care deeply about user experience — a 200ms lag or a misaligned layout bothers you.",
        "You communicate with clarity and appreciate candid, constructive feedback.",
      ],
      featured,
      postedDate: new Date().toISOString().split("T")[0],
      status: "Active",
    };

    await onSubmit(payload);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-10">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 className="font-heading text-xl font-bold text-slate-900 sm:text-2xl">
              Create New Opening
            </h2>
            <p className="text-xs text-slate-500">
              Fill in the role specifications. It will be published live immediately.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
          >
            <X className="size-5" />
          </button>
        </div>

        <form onSubmit={handleFormSubmit} className="mt-6 space-y-6">
          {/* Category Toggle */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Opening Category
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleRoleTypeChange("job")}
                className={`flex items-center justify-center rounded-xl p-3 text-xs font-bold transition border ${
                  roleType === "job"
                    ? "bg-primary text-white border-primary shadow-xs"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                Full-Time Job
              </button>
              <button
                type="button"
                onClick={() => handleRoleTypeChange("internship")}
                className={`flex items-center justify-center rounded-xl p-3 text-xs font-bold transition border ${
                  roleType === "internship"
                    ? "bg-primary text-white border-primary shadow-xs"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                Internship / Trainee Program
              </button>
            </div>
          </div>

          {/* Paid vs Unpaid Toggle for Internships */}
          {roleType === "internship" && (
            <div className="rounded-2xl border border-primary-100 bg-primary-50/50 p-4">
              <label className="block text-xs font-semibold text-slate-900 mb-2">
                Internship Compensation Structure
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleCompensationChange("paid")}
                  className={`flex flex-col items-center justify-center rounded-xl p-2.5 text-xs font-bold transition border ${
                    internshipCompensation === "paid"
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <span>Paid Internship</span>
                  <span className="text-[10px] font-normal opacity-90">Monthly Stipend + PPO</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleCompensationChange("unpaid")}
                  className={`flex flex-col items-center justify-center rounded-xl p-2.5 text-xs font-bold transition border ${
                    internshipCompensation === "unpaid"
                      ? "bg-purple-600 text-white border-purple-600 shadow-xs"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <span>Unpaid Internship</span>
                  <span className="text-[10px] font-normal opacity-90">Certificate + PPO Opportunity</span>
                </button>
              </div>
            </div>
          )}

          {/* Title & Department */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Role Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Full Stack Engineer (Next.js)"
                className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Department
              </label>
              <div className="relative">
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-white pl-3 pr-11 py-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 cursor-pointer"
                >
                  <option>Software Engineering</option>
                  <option>Web Engineering</option>
                  <option>Mobile App Development</option>
                  <option>Artificial Intelligence</option>
                  <option>Digital Marketing & SEO</option>
                  <option>UI/UX Design</option>
                  <option>Quality Assurance</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Workplace & Location */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Workplace Model
              </label>
              <div className="relative">
                <select
                  value={workplaceType}
                  onChange={(e) => setWorkplaceType(e.target.value as "Hybrid" | "On-site" | "Remote")}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-white pl-3 pr-11 py-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 cursor-pointer"
                >
                  <option value="Hybrid">Hybrid</option>
                  <option value="On-site">On-site</option>
                  <option value="Remote">Remote</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {roleType === "internship" ? "Duration" : "Experience"}
              </label>
              <input
                type="text"
                value={experienceOrDuration}
                onChange={(e) => setExperienceOrDuration(e.target.value)}
                placeholder={roleType === "internship" ? "e.g. 3 - 6 Months" : "e.g. 1 - 3 Years"}
                className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
          </div>

          {/* Salary / Stipend */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Compensation / Stipend
            </label>
            <input
              type="text"
              value={stipendOrSalary}
              onChange={(e) => setStipendOrSalary(e.target.value)}
              placeholder="e.g. ₹15,000 - ₹25,000 / month or Unpaid"
              className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Short Description (Card Hook) <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={2}
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="1-2 sentences summarizing the opportunity..."
              className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>

          {/* About Role (Detailed) */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              About the Opportunity (Detailed Description)
            </label>
            <textarea
              rows={3}
              value={aboutRole}
              onChange={(e) => setAboutRole(e.target.value)}
              placeholder="Detailed paragraphs explaining the team culture, day-to-day work, and impact..."
              className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs sm:text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>

          {/* Responsibilities */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-700">
                Key Responsibilities (What they&apos;ll do)
              </label>
              <button
                type="button"
                onClick={addResponsibility}
                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
              >
                <Plus className="size-3.5" />
                Add Item
              </button>
            </div>
            {responsibilities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => updateResponsibility(idx, e.target.value)}
                  placeholder={`Responsibility #${idx + 1}`}
                  className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {responsibilities.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeResponsibility(idx)}
                    className="p-2 text-slate-400 hover:text-red-500 transition"
                  >
                    <Trash2 className="size-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Requirements */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-700">
                Requirements & Qualifications
              </label>
              <button
                type="button"
                onClick={addRequirement}
                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
              >
                <Plus className="size-3.5" />
                Add Item
              </button>
            </div>
            {requirements.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => updateRequirement(idx, e.target.value)}
                  placeholder={`Requirement #${idx + 1}`}
                  className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {requirements.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeRequirement(idx)}
                    className="p-2 text-slate-400 hover:text-red-500 transition"
                  >
                    <Trash2 className="size-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-700">
                Benefits & Perks
              </label>
              <button
                type="button"
                onClick={addBenefit}
                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
              >
                <Plus className="size-3.5" />
                Add Item
              </button>
            </div>
            {benefits.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => updateBenefit(idx, e.target.value)}
                  placeholder={`Benefit #${idx + 1}`}
                  className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {benefits.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeBenefit(idx)}
                    className="p-2 text-slate-400 hover:text-red-500 transition"
                  >
                    <Trash2 className="size-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Featured on Home */}
          <div className="flex items-center gap-2.5 pt-2">
            <input
              type="checkbox"
              id="featured-checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="size-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
            />
            <label htmlFor="featured-checkbox" className="text-xs font-semibold text-slate-700 cursor-pointer">
              Mark as Featured Opening (Highlighted on Careers homepage)
            </label>
          </div>

          {/* Submit Buttons */}
          <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-primary-dark transition disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-3.5 animate-spin" />
                  <span>Publishing Role...</span>
                </>
              ) : (
                <>
                  <Sparkles className="size-3.5" />
                  <span>Publish Opening</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
