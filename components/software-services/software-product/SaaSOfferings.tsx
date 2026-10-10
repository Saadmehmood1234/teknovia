import { Container } from "@/components/ui/Container";
import { offerings } from "@/lib/data/software-services/software-product-data";
import { Card2 } from "@/components/ui/Card2";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SaaSOfferings() {
  return (
    <section className="border-b border-gray-100 bg-white py-8 sm:py-16">
      <Container>
        <SectionHeading
          variant="centered"
          badge="What&nbsp;We&nbsp;Offer"
          title="SaaS & Software Product Development."
          description="From idea to launch and beyond, we build scalable, secure and high-performance software products that drive real business growth."
        />
        <ul className="mt-8 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {offerings.map((item) => (
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
