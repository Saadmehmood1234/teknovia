import { SectionHeading } from "./SectionHeading";
import { Container } from "@/components/ui/Container";
import { seoServices } from "@/lib/data/digital-edge/seo-data";
import { Card2 } from "@/components/ui/Card2";

export function SEOServices() {
  return (
    <section
      id="seo-services"
      className="border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <Container>
        <SectionHeading
          badge="OUR SERVICES"
          title={
            <>
              A Complete SEO Foundation for{" "}
              <span className="text-primary">Sustainable Growth</span>
            </>
          }
          description="From technical foundations to content, authority and reporting, we cover the key areas that influence search visibility."
        />

        <ul className="mt-8 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {seoServices.map((item) => (
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
