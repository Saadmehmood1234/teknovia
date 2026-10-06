import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { ecommerceCapabilities } from "@/lib/data/ecommerce-solutions-data";
import { FeatureListItem } from "../ui/ListItem";

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
            {ecommerceCapabilities.map((item, index) => (
              <FeatureListItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
