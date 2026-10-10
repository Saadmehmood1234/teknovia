import { Card2 } from "@/components/ui/Card2";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { watsAppFeatures } from "@/lib/data/digital-edge/watsapp-marketing-data";

export function WhatsAppFeatures() {
  return (
    <section
      id="key-features"
      className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-25" />

      <Container className="relative">
        <SectionHeading
          variant="centered"
          badge="KEY FEATURES"
          title="Simple to use, powerful for growth."
          description="Everything your team needs to manage conversations, automate follow-ups, capture leads and measure performance."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {watsAppFeatures.map((feature) => (
            <Card2
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              circle={feature.circle}
              bar={feature.bar}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
