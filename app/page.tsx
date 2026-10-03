import type { Metadata } from "next";

import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Ecosystem } from "@/components/home/Ecosystem";
import { Industries } from "@/components/home/Industries";
import { WhyTeknovia } from "@/components/home/WhyTeknovia";
import { Testimonials } from "@/components/home/Testimonials";
import { SuccessStories } from "@/components/home/SuccessStories";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Software Development Company",

  description:
    "Teknovia Technologies is a software development company in Noida, Delhi NCR, offering custom software, web development, SaaS, eCommerce, EdTech, SEO and digital marketing solutions.",

  keywords: [
    "software development company in Noida",
    "software development company in Delhi NCR",
    "software development company in Delhi",
    "custom software development company",
    "web development company in Noida",
    "mobile app development company",
    "SaaS development company",
    "eCommerce development company",
    "digital marketing company in Noida",
    "SEO company in Noida",
    "EdTech solutions company",
    "IoT development company",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Software Development Company in Noida",
    description:
      "Custom software, web development, SaaS, eCommerce, EdTech, SEO and digital marketing solutions for businesses in Noida and Delhi NCR.",
    url: "/",
    siteName: "Teknovia Technologies",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia Technologies - Software Development and Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in Noida",
    description:
      "Custom software, web development, SaaS, eCommerce, EdTech, SEO and digital marketing solutions by Teknovia Technologies.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <main id="main-content" aria-label="Teknovia Technologies">
      <Hero />
      <Stats />
      <About />
      <Services />
      <Ecosystem />
      <Industries />
      <WhyTeknovia />
      <Testimonials />
      <SuccessStories />
      <CTA />
    </main>
  );
}