import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { EngagementView } from "@/components/engagement-models/EngagementView";
import { BackgroundHero } from "@/components/ui/heroes/BackgroundHero";

export const metadata: Metadata = {
  title: "Engagement Models & How We Work",
  description:
    "Explore Teknovia Technologies engagement models: Dedicated Engineering Pods, Fixed-Scope Milestone Delivery, and Growth Retainers with 100% IP ownership.",
  alternates: {
    canonical: "/engagement-models",
  },
  openGraph: {
    title: "Engagement Models & Pricing Frameworks | Teknovia Technologies",
    description:
      "Transparent engineering partnerships designed for startups and enterprises. Dedicated pods, fixed-scope projects, and agile retainers.",
    url: "/engagement-models",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia Technologies Engagement Models",
      },
    ],
  },
};

export default function EngagementModelsPage() {
  return (
    <main>
      <BackgroundHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Engagement Models" },
        ]}
        badge="Flexible & Transparent Partnerships"
        title={
          <>
            Flexible Models Built for{" "}
            <span className="text-primary">Business Growth.</span>
          </>
        }
        description="From dedicated cross-functional teams to turnkey project launches and ongoing digital retainers, we structure partnerships around your timeline, goals, and budget."
        image={{
          src: "/engagement-models-bg.png",
          alt: "Teknovia Engagement Models",
        }}
      />

      <EngagementView />

      <CTA
        title="Ready to Scale Your Technology & Digital Growth?"
        description="Share your requirements and receive a comprehensive engagement blueprint across development, digital marketing, and growth strategy."
        button={{
          label: "Request a Custom Proposal",
          href: "/contact",
        }}
      />
    </main>
  );
}
