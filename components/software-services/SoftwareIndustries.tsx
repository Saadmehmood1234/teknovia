import { Container } from "@/components/ui/Container";
import { industries } from "@/lib/data/software-services";

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
            {industries.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-primary/20 hover:shadow-lg hover:shadow-slate-900/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-heading font-bold text-gray-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
