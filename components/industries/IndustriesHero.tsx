import { BackgroundHero } from "@/components/ui/heroes/BackgroundHero";

export function IndustriesHero() {
  return (
    <BackgroundHero
      id="home"
      image={{
        src: "/images/industry-hero.png",
        alt: "Industries served by Teknovia",
      }}
      breadcrumb={[
        {
          label: "Industries",
        },
      ]}
      badge="Industries We Serve"
      title={
        <>
          Solutions Built for{" "}
          <span className="text-primary-300">
            Every Industry.
          </span>
        </>
      }
      description="We understand every industry has unique challenges. Our solutions are crafted to drive growth, efficiency, and long-term impact across diverse sectors."
      overlay="bg-[#040506]/30"
      colors={{
        breadcrumb: "text-white/70",
        badge: "text-primary",
        title: "text-white",
        description: "text-white/65",
      }}
    />
  );
}