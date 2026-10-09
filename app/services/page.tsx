import { ProcessSection } from "@/components/pages/ProcessSection";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceTopics } from "@/components/services/ServiceTopics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software, Digital Marketing & IT Services",

  description:
    "Explore Teknovia Technologies services including custom software development, web and mobile applications, digital marketing, eCommerce and EdTech solutions in Noida and Delhi NCR.",

  keywords: [
    "software development services",
    "software development company in Noida",
    "custom software development services",
    "web development services",
    "mobile app development services",
    "digital marketing services in Noida",
    "SEO services in Noida",
    "eCommerce development services",
    "EdTech development services",
    "SaaS development services",
    "IT services company in Noida",
    "software development company in Delhi NCR",
  ],

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Software, Digital Marketing & IT Services",
    description:
      "Custom software, web and mobile development, digital marketing, eCommerce and EdTech solutions from Teknovia Technologies.",
    url: "/services",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia Technologies - Software and Digital Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Software, Digital Marketing & IT Services",
    description:
      "Explore software development, digital marketing, eCommerce and EdTech services from Teknovia Technologies.",
    images: ["/og-image.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white">
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <ServiceTopics />
    </main>
  );
}
