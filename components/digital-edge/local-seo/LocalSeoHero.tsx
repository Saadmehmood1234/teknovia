import { SplitHero } from "@/components/ui/heroes/SplitHero";

export function LocalSeoHero() {
  return (
    <SplitHero
      id="local-seo-hero"
      breadcrumb={[
        {
          label: "Digital Services",
          href: "/digital-services",
        },
        {
          label: "Local SEO (GMB)",
        },
      ]}
      badge="LOCAL SEO • GOOGLE BUSINESS PROFILE"
      title={
        <>
          Get Found Locally.
          <br />
          <span className="text-primary">
            Turn Searches Into Customers.
          </span>
        </>
      }
      description="Optimize your Google Business Profile, improve your Google Maps visibility, and connect with high-intent customers searching for your services locally."
      image={{
        src: "/images/local-seo-bg.png",
        alt: "Local SEO and Google Business Profile",
        aspectClass: "aspect-3/2",
        objectClass: "object-cover",
      }}
      primaryButton={{
        label: "Start Your Project",
        href: "#services",
      }}
      secondaryButton={{
        label: "Explore Services",
        href: "#contact",
      }}
      backgroundClass="bg-[#FFFFFF]"
      textClass="text-slate-950"
      descriptionClass="text-gray-600"
      headingClass="font-heading text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl"
    />
  );
}