import {  ShoppingCart } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { ecommerceIntegrations } from "@/lib/data/ecommerce-solutions-data";
import { BackgroundEffect } from "../Background";
import { Card2 } from "../ui/Card2";

export function EcommerceIntegrations() {
  return (
    <section
      id="integrations"
      className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16"
    >
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="Integrate Your Business" centerItem={true} />

          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            Connect commerce with your{" "}
            <span className="text-primary">entire business.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Your eCommerce platform should work as part of your business
            ecosystem. Connect the systems, channels and tools your business
            already depends on.
          </p>
        </div>
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
