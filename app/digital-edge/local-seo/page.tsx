import { LocalSeoBenefits } from "@/components/digital-edge/local-seo/LocalSeoBenefits";
import { LocalSeoBlogTopics } from "@/components/digital-edge/local-seo/LocalSeoBlogTopics";
import { LocalSeoCaseStudies } from "@/components/digital-edge/local-seo/LocalSeoCaseStudies";
import { LocalSeoCTA } from "@/components/digital-edge/local-seo/LocalSeoCTA";
import { LocalSeoHero } from "@/components/digital-edge/local-seo/LocalSeoHero";
import { LocalSeoIntroduction } from "@/components/digital-edge/local-seo/LocalSeoIntroduction";
import { LocalSeoServices } from "@/components/digital-edge/local-seo/LocalSeoServices";
import FAQ from "@/components/FAQ";
import { localSeoFaqs } from "@/lib/data/digital-edge";


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

      <LocalSeoCTA/>
    </main>
  );
}