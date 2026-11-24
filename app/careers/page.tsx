import type { Metadata } from "next";
import { CareersHero } from "@/components/careers/CareersHero";
import { CareersView } from "@/components/careers/CareersView";
import { CareersCulture } from "@/components/careers/CareersCulture";
import { getDynamicOpenings } from "@/lib/data/careers-data";
import FAQ, { FAQItem } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Careers & Internships",
  description:
    "Explore career and paid internship opportunities at Teknovia Technologies in Noida. Join our engineering, digital marketing, and UI/UX design teams.",
  keywords: [
    "Teknovia careers",
    "software developer jobs Noida",
    "internships in Noida",
    "web developer internship",
    "digital marketing jobs Delhi NCR",
    "Next.js developer hiring",
    "tech jobs Noida",
  ],
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers & Internships at Teknovia Technologies",
    description:
      "Join Teknovia Technologies. Explore open jobs and paid internships in software engineering, mobile development, SEO, and product design.",
    url: "/careers",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia Technologies Careers",
      },
    ],
  },
};

const careerFaqs: FAQItem[] = [
  {
    question: "Are internships at Teknovia paid?",
    answer:
      "Yes, all engineering, design, and marketing internships at Teknovia include a monthly stipend, certification of completion, and a performance-based Pre-Placement Offer (PPO) opportunity for full-time employment.",
  },
  {
    question: "Where is the Teknovia office located?",
    answer:
      "Our primary office is located at CLR Complex, Sector 149, Noida, Uttar Pradesh, India. We operate on a hybrid and on-site model depending on the specific team and role requirements.",
  },
  {
    question: "What is the typical selection process for interns and full-time roles?",
    answer:
      "Our recruitment process typically includes: 1) Initial resume and portfolio screening, 2) Technical or domain assignment / discussion, 3) Cultural and leadership conversation, followed by an offer letter.",
  },
  {
    question: "Why is Aadhaar card upload optional on the internship form?",
    answer:
      "In strict compliance with India's Digital Personal Data Protection (DPDP) Act, Aadhaar collection is optional at the initial application stage. Candidates may choose to provide government ID proof during the final onboarding and selection phase.",
  },
  {
    question: "Can final-year students apply for internships?",
    answer:
      "Yes! Final-year and pre-final year students from B.Tech, BCA, MCA, B.Sc, and related disciplines are encouraged to apply. Flexible schedules are offered to accommodate university exam periods.",
  },
];

export default async function CareersPage() {
  const dynamicOpenings = await getDynamicOpenings();

  return (
    <main>
      <CareersHero />
      <CareersView initialOpenings={dynamicOpenings} />
      <CareersCulture />
      <FAQ
        title="Careers & Hiring FAQs"
        description="Got questions about working at Teknovia or our internship programs? Here is everything you need to know."
        faqs={careerFaqs}
      />
      <CTA
        title="Ready to Build the Future with Us?"
        description="Check our open roles above or reach out to our talent acquisition team to start the conversation."
        button={{
          label: "View All Openings",
          href: "#openings",
        }}
      />
    </main>
  );
}
