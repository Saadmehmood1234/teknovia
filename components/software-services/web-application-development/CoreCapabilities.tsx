import {
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { WebDevCapabilities } from "@/lib/data/software-services";



export default function CoreCapabilities() {
  return (
    <section className="relative overflow-hidden bg-[#EFF3F6] py-12 sm:py-16 lg:py-20">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-40 top-0 h-100 w-100 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-100 w-100 rounded-full bg-white/70 blur-3xl" />
      </div>

      <Container>
        <div className="relative">
          {/* Heading */}
          <div className="flex w-full flex-col items-center justify-between gap-6 text-center">
            <div className="max-w-2xl">
              <p className="font-mono text-lg font-extrabold uppercase tracking-[0.2em] text-primary">
                Core Capabilities
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Built to Perform. Designed to Scale.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
                Our applications are built with the capabilities businesses
                need to operate, scale, and adapt.
              </p>
            </div>
          </div>

          {/* Capability layout */}
          <div className="mt-12 grid gap-4 sm:mt-14 lg:grid-cols-2">
            {WebDevCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              const isFeatured = index === 0;

              return (
                <div
                  key={capability.number}
                  className={`group relative overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:border-primary/30 hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)] ${
                    isFeatured
                      ? "lg:row-span-2"
                      : ""
                  }`}
                >
                  {/* Large background number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-3 -top-8 font-mono text-[110px] font-black leading-none text-slate-100 transition-colors duration-300 group-hover:text-primary/10 sm:text-[130px]"
                  >
                    {capability.number}
                  </span>

                  <div
                    className={`relative flex h-full flex-col ${
                      isFeatured
                        ? "justify-between p-7 sm:p-9"
                        : "p-6 sm:p-7"
                    }`}
                  >
                    {/* Top */}
                    <div className="flex items-start justify-between gap-5">
                      <div
                        className={`flex items-center justify-center border border-primary/15 bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white ${
                          isFeatured
                            ? "h-14 w-14 rounded-2xl"
                            : "h-12 w-12 rounded-xl"
                        }`}
                      >
                        <Icon
                          className={isFeatured ? "h-6 w-6" : "h-5 w-5"}
                          strokeWidth={1.8}
                        />
                      </div>

                      <span className="font-mono text-xs font-bold tracking-widest text-slate-300">
                        {capability.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div
                      className={
                        isFeatured
                          ? "mt-20 sm:mt-28"
                          : "mt-8"
                      }
                    >
                      <h3
                        className={`font-black tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-primary ${
                          isFeatured
                            ? "max-w-md text-2xl sm:text-3xl"
                            : "text-xl"
                        }`}
                      >
                        {capability.title}
                      </h3>

                      <p
                        className={`mt-3 leading-7 text-slate-500 ${
                          isFeatured
                            ? "max-w-lg text-base"
                            : "text-sm"
                        }`}
                      >
                        {capability.description}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div
                      className={`mt-8 flex items-center justify-between border-t border-slate-100 pt-5 ${
                        isFeatured ? "sm:mt-12" : ""
                      }`}
                    >
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        Web Application Capability
                      </span>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                        <ArrowUpRight
                          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom hover line */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}