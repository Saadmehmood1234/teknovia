import { BackgroundHero } from "@/components/ui/heroes/BackgroundHero";
import { seoOptimizationTypes } from "@/lib/data/digital-edge/seo-data";

export function SearchOptimizationHero() {
  return (
    <BackgroundHero
      image={{
        src: "/images/digital-edge/webseobg.png",
        alt: "Search engine optimization",
      }}
      breadcrumb={[
        {
          label: "Digital Edge",
          href: "/digital-edge",
        },
        {
          label: "Search Engine Optimization",
        },
      ]}
      badge="SEO • AEO • GEO • AIO"
      title={
        <>
          Be Found. Be Answered.{" "}
          <span className="text-primary">
            Be Discovered by AI.
          </span>
        </>
      }
      description="We help businesses improve their visibility across search engines, answer engines, and AI-powered platforms—bringing more relevant traffic, leads, and opportunities for sustainable growth."
      features={seoOptimizationTypes.map((item) => ({
        icon: item.icon,
        label: item.short,
        description: item.title,
      }))}
      primaryButton={{
        label: "Get a Free Consultation",
        href: "/contact?tab=callback#contact-form",
      }}
      secondaryButton={{
        label: "Explore SEO Services",
        href: "#seo-services",
      }}
      overlay="bg-[#040506]/85"
      showGrid={false}
      colors={{
        breadcrumb: "text-gray-400",
        badge: "text-primary",
        title: "text-white",
        description: "text-gray-200",
        featureIcon: "text-primary",
        featureLabel: "text-white",
        featureDescription: "text-white/60",
        primaryButtonText: "text-white",
        secondaryButtonText: "text-primary",
        secondaryButtonBorder: "border-white/45",
      }}
    />
  );
}