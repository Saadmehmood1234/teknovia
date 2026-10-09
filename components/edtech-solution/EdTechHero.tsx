import { BarChart3, GraduationCap, ShieldCheck, Smartphone } from "lucide-react";

import { BackgroundHero } from "@/components/ui/heroes/BackgroundHero";

export function EdTechHero() {
  return (
    <BackgroundHero
      image={{
        src: "/images/edtech-solution/edtech-bg.png",
        alt: "EdTech solutions",
      }}
      breadcrumb={[
        {
          label: "Industries",
          href: "/industries",
        },
        {
          label: "EduTech Solutions",
        },
      ]}
      badge="Edutech By Teknovia"
      title={
        <>
          Powering the Future of{" "}
          <span className="text-primary">Digital Learning</span>
        </>
      }
      description="Smart solutions to create engaging, scalable and technology-driven learning experiences."
      features={[
        {
          icon: GraduationCap,
          label: "Smart Learning",
        },
        {
          icon: BarChart3,
          label: "Data-Driven Insights",
        },
        {
          icon: Smartphone,
          label: "Accessible Anywhere",
        },
        {
          icon: ShieldCheck,
          label: "Secure & Reliable",
        },
      ]}
      primaryButton={{
        label: "Book a Free Demo",
        href: "/contact?tab=enquiry#contact-form",
      }}
      secondaryButton={{
        label: "Explore Solutions",
        href: "#edtech-industries",
      }}
      overlay="bg-[#040506]/50"
      showGrid
      colors={{
        breadcrumb: "text-gray-400",
        badge: "text-primary",
        title: "text-white",
        description: "text-white/65",
        featureIcon: "text-primary",
        featureLabel: "text-white/85",
        primaryButtonText: "text-white",
        secondaryButtonText: "text-white",
      }}
    />
  );
}