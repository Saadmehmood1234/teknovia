import { Card4 } from "@/components/ui/Card4";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/lib/data/software-services/software-product-data";
export function SaaSProducts() {
  return (
    <section
      id="saas-products"
      className="border-b border-gray-200/60 bg-white py-8 sm:py-16"
    >
      <Container>
        <SectionHeading
          variant="centered"
          badge="OUR&nbsp;SAAS&nbsp;&&nbsp;SOFTWARE&nbsp;PRODUCTS"
          title="Built on Real-World Product Experience."
          description="We don't just develop software for clients. Our hands-on experience building business applications helps us understand the challenges involved in creating practical, scalable products."
        />
        <div className="grid gap-5 lg:col-span-8">
          <Card4 items={products} />
        </div>
      </Container>
    </section>
  );
}
