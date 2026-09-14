import { Container } from "@/components/ui/Container";
import { ServiceCard } from "../ui/Card";
import { services } from "@/lib/data/site";


export function Services() {
  return (
    <section id="services" className="bg-surface py-16">
      <Container className="flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl text-center">
          <p className="font-mono text-lg font-extrabold uppercase tracking-widest text-primary">
            Our Core Service Domains
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950">
            Built to Help Businesses Grow, Scale, and Succeed
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Comprehensive technology, digital marketing, eCommerce, EduTech, and
            talent solutions designed to improve efficiency and accelerate
            growth.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
