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
        <div className="mx-auto mt-10 grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:mt-14 lg:grid-cols-[20rem_1fr]">
          <div className="relative flex min-h-64 flex-col items-center justify-center overflow-hidden bg-[#284545] px-8 py-12 text-center text-white">
            <BackgroundEffect />
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="size-56 rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
              <div className="absolute left-1/2 top-1/2 size-108 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
            </div>

            <div className="relative flex size-20 items-center justify-center rounded-full bg-primary shadow-[0_0_0_10px_rgba(255,255,255,0.07),0_16px_40px_rgba(0,0,0,0.3)]">
              <ShoppingCart strokeWidth={1.6} className="size-9" />
            </div>

            <p className="relative mt-6 font-heading text-xl font-bold">
              Your store
            </p>
            <p className="relative mt-2 max-w-56 text-sm leading-6 text-white/70">
              One platform, connected to the tools your business runs on.
            </p>
          </div>

          <ul className="grid gap-4 lg:m-0 m-2 sm:grid-cols-2">
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
        </div>
      </Container>
    </section>
  );
}
