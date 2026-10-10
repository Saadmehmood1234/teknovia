import { Container } from "@/components/ui/Container";
import { Card2 } from "@/components/ui/Card2";
import { applications } from "@/lib/data/software-services/mobile-application-development-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MobileAppTypes() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16">
      <Container className="relative">
        <SectionHeading
          variant="centered"
          badge="APPLICATIONS&nbsp;WE&nbsp;BUILD"
          title="Mobile Solutions for Different Business Models."
          description="We build mobile applications across industries and business models, adapting the technology, workflows, and user experience to your specific requirements."
        />

        <ul className="mt-8 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {applications.map((item) => (
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
