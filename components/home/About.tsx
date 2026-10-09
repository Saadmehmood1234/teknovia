import { ContentOverview } from "@/components/ui/ContentOverview";
import { Fragment } from "react";
export function About() {
  return (
    <ContentOverview
      id="about"
      badge="About TEKNOVIA"
      title="Technology-driven growth for modern businesses"
      image={{
        src: "/images/home/teknovia-about.webp",
        alt: "Modern workspace with professionals planning strategy",
        width: 900,
        height: 700,
        preload: true,
        className: "h-auto w-full object-contain",
      }}
      backgroundClass="bg-white"
      gridClassName="lg:grid-cols-2"
      paragraphs={[
        <Fragment key="about-intro">
          TEKNOVIA Technologies Private Limited is a technology-driven company
          delivering digital marketing, software development, eCommerce,
          EduTech, and talent acquisition solutions designed to help businesses
          scale efficiently.
        </Fragment>,
        <Fragment key="about-approach">
          We combine strategy, technology, and execution to build secure
          systems, improve operations, increase visibility, and drive measurable
          business growth.
        </Fragment>,
        <Fragment key="about-solutions">
          Integrated digital marketing, custom software, EduTech, and talent
          solutions designed to help businesses scale efficiently.
        </Fragment>,
      ]}
    >
      <div className="mt-7">
        <p className="border-l-2 border-primary-300 pl-4 font-heading text-[14px] text-primary-700">
          Our approach focuses on creating practical, scalable, and
          result-oriented solutions that generate long-term impact for
          organizations across industries.
        </p>
      </div>
    </ContentOverview>
  );
}
