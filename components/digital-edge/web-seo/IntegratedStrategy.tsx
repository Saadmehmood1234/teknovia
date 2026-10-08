import { Container } from "@/components/ui/Container";
import { SectionHeading } from "./SectionHeading";
import { ArrowRight, CheckCircle2, Plus } from "lucide-react";
import { seoOptimizationTypes, seoTools } from "@/lib/data/digital-edge/seo-data";

export function IntegratedStrategy() {
  return (
    <section
      aria-labelledby="strategy-heading"
      className="border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16"
    >
      <Container>
        <SectionHeading
          badge="ONE INTEGRATED STRATEGY"
          title="SEO + AEO + GEO + AIO"
          description="Different discovery experiences require different optimization approaches. We bring them together with the right data, tools, and insights to build a broader search and AI visibility strategy."
        />
        <div className="mx-auto mt-12 max-w-6xl">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-200 shadow-sm">
            <ul className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
              {seoOptimizationTypes.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === seoOptimizationTypes.length - 1;

                return (
                  <li key={item.short} className="relative flex gap-4 bg-white p-6 sm:p-7">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary-50 text-primary ring-1 ring-primary/15">
                      <Icon className="size-6" aria-hidden />
                    </div>

                    <div className="flex flex-col items-start justify-start">
                      <h3 className="mfont-heading text-2xl font-black tracking-tight text-gray-950">
                        {item.short}
                      </h3>
                      <p className="text-sm leading-6 text-gray-600">
                        {item.title}
                      </p>
                    </div>

                    {!isLast && (
                      <span
                        aria-hidden
                        className="absolute right-0 top-1/2 z-10 hidden size-7 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-primary shadow-sm lg:flex"
                      >
                        <Plus className="size-3.5" strokeWidth={3} />
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mx-auto flex items-center justify-center py-6">
            <div className="h-px w-16 bg-gray-200" />
            <div className="flex size-8 items-center justify-center rounded-full border border-gray-200 bg-white text-primary shadow-sm">
              <ArrowRight className="size-4 rotate-90" />
            </div>
            <div className="h-px w-16 bg-gray-200" />
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="group relative flex min-h-80 flex-col justify-center overflow-hidden bg-[#18342F] p-7 text-white sm:p-9 lg:min-h-full lg:border-r lg:border-white/10">
                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <div className="relative z-10">
                  <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-bold tracking-wide text-primary">
                    TOOLS & PLATFORMS
                  </div>

                  <h3 className="mt-5 max-w-lg font-heading text-2xl font-black tracking-tight text-white sm:text-3xl">
                    Data-Driven Search & AI Optimization
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">
                    We use industry-standard tools and platforms to research,
                    monitor, analyze, and continuously improve your digital
                    visibility.
                  </p>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  {seoTools.map((tool) => (
                    <div
                      key={tool}
                      className="flex items-center gap-3 rounded-xl border border-gray-200 bg-[#FAFAFA] px-4 py-3.5"
                    >
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle2 className="size-4" />
                      </div>

                      <span className="text-sm font-medium text-gray-700">
                        {tool}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
