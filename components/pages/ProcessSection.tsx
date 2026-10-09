"use client";
import { Reveal } from "../animations/Reveal";
import { EnterpriseDevelopmentApproach } from "../services/EnterpriseDevelopmentApproach";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function ProcessSection() {
  return (
    <section className="py-8 sm:py-16 w-full bg-[#FAFAFA]">
      <Container>
        <SectionHeading
          className="max-w-xl"
          variant="centered"
          badge="OUR PROCESS"
          title="A Clear Process. Proven Results."
          description="A structured approach keeps every project aligned with business objectives, user needs and measurable outcomes."
        />
        <Reveal className="w-full mt-8 sm:mt-16">
          <EnterpriseDevelopmentApproach/>
        </Reveal>
      </Container>
    </section>
  );
}
