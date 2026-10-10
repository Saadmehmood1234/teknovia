import { BackgroundEffect } from "@/components/Background";
import { Container } from "@/components/ui/Container";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { developmentProcess } from "@/lib/data/software-services/web-application-development-data";

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[#022729] text-white sm:py-16 py-8">
      <BackgroundEffect />
      <Container>
        <SectionHeading
          variant="centered"
          titleClassName="text-white/80"
          descriptionClassName="text-white/70"
          badge="OUR&nbsp;DEVELOPMENT&nbsp;PROCESS"
          title="A Clear Process. Proven Results."
          description="We follow a structured and transparent development process to transform your requirements into a reliable web application."
        />
        <ProcessSteps steps={developmentProcess} />
      </Container>
    </section>
  );
}
