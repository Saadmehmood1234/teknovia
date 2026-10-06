import { CTA } from "@/components/CTA";
import FAQ from "@/components/FAQ";
import { MobileAppBenefits } from "@/components/software-services/mobile-application-development/MobileAppBenefits";
import { MobileAppHero } from "@/components/software-services/mobile-application-development/MobileAppHero";
import { MobileAppOverview } from "@/components/software-services/mobile-application-development/MobileAppOverview";
import { MobileAppProcess } from "@/components/software-services/mobile-application-development/MobileAppProcess";
import { MobileAppServices } from "@/components/software-services/mobile-application-development/MobileAppServices";
import { MobileAppTypes } from "@/components/software-services/mobile-application-development/MobileAppTypes";
import { TechnologyStack } from "@/components/ui/TechnologyStack";
import { mobileAppFaqs, mobileAppTechnologies } from "@/lib/data/software-services/mobile-application-development-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Services",

  description:
    "Teknovia Technologies provides custom mobile app development services for Android, iOS and cross-platform applications, from UI/UX design and development to deployment and support.",

  keywords: [
    "mobile app development services",
    "mobile app development company",
    "mobile application development company",
    "custom mobile app development",
    "Android app development company",
    "iOS app development company",
    "cross platform app development",
    "Flutter app development company",
    "React Native app development company",
    "business mobile app development",
    "enterprise mobile app development",
    "mobile app development company in Noida",
    "mobile app development company in Delhi NCR",
    "custom app development company",
  ],

  alternates: {
    canonical: "/software-services/mobile-application-development",
  },

  openGraph: {
    title: "Mobile App Development Services",
    description:
      "Custom Android, iOS and cross-platform mobile application development for businesses, startups and enterprises.",
    url: "/software-services/mobile-application-development",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia Mobile App Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Services",
    description:
      "Custom Android, iOS and cross-platform mobile app development services from Teknovia Technologies.",
    images: ["/og-image.jpg"],
  },
};

export default function MobileAppDevelopmentPage() {
  return (
    <main>
      <MobileAppHero />

      <MobileAppOverview />

      <MobileAppServices />
      <MobileAppBenefits />
      <MobileAppTypes />

      <MobileAppProcess />

      <TechnologyStack
        technologies={mobileAppTechnologies}
        description="Modern, proven technologies for secure, scalable, and high-performance web applications."
      />
      <FAQ
        title="Frequently Asked Questions"
        description="Common questions about mobile app development"
        faqs={mobileAppFaqs}
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
