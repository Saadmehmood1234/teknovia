import { BackgroundEffect } from "@/components/Background";
import { Container } from "@/components/ui/Container";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { TopBadge } from "@/components/ui/Top-Badge";
import { reasons } from "@/lib/data/software-services/software-product-data";

export function SaaSWhyTeknovia() {
  return (
    <section className="relative overflow-hidden bg-[#284545] py-8 text-white sm:py-16">
      <BackgroundEffect />

      <Container>
        <div className="relative px-5 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col items-center justify-between gap-6 text-center">
            <div className="max-w-2xl">
              <TopBadge data="WHY TEKNOVIA" centerItem={true} />

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white/70 sm:text-4xl">
                More Than a Development Team
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
                We bring product thinking, engineering expertise, and
                long-term partnership together to turn ideas into scalable
                software.
              </p>
            </div>
          </div>

          <ProcessSteps
            steps={reasons}
            lineColor="border-[#009689]/60"
            arrowColor="border-l-[#009689]"
            circleBorderColor="border-[#009689]"
            circleBgColor="bg-[#003F48]"
            circleShadowColor="shadow-[0_0_25px_rgba(0,150,137,0.12)]"
            iconColor="text-white"
            numberBorderColor="border-[#009689]"
            numberBgColor="bg-[#00786f]"
            numberTextColor="text-white"
            titleColor="text-white"
            descriptionColor="text-white/60"
          />

          <div className="mx-auto mt-14 flex max-w-3xl items-center justify-center gap-3 text-center lg:mt-20">
            <span className="size-1.5 rounded-full bg-primary" />

            <p className="text-xs font-medium uppercase tracking-[0.16em] text-gray-400 sm:text-sm">
              Strategy
              <span className="mx-2 text-primary">·</span>
              Engineering
              <span className="mx-2 text-primary">·</span>
              Partnership
            </p>

            <span className="size-1.5 rounded-full bg-primary" />
          </div>
        </div>
      </Container>
    </section>
  );
}