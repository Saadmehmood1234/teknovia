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
            Our Local GMB <span className="text-primary">Services</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Complete Google Business Profile and local search optimization to
            improve visibility, attract customers, and grow your business.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {localSeoServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="
                  relative grid min-h-40 overflow-hidden rounded-2xl
                  border border-gray-200 bg-[#FAFAFA]
                  sm:grid-cols-[160px_1fr] grid-cols-[120px_1fr]
                "
              >
                <span
                  className="
                    absolute right-4 top-3 z-20
                    font-mono text-[10px] font-bold
                    tracking-widest text-gray-300
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className={`
                    relative flex min-h-48 items-center justify-center
                    overflow-hidden ${service.bgColor}
                    sm:min-h-full
                  `}
                >
                  <div
                    className={`
                      relative flex size-20 items-center justify-center
                      rounded-2xl border border-primary/15
                      ${service.iconColor} ${service.txtColor}
                      shadow-sm
                    `}
                  >
                    <Icon
                      className="
                        size-10
                        stroke-[1.7]
                      "
                    />
                  </div>

                  <div
                    className={`
                      pointer-events-none absolute -left-10 -top-10
                      size-28 rounded-full
                      border ${service.borderColor}
                    `}
                  />

                  <div
                    className={`
                      pointer-events-none absolute -bottom-12 -right-12
                      size-32 rounded-full
                      border ${service.borderColor}
                    `}
                  />
                </div>
                <div className="flex min-w-0 flex-col justify-center p-5 sm:p-6">
                  <h3
                    className="
                      font-heading text-base font-bold leading-6
                      text-gray-950
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
                  className={`
                    pointer-events-none absolute
                    -bottom-8 -right-8 size-20
                    rounded-full ${service.bgColor}
                  `}
                />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}