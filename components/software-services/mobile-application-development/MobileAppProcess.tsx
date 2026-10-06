import { BackgroundEffect } from "@/components/Background";
import { Container } from "@/components/ui/Container";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { TopBadge } from "@/components/ui/Top-Badge";
import { steps } from "@/lib/data/software-services/mobile-application-development-data";
import { Lightbulb, ShieldCheck, Smartphone } from "lucide-react";

export function MobileAppProcess() {
  return (
    <section className="relative overflow-hidden bg-white text-black sm:py-16 py-8">
      <Container>
        <div className="relative px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col w-full justify-between items-center text-center gap-6">
            <div className="max-w-2xl">
              <TopBadge
                data="OUR&nbsp;DEVELOPMENT&nbsp;APPROACH"
                centerItem={true}
              />

              <h2 className="mt-3 text-3xl font-black tracking-tight text-black sm:text-4xl">
                From Idea to App Store.
              </h2>
              <p className="mt-5 text-base leading-7 text-gray-700 sm:text-lg">
                A structured development process designed to reduce risk,
                maintain quality, and turn your product idea into a reliable
                mobile application.
              </p>
            </div>
          </div>
          <ProcessSteps
            steps={steps}
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
        </div>

        <div className="mt-12 relative bg-[#284545] grid gap-4 rounded-3xl border border-primary/20 p-5 sm:grid-cols-3 sm:p-7">
          <BackgroundEffect/>
          <div className="flex items-center gap-4">
            <Lightbulb className="size-8 shrink-0 text-primary-300" />
            <div>
              <p className="text-sm font-bold text-white/80">
                Product Thinking
              </p>
              <p className="mt-1 text-xs text-gray-200">
                Technology aligned with business goals.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-primary/20 sm:border-l sm:pl-5">
            <Smartphone className="size-8 shrink-0 text-primary-300" />
            <div>
              <p className="text-sm font-bold text-white/80">Mobile-First UX</p>
              <p className="mt-1 text-xs text-gray-200">
                Interfaces designed for real-world usage.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-primary/20 sm:border-l sm:pl-5">
            <ShieldCheck className="size-8 shrink-0 text-primary-300" />
            <div>
              <p className="text-sm font-bold text-white/80">
                Quality & Security
              </p>
              <p className="mt-1 text-xs text-gray-200">
                Tested before every production release.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
