import { Container } from "@/components/ui/Container";
import { offerings } from "@/lib/data/software-services";
import { Card3 } from "../ui/Card3";
export const metadata = {
  title: "Software Services",
  description:
    "Custom software solutions, enterprise applications, web applications, mobile apps, SaaS products, and digital systems built for modern businesses.",
};

export default function SoftwareOffering() {
  return (
    <section className="bg-white sm:py-16 py-8" id="software-solutions">
      <Container>
        <div className="">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Software Offerings</span>

              <h2 className="mt-3 font-heading text-3xl font-bold text-gray-950 sm:text-4xl">
                Explore Our Software Solutions
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              Flexible technology solutions designed to support businesses from
              early-stage growth to enterprise scale.
            </p>
          </div>

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
        </div>
      </Container>
    </section>
  );
}
