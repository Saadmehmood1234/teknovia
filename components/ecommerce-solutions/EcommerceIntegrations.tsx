import { Container } from "@/components/ui/Container";
import { ecommerceIntegrations } from "@/lib/data/ecommerce-solutions-data";
import { Card2 } from "../ui/Card2";
import { SectionHeading } from "../ui/SectionHeading";
import {Fragment} from "react"
export function EcommerceIntegrations() {
  return (
    <section
      id="integrations"
      className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16"
    >
      <Container className="relative">
        <SectionHeading
          variant="centered"
          badge="Integrate Your Business"
          title={[
            <Fragment key="ecommerce-integration-title">
              Connect commerce with your{" "}
              <span className="text-primary">entire business.</span>
            </Fragment>
          ]}
          description="Your eCommerce platform should work as part of your business ecosystem. Connect the systems, channels and tools your business already depends on."
        />
        <ul className="grid gap-4 lg:mt-16 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {ecommerceIntegrations.map((item) => (
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
