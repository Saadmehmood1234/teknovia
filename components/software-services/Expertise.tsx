import { Container } from "@/components/ui/Container";
import { expertise } from "@/lib/data/software-services";
import { Card4 } from "../ui/Card4";
import { SectionHeading } from "../ui/SectionHeading";

export default function Expertise() {
  return (
    <section className="border-b border-gray-100 py-10 sm:py-20">
      <Container>
        <SectionHeading
          variant="centered"
          badge="Our Expertise"
          title="Smart Solutions. Stronger Businesses."
          description="From enterprise-grade systems to emerging technologies, we help organizations improve efficiency, automate processes, and accelerate growth."
        />

        <div className="grid gap-5 lg:col-span-8">
          <Card4 items={expertise} />
        </div>
      </Container>
    </section>
  );
}
