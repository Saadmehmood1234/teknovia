import { Card4 } from "@/components/ui/Card4";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { products } from "@/lib/data/software-services/software-product-data";
export function SaaSProducts() {
  return (
    <section
      id="saas-products"
      className="border-b border-gray-200/60 bg-white py-8 sm:py-16"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge
            data="OUR&nbsp;SAAS&nbsp;&&nbsp;SOFTWARE&nbsp;PRODUCTS"
            centerItem={true}
          />
          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            Built on Real-World Product Experience
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            We don&apos;t just develop software for clients. Our hands-on
            experience building business applications helps us understand the
            challenges involved in creating practical, scalable products.
          </p>
        </div>
        <div className="grid gap-5 lg:col-span-8">
          <Card4 items={products} />
        </div>
      </Container>
    </section>
  );
}
