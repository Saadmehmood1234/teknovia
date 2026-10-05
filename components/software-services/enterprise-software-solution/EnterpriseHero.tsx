import { BackgroundHero } from "@/components/ui/heroes/BackgroundHero";

export function EnterpriseHero() {
  return (
    <BackgroundHero
      id="enterprise-home"
      image={{
        src: "/images/enterprise-software-bg.png",
      }}
      breadcrumb={[
        {
          label: "Software Services",
          href: "/software-services",
        },
        {
          label: "Enterprise Software Development",
        },
      ]}
      badge="Intelligent Integrated Enterprise-Ready"
      title="Enterprise Software Development Solutions"
      description="We design and develop scalable, secure, and intelligent enterprise applications that automate processes, improve productivity, and support long-term business growth."
      primaryButton={{
        label: "Get a Free Consultation",
        href: "/contact",
      }}
      secondaryButton={{
        label: "Request a Demo",
        href: "/contact",
      }}
      overlay="bg-[#040506]/60"
    />
  );
}