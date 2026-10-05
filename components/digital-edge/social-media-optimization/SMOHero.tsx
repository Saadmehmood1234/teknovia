import { SplitHero } from "@/components/ui/heroes/SplitHero";
import { smoheroFeatures } from "@/lib/data/digital-edge/social-media-optimization-data";

export function SMOHero() {
  return (
    <SplitHero
      breadcrumb={[
        {
          label: "Digital Edge",
          href: "/digital-edge",
        },
        {
          label: "Social Media Optimization",
        },
      ]}
      badge="Boost Your Brand. Grow Your Business"
      title={
        <>
          Turn Social Presence Into{" "}
          <span className="text-primary">
            Real Brand Growth.
          </span>
        </>
      }
      description="Grow your business with strategic Instagram and Facebook marketing designed to improve visibility, engagement, and conversions."
      image={{
        src: "/images/digital-edge/social-media-optimisation-bg.png",
        alt: "Social media optimization",
        aspectClass: "aspect-3/2",
        objectClass: "object-cover",
      }}
      features={smoheroFeatures.map((item) => ({
        icon: item.icon,
        text: item.text,
      }))}
      primaryButton={{
        label: "Get Free Consultation",
        href: "/contact",
      }}
      secondaryButton={{
        label: "View Our Work",
        href: "#key-features",
      }}
      backgroundClass="bg-white"
      textClass="text-black/90"
      descriptionClass="text-black/65"
      featureTextClass="text-black/60"
      headingClass="font-heading text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl"
    />
  );
}
