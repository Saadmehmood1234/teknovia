import FAQ from "@/components/FAQ";
import { IoTEcosystem } from "@/components/software-services/iot-development/IoTEcosystem";
import { IoTHero } from "@/components/software-services/iot-development/IoTHero";
import { IoTIntroduction } from "@/components/software-services/iot-development/IoTIntroduction";
import { IoTSolutions } from "@/components/software-services/iot-development/IoTSolutions";
import { iotFaqs } from "@/lib/data/software-services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT Development & Automation Solutions",

  description:
    "Teknovia Technologies provides IoT development and automation solutions for connected devices, smart systems, industrial applications and real-time business operations.",

  keywords: [
    "IoT development services",
    "IoT development company",
    "IoT solutions company",
    "Internet of Things development",
    "custom IoT solutions",
    "IoT application development",
    "IoT device integration",
    "IoT automation solutions",
    "industrial IoT solutions",
    "IoT software development",
    "smart connected devices",
    "IoT platform development",
    "business automation solutions",
    "IoT development company in Noida",
    "IoT development company in Delhi NCR",
  ],

  alternates: {
    canonical: "/software-services/iot-development",
  },

  openGraph: {
    title: "IoT Development & Automation Solutions",
    description:
      "Build connected, intelligent and scalable IoT solutions for business automation, smart systems and industrial applications with Teknovia Technologies.",
    url: "/software-services/iot-development",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia IoT Development and Automation Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IoT Development & Automation Solutions",
    description:
      "Custom IoT development, connected systems and automation solutions from Teknovia Technologies.",
    images: ["/og-image.jpg"],
  },
};

export default function IoTDevelopmentPage() {
  return (
    <main>
      <IoTHero />
      <IoTIntroduction />
      <IoTEcosystem />
      <IoTSolutions />

      <FAQ
        title="Frequently Asked Questions"
        description="Common questions about IoT and automation solutions"
        faqs={iotFaqs}
      />
    </main>
  );
}