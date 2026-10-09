import { Container } from "@/components/ui/Container";
import { industries } from "@/lib/data/software-services";
import { Card2 } from "../ui/Card2";
import { SectionHeading } from "../ui/SectionHeading";

export const metadata = {
  title: "Software Services",
  description:
    "Custom software solutions, enterprise applications, web applications, mobile apps, SaaS products, and digital systems built for modern businesses.",
};

export default function SoftwareIndusties() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-8 sm:py-16">
      <Container>
        <SectionHeading
          variant="centered"
          badge="Industries We Serve"
          title="Technology Built for Real-World Challenges."
          description="Domain-focused technology solutions designed to solve operational challenges across industries."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((feature) => (
            <Card2
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              circle={feature.circle}
              bar={feature.bar}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
