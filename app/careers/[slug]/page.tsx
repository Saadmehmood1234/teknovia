import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/CTA";
import { findJob } from "@/lib/data/careers-data";
import { JobDetailHero } from "@/components/careers/detail/JobDetailHero";
import { JobDetailOverview } from "@/components/careers/detail/JobDetailOverview";
import { JobDetailResponsibilities } from "@/components/careers/detail/JobDetailResponsibilities";
import { JobDetailRequirements } from "@/components/careers/detail/JobDetailRequirements";
import { JobDetailWhoYouAre } from "@/components/careers/detail/JobDetailWhoYouAre";
import { JobDetailBenefits } from "@/components/careers/detail/JobDetailBenefits";
import { JobDetailHiringProcess } from "@/components/careers/detail/JobDetailHiringProcess";
import { JobDetailSidebar } from "@/components/careers/detail/JobDetailSidebar";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface JobPageProps {
  params: Promise<{
    slug: string;
  }>;
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

  const aboutRole =
    Array.isArray(job.aboutRole) && job.aboutRole.length > 0
      ? job.aboutRole
      : [job.shortDescription || "Join our team at Teknovia to work on cutting-edge digital and software solutions."];

  const responsibilities =
    Array.isArray(job.responsibilities) && job.responsibilities.length > 0
      ? job.responsibilities
      : [
          "Collaborate with engineering and digital teams to deliver high-quality outcomes.",
          "Participate in sprint planning, project milestones, and cross-functional discussions.",
        ];

  const requirements =
    Array.isArray(job.requirements) && job.requirements.length > 0
      ? job.requirements
      : [
          "Solid problem-solving skills and eager mindset to learn and execute.",
          "Hands-on experience with modern industry tools and workflows.",
        ];

  const whoYouAre =
    Array.isArray(job.whoYouAre) && job.whoYouAre.length > 0
      ? job.whoYouAre
      : [
          "You take extreme ownership of your work and deliverables.",
          "You communicate with clarity and welcome constructive feedback.",
          "You are driven to build high-quality solutions that create real impact.",
        ];

  const benefits =
    Array.isArray(job.benefits) && job.benefits.length > 0
      ? job.benefits
      : [
          "Competitive compensation package reviewed regularly based on merit.",
          "Mentorship from experienced technical leads and strategists.",
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

      {/* Hero Header Component */}
      <JobDetailHero job={job} isInternship={isInternship} />

      {/* Main Content & Specs Sidebar */}
      <section className="py-8 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left 8 Columns: Role Details */}
            <div className="space-y-12 lg:col-span-8">
              <JobDetailOverview aboutRole={aboutRole} />
              <JobDetailResponsibilities responsibilities={responsibilities} />
              <JobDetailRequirements requirements={requirements} />
              <JobDetailWhoYouAre whoYouAre={whoYouAre} />
              <JobDetailBenefits benefits={benefits} />
              <JobDetailHiringProcess />
            </div>

            {/* Right 4 Columns: Sticky Job Specs Sidebar */}
            <div className="lg:col-span-4">
              <JobDetailSidebar job={job} isInternship={isInternship} />
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
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
