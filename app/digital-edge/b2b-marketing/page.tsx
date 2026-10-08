import type { Metadata } from "next";

import { B2BMarketingAudience } from "@/components/digital-edge/b2b-marketing/B2BMarketingAudience";
import { B2BMarketingBenefits } from "@/components/digital-edge/b2b-marketing/B2BMarketingBenefits";
// import { B2BMarketingCTA } from "@/components/digital-edge/b2b-marketing/B2BMarketingCTA";
import { B2BMarketingHero } from "@/components/digital-edge/b2b-marketing/B2BMarketingHero";
import { B2BMarketingIntroduction } from "@/components/digital-edge/b2b-marketing/B2BMarketingIntroduction";
import { B2BMarketingServices } from "@/components/digital-edge/b2b-marketing/B2BMarketingServices";
import FAQ from "@/components/FAQ";
import { b2bMarketingFaqs } from "@/lib/data/digital-edge/b2b-marketing-data";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "B2B Marketing Services | Lead Generation & Growth",

  description:
    "Teknovia Technologies provides B2B marketing services focused on lead generation, demand generation, digital marketing, LinkedIn marketing and building predictable growth for B2B businesses.",

  keywords: [
    "B2B marketing services",
    "B2B marketing company",
    "B2B digital marketing",
    "B2B lead generation services",
    "B2B lead generation company",
    "B2B demand generation",
    "B2B marketing strategy",
    "B2B growth marketing",
    "B2B content marketing",
    "LinkedIn marketing services",
    "B2B social media marketing",
    "B2B SEO services",
    "B2B performance marketing",
    "B2B marketing services in Noida",
    "B2B marketing company in Noida",
    "B2B marketing company in Delhi NCR",
    "digital marketing for B2B businesses",
    "B2B customer acquisition",
  ],

  alternates: {
    canonical: "/digital-edge/b2b-marketing",
  },

  openGraph: {
    title: "B2B Marketing Services | Lead Generation & Growth",
    description:
      "Generate qualified B2B leads and grow your business with digital marketing, demand generation, LinkedIn marketing and B2B growth strategies from Teknovia Technologies.",
    url: "/digital-edge/b2b-marketing",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia B2B Marketing and Lead Generation Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "B2B Marketing Services | Lead Generation & Growth",
    description:
      "B2B marketing, lead generation, demand generation and digital growth services from Teknovia Technologies.",
    images: ["/og-image.jpg"],
  },
};

export default function B2BMarketingPage() {
  return (
    <main>
      <B2BMarketingHero />
      <B2BMarketingIntroduction />
      <B2BMarketingServices />
      <B2BMarketingBenefits />
      <B2BMarketingAudience />

      <FAQ
        title="Frequently Asked Questions"
        description="Common questions about B2B marketing, lead generation, and digital growth."
        faqs={b2bMarketingFaqs}
      />

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
