import { ContentOverview } from "@/components/ui/ContentOverview";

export function AboutTeknovia() {
  return (
    <ContentOverview
      id="about"
      badge="About Teknovia"
      title="Transforming ideas into scalable digital solutions that drive real business growth."
      image={{
        src: "/images/corporate/corporate-text.webp",
        alt: "Teknovia technology solutions",
        className: "h-auto w-full object-contain",
      }}
      backgroundClass="bg-white"
      paragraphs={[
        <>
          Teknovia Technologies Private Limited is a technology-driven
          company delivering custom software development, digital
          marketing, EduTech solutions, business automation, and talent
          services. We help startups, SMEs, educational institutions,
          and enterprises improve efficiency, strengthen digital
          presence, and accelerate business growth through innovative
          technology solutions.
        </>,
        <>
          Our expertise spans software development, ERP systems, web and
          mobile applications, marketplace platforms, and digital
          transformation services designed to solve real business
          challenges. By combining technology, automation, and strategic
          execution, we deliver scalable, secure, and results-driven
          solutions that help organizations innovate, grow smarter, and
          scale with confidence.
        </>,
      ]}
    />
  );
}