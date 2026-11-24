import Link from "next/link";
import { MapPin, Clock, IndianRupee, Calendar, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TopBadge } from "@/components/ui/Top-Badge";
import type { JobOpening } from "@/lib/data/careers-data";

interface JobDetailHeroProps {
  job: JobOpening;
  isInternship: boolean;
}

export function JobDetailHero({ job, isInternship }: JobDetailHeroProps) {
  return (
    <section className="bg-white py-8 sm:py-16">
      <Container>
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: "Careers", href: "/careers" },
              { label: job.department },
              { label: job.title },
            ]}
          />
        </div>

        {/* Role Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <TopBadge data={`${job.department} • ${job.type} • ${job.workplaceType}`} />

            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {job.title}
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              {job.shortDescription}
            </p>

            {/* Quick Metadata Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-1.5">
                <MapPin className="size-4 text-primary" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="size-4 text-primary" />
                <span>
                  {isInternship
                    ? `Duration: ${job.duration || "3 - 6 Months"}`
                    : `Experience: ${job.experience || "1+ Years"}`}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <IndianRupee className="size-4 text-primary" />
                <span>{job.stipendOrSalary}</span>
              </div>
              {job.postedDate && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="size-4 text-slate-400" />
                  <span>Posted {job.postedDate}</span>
                </div>
              )}
            </div>
          </div>

          {/* Top Apply Button */}
          <div className="flex shrink-0 items-center lg:pt-4">
            <Link
              href={`/careers/${job.id}/apply`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary px-8 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:scale-[1.02]"
            >
              Apply for this Role
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
