import { Card2 } from "@/components/ui/Card2";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { b2bServices } from "@/lib/data/digital-edge/b2b-marketing-data";

export function B2BMarketingServices() {
  return (
    <section
      id="b2b-services"
      className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-[0.12]" />

      <Container className="relative">
        <SectionHeading
          variant="centered"
          badge="OUR B2B MARKETING SERVICES"
          title="Everything you need to build B2B demand."
          description="From finding the right decision-makers to nurturing prospects and measuring performance, our B2B marketing services work together to create a stronger and more predictable growth pipeline."
        />

        <ul className="mt-8 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {b2bServices.map((item) => (
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
