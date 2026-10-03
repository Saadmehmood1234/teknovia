import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { b2bServices } from "@/lib/data/digital-edge/b2b-marketing-data";

export function B2BMarketingServices() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-[0.12]" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="OUR B2B MARKETING SERVICES" centerItem />

          <h2 className="mt-5 font-heading text-3xl font-black leading-[1.08] tracking-tight text-gray-950 sm:text-4xl">
            Everything you need to{" "}
            <span className="text-primary">build B2B demand.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            From finding the right decision-makers to nurturing prospects and
            measuring performance, our B2B marketing services work together to
            create a stronger and more predictable growth pipeline.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {b2bServices.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0;

            return (
              <article
                key={service.title}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                  isFeatured
                    ? "border-primary/20 bg-[#022524]/85 text-white sm:col-span-2 lg:col-span-2"
                    : "border-gray-200 bg-[#FAFAFA]"
                }`}
              >
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 size-40 rounded-full blur-3xl ${
                    isFeatured ? "bg-white/10" : "bg-primary/5"
                  }`}
                />

                <div
                  className={`relative flex h-full flex-col p-6 sm:p-7 lg:p-8 ${
                    isFeatured ? "lg:min-h-75" : "min-h-63.75"
                  }`}
                >
                  {isFeatured && (
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.10]"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #fff 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                  )}
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex size-11 items-center justify-center rounded-xl ${
                        isFeatured
                          ? "bg-white/15 text-white"
                          : "border border-gray-200 bg-gray-50 text-primary"
                      }`}
                    >
                      <Icon className="size-5" />
                    </div>

                    <span
                      className={`font-mono text-[10px] font-bold tracking-[0.2em] ${
                        isFeatured ? "text-white/40" : "text-gray-300"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-auto pt-10">
                    <h3
                      className={`font-heading text-xl font-bold leading-tight sm:text-2xl ${
                        isFeatured ? "text-white" : "text-gray-950"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`mt-3 max-w-xl text-sm leading-6 ${
                        isFeatured ? "text-white/70" : "text-gray-500"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                        isFeatured ? "text-white/50" : "text-primary/60"
                      }`}
                    >
                      B2B Growth
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
