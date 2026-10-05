import { ContentOverview } from "@/components/ui/ContentOverview";

export function IndustriesIntroduction() {
  return (
    <ContentOverview
      badge="Technology That Creates Impact"
      title="Intelligent software built around your business."
      image={{
        src: "/images/about-ind.png",
        alt: "Teknovia technology solutions",
        className: "h-auto w-full object-contain",
      }}
      backgroundClass="bg-gray-50/50"
      gridClassName="lg:grid-cols-[1fr_1.05fr] lg:gap-12"
      paragraphs={[
        <>
          At{" "}
          <strong className="font-semibold text-slate-900">
            TEKNOVIA Technologies Private Limited
          </strong>
          , we design and develop intelligent software solutions tailored
          to unique business requirements. From{" "}
          <strong className="font-semibold text-slate-900">
            enterprise-grade ERP systems, CRM and EduTech platforms to
            IoT-enabled applications and ready-to-deploy products
          </strong>
          , we help organizations streamline operations, automate
          processes, improve efficiency, and accelerate digital growth.
        </>,
        <>
          Our team combines expertise in{" "}
          <strong className="font-semibold text-slate-900">
            software engineering, business process analysis, cloud
            technologies, data management, UI/UX design, and system
            integration
          </strong>{" "}
          to build scalable and future-ready solutions. We focus on
          understanding business challenges first, then delivering
          technology that creates measurable impact.
        </>,
        <>
          Whether developing a customized ERP, an educational platform,
          an automation system, or an industry-specific application, we
          focus on technology that is practical, scalable, and aligned
          with your business objectives.
        </>,
      ]}
    />
  );
}