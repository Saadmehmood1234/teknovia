import { BackgroundHero } from "@/components/ui/heroes/BackgroundHero";
import { channels } from "@/lib/data/digital-edge/b2b-marketing-data";

export function B2BMarketingHero() {
  return (
    <BackgroundHero
      image={{
        src: "/images/digital-edge/b2b-bg.png",
      }}
      breadcrumb={[
        {
          label: "Digital Services",
          href: "/digital-services",
        },
        {
          label: "B2B Marketing",
        },
      ]}
      badge="B2B MARKETING & LEAD GENERATION"
      title={
        <>
          B2B Marketing That Connects You With{" "}
          <span className="text-primary">the Right<br className="lg:block hidden"/> Businesses.</span>
        </>
      }
      description="Build a stronger B2B presence, reach decision-makers, generate qualified leads, and turn business relationships into sustainable growth."
      features={channels.map((item) => ({
        icon: item.icon,
        label: item.label,
      }))}
      primaryButton={{
        label: "Get a B2B Marketing Strategy",
        href: "/contact?tab=callback#contact-form",
      }}
      secondaryButton={{
        label: "Explore Services",
        href: "#b2b-services",
      }}
      overlay="lg:bg-[#040506]/10 bg-[#040506]/80"
      colors={{
        breadcrumb: "text-gray-500",
        badge: "text-primary",
        description: "lg:text-black/50 text-white/90",
        title: "lg:text-black text-white/80",
        featureLabel:"lg:text-black/60 text-white/70",
        secondaryButtonText:"lg:text-black/70 text-white/70",
        secondaryButtonBorder:"lg:border-black/25 border-white/35",
      }}
    />
  );
}
