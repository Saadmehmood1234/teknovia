import { BackgroundEffect } from "@/components/Background";
import { Container } from "@/components/ui/Container";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { TopBadge } from "@/components/ui/Top-Badge";
import { IotStages } from "@/lib/data/software-services/iot-development-data";
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
        <ProcessSteps
          steps={IotStages}
          lineColor="border-primary/40"
          arrowColor="border-l-primary"
          circleBorderColor="border-primary/40"
          circleBgColor="bg-white"
          circleShadowColor="shadow-[0_0_25px_rgba(0,150,137,0.12)]"
          iconColor="text-primary"
          numberBorderColor="border-primary"
          numberBgColor="bg-primary"
          numberTextColor="text-white"
          titleColor="text-gray-950"
          descriptionColor="text-gray-600"
        />
        <div className="pt-12 relative justify-center w-full lg:flex hidden">
          <div className="relative flex gap-6 max-w-4xl items-center justify-between text-white/80 px-6 py-3 rounded-full bg-linear-to-bl from-primary-600 to-[#0c4a45]">
            <BackgroundEffect />
            <div className="h-0.5 -left-32 w-32 top-8 absolute bg-primary" />
            <div className="h-0.5 -right-32 w-32 top-8 absolute bg-primary" />
            <div className="h-4 w-4 bg-primary rounded-full absolute -left-33 top-6" />
            <div className="h-4 w-4 bg-primary rounded-full absolute -right-33 top-6" />
            <Target className="size-10" />
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

        <div className="pt-8 relative lg:hidden flex justify-center w-full p-5">
          <div className="relative  flex gap-6 items-center max-w-4xl justify-between text-white/80 px-6 py-3 rounded-xl md:rounded-full bg-linear-to-bl from-primary-600 to-[#0c4a45]">
            <BackgroundEffect />
            <Target className="size-8 md:block hidden" />
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
