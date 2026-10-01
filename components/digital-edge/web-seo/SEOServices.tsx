import { seoServices } from "@/lib/data/digital-edge";
import { ServiceCard } from "./ServiceCard";
import { SectionHeading } from "./SectionHeading";
import { Container } from "@/components/ui/Container";

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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {seoServices.map((item, index) => (
            <ServiceCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
