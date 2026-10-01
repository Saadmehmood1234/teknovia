import { SMOFacebook } from "@/components/digital-edge/social-media-optimization/SMOFacebook";
import { SMOHero } from "@/components/digital-edge/social-media-optimization/SMOHero";
import { SMOIntagram } from "@/components/digital-edge/social-media-optimization/SMOInstagram";
import { SMOIntroduction } from "@/components/digital-edge/social-media-optimization/SMOIntroduction";
import { SMOOptimisation } from "@/components/digital-edge/social-media-optimization/SMOOptimisation";
import { SMOProcess } from "@/components/digital-edge/social-media-optimization/SMOProcess";
import { SMOServices } from "@/components/digital-edge/social-media-optimization/SMOServices";
import FAQ from "@/components/FAQ";

import { smoFaqs } from "@/lib/data/digital-edge";

export default function SocialMediaOptimisationPage() {
  return (
    <main>
      <SMOHero />

      <SMOIntroduction />
      <SMOServices />
      <SMOOptimisation />

      <SMOIntagram />

      <SMOFacebook />

      <SMOProcess />

      <FAQ
        title="Frequently Asked Questions"
        description="Common questions about social media optimization, Instagram, Facebook, content strategy, and audience engagement."
        faqs={smoFaqs}
      />
    </main>
  );
}
