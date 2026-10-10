import { Card2 } from "@/components/ui/Card2";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { localSeoServices } from "@/lib/data/digital-edge/local-seo-data";

export function LocalSeoServices() {
  return (
    <section
      id="local-seo-services"
      className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-25" />

      <Container className="relative">
        <SectionHeading
          variant="centered"
          badge="OUR SERVICES"
          title="Our Local GMB Services."
          description="Complete Google Business Profile and local search optimization to improve visibility, attract customers, and grow your business."
        />
        <ul className="mt-8 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {localSeoServices.map((item) => (
            <Card2
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              circle={item.circle}
              bar={item.bar}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
