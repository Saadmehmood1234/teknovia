import { AEOSection } from "@/components/digital-edge/web-seo/AEOSection";
import { AIOSection } from "@/components/digital-edge/web-seo/AIOSection";
import { seoFaqs } from "@/lib/data/digital-edge";
import { GEOSection } from "@/components/digital-edge/web-seo/GEOSection";
import { IntegratedStrategy } from "@/components/digital-edge/web-seo/IntegratedStrategy";
import { SearchOptimizationHero } from "@/components/digital-edge/web-seo/SearchOptimizationHero";
import { SEOOverview } from "@/components/digital-edge/web-seo/SEOOverview";
import { SEOServices } from "@/components/digital-edge/web-seo/SEOServices";
import FAQ from "@/components/FAQ";

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
