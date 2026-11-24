import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  MapPin,
  Clock,
  IndianRupee,
  Briefcase,
  ShieldCheck,
  Mail,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TopBadge } from "@/components/ui/Top-Badge";
import { findJob, getAllJobSlugs } from "@/lib/data/careers-data";
import { JobForm } from "@/components/careers/JobForm";
import { InternshipForm } from "@/components/careers/InternshipForm";

export const dynamicParams = true;

interface ApplyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllJobSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ApplyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await findJob(slug);

  if (!job) {
    return {
      title: "Apply | Teknovia Careers",
    };
  }

  return {
    title: `Apply: ${job.title} | Teknovia Careers`,
    description: `Submit your application for the ${job.title} position at Teknovia Technologies.`,
    alternates: {
      canonical: `/careers/${job.id}/apply`,
    },
  };
}

export default async function JobApplyPage({ params }: ApplyPageProps) {
  const { slug } = await params;
  const job = await findJob(slug);

  if (!job) {
    notFound();
  }

  const isInternship = job.category === "internship";
  const isUnpaid = job.stipendOrSalary?.toLowerCase().includes("unpaid");

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-10 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,150,137,0.08),rgba(255,255,255,0))]" />

      <Container className="relative z-10">
        {/* Built-in Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: "Careers", href: "/careers" },
              { label: job.title, href: `/careers/${job.id}` },
              { label: "Application" },
            ]}
          />
        </div>

        {/* Full-width Header Banner */}
        <div className="mb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <TopBadge
                  data={`${isInternship ? (isUnpaid ? "Unpaid Internship" : "Paid Internship") : "Full-Time Job"} • ${job.department}`}
                />
              </div>

              <h1 className="font-heading text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Apply for: {job.title}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-medium text-slate-500">
                <div className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-primary" />
                  <span>{job.location} ({job.workplaceType})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="size-3.5 text-primary" />
                  <span>{isInternship ? `Duration: ${job.duration || "3 - 6 Months"}` : `Experience: ${job.experience || "1+ Years"}`}</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                  <IndianRupee className="size-3.5 text-primary" />
                  <span>{job.stipendOrSalary}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2-Column Full-Width Layout matching other pages */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_380px]">
          {/* Main Application Form Column */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs sm:p-10 lg:p-12">
            <div className="mb-8 border-b border-slate-100 pb-5">
              <h2 className="font-heading text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Candidate Application
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Please complete your details below. Fields marked with <span className="text-red-500 font-bold">*</span> are required.
              </p>
            </div>

            {isInternship ? (
              <InternshipForm defaultJobTitle={job.title} jobSlug={job.id} />
            ) : (
              <JobForm defaultJobTitle={job.title} jobSlug={job.id} />
            )}
          </div>

          {/* Right Sticky Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28">
            {/* Role Summary Card */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <Briefcase className="size-3.5" />
                <span>Role Highlights</span>
              </div>

              <h3 className="mt-3 font-heading text-base font-bold text-slate-900">
                {job.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-4">
                {job.shortDescription}
              </p>

              <div className="mt-4 space-y-2.5 border-t border-slate-100 pt-4 text-xs">
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">Department</span>
                  <span className="font-semibold text-slate-900">{job.department}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">Type</span>
                  <span className="font-semibold text-slate-900">{job.type}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">Workplace</span>
                  <span className="font-semibold text-slate-900">{job.workplaceType}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">{isInternship ? "Duration" : "Experience"}</span>
                  <span className="font-semibold text-slate-900">{isInternship ? job.duration : job.experience}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">Compensation</span>
                  <span className="font-semibold text-primary">{job.stipendOrSalary}</span>
                </div>
              </div>
            </div>

            {/* Hiring Roadmap */}
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                <Sparkles className="size-3.5 text-amber-500" />
                <span>Application Roadmap</span>
              </div>

              <ol className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-bold text-primary ring-1 ring-primary/20">
                    1
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Submission & Verification</h4>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Profile delivered straight to hiring leads.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-bold text-primary ring-1 ring-primary/20">
                    2
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Shortlisting Call</h4>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Quick 20-minute chat within 2-3 business days.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-bold text-primary ring-1 ring-primary/20">
                    3
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Technical Discussion</h4>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Practical project and architecture discussion.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-bold text-primary ring-1 ring-primary/20">
                    4
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Offer & Onboarding</h4>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Transparent offer letter and welcome onboarding.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Trust & Support Card */}
            <div className="rounded-3xl border border-primary-100 bg-primary-50/50 p-6 shadow-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" />
                <h4 className="text-xs font-bold text-slate-900">Privacy & Recruitment Guarantee</h4>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Your submitted documents and contact info are processed exclusively by our recruitment committee and never shared with third parties.
              </p>
              <div className="mt-4 border-t border-primary-100 pt-3 flex items-center gap-2 text-xs text-slate-600">
                <Mail className="size-3.5 text-primary" />
                <span>Careers Help: </span>
                <a href="mailto:info@teknovia.in" className="font-semibold text-primary hover:underline">
                  info@teknovia.in
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
