import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { SecurityView } from "@/components/security/SecurityView";
import { BackgroundHero } from "@/components/ui/heroes/BackgroundHero";
export const metadata: Metadata = {
  title: "Trust Center & Enterprise Security Posture",
  description:
    "Explore Teknovia Technologies security, data privacy, OWASP standards, DPDP Act 2023 compliance, mutual NDA protections, and zero-trust cloud infrastructure.",
  alternates: {
    canonical: "/security",
  },
  openGraph: {
    title: "Trust Center & Security Compliance | Teknovia Technologies",
    description:
      "Enterprise security standards, cloud resilience, intellectual property protections, and responsible vulnerability disclosure.",
    url: "/security",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia Technologies Trust and Security",
      },
    ],
  },
};

export default function SecurityPage() {
  return (
    <main>
      <BackgroundHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Security & Trust" },
        ]}
        badge="Enterprise Security & Compliance"
        title={
          <>
            Security Engineered Into{" "}
            <span className="text-primary">Every Layer.</span>
          </>
        }
        
        description="From OWASP-aligned secure coding standards to DPDP Act data privacy and strict IP protection, discover our comprehensive security posture."
        image={{
          src: "/security-bg.png",
          alt: "Teknovia Security Solutions",
          
        }}
        overlay="bg-[#040506]/60"
      />
      <SecurityView />
      <CTA
        title="Need an Enterprise Security Assessment?"
        description="Our security architects are available to review your compliance checklist, sign custom NDAs, and conduct technical architecture walkthroughs."
        button={{
          label: "Contact Security Team",
          href: "/contact",
        }}
      />
    </main>
  );
}
