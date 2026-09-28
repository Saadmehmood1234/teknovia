import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { b2bBenefits } from "@/lib/data/digital-edge";

const flowSteps = ["Marketing", "Pipeline", "Revenue"];

export function B2BMarketingBenefits() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <div className="pointer-events-none absolute -left-40 top-10 size-115 rounded-full bg-primary/6 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-12  lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="w-full justify-center text-center gap-2 grid lg:grid-cols-1 md:grid-cols-2 md:text-left ">
            <div className="mx-auto md:hidden block">
              <TopBadge data="WHY TEKNOVIA?" centerItem />

              <h2 className="mx-auto mt-4 max-w-md font-heading text-3xl font-black leading-[1.1] tracking-tight text-gray-950 sm:text-4xl lg:mx-0">
                Strategy that connects{" "}
                <span className="text-primary">marketing to revenue.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-gray-600 sm:text-base lg:mx-0">
                B2B marketing needs more than visibility. We build strategies
                around your audience, sales cycle, business goals, and
                measurable opportunities.
              </p>
            </div>
            <div className="hidden mx-auto md:block">
              <TopBadge data="WHY TEKNOVIA?" />

              <h2 className=" mt-4 max-w-md font-heading text-3xl font-black leading-[1.1] tracking-tight text-gray-950 sm:text-4xl lg:mx-0">
                Strategy that connects{" "}
                <span className="text-primary">marketing to revenue.</span>
              </h2>

              <p className=" mt-5 max-w-md text-sm leading-7 text-gray-600 sm:text-base lg:mx-0">
                B2B marketing needs more than visibility. We build strategies
                around your audience, sales cycle, business goals, and
                measurable opportunities.
              </p>
            </div>
            <div className="relative mt-8 overflow-hidden rounded-md bg-[#022524] p-6 text-white lg:mx-0">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.10]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="pointer-events-none absolute -bottom-16 -right-16 size-48 rounded-full bg-primary/40 blur-3xl" />

              <p className="relative text-left text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                How it connects
              </p>

              <div className="relative mt-6 flex items-center">
                {flowSteps.map((step, i) => (
                  <div
                    key={step}
                    className="flex flex-1 items-center last:flex-none"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span
                        className={`flex size-9 items-center justify-center rounded-full font-mono text-xs font-bold ${
                          i === flowSteps.length - 1
                            ? "bg-primary text-white shadow-[0_0_25px_rgba(0,150,137,0.6)]"
                            : "border border-primary/30 bg-primary/10 text-primary"
                        }`}
                      >
                        {i + 1}
                      </span>

                      <span className="whitespace-nowrap text-[11px] font-semibold text-white/80">
                        {step}
                      </span>
                    </div>

                    {i < flowSteps.length - 1 && (
                      <div className="mx-2 mb-6 h-px flex-1 bg-linear-to-r from-primary/60 to-primary/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-6 left-5 top-6 w-px bg-linear-to-b from-primary/40 via-primary/20 to-transparent" />

            <div className="space-y-4">
              {b2bBenefits.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="relative flex items-start gap-4 sm:gap-6"
                  >
                    <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-white font-mono text-[11px] font-bold text-primary shadow-sm ring-4 ring-[#FAFAFA]">
                      {item.number}
                    </span>

                    <div className="relative flex min-w-0 flex-1 items-start gap-4 overflow-hidden">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 text-gray-400 transition-all duration-300 group-hover:border-primary/15 group-hover:bg-primary-50 group-hover:text-primary">
                        <Icon className="size-5" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-heading text-base font-bold text-gray-950 sm:text-lg">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
