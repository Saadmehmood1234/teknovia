import { ProcessSection } from "@/components/pages/ProcessSection";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceTopics } from "@/components/services/ServiceTopics";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
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

      <section className="py-8 sm:py-16 border-b border-gray-100">
        <Container className="flex flex-col items-center justify-center">
          <div className="mx-auto max-w-3xl text-center">
            <TopBadge data="CORE SERVICES" centerItem />

            <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
              Digital Solutions Built
              <span className="text-primary pl-2">Around Your Business</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              From software development to digital marketing and ecommerce, we
              help businesses build, launch and grow digital products that
              create measurable value.
            </p>
          </div>

          <ServicesGrid />
        </Container>
      </section>

      <ProcessSection />
      <ServiceTopics />
    </main>
  );
}
