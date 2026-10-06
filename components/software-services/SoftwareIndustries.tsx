import { Container } from "@/components/ui/Container";
import { industries } from "@/lib/data/software-services";
import { Card2 } from "../ui/Card2";

export const metadata = {
  title: "Software Services",
  description:
    "Custom software solutions, enterprise applications, web applications, mobile apps, SaaS products, and digital systems built for modern businesses.",
};

export default function SoftwareIndusties() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-8 sm:py-16">
      <Container>
        <div className="">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Industries We Serve</span>

            <h2 className="mt-3 font-heading text-3xl font-bold text-gray-950 sm:text-4xl">
              Technology Built for Real-World Challenges
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Domain-focused technology solutions designed to solve operational
              challenges across industries.
            </p>
          </div>

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
        </div>
      </Container>
    </section>
  );
}
