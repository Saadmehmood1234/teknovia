import { IndustriesGrid } from "@/components/industries/IndustriesGrid";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { IndustriesOverview } from "@/components/industries/IndustriesOverview";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesHero />

      <section className="border-b border-gray-100 bg-gray-50/50 py-8 sm:py-16">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            <div className="relative pb-10 lg:pb-12">
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/about-ind.png"
                  alt="Teknovia technology solutions"
                  width={1000}
                  height={750}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <p className="text-md sm:text-lg font-extrabold uppercase tracking-wider text-primary">
                Technology That Creates Impact
              </p>

              <h2 className="mt-3 text-2xl  sm:text-3xl font-black leading-tight tracking-tight text-slate-950">
                Intelligent software built around your business.
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-slate-600">
                <p>
                  At{" "}
                  <strong className="font-semibold text-slate-900">
                    TEKNOVIA Technologies Private Limited
                  </strong>
                  , we design and develop intelligent software solutions
                  tailored to unique business requirements. From{" "}
                  <strong className="font-semibold text-slate-900">
                    enterprise-grade ERP systems, CRM and EduTech platforms to
                    IoT-enabled applications and ready-to-deploy products
                  </strong>
                  , we help organizations streamline operations, automate
                  processes, improve efficiency, and accelerate digital growth.
                </p>

                <p>
                  Our team combines expertise in{" "}
                  <strong className="font-semibold text-slate-900">
                    software engineering, business process analysis, cloud
                    technologies, data management, UI/UX design, and system
                    integration
                  </strong>{" "}
                  to build scalable and future-ready solutions. We focus on
                  understanding business challenges first, then delivering
                  technology that creates measurable impact.
                </p>

                <p>
                  Whether developing a customized ERP, an educational platform,
                  an automation system, or an industry-specific application, we
                  focus on technology that is practical, scalable, and aligned
                  with your business objectives.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <IndustriesGrid />
      <IndustriesOverview />
    </main>
  );
}
