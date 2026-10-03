import { Check, Gem, Eye, Rocket } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { coreValues } from "@/lib/data/corporate-data";

export function VisionMissionValues() {
  return (
    <section className="border-b border-gray-200 bg-white py-8 lg:py-12">
      <Container>
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1.65fr]">
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
            <div className="flex items-center gap-4">
              <div className="flex sm:h-17 sm:w-17 w-13 h-13 shrink-0 items-center justify-center rounded-full bg-primary-100/50 text-primary border border-primary-200">
                <Eye className="sm:h-9 sm:w-9 w-6 h-6" strokeWidth={1.6} />
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
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
            <div className="flex items-center gap-4">
              <div className="flex sm:h-17 sm:w-17 w-13 h-13 shrink-0 items-center justify-center rounded-full bg-primary-100/50 text-primary border border-primary-200">
                <Rocket className="sm:h-9 sm:w-9 w-6 h-6" strokeWidth={1.6} />
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
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
            <div className="flex items-center gap-4">
              <div className="flex sm:h-17 sm:w-17 w-13 h-13 shrink-0 items-center justify-center rounded-full bg-primary-100/50 text-primary border border-primary-200">
                <Gem className="sm:h-9 sm:w-9 w-6 h-6" strokeWidth={1.8} />
              </div>

              <h2 className="text-xl font-extrabold tracking-tight text-primary-800">
                Our Core Values
              </h2>
            </div>

            <div className="mt-5 space-y-3">
              {coreValues.map((value) => (
                <div key={value.title} className="flex items-start gap-3">
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
              ))}
            </div>
          </div>
        </div>
        {/* <div className="bg-[#FBFBFB] mt-8 sm:mt-16 p-8 rounded-3xl shadow-sm shadow-gray-200 border border-gray-100">
          <div className="max-w-2xl flex justify-start items-center gap-4">
            <div className="p-3 text-primary bg-primary-50/40 border border-primary-100 rounded-2xl">
              <Target />
            </div>
            <p className="font-mono text-md font-extrabold uppercase tracking-wider text-blac">
              Our Core Values
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <article
                key={value.number}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm shadow-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-slate-900/5"
              >
                <h3 className=" text-md font-extrabold text-slate-950">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div> */}
      </Container>
    </section>
  );
}
