"use client";
import { EnterpriseDevelopmentApproach } from "../services/EnterpriseDevelopmentApproach";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  return (
    <section className="py-8 w-full bg-[#FAFAFA]">
      <SectionHeading
        eyebrow="OUR PROCESS"
        title="A Clear Process. Proven Results."
        description="A structured approach keeps every project aligned with business objectives, user needs and measurable outcomes."
      />

      <EnterpriseDevelopmentApproach />
    </section>
  );
}
