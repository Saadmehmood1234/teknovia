import { CheckCircle2 } from "lucide-react";

import { Container } from "../ui/Container";
import { principles } from "@/lib/data/industries";
import Image from "next/image";

const industries = [
  "Educational Institutions",
  "SMEs",
  "Manufacturers",
  "Retail Businesses",
  "Healthcare Organizations",
  "Logistics Companies",
  "Enterprises",
];

export function IndustriesOverview() {
  return (
    <section className="pt-8 sm:pt-16">
      <Container>
        <div className="flex justify-center items-center">
          <div className="max-w-3xl flex items-center justify-center text-center flex-col">
            <p className="font-mono text-md sm:text-lg font-bold uppercase tracking-[0.18em] text-primary">
              How We Build
            </p>

            <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Designed for real-world
              <span className="text-primary">business needs.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-center text-sm leading-7 text-slate-600 sm:text-base">
              Every solution is developed with a focus on usability,
              scalability, reliability, and long-term business value.
            </p>
          </div>
        </div>

        <div className="mt-8 mb-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <div
                key={principle.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="font-mono text-[10px] font-bold text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                <h4 className="mt-5 text-sm font-extrabold leading-5 text-slate-900">
                  {principle.title}
                </h4>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
      <div className="relative overflow-hidden border">
        <Image
          src="/images/industries-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0B7B74]/70" />
        <div className="relative z-10 py-8">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="font-mono text-md font-bold uppercase tracking-[0.18em] text-white sm:text-lg">
                  Built For Diverse Industries
                </p>

                <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                  Technology that solves real business challenges.
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/80">
                  We work with organizations across different sectors to deliver
                  technology solutions that improve operations, efficiency, and
                  sustainable business growth.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 lg:justify-end">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white shadow-sm backdrop-blur-sm"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
