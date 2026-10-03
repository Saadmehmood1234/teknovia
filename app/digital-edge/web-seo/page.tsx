import type { Metadata } from "next";

import { AEOSection } from "@/components/digital-edge/web-seo/AEOSection";
import { AIOSection } from "@/components/digital-edge/web-seo/AIOSection";
import { seoFaqs } from "@/lib/data/digital-edge";
import { GEOSection } from "@/components/digital-edge/web-seo/GEOSection";
import { IntegratedStrategy } from "@/components/digital-edge/web-seo/IntegratedStrategy";
import { SearchOptimizationHero } from "@/components/digital-edge/web-seo/SearchOptimizationHero";
import { SEOOverview } from "@/components/digital-edge/web-seo/SEOOverview";
import { SEOServices } from "@/components/digital-edge/web-seo/SEOServices";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "SEO Services & Search Engine Optimization Company",

  description:
    "Teknovia Technologies provides SEO services to improve organic search visibility, website rankings and qualified traffic through technical SEO, on-page SEO, AEO, GEO and AI search optimization.",

  keywords: [
    "SEO services",
    "search engine optimization services",
    "SEO company",
    "SEO company in Noida",
    "SEO services in Noida",
    "SEO company in Delhi NCR",
    "search engine optimization company",
    "technical SEO services",
    "on page SEO services",
    "organic SEO services",
    "website SEO services",
    "AEO services",
    "answer engine optimization",
    "GEO services",
    "generative engine optimization",
    "AI search optimization",
    "AI SEO services",
    "Google search optimization",
    "organic search optimization",
    "SEO services for businesses",
  ],

  alternates: {
    canonical: "/digital-edge/web-seo",
  },

  openGraph: {
    title: "SEO Services & Search Engine Optimization Company",
    description:
      "Improve organic search visibility with technical SEO, on-page SEO, AEO, GEO and AI search optimization services from Teknovia Technologies.",
    url: "/digital-edge/web-seo",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia SEO and Search Engine Optimization Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SEO Services & Search Engine Optimization Company",
    description:
      "SEO, AEO, GEO and AI search optimization services to improve website visibility and organic search performance.",
    images: ["/og-image.jpg"],
  },
};

export default function SearchEngineOptimizationPage() {
  return (
    <main>
      <SearchOptimizationHero />

      <SEOOverview />

      <SEOServices />

      <AEOSection />

      <GEOSection />

      <AIOSection />

      <IntegratedStrategy />

      <FAQ
        title="Frequently Asked Questions"
        description="Find answers to common questions about our SEO services, strategies, and approach to improving search visibility."
        faqs={seoFaqs}
      />
    </main>
  );
}