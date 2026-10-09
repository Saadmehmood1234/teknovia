import { Container } from "@/components/ui/Container";
import { offerings } from "@/lib/data/software-services";
import { Card3 } from "../ui/Card3";
import { SectionHeading } from "../ui/SectionHeading";
export const metadata = {
  title: "Software Services",
  description:
    "Custom software solutions, enterprise applications, web applications, mobile apps, SaaS products, and digital systems built for modern businesses.",
};

export default function SoftwareOffering() {
  return (
    <section className="bg-white sm:py-16 py-8" id="software-solutions">
      <Container>
        <SectionHeading
          variant="split"
          badge="Software Offerings"
          title="Explore Our Software Solutions."
          description="Flexible technology solutions designed to support businesses from early-stage growth to enterprise scale."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item) => (
            <Card3
              key={item.title}
              title={item.title}
              description={item.description}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
