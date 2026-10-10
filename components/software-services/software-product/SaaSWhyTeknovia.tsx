import { BackgroundEffect } from "@/components/Background";
import { Container } from "@/components/ui/Container";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reasons } from "@/lib/data/software-services/software-product-data";

export function SaaSWhyTeknovia() {
  return (
    <section className="relative overflow-hidden bg-[#022426] py-8 text-white sm:py-16">
      <BackgroundEffect />

      <Container>
        <SectionHeading
          variant="centered"
          titleClassName="text-white/80"
          descriptionClassName="text-white/70"
          badge="WHY TEKNOVIA"
          title="More Than a Development Team."
          description="We bring product thinking, engineering expertise, and long-term partnership together to turn ideas into scalable software."
        />

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
      </Container>
    </section>
  );
}
