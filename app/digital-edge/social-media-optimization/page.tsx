import type { Metadata } from "next";

import { SMOFacebook } from "@/components/digital-edge/social-media-optimization/SMOFacebook";
import { SMOHero } from "@/components/digital-edge/social-media-optimization/SMOHero";
import { SMOIntagram } from "@/components/digital-edge/social-media-optimization/SMOInstagram";
import { SMOIntroduction } from "@/components/digital-edge/social-media-optimization/SMOIntroduction";
import { SMOOptimisation } from "@/components/digital-edge/social-media-optimization/SMOOptimisation";
import { SMOProcess } from "@/components/digital-edge/social-media-optimization/SMOProcess";
import { SMOServices } from "@/components/digital-edge/social-media-optimization/SMOServices";
import FAQ from "@/components/FAQ";
import { smoFaqs } from "@/lib/data/digital-edge/social-media-optimization-data";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Social Media Optimization Services | SMO Company",

  description:
    "Teknovia Technologies provides social media optimization services to improve brand visibility, audience engagement and social presence through Instagram, Facebook, content strategy and platform optimization.",

  keywords: [
    "social media optimization services",
    "social media optimization company",
    "SMO services",
    "SMO company",
    "social media marketing services",
    "social media optimization in Noida",
    "SMO services in Noida",
    "social media marketing company in Noida",
    "social media company in Delhi NCR",
    "Instagram optimization",
    "Instagram marketing services",
    "Facebook marketing services",
    "Facebook page optimization",
    "social media content strategy",
    "social media engagement",
    "social media brand visibility",
    "social media growth services",
    "social media management services",
  ],

  alternates: {
    canonical: "/digital-edge/social-media-optimization",
  },

  openGraph: {
    title: "Social Media Optimization Services | SMO Company",
    description:
      "Build a stronger social media presence with Instagram, Facebook, content strategy, audience engagement and social media optimization services from Teknovia Technologies.",
    url: "/digital-edge/social-media-optimization",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia Social Media Optimization Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Social Media Optimization Services | SMO Company",
    description:
      "Social media optimization, Instagram, Facebook and content strategy services from Teknovia Technologies.",
    images: ["/og-image.jpg"],
  },
};

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
