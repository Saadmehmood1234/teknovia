import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { localSeoComingSoon } from "@/lib/data/digital-edge/local-seo-data";

export function LocalSeoCaseStudies() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16">
      <Container>
        <div>
          <div className="mx-auto max-w-3xl text-center">
            <TopBadge data="REAL GROWTH SNAPSHOT" centerItem />

            <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
              Results worth <span className="text-primary">showing.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              We are currently documenting our first client campaigns. This
              space will soon feature verified performance data and detailed
              growth stories.
            </p>
          </div>
        </div>
        <div className="sm:mt-16 mt-8 grid gap-4 lg:grid-cols-3">
          {localSeoComingSoon.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative min-h-82.5 overflow-hidden border border-gray-200 bg-[#FAFAFA] transition-all duration-300 hover:border-primary/20 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
              >
                <div className="absolute inset-x-0 bottom-0 h-44 overflow-hidden opacity-70">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size-[32px_32px] opacity-50" />
                  <svg
                    viewBox="0 0 500 180"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 left-0 h-40 w-full text-primary/20"
                  >
                    <path
                      d="M0 155 C55 140 75 145 120 115 C165 85 190 120 235 90 C280 60 300 80 340 55 C380 30 420 50 500 15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />

                    <path
                      d="M0 155 C55 140 75 145 120 115 C165 85 190 120 235 90 C280 60 300 80 340 55 C380 30 420 50 500 15 L500 180 L0 180 Z"
                      fill="currentColor"
                      opacity="0.15"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-linear-to-b from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent" />
                <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-primary shadow-sm">
                      <Icon className="size-5" />
                    </div>

                    <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-gray-300">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-primary">
                        Case Study
                      </span>

                      <span className="text-[10px] text-gray-300">
                        / Coming Soon
                      </span>
                    </div>

                    <h3 className="max-w-sm font-heading text-xl font-bold leading-tight text-gray-950 sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-xs leading-5 text-gray-500">
                      Verified client performance data and campaign insights
                      will be published here.
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      <span>Performance report</span>
                      <span className="h-px w-6 bg-gray-300" />
                      <span>Coming soon</span>
                    </div>
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
