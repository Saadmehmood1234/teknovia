import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Clock,
  IndianRupee,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TopBadge } from "@/components/ui/Top-Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA } from "@/components/CTA";
import { findJob, getAllJobSlugs } from "@/lib/data/careers-data";

export const dynamicParams = true;

interface JobPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllJobSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await findJob(slug);

  if (!job) {
    return {
      title: "Role Not Found | Teknovia Careers",
    };
  }

  const isInternship = job.category === "internship";
  const title = `${job.title} | ${isInternship ? "Internship" : "Career"} at Teknovia`;
  const description = job.shortDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `/careers/${job.id}`,
    },
    openGraph: {
      title,
      description,
      url: `/careers/${job.id}`,
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${job.title} at Teknovia`,
        },
      ],
    },
  };
}

export default async function JobDetailPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = await findJob(slug);

  if (!job) {
    notFound();
  }

  const isInternship = job.category === "internship";

  const aboutRole = Array.isArray(job.aboutRole) && job.aboutRole.length > 0
    ? job.aboutRole
    : [job.shortDescription || "Join our team at Teknovia to work on cutting-edge software solutions."];

  const responsibilities = Array.isArray(job.responsibilities) && job.responsibilities.length > 0
    ? job.responsibilities
    : [
        "Collaborate with engineering teammates to ship clean, reliable code.",
        "Participate in sprint planning, code reviews, and architectural discussions.",
      ];

  const requirements = Array.isArray(job.requirements) && job.requirements.length > 0
    ? job.requirements
    : [
        "Solid problem-solving skills and eager mindset to learn.",
        "Hands-on experience with modern development tools and workflows.",
      ];

  const whoYouAre = Array.isArray(job.whoYouAre) && job.whoYouAre.length > 0
    ? job.whoYouAre
    : [
        "You take extreme ownership of your work and deliverables.",
        "You communicate with clarity and welcome constructive feedback.",
        "You are driven to build high-quality products that users love.",
      ];

  const benefits = Array.isArray(job.benefits) && job.benefits.length > 0
    ? job.benefits
    : [
        "Competitive compensation package reviewed regularly based on merit.",
        "Mentorship from experienced senior developers and tech leads.",
        "Modern workstation equipment, tooling stipends, and flexible work culture.",
      ];

  // JSON-LD JobPosting schema for Google Jobs SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.shortDescription,
    datePosted: job.postedDate || "2026-03-01",
    employmentType: isInternship ? "INTERN" : "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Teknovia Technologies",
      sameAs: "https://teknovia.in",
      logo: "https://teknovia.in/icon.ico",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "CLR Complex, Sector 149",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201310",
        addressCountry: "IN",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: {
        "@type": "QuantitativeValue",
        value: job.stipendOrSalary,
        unitText: isInternship ? "MONTH" : "YEAR",
      },
    },
  };

  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header with Built-in Breadcrumb & TopBadge */}
      <section className="border-b border-slate-200/80 bg-white py-10 sm:py-16">
        <Container>
          {/* Built-in Breadcrumb */}
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
              {/* Built-in TopBadge */}
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
                  <span>{isInternship ? `Duration: ${job.duration || "3 - 6 Months"}` : `Experience: ${job.experience || "1+ Years"}`}</span>
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

      {/* Main Content & Specs Sidebar */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left 8 Columns: Role Details */}
            <div className="space-y-12 lg:col-span-8">
              {/* About Role */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm">
                <SectionHeading
                  badge="Role Overview"
                  title="About the Opportunity"
                />
                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                  {aboutRole.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Key Responsibilities */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm">
                <SectionHeading
                  badge="Responsibilities"
                  title="What You'll Do"
                  description="Core execution areas where you will take complete ownership from day one."
                />
                <ul className="mt-6 space-y-3.5">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary mt-0.5">
                        <CheckCircle2 className="size-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What We're Looking For (Requirements) */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm">
                <SectionHeading
                  badge="Qualifications"
                  title="What We're Looking For"
                  description="Essential technical skills, mindsets, and background required for this role."
                />
                <ul className="mt-6 space-y-3.5">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                      <span className="size-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who You Are (Mindset) */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm">
                <SectionHeading
                  badge="Culture & Mindset"
                  title="Who You Are"
                  description="The qualities and working styles that flourish in our engineering culture."
                />
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {whoYouAre.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-xs leading-5 text-slate-600"
                    >
                      <Sparkles className="size-4 text-primary mb-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits & Perks */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm">
                <SectionHeading
                  badge="Compensation & Perks"
                  title="What We Offer"
                  description="We invest in our teammates with mentorship, modern tooling, and strong compensation."
                />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 text-xs leading-5 text-slate-700"
                    >
                      <ShieldCheck className="size-4 text-primary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our 4-Step Hiring Process */}
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm">
                <SectionHeading
                  badge="Hiring Timeline"
                  title="Our 4-Step Selection Process"
                  description="Fast, transparent, and respectful of your schedule at every stage."
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-4">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-center">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-primary-100 text-xs font-bold text-primary mx-auto">
                      1
                    </span>
                    <h3 className="mt-2 text-xs font-bold text-slate-950">Application</h3>
                    <p className="mt-1 text-[11px] text-slate-500 leading-4">
                      Submit form & resume. Fast 48-hr screening.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-center">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-primary-100 text-xs font-bold text-primary mx-auto">
                      2
                    </span>
                    <h3 className="mt-2 text-xs font-bold text-slate-950">Initial Call</h3>
                    <p className="mt-1 text-[11px] text-slate-500 leading-4">
                      20-min chat on your goals and background.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-center">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-primary-100 text-xs font-bold text-primary mx-auto">
                      3
                    </span>
                    <h3 className="mt-2 text-xs font-bold text-slate-950">Technical Chat</h3>
                    <p className="mt-1 text-[11px] text-slate-500 leading-4">
                      Real problem discussion with a team lead.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-center">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-primary-100 text-xs font-bold text-primary mx-auto">
                      4
                    </span>
                    <h3 className="mt-2 text-xs font-bold text-slate-950">Offer</h3>
                    <p className="mt-1 text-[11px] text-slate-500 leading-4">
                      Clear offer letter and smooth onboarding.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Columns: Sticky Job Specs Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {/* Specs Card */}
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

                {/* Culture Pill */}
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
            </div>
          </div>
        </Container>
      </section>

      {/* Built-in Bottom CTA */}
      <CTA
        title="Ready to Take the Next Step in Your Career?"
        description="Submit your application today or explore our other engineering, design, and growth roles."
        button={{
          label: `Apply Now for ${job.title}`,
          href: `/careers/${job.id}/apply`,
        }}
      />
    </main>
  );
}
