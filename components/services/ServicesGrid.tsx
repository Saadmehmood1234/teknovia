import { services } from "@/lib/data/services-data";
import { ServiceCard } from "../ui/Card";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function ServicesGrid() {
  return (
    <section id="services" className="py-8 sm:py-16 border-b border-gray-100">
      <Container className="flex flex-col items-center justify-center">
        <SectionHeading
          className="max-w-xl"
          variant="centered"
          badge="CORE SERVICES"
          title="Digital Solutions Built Around Your Business"
          description="From software development to digital marketing and ecommerce, we help businesses build, launch and grow digital products that create measurable value."
        />
        <div
          id="services"
          className="grid gap-5 pt-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              image={service.image}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
