import { BackgroundHero } from "@/components/ui/heroes/BackgroundHero";

export function SoftwareServiceHero() {
  return (
    <BackgroundHero
      image={{
        src: "/software-services-bg.png",
      }}
      breadcrumb={[
        {
          label: "Software Services",
        },
      ]}
      badge="Intelligent Solutions. Measurable Impact."
      title={<>Smart Software Solutions Built for Your Success</>}
      description="At Teknovia, we design and develop customized software solutions that help businesses streamline operations, automate processes, improve efficiency, and accelerate growth."
      primaryButton={{
        label: "Talk to Our Experts",
        href: "/contact",
      }}
      secondaryButton={{
        label: "Explore Solutions",
        href: "#software-solutions",
      }}
      overlay="bg-[#040506]/70"
      showGrid
    />
  );
}
