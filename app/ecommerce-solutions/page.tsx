import { CTA } from "@/components/CTA";
import { EcommerceCapabilities } from "@/components/ecommerce-solutions/EcommerceCapabilities";
import { EcommerceGrowth } from "@/components/ecommerce-solutions/EcommerceGrowth";
import { EcommerceHero } from "@/components/ecommerce-solutions/EcommerceHero";
import { EcommerceIntegrations } from "@/components/ecommerce-solutions/EcommerceIntegrations";
import { EcommerceIntroduction } from "@/components/ecommerce-solutions/EcommerceIntroduction";
import { EcommerceTechnology } from "@/components/ecommerce-solutions/EcommerceTechnology";
import { WhatWeBuild } from "@/components/ecommerce-solutions/WhatWeBuild";

export default function EcommercePlatformsPage() {
  return (
    <main>
      <EcommerceHero />
      <EcommerceIntroduction />
      <WhatWeBuild/>
      <EcommerceCapabilities />
      <EcommerceIntegrations />
      <EcommerceGrowth />
      <EcommerceTechnology />
      <CTA
        title="Let's Build Smart Solutions Together"
        description="Let's build an eCommerce platform designed around your products, customers and business model."
        button={{
          label: "Start Your eCommerce Project",
          href: "/contact",
        }}
      />
    </main>
  );
}
