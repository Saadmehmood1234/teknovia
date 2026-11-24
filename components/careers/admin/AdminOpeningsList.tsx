"use client";

import {
  MapPin,
  Clock,
  IndianRupee,
  Sparkles,
  ExternalLink,
  Power,
  Search,
} from "lucide-react";
import Link from "next/link";
import { StoredOpening } from "@/lib/data/openings-store";

interface AdminOpeningsListProps {
  openings: StoredOpening[];
  isLoading: boolean;
  onToggleStatus: (id: string, currentStatus: "Active" | "Inactive") => void;
  onOpenCreateModal: () => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  statusFilter: "all" | "active" | "inactive";
  setStatusFilter: (val: "all" | "active" | "inactive") => void;
}

export function AdminOpeningsList({
  openings,
  isLoading,
  onToggleStatus,
  onOpenCreateModal,
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
}: AdminOpeningsListProps) {
  const filtered = openings.filter((op) => {
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && op.status === "Active") ||
      (statusFilter === "inactive" && op.status === "Inactive");

    const matchesSearch =
      searchQuery === "" ||
      op.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.id.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filter Tabs */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          {(["all", "active", "inactive"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setStatusFilter(tab)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold capitalize transition ${
                statusFilter === tab
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {tab === "all" ? `All (${openings.length})` : tab}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search role title or dept..."
            className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-4 text-xs text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* List / Grid of Cards */}
      {isLoading ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center text-xs text-slate-500">
          Loading openings...
        </div>
      ) : filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <p className="font-heading text-base font-bold text-slate-800">
            No openings found
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {openings.length === 0
              ? "You haven't created any openings yet. Click below to add your first job or internship."
              : "Try adjusting your search query or filter tab."}
          </p>
          {openings.length === 0 && (
            <button
              type="button"
              onClick={onOpenCreateModal}
              className="mt-4 inline-flex h-9 items-center justify-center rounded-xl bg-primary px-5 text-xs font-bold text-white shadow-xs hover:bg-primary-dark transition"
            >
              + Create Opening
            </button>
          )}
        </div>
      ) : (
        <div className="grid gap-4">
          {filtered.map((job) => {
            const isInternship = job.category === "internship";
            const isActive = job.status === "Active";

            return (
              <div
                key={job.id}
                className={`group rounded-3xl border transition bg-white p-6 shadow-xs ${
                  isActive ? "border-slate-200/90" : "border-slate-200/50 bg-slate-50/50 opacity-70"
                }`}
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-3xl space-y-3">
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          isActive
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {isActive ? "● Active" : "○ Inactive / Hidden"}
                      </span>

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

                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                        {job.workplaceType}
                      </span>

                      {job.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                          <Sparkles className="size-3 text-amber-500" />
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl font-bold text-slate-950 sm:text-2xl">
                      {job.title}
                    </h3>

                    {/* Meta Bar */}
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-5 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-primary" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="size-3.5 text-primary" />
                        <span>
                          {isInternship
                            ? `Duration: ${job.duration || "3 - 6 Months"}`
                            : `Exp: ${job.experience || "1+ Years"}`}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                        <IndianRupee className="size-3.5 text-primary" />
                        <span>{job.stipendOrSalary}</span>
                      </div>
                      <div className="text-slate-400">
                        Slug: <code className="rounded bg-slate-100 px-1 py-0.5 text-[11px]">{job.id}</code>
                      </div>
                    </div>

                    <p className="text-xs leading-relaxed text-slate-600 line-clamp-2">
                      {job.shortDescription}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex shrink-0 flex-wrap lg:flex-col items-start lg:items-end gap-3 pt-2 lg:pt-0">
                    <button
                      type="button"
                      onClick={() => onToggleStatus(job.id, job.status)}
                      className={`inline-flex h-9 items-center gap-1.5 rounded-xl px-4 text-xs font-bold transition shadow-xs ${
                        isActive
                          ? "bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100"
                          : "bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100"
                      }`}
                    >
                      <Power className="size-3.5" />
                      <span>{isActive ? "Deactivate Role" : "Activate Role"}</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/careers/${job.id}`}
                        target="_blank"
                        className="inline-flex h-8 items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 text-[11px] font-semibold text-slate-700 hover:text-primary transition"
                      >
                        <span>Details</span>
                        <ExternalLink className="size-3" />
                      </Link>

                      <Link
                        href={`/careers/${job.id}/apply`}
                        target="_blank"
                        className="inline-flex h-8 items-center gap-1 rounded-lg bg-primary/10 px-3 text-[11px] font-semibold text-primary hover:bg-primary/20 transition"
                      >
                        <span>Apply Page</span>
                        <ExternalLink className="size-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
