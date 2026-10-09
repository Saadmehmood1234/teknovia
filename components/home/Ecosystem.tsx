import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden py-16 text-white"
    >
      <Image
        src="/images/home/service-back.webp"
        alt="Teknovia Service Ecosystem"
        fill
        preload
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#040706]/80" />
      <Container className="relative flex flex-col items-center justify-center text-center">
        <SectionHeading
          variant="centered"
          badge="Domains&nbsp;Integrated&nbsp;Service&nbsp;Ecosystem"
          title="One framework. End-to-end growth."
          description="Integrated Service Ecosystem unifies digital marketing, custom software development, eCommerce solutions, EduTech platforms, Academic ERP, and talent services into one scalable growth framework. We help businesses improve efficiency, accelerate digital transformation, strengthen online presence, and drive measurable results through end-to-end technology solutions. Build, scale, and grow with future-ready systems designed for long-term success."
          titleClassName="text-white"
          descriptionClassName="text-lg text-white/60"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "Custom Software",
            "Digital Edge",
            "eCommerce",
            "EduTech",
            "Talent Acquisition",
          ].map((item) => (
            <span
              key={item}
              className="cursor-default rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
            >
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
