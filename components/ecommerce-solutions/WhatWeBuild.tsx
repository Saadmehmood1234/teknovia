import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { ecommerceModels } from "@/lib/data/ecommerce-solutions-data";

export function WhatWeBuild() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="What We Build" centerItem={true} />

          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            E-commerce solutions built for modern businesses
          </h2>
{/* 
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            From online stores to complex commerce platforms, we build scalable
            solutions designed around your business needs.
          </p> */}
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl gap-x-0 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
          {ecommerceModels.map((item, index) => {
            const Icon = item.icon;

            return (
              <li
                key={item.title}
                className="relative px-4 text-center lg:px-6 lg:[&:nth-child(3n+1)>.line]:left-1/2 lg:[&:nth-child(3n)>.line]:right-1/2 lg:[&:last-child>.line]:right-1/2"
              >
                <div className="relative z-10 mx-auto flex size-24 items-center justify-center rounded-full border border-primary/25 bg-[#FAFAFA] shadow-[0_10px_35px_rgba(0,150,137,0.08)]">
                  <Icon
                    strokeWidth={1.6}
                    className="size-10 text-primary"
                  />

                  <span className="absolute -bottom-3 flex size-8 items-center justify-center rounded-full border border-primary/30 bg-white font-mono text-[11px] font-bold text-primary shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-9 font-heading text-base font-bold tracking-wide text-gray-950 sm:text-lg">
                  {item.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}