import type { Metadata } from "next";

import { LocalSeoBenefits } from "@/components/digital-edge/local-seo/LocalSeoBenefits";
import { LocalSeoBlogTopics } from "@/components/digital-edge/local-seo/LocalSeoBlogTopics";
import { LocalSeoCaseStudies } from "@/components/digital-edge/local-seo/LocalSeoCaseStudies";
import { LocalSeoCTA } from "@/components/digital-edge/local-seo/LocalSeoCTA";
import { LocalSeoHero } from "@/components/digital-edge/local-seo/LocalSeoHero";
import { LocalSeoIntroduction } from "@/components/digital-edge/local-seo/LocalSeoIntroduction";
import { LocalSeoServices } from "@/components/digital-edge/local-seo/LocalSeoServices";
import FAQ from "@/components/FAQ";
import { localSeoFaqs } from "@/lib/data/digital-edge";

export const metadata: Metadata = {
  title: "Local SEO Services | Google Business Profile",

  description:
    "Teknovia Technologies provides local SEO services in Noida and Delhi NCR, including Google Business Profile optimization, local search optimization, Google Maps visibility and local business growth.",

  keywords: [
    "local SEO services",
    "local SEO company",
    "local SEO services in Noida",
    "local SEO company in Noida",
    "local SEO services in Delhi NCR",
    "Google Business Profile optimization",
    "Google Business Profile SEO",
    "Google Maps SEO",
    "Google Maps optimization",
    "local search optimization",
    "local business SEO",
    "Google My Business optimization",
    "local SEO agency in Noida",
    "local SEO company in Delhi NCR",
    "SEO services for local businesses",
  ],

  alternates: {
    canonical: "/digital-edge/local-seo",
  },

  openGraph: {
    title: "Local SEO Services in Noida | Google Business Profile",
    description:
      "Improve local search visibility with Google Business Profile optimization, Google Maps SEO and local SEO services from Teknovia Technologies.",
    url: "/digital-edge/local-seo",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia Local SEO and Google Business Profile Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Local SEO Services in Noida | Google Business Profile",
    description:
      "Local SEO, Google Business Profile optimization and Google Maps SEO services from Teknovia Technologies.",
    images: ["/og-image.jpg"],
  },
};

export default function LocalSeoPage() {
  return (
    <main>
      <LocalSeoHero />

      <LocalSeoIntroduction />

      <LocalSeoServices />

      <LocalSeoBenefits />

      <LocalSeoCaseStudies />

      <LocalSeoBlogTopics />

      <FAQ
        title="Frequently Asked Questions"
        description="Common questions about Local SEO and Google Business Profile optimization"
        faqs={localSeoFaqs}
      />

      <LocalSeoCTA />
    </main>
  );
}