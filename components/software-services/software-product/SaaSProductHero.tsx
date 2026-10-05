import { BackgroundHero } from "@/components/ui/heroes/BackgroundHero";
import { highlights } from "@/lib/data/software-services/software-product-data";

export function SaaSProductHero() {
  return (
    <BackgroundHero
      id="saas-product-home"
      image={{
        src: "/images/saas-bg.png",
      }}
      breadcrumb={[
        {
          label: "Software Services",
          href: "/software-services",
        },
        {
          label: "SaaS & Software Products",
        },
      ]}
      badge="Scalable • Secure • Product-Focused"
      title={
        <>
          Build, Launch &{" "}
          <span className="text-primary">
            Scale SaaS Products
          </span>
        </>
      }
      description="Transform your ideas into secure, cloud-native, and market-ready software products with TEKNOVIA. From MVP development to enterprise-grade SaaS platforms, we build solutions designed for scalability, performance, and long-term success."
      features={highlights.map((item) => ({
        icon: item.icon,
        label: item.label,
      }))}
      primaryButton={{
        label: "Let's Build Your SaaS Product",
        href: "/contact",
      }}
      secondaryButton={{
        label: "Explore Our Products",
        href: "#saas-products",
      }}
      overlay="bg-[#040506]/80"
    />
  );
}