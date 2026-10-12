import { Container } from "@/components/ui/Container";
import { ecommerceCapabilities } from "@/lib/data/ecommerce-solutions-data";
import { FeatureListItem } from "../ui/ListItem";
import { SectionHeading } from "../ui/SectionHeading";
import { Fragment } from "react";

export function EcommerceCapabilities() {
  return (
    <section
      id="platform-capabilities"
      className="relative border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              variant="sticky"
              badge="Platform Capabilities"
              title={[
                <Fragment key="ecommerce-capabilities-title">
                  Everything your{" "}
                  <span className="text-primary">commerce platform needs.</span>
                </Fragment>
              ]}
              description="Build a complete commerce ecosystem with the tools required to manage products, customers, orders, payments and business performance from one platform."
            />
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
