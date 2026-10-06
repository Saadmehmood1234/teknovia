import type { Metadata } from "next";

import FAQ from "@/components/FAQ";
import { WhatsAppMarketingHero } from "@/components/digital-edge/whatsapp-marketing/WhatsAppMarketingHero";
import { WhatsAppWhy } from "@/components/digital-edge/whatsapp-marketing/WhatsAppWhy";
import { WhatsAppEconomics } from "@/components/digital-edge/whatsapp-marketing/WhatsAppEconomics";
import { WhatsAppFeatures } from "@/components/digital-edge/whatsapp-marketing/WhatsAppFeatures";
import { WhatsAppManagement } from "@/components/digital-edge/whatsapp-marketing/WhatsAppManagement";
import { WhatsAppBlogTopics } from "@/components/digital-edge/whatsapp-marketing/WhatsAppBlogTopics";
import { whatsappFaqs } from "@/lib/data/digital-edge/watsapp-marketing-data";
import ProblemSolution from "@/components/digital-edge/whatsapp-marketing/ProblemSolution";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "WhatsApp Marketing & Business API Services",

  description:
    "Teknovia Technologies provides WhatsApp marketing and WhatsApp Business API services for customer engagement, automated messaging, notifications, lead generation and business communication.",

  keywords: [
    "WhatsApp marketing services",
    "WhatsApp marketing company",
    "WhatsApp Business API services",
    "WhatsApp Business API provider",
    "WhatsApp API integration",
    "WhatsApp automation services",
    "WhatsApp marketing automation",
    "WhatsApp business messaging",
    "WhatsApp bulk messaging",
    "WhatsApp notification services",
    "WhatsApp customer engagement",
    "WhatsApp lead generation",
    "WhatsApp chatbot integration",
    "WhatsApp API integration company",
    "WhatsApp marketing services in Noida",
    "WhatsApp marketing company in Noida",
    "WhatsApp marketing company in Delhi NCR",
    "WhatsApp Business solutions",
  ],

  alternates: {
    canonical: "/digital-edge/whatsapp-marketing",
  },

  openGraph: {
    title: "WhatsApp Marketing & Business API Services",
    description:
      "Engage customers and automate business communication with WhatsApp Business API, marketing automation, notifications and messaging solutions from Teknovia Technologies.",
    url: "/digital-edge/whatsapp-marketing",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia WhatsApp Marketing and Business API Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Marketing & Business API Services",
    description:
      "WhatsApp Business API, marketing automation, customer engagement and business messaging solutions from Teknovia Technologies.",
    images: ["/og-image.jpg"],
  },
};

export default function WhatsAppMarketingPage() {
  return (
    <main>
      <WhatsAppMarketingHero />
      <WhatsAppWhy />
      <WhatsAppEconomics />
      <ProblemSolution />
      <WhatsAppFeatures />
      <WhatsAppManagement />
      <WhatsAppBlogTopics />

      <FAQ
        title="Frequently Asked Questions"
        description="Common questions about WhatsApp Business API, automation and WhatsApp marketing."
        faqs={whatsappFaqs}
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
