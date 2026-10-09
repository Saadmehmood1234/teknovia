import { Container } from "@/components/ui/Container";
import { ServiceCard } from "../ui/Card";
import { services } from "@/lib/data/hero-data";
import { AnimatedCard, RevealGroup } from "../animations/AnimatedCards";
import { SectionHeading } from "../ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="bg-surface py-8 sm:py-16">
      <Container className="flex flex-col items-center justify-center">
        <SectionHeading
          variant="centered"
          badge="Core Service Domains"
          title="Built to Help Businesses Grow, Scale, and Succeed"
          description="Comprehensive technology, digital marketing, eCommerce, EduTech, and business development solutions designed to improve efficiency, accelerate growth, and help businesses build scalable, future-ready operations."
        />

        <RevealGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <AnimatedCard key={service.title}>
              <ServiceCard
                image={service.image}
                title={service.title}
                href={service.href}
                description={service.description}
              />
            </AnimatedCard>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
