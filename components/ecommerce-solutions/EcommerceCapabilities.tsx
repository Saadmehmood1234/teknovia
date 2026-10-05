import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { ecommerceCapabilities } from "@/lib/data/ecommerce-solutions-data";

export function EcommerceCapabilities() {
  return (
    <section
      id="platform-capabilities"
      className="relative border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <TopBadge data="Platform Capabilities" />

              <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl lg:leading-[1.1]">
                Everything your{" "}
                <span className="text-primary">commerce platform needs.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
                Build a complete commerce ecosystem with the tools required to
                manage products, customers, orders, payments and business
                performance from one platform.
              </p>

              <div className="mt-8 h-px w-16 bg-primary" />
            </div>
          </div>

          <ul className="border-t border-gray-200 lg:col-span-7">
            {ecommerceCapabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <li
                  key={item.title}
                  className="relative border-b border-gray-200"
                >
                  <span className="pointer-events-none absolute -bottom-px left-0 h-px w-0 bg-primary" />

                  <div className="flex items-start gap-5 py-6 transition-transform duration-300 sm:gap-7 sm:py-8">
                    <Icon
                      strokeWidth={1.5}
                      className="mt-0.5 size-7 shrink-0 text-gray-400"
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-lg font-bold tracking-tight text-gray-950 sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-7 text-gray-600">
                        {item.description}
                      </p>
                    </div>

                    <span className="pt-1.5 font-mono text-[11px] font-bold tracking-[0.18em] text-gray-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}