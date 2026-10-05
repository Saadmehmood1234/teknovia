import type { Metadata } from "next";

import { CTA } from "@/components/CTA";
import { EcommerceCapabilities } from "@/components/ecommerce-solutions/EcommerceCapabilities";
import { EcommerceGrowth } from "@/components/ecommerce-solutions/EcommerceGrowth";
import { EcommerceHero } from "@/components/ecommerce-solutions/EcommerceHero";
import { EcommerceIntegrations } from "@/components/ecommerce-solutions/EcommerceIntegrations";
import { EcommerceIntroduction } from "@/components/ecommerce-solutions/EcommerceIntroduction";
import { EcommerceTechnology } from "@/components/ecommerce-solutions/EcommerceTechnology";
import { WhatWeBuild } from "@/components/ecommerce-solutions/WhatWeBuild";

export const metadata: Metadata = {
  title: "eCommerce Platform Development & Solutions",

  description:
    "Teknovia Technologies builds scalable eCommerce platforms and solutions for online stores, marketplaces and growing businesses with custom development, integrations, automation and modern technology.",

  keywords: [
    "eCommerce platform development",
    "eCommerce development services",
    "eCommerce solutions",
    "eCommerce development company",
    "custom eCommerce development",
    "eCommerce website development",
    "online store development",
    "eCommerce platform development company",
    "custom eCommerce platform",
    "eCommerce application development",
    "eCommerce integrations",
    "eCommerce API integration",
    "eCommerce automation",
    "eCommerce technology solutions",
    "scalable eCommerce solutions",
    "B2B eCommerce solutions",
    "B2C eCommerce solutions",
    "eCommerce solutions in Noida",
    "eCommerce development company in Noida",
    "eCommerce development company in Delhi NCR",
    "eCommerce development services in Delhi NCR",
  ],

  alternates: {
    canonical: "/ecommerce-solutions",
  },

  openGraph: {
    title: "eCommerce Platform Development & Solutions",
    description:
      "Build scalable eCommerce platforms with custom development, business integrations, automation and modern technology from Teknovia Technologies.",
    url: "/ecommerce-solutions",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia eCommerce Platform Development and Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "eCommerce Platform Development & Solutions",
    description:
      "Custom eCommerce platforms, integrations, automation and scalable technology solutions from Teknovia Technologies.",
    images: ["/og-image.jpg"],
  },
};

export default function EcommercePlatformsPage() {
  return (
    <main>
      <EcommerceHero />
      <EcommerceIntroduction />
      <WhatWeBuild />
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