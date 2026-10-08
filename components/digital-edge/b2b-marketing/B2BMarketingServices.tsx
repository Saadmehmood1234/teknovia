import { Card2 } from "@/components/ui/Card2";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { b2bServices } from "@/lib/data/digital-edge/b2b-marketing-data";

export function B2BMarketingServices() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-[0.12]" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="OUR B2B MARKETING SERVICES" centerItem />

          <h2 className="mt-5 font-heading text-3xl font-black leading-[1.08] tracking-tight text-gray-950 sm:text-4xl">
            Everything you need to{" "}
            <span className="text-primary">build B2B demand.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            From finding the right decision-makers to nurturing prospects and
            measuring performance, our B2B marketing services work together to
            create a stronger and more predictable growth pipeline.
          </p>
        </div>

        <ul className="mt-8 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {b2bServices.map((item) => (
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
