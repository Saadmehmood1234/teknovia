import { strengths } from "@/lib/data/corporate-data";
import { Metadata } from "next";
import { VisionMissionValues } from "@/components/corporate/VisionMissionValues";
import { StrengthsSection } from "@/components/sections/StrengthsSection";
import { LeadershipSection } from "@/components/corporate/LeadershipSection";
import { AboutTeknovia } from "@/components/corporate/AboutTeknovia";
import { CorporateHero } from "@/components/corporate/CorporateHero";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Teknovia Technologies | Software & Digital Solutions",

  description:
    "Learn about Teknovia Technologies, a technology company in Noida offering custom software development, digital marketing, EdTech, business automation, ERP and talent solutions.",

  keywords: [
    "Teknovia Technologies",
    "about Teknovia Technologies",
    "software development company in Noida",
    "technology company in Noida",
    "custom software development company",
    "digital solutions company in Noida",
    "digital marketing company in Noida",
    "business automation company",
    "ERP solutions company",
    "EdTech solutions company",
    "software development company in Delhi NCR",
    "IT company in Noida",
  ],

  alternates: {
    canonical: "/corporate",
  },

  openGraph: {
    title: "About Teknovia Technologies | Software & Digital Solutions",
    description:
      "Learn about Teknovia Technologies and our custom software development, digital marketing, EdTech, business automation, ERP and talent solutions.",
    url: "/corporate",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Teknovia Technologies - Software and Digital Solutions",
      },
    ],
  },
};

export default function CorporatePage() {
  return (
    <main className="overflow-hidden bg-white">
      <CorporateHero />

      <AboutTeknovia />
      <VisionMissionValues />

      <StrengthsSection
        badge="Built for Growth"
        title="Commerce that grows with your business."
        items={strengths}
      />

      <LeadershipSection />
      <CTA
        title="Let's Build Smart Solutions Together"
        description="Partner with Teknovia to innovate, grow and lead in your industry."
        button={{
          label: "Get Free Consultation",
          href: "mailto:info@teknovia.in",
        }}
      />
    </main>
  );
}
