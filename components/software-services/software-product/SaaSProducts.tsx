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

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <article
                key={product.title}
                className="relative overflow-hidden rounded-3xl border border-gray-200 bg-[#FAFAFA] p-6 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-primary/15 bg-primary-50 text-primary">
                    <Icon className="size-5" />
                  </div>

                  <span className="font-mono text-xs text-gray-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-gray-950">
                  {product.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {product.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
