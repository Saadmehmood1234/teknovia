import {
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { ecommerceTechnologies } from "@/lib/data/ecommerce-solutions-data";

export function EcommerceTechnology() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <TopBadge data="eCommerce Technology Landscape" />

            <h2 className="mt-4 max-w-xl font-heading text-3xl font-black leading-[1.08] tracking-tight text-gray-950 sm:text-4xl">
              The right commerce{" "}
              <span className="text-primary">architecture for your needs.</span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base">
              <strong className="font-semibold text-gray-900">
                Custom-built commerce
              </strong>{" "}
              for businesses that need more than off-the-shelf platforms.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              TEKNOVIA focuses on building{" "}
              <strong className="font-semibold text-gray-900">
                custom eCommerce platforms
              </strong>{" "}
              around your business processes, products and growth objectives.
              Where required, we can also work with established commerce
              ecosystems and integrate with existing platforms.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ecommerceTechnologies.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-bold text-gray-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}