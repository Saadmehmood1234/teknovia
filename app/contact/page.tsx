
import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactMap from "@/components/contact/ContactMap";
import ContactFrom from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Teknovia Technologies",

  description:
    "Contact Teknovia Technologies for software development, digital marketing, eCommerce solutions, and business technology consulting. Let's discuss your project.",

  keywords: [
    "contact Teknovia Technologies",
    "software development company contact",
    "digital marketing consultation",
    "eCommerce development services",
    "business technology solutions",
    "software development company in Delhi NCR",
    "IT company in Delhi NCR",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Us | Teknovia Technologies",
    description:
      "Have a project in mind? Contact Teknovia Technologies to discuss software development, digital marketing, eCommerce, and technology solutions.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Teknovia Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Teknovia Technologies",
    description:
      "Get in touch with Teknovia Technologies to discuss your business and technology requirements.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <ContactHero />
      <ContactFrom />
      <ContactMap />
    </main>
  );
}
