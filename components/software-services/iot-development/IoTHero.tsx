import { BackgroundHero } from "@/components/ui/heroes/BackgroundHero";
import { iotHeroFeatures } from "@/lib/data/software-services/iot-development-data";

export function IoTHero() {
  return (
    <BackgroundHero
      image={{
        src: "/images/iot-bg.png",
      }}
      breadcrumb={[
        {
          label: "Software Services",
          href: "/software-services",
        },
        {
          label: "IoT & Automation",
        },
      ]}
      badge="Connected • Intelligent • Automated"
      title={
        <>
          Connect the Physical World with{" "}
          <span className="text-primary">
            Intelligent Technology
          </span>
        </>
      }
      description="Build connected, intelligent, and automated operations with TEKNOVIA's IoT development solutions. Connect devices, capture real-time data, automate processes, and turn operational information into actionable business intelligence."
      features={iotHeroFeatures}
      primaryButton={{
        label: "Build Your IoT Solution",
        href: "/contact?tab=enquiry#contact-form",
      }}
      secondaryButton={{
        label: "Explore Solutions",
        href: "#iot-solutions",
      }}
      overlay="bg-[#040506]/80"
    />
  );
}