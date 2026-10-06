import { SplitHero } from "@/components/ui/heroes/SplitHero";
import { highlights } from "@/lib/data/digital-edge/watsapp-marketing-data";

export function WhatsAppMarketingHero() {
  return (
    <SplitHero
      breadcrumb={[
        {
          label: "Digital Edge",
          href: "/digital-edge",
        },
        {
          label: "WhatsApp Marketing",
        },
      ]}
      badge="WHATSAPP MARKETING • BUSINESS API"
      title={
        <>
          Turn WhatsApp Conversations Into{" "}
          <span className="text-primary">Measurable Growth</span>
        </>
      }
      description="Build a smarter WhatsApp communication system with automation, CRM integration, lead capture, follow-ups and hands-on account management—all in one place."
      image={{
        src: "/images/digital-edge/watsapp.png",
        alt: "Teknovia WhatsApp marketing solutions",
        aspectClass: "aspect-4/3",
        objectClass: "object-contain",
        blend: true,
      }}
      features={highlights.map((item) => ({
        icon: item.icon,
        text: item.label,
      }))}
      primaryButton={{
        label: "Start WhatsApp Growth",
        href: "/contact",
      }}
      secondaryButton={{
        label: "Explore Features",
        href: "#key-features",
      }}
      meta={
        <>
          <span className="size-1.5 rounded-full bg-primary" />
          WhatsApp Business API
          <span className="text-white/20">•</span>
          Automation
          <span className="text-white/20">•</span>
          CRM Integration
        </>
      }
      backgroundClass="bg-[#031823]"
      textClass="text-white"
      descriptionClass="text-white/65"
      featureTextClass="text-white/90"
      headingClass="font-heading text-4xl font-black leading-[1.03] tracking-[-0.045em] sm:text-5xl"
      colors={
        {
          secondaryButtonText:"text-white",
          secondaryButtonBorder:"border-white/25"
        }
      }
    />
  );
}