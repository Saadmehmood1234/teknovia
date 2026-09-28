import { B2BMarketingAudience } from "@/components/digital-edge/b2b-marketing/B2BMarketingAudience";
import { B2BMarketingBenefits } from "@/components/digital-edge/b2b-marketing/B2BMarketingBenefits";
// import { B2BMarketingCTA } from "@/components/digital-edge/b2b-marketing/B2BMarketingCTA";
import { B2BMarketingHero } from "@/components/digital-edge/b2b-marketing/B2BMarketingHero";
import { B2BMarketingIntroduction } from "@/components/digital-edge/b2b-marketing/B2BMarketingIntroduction";
import { B2BMarketingServices } from "@/components/digital-edge/b2b-marketing/B2BMarketingServices";
import FAQ from "@/components/FAQ";
import { b2bMarketingFaqs } from "@/lib/data/digital-edge";

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

      {/* <B2BMarketingCTA /> */}
    </main>
  );
}