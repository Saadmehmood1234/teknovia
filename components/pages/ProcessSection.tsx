"use client";
import { EnterpriseDevelopmentApproach } from "../services/EnterpriseDevelopmentApproach";
import { Container } from "../ui/Container";
import { TopBadge } from "../ui/Top-Badge";

export function ProcessSection() {
  return (
    <section className="py-8 sm:py-16 w-full bg-[#FAFAFA]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="OUR PROCESS" centerItem />

          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            A Clear Process. Proven Results.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            A structured approach keeps every project aligned with business
            objectives, user needs and measurable outcomes.
          </p>
        </div>
      </Container>

      <EnterpriseDevelopmentApproach />
    </section>
  );
}
