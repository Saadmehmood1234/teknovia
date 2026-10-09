import { Check, Gem, Eye, Rocket } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/ui/Container";
import { coreValues } from "@/lib/data/corporate-data";

export function VisionMissionValues() {
  return (
    <section className="border-b border-gray-200 bg-white py-8 lg:py-12">
      <Container>
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1.65fr]">
          <Reveal delay={0} className="h-full">
            <article className="group h-full rounded-xl border border-slate-200 bg-white p-8 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-slate-900/5">
              <div className="flex items-center gap-4">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-primary-200 bg-primary-100/50 text-primary transition-transform duration-300 group-hover:scale-105 sm:h-15 sm:w-15">
                  <Eye className="h-6 w-6 sm:h-9 sm:w-9" strokeWidth={1.6} />
                </div>

                <h2 className="text-xl font-extrabold tracking-tight text-primary-800">
                  Our Vision
                </h2>
              </div>

              <p className="mt-7 text-[15px] font-medium leading-8 text-slate-700">
                To become a trusted technology and digital solutions partner,
                empowering businesses with scalable systems and data-driven
                growth.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.12} className="h-full">
            <article className="group h-full rounded-xl border border-slate-200 bg-white p-8 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-slate-900/5">
              <div className="flex items-center gap-4">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-primary-200 bg-primary-100/50 text-primary transition-transform duration-300 group-hover:scale-105 sm:h-15 sm:w-15">
                  <Rocket className="h-6 w-6 sm:h-9 sm:w-9" strokeWidth={1.6} />
                </div>

                <h2 className="text-xl font-extrabold tracking-tight text-primary-800">
                  Our Mission
                </h2>
              </div>

              <p className="mt-7 text-[15px] font-medium leading-8 text-slate-700">
                To deliver integrated digital marketing, software, EduTech, and
                talent solutions that enhance efficiency, drive measurable
                results, and create long-term business value.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.24} className="h-full">
            <article className="group h-full rounded-xl border border-slate-200 bg-white p-7 shadow-[0_2px_12px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-primary/25 hover:shadow-lg hover:shadow-slate-900/5">
              <div className="flex items-center gap-4">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-primary-200 bg-primary-100/50 text-primary transition-transform duration-300 group-hover:scale-105 sm:h-15 sm:w-15">
                  <Gem className="h-6 w-6 sm:h-9 sm:w-9" strokeWidth={1.8} />
                </div>

                <h2 className="text-xl font-extrabold tracking-tight text-primary-800">
                  Our Core Values
                </h2>
              </div>

              <div className="mt-5 space-y-3">
                {coreValues.map((value, index) => (
                  <Reveal key={value.title} delay={0.3 + index * 0.06}>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </div>

                      <div>
                        <h3 className="text-sm font-extrabold leading-5 text-slate-900">
                          {value.title}
                        </h3>

                        <p className="text-[13px] leading-5 text-slate-600">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
