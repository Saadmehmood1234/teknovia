import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { IotStages } from "@/lib/data/software-services";
import { ArrowRight, Target } from "lucide-react";

export function IoTEcosystem() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-40" />

      <div className="pointer-events-none absolute left-1/2 top-20 size-100 -translate-x-1/2 rounded-full bg-primary-50/60 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="WHAT&nbsp;WE&nbsp;DELIVER" centerItem={true} />

          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            End-to-End IoT &{" "}
            <span className="text-primary">Automation Ecosystem</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            From connected devices at the edge to intelligent applications at
            the enterprise level, TEKNOVIA provides solutions across the
            complete IoT lifecycle.
          </p>
        </div>
        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-[8%] right-[8%] top-13 h-px bg-primary/20" />

          <div className="grid grid-cols-6 gap-4">
            {IotStages.map((stage) => {
              const Icon = stage.icon;

              return (
                <article key={stage.title} className="group relative">
                  <div className="relative z-10 mx-auto flex size-26 items-center justify-center rounded-full border border-primary/20 bg-white shadow-[0_10px_35px_rgba(0,150,137,0.08)] transition-all duration-300 group-hover:-translate-y-2 group-hover:border-primary/40 group-hover:shadow-[0_15px_45px_rgba(0,150,137,0.15)]">
                    <div className="flex size-17 items-center justify-center rounded-full bg-primary-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-7" />
                    </div>
                  </div>

                  <div className="mt-7 text-center">
                    <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-primary/60">
                      {stage.number}
                    </span>

                    <h3 className="mt-2 font-heading text-lg font-bold text-gray-950">
                      {stage.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      {stage.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="relative mt-12 lg:hidden">
          <div className="absolute bottom-8 left-12 top-8 w-px bg-primary/20" />

          <div className="space-y-5">
            {IotStages.map((stage) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.title}
                  className="group relative flex gap-5 p-5"
                >
                  <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-sm">
                    <Icon className="size-6" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-md font-bold tracking-[0.2em] text-primary">
                        {stage.number}
                      </span>

                      <h3 className="font-heading text-lg font-bold text-gray-950">
                        {stage.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {stage.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="pt-12 justify-center w-full lg:flex hidden">
          <div className="relative flex gap-6 max-w-4xl items-center justify-between text-white/80 px-6 py-3 rounded-full bg-linear-to-bl from-primary-600 to-[#0c4a45]">
            <div className="h-0.5 -left-32 w-32 top-8 absolute bg-primary" />
            <div className="h-0.5 -right-32 w-32 top-8 absolute bg-primary" />
            <div className="h-4 w-4 bg-primary rounded-full absolute -left-33 top-6" />
            <div className="h-4 w-4 bg-primary rounded-full absolute -right-33 top-6" />
            <Target className="size-10"/>
            <p className="inline-flex text-lg gap-4 items-center">
              <span>Connected Data</span>
              <ArrowRight className="size-5" />
            </p>
            <p className="inline-flex gap-4 text-lg items-center">
              <span>Generate Insights</span>
              <ArrowRight className="size-5" />
            </p>
            <p className="text-lg">Drive Real Business Impact</p>
          </div>
        </div>

        <div className="pt-8 lg:hidden flex justify-center w-full p-5">
          <div className="relative  flex gap-6 items-center max-w-4xl justify-between text-white/80 px-6 py-3 rounded-xl md:rounded-full bg-linear-to-bl from-primary-600 to-[#0c4a45]">
            <Target className="size-8 md:block hidden"/>
            <p className="inline-flex gap-4 items-center text-xs sm:text-sm">
              <span>Connected Data</span>
              <ArrowRight className="size-5 md:block hidden" />
            </p>
            <p className="inline-flex gap-4 items-center text-xs sm:text-sm">
              <span>Generate Insights</span>
              <ArrowRight className="size-5 md:block hidden" />
            </p>
            <p className="text-xs sm:text-sm">Drive Real Business Impact</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
