import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import type { JobOpening } from "@/lib/data/careers-data";

interface JobDetailSidebarProps {
  job: JobOpening;
  isInternship: boolean;
}

export function JobDetailSidebar({ job, isInternship }: JobDetailSidebarProps) {
  return (
    <div className="sticky top-28 space-y-6">
      {/* Position Summary Specs Card */}
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
          Position Summary
        </h3>

        <div className="mt-5 space-y-4 text-xs">
          <div>
            <span className="text-slate-400 block font-medium">Department</span>
            <span className="text-slate-900 font-semibold text-sm mt-0.5 block">
              {job.department}
            </span>
          </div>

          <div>
            <span className="text-slate-400 block font-medium">Employment Type</span>
            <span className="text-slate-900 font-semibold text-sm mt-0.5 block">
              {job.type}
            </span>
          </div>

          <div>
            <span className="text-slate-400 block font-medium">Workplace Model</span>
            <span className="text-slate-900 font-semibold text-sm mt-0.5 block">
              {job.workplaceType} ({job.location})
            </span>
          </div>

          <div>
            <span className="text-slate-400 block font-medium">
              {isInternship ? "Program Duration" : "Experience Required"}
            </span>
            <span className="text-slate-900 font-semibold text-sm mt-0.5 block">
              {isInternship ? job.duration : job.experience}
            </span>
          </div>

          <div>
            <span className="text-slate-400 block font-medium">Compensation</span>
            <span className="text-primary font-bold text-sm mt-0.5 block">
              {job.stipendOrSalary}
            </span>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6">
          <Link
            href={`/careers/${job.id}/apply`}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-sm font-bold text-white shadow-md shadow-primary/20 hover:bg-primary-dark transition"
          >
            Apply for this Role
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      {/* Culture Card */}
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary-50 text-primary">
            <Users className="size-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-950">Engineering Culture</h4>
            <p className="text-[11px] text-slate-400">Zero red tape, high autonomy</p>
          </div>
        </div>
        <p className="text-xs leading-5 text-slate-600">
          We believe in small, empowered teams that ship frequently. Every developer deploys to production and owns their architectural decisions.
        </p>
      </div>
    </div>
  );
}
