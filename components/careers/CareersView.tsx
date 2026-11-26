"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Search,
  Sparkles,
  ArrowRight,
  IndianRupee,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { openPositions, OpeningCategory, JobOpening } from "@/lib/data/careers-data";

export function CareersView({ initialOpenings }: { initialOpenings?: JobOpening[] }) {
  const [selectedCategory, setSelectedCategory] = useState<OpeningCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openings, setOpenings] = useState<JobOpening[]>(initialOpenings ?? openPositions);
  const shouldReduceMotion = useReducedMotion();

  // Background re-fetch to ensure the list is always fresh even across edge/CDN caching
  useEffect(() => {
    fetch(`/api/careers/openings?t=${Date.now()}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.success && Array.isArray(data.openings) && data.openings.length > 0) {
          setOpenings(data.openings);
        }
      })
      .catch(() => {});
  }, []);

  const allOpenings = openings;

  const filteredOpenings = allOpenings.filter((job) => {
    const matchesCategory =
      selectedCategory === "all" || job.category === selectedCategory;

    const matchesSearch =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.requirements.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="openings" className="bg-[#FAFAFA] py-8 sm:py-16">
      <Container>
        <SectionHeading
          variant="left"
          badge="Current Openings"
          title="Find Your Next Challenge"
          description="We are actively hiring engineering, product design, and digital marketing talent in Noida. Click 'View Details' to explore the role specs or 'Apply Now' to submit your application directly."
        />

        {/* <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-slate-200/80 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              All Openings ({allOpenings.length})
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory("job")}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                selectedCategory === "job"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Full-Time Jobs ({jobCount})
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory("internship")}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                selectedCategory === "internship"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Paid Internships ({internshipCount})
            </button>
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-3 size-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by role or tech..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-2 pl-10 pr-4 text-xs text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div> */}

        {/* Job Listings Grid */}
        <div className="mt-8 space-y-4">
          {filteredOpenings.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <Search className="size-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-slate-900">
                {allOpenings.length === 0
                  ? "No Active Openings Currently Posted"
                  : "No openings match your search criteria"}
              </h3>
              <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
                {allOpenings.length === 0
                  ? "We are preparing exciting new opportunities. Check back shortly or reach out to our team directly."
                  : "Try searching for another keyword or clear the category filter."}
              </p>
              {allOpenings.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-xs font-bold text-primary hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          ) : (
            filteredOpenings.map((job, idx) => {
              const isInternship = job.category === "internship";

              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: shouldReduceMotion ? 0 : idx * 0.05 }}
                  className="relative rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-3xl space-y-3">
                      {/* Department and Badges */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary">
                          {job.department}
                        </span>

                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                          {job.type}
                        </span>

                        {isInternship && (
                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                              job.stipendOrSalary?.toLowerCase().includes("unpaid")
                                ? "bg-purple-50 text-purple-700 border border-purple-200/60"
                                : "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                            }`}
                          >
                            {job.stipendOrSalary?.toLowerCase().includes("unpaid")
                              ? "Unpaid (PPO Opportunity)"
                              : "Paid Internship"}
                          </span>
                        )}

                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                          {job.workplaceType}
                        </span>

                        {job.featured && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                            <Sparkles className="size-3 text-amber-500" />
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Job Title */}
                      <h3 className="font-heading text-xl font-bold text-slate-950 sm:text-2xl group-hover:text-primary transition-colors">
                        <Link href={`/careers/${job.id}`}>
                          {job.title}
                        </Link>
                      </h3>

                      {/* Quick Meta Info */}
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="size-3.5 text-primary" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="size-3.5 text-primary" />
                          <span>{isInternship ? `Duration: ${job.duration}` : `Exp: ${job.experience}`}</span>
                        </div>
                        <div className="flex items-center gap-1 font-semibold text-slate-700">
                          <IndianRupee className="size-3.5 text-primary" />
                          <span>{job.stipendOrSalary}</span>
                        </div>
                      </div>

                      {/* Short Description */}
                      <p className="text-sm leading-6 text-slate-600 line-clamp-2">
                        {job.shortDescription}
                      </p>
                    </div>

                    {/* Action Buttons: View Details & Apply Now (Direct Pages) */}
                    <div className="flex shrink-0 flex-row lg:flex-col items-center lg:items-end gap-3 pt-2 lg:pt-0">
                      <Link
                        href={`/careers/${job.id}/apply`}
                        className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl bg-primary px-6 text-sm font-bold text-white shadow-sm transition hover:bg-primary-dark"
                      >
                        Apply Now
                        <ArrowRight className="size-4" />
                      </Link>

                      <Link
                        href={`/careers/${job.id}`}
                        className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-primary transition"
                      >
                        View Full Details & Specs
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </Container>
    </section>
  );
}
