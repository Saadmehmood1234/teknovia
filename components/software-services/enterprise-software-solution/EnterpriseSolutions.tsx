import { Card2 } from "@/components/ui/Card2";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { enterpriseSolutions } from "@/lib/data/software-services/enterprise-data";

export function EnterpriseSolutions() {
  return (
    <section className="py-8 sm:py-16 border-b border-gray-100">
      <Container>
        <SectionHeading
          variant="centered"
          badge="ENTERPRISE&nbsp;SOLUTIONS"
          title="Enterprise Software Solutions We Build."
          description="Comprehensive enterprise platforms tailored to streamline operations, improve visibility, and accelerate digital transformation."
        />

        <ul className="mt-8 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {enterpriseSolutions.map((item) => (
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
