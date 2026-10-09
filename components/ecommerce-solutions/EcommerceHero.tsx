import { BackgroundHero } from "@/components/ui/heroes/BackgroundHero";

export function EcommerceHero() {
  return (
    <BackgroundHero
      image={{
        src: "/images/ecommerce-solution/ecommerce-bg.png",
        alt: "eCommerce solutions",
      }}
      breadcrumb={[
        {
          label: "eCommerce Solutions",
        },
      ]}
      badge="eCommerce Platforms"
      title={
        <>
          Build. Sell. <span className="text-primary">Scale.</span>
        </>
      }
      description="Build powerful, flexible and scalable eCommerce platforms for B2B, B2C and D2C businesses. Designed around your products, customers and business needs."
      primaryButton={{
        label: "Start Your eCommerce Journey",
        href: "/contact?tab=message#contact-form",
      }}
      secondaryButton={{
        label: "Talk to Our Experts",
        href: "/contact?tab=callback#contact-form",
      }}
      overlay="bg-[#040706]/70"
      showGrid
      colors={{
        breadcrumb: "text-gray-400",
        badge: "text-primary",
        title: "text-white",
        description: "text-white/65",
        primaryButtonText: "text-white",
        secondaryButtonText: "text-white",
      }}
    />
  );
}
