import { Card2 } from "@/components/ui/Card2";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { watsAppFeatures } from "@/lib/data/digital-edge/watsapp-marketing-data";

export function WhatsAppFeatures() {
  return (
    <section
      id="key-features"
      className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-25" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="KEY FEATURES" centerItem />

          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            Simple to use,{" "}
            <span className="text-primary">powerful for growth.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Everything your team needs to manage conversations, automate
            follow-ups, capture leads and measure performance.
          </p>
        </div>

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