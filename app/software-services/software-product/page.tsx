import FAQ from "@/components/FAQ";
import { SaaSFeatures } from "@/components/software-services/software-product/SaaSFeatures";
import { SaaSOfferings } from "@/components/software-services/software-product/SaaSOfferings";
import { SaaSProductHero } from "@/components/software-services/software-product/SaaSProductHero";
import { SaaSProductOverview } from "@/components/software-services/software-product/SaaSProductOverview";
import { SaaSProducts } from "@/components/software-services/software-product/SaaSProducts";
import { SaaSWhyTeknovia } from "@/components/software-services/software-product/SaaSWhyTeknovia";

import { saasFaqs } from "@/lib/data/software-services";
import Link from "next/link";

export default function SaaSSoftwareProductPage() {
  return (
    <main>
      <SaaSProductHero />

      <SaaSProductOverview />

      <SaaSProducts />

      <SaaSOfferings />

      <SaaSFeatures />

      <SaaSWhyTeknovia />

      <FAQ
        title="Frequently Asked Questions"
        description="Common questions about SaaS and software product development"
        faqs={saasFaqs}
      />
    </main>
  );
}