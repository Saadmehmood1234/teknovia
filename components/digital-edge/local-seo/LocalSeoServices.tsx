import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { localSeoServices } from "@/lib/data/digital-edge";

export function LocalSeoServices() {
  return (
    <section
      id="local-seo-services"
      className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-25" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="OUR SERVICES" centerItem />

          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            Our Local GMB{" "}
            <span className="text-primary">Services</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Complete Google Business Profile and local search optimization to
            improve visibility, attract customers, and grow your business.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {localSeoServices.map((service, index) => {
            return (
              <article
                key={service.title}
                className="
                  group relative flex min-h-40 items-center gap-4
                  overflow-hidden rounded-2xl border border-gray-200
                  bg-[#FAFAFA] p-5
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:bg-white
                  hover:shadow-[0_18px_45px_rgba(0,150,137,0.08)]
                  sm:gap-5 sm:p-6
                "
              >
                <span
                  className="
                    absolute right-4 top-3
                    font-mono text-[10px] font-bold
                    tracking-widest text-gray-300
                    transition-colors
                    group-hover:text-primary/40
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className="
                    relative size-24 shrink-0 overflow-hidden
                    rounded-2xl bg-primary-50
                    xl:size-32
                  "
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="
                      object-cover
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                <div className="min-w-0 flex-1 pr-4">
                  <h3
                    className="
                      font-heading text-base font-bold leading-6
                      text-gray-950
                      transition-colors
                      group-hover:text-primary
                      sm:text-lg
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-2 text-xs leading-5 text-gray-600
                      sm:text-sm sm:leading-6
                    "
                  >
                    {service.description}
                  </p>
                </div>
                <div
                  className="
                    pointer-events-none absolute -bottom-8 -right-8
                    size-20 rounded-full bg-primary/5
                    transition-transform duration-500
                    group-hover:scale-150
                  "
                />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}