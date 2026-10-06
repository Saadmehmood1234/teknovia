import { SplitHero } from "@/components/ui/heroes/SplitHero";

export function CorporateHero() {
  return (
    <SplitHero
      breadcrumb={[
        {
          label: "Corporate",
        },
      ]}
      badge="About Teknovia"
      title={
        <>
          Technology, Software &{" "}
          <span className="lg:block">
            Growth Solutions{" "}
            <span className="text-primary">
              Built for
              <br className="hidden lg:block" />
              Modern Businesses
            </span>
          </span>
        </>
      }
      description="Integrated digital marketing, custom software, EduTech, and talent solutions designed to help businesses scale efficiently."
      image={{
        src: "/images/corporate/corporate1.png",
        alt: "Teknovia technology and business solutions",
        aspectClass: "aspect-5/3",
        objectClass: "object-contain object-center",
        
      }}
      primaryButton={{
        label: "Our Services",
        href: "/services",
      }}
      secondaryButton={{
        label: "Get in Touch",
        href: "/contact",
      }}
      backgroundClass="bg-[#E6E9EF]"
    />
  );
}