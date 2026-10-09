import { SplitHero } from "@/components/ui/heroes/SplitHero";
import { webAppFeatures } from "@/lib/data/software-services/web-application-development-data";

export function WebDevHero() {
  return (
    <SplitHero
      id="web-dev-hero"
      breadcrumb={[
        {
          label: "Software Services",
          href: "/software-services",
        },
        {
          label: "Web Application Development",
        },
      ]}
      badge="Scalable Secure Future-Ready"
      title={
        <>
          Powerful Web Applications That Drive Business Growth
        </>
      }
      description="We design and develop custom web applications that streamline operations, enhance user experiences, and accelerate digital transformation for growing businesses."
      features={webAppFeatures.map((feature) => ({
        icon: feature.icon,
        text: feature.text,
      }))}
      image={{
        src: "/images/web-dev-background.png",
        alt: "Teknovia technology and business solutions",
        aspectClass: "aspect-3/2",
        objectClass: "object-cover",
      }}
      primaryButton={{
        label: "Start Your Project",
        href: "/contact?tab=enquiry#contact-form",
      }}
      secondaryButton={{
        label: "Explore Services",
        href: "/software-services/web-application-development#web-services",
      }}
      backgroundClass="bg-[#EDF1F4]"
    />
  );
}