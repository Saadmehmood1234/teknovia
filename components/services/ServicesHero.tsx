import { BackgroundHero } from "@/components/ui/heroes/BackgroundHero";

export function ServicesHero() {
  return (
    <BackgroundHero
      image={{
        src: "/service-bg.png",
      }}
      breadcrumb={[
        {
          label: "Software Services",
        },
      ]}
      badge="OUR SERVICES"
      title={
        <>
          Digital Solutions Built{" "}
          <span className="text-primary">
            Around Your Business
          </span>
        </>
      }
      description="From software development to digital marketing and ecommerce, we help businesses build, launch and grow digital products that create measurable value."
      primaryButton={{
        label: "Start a Project",
        href: "/contact",
      }}
      secondaryButton={{
        label: "Explore Services",
        href: "#services",
      }}
      overlay="bg-[#040506]/80"
      showGrid
    />
  );
}