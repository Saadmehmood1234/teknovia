import { CTA } from "@/components/CTA";
import { IndustriesGrid } from "@/components/industries/IndustriesGrid";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { IndustriesIntroduction } from "@/components/industries/IndustriesIntroduction";
import { IndustriesOverview } from "@/components/industries/IndustriesOverview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry-Specific Software & Technology Solutions",

  description:
    "Teknovia Technologies delivers industry-specific software and technology solutions for manufacturing, healthcare, education, logistics, retail, real estate, hospitality and growing businesses.",

  keywords: [
    "industry specific software solutions",
    "industry specific technology solutions",
    "industry specific software development",
    "business technology solutions",
    "industry focused software development",
    "digital transformation solutions",
    "custom software solutions",
    "enterprise software solutions",
    "manufacturing software solutions",
    "healthcare software solutions",
    "education technology solutions",
    "logistics software solutions",
    "retail and ecommerce solutions",
    "real estate software solutions",
    "hospitality technology solutions",
    "software solutions for SMEs",
    "industrial software solutions",
    "technology solutions in Noida",
    "software development company in Noida",
    "software development company in Delhi NCR",
  ],

  alternates: {
    canonical: "/industries",
  },

  openGraph: {
    title: "Industry-Specific Software & Technology Solutions",
    description:
      "Explore Teknovia's software and technology solutions for manufacturing, healthcare, education, logistics, retail, real estate, hospitality and SMEs.",
    url: "/industries",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia Industry-Specific Software and Technology Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Industry-Specific Software & Technology Solutions",
    description:
      "Custom software and technology solutions for manufacturing, healthcare, education, logistics, retail, real estate, hospitality and businesses.",
    images: ["/og-image.jpg"],
  },
};

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesHero />

      <IndustriesIntroduction />
      <IndustriesGrid />
      <IndustriesOverview />
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
