import { CTA } from "@/components/CTA";
import FAQ from "@/components/FAQ";
import { SaaSFeatures } from "@/components/software-services/software-product/SaaSFeatures";
import { SaaSOfferings } from "@/components/software-services/software-product/SaaSOfferings";
import { SaaSProductHero } from "@/components/software-services/software-product/SaaSProductHero";
import { SaaSProductOverview } from "@/components/software-services/software-product/SaaSProductOverview";
import { SaaSProducts } from "@/components/software-services/software-product/SaaSProducts";
import { SaaSWhyTeknovia } from "@/components/software-services/software-product/SaaSWhyTeknovia";
import { saasFaqs } from "@/lib/data/software-services/software-product-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS & Software Product Development Services",

  description:
    "Teknovia Technologies provides SaaS and software product development services, helping startups and businesses build scalable, secure and market-ready software products from idea to launch.",

  keywords: [
    "SaaS development services",
    "SaaS development company",
    "SaaS product development",
    "software product development company",
    "software product development services",
    "custom SaaS development",
    "SaaS application development",
    "SaaS platform development",
    "MVP development company",
    "MVP software development",
    "startup product development",
    "B2B SaaS development",
    "enterprise SaaS development",
    "custom software product development",
    "SaaS development company in Noida",
    "SaaS development company in Delhi NCR",
  ],

  alternates: {
    canonical: "/software-services/software-product",
  },

  openGraph: {
    title: "SaaS & Software Product Development Services",
    description:
      "Build scalable SaaS platforms and software products with Teknovia Technologies, from product development and MVPs to launch and ongoing growth.",
    url: "/software-services/software-product",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia SaaS and Software Product Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SaaS & Software Product Development Services",
    description:
      "Custom SaaS and software product development services for startups and businesses from Teknovia Technologies.",
    images: ["/og-image.jpg"],
  },
};

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
