import FAQ from "@/components/FAQ";
import { EnterpriseHero } from "@/components/software-services/enterprise-software-solution/EnterpriseHero";
import { EnterpriseSolutions } from "@/components/software-services/enterprise-software-solution/EnterpriseSolutions";
import SixDModel from "@/components/software-services/enterprise-software-solution/SixDModel";
import ThreePModel from "@/components/software-services/enterprise-software-solution/ThreePModel";
import { Container } from "@/components/ui/Container";
import { enterpriseFaqs } from "@/lib/data/software-solutions";
import Image from "next/image";

export default function IndustriesPage() {
  return (
    <main>
      <EnterpriseHero />

      <section className="border-b border-gray-100 bg-gray-50/50 py-8 sm:py-16">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            <div className="relative pb-10 lg:pb-12">
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/about-enterprise-software.png"
                  alt="Teknovia technology solutions"
                  width={1000}
                  height={750}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="relative w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about-enterprise1.png"
                    alt="Teknovia technology solutions"
                    width={1000}
                    height={750}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="relative w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about-enterprise2.png"
                    alt="Teknovia technology solutions"
                    width={1000}
                    height={750}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-md sm:text-lg font-extrabold uppercase tracking-wider text-primary">
                Enterprise Software
              </p>

              <h2 className="mt-3 text-2xl  sm:text-3xl font-black leading-tight tracking-tight text-slate-950">
                Enterprise Software Development Solutions
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-slate-600">
                <p>
                  In today&apos;s fast-paced digital landscape, businesses need
                  powerful software solutions to streamline operations, improve
                  productivity, and drive sustainable growth. Enterprise
                  software development focuses on creating scalable, secure, and
                  customized applications that address complex business
                  challenges and support organization-wide processes.
                </p>

                <p>
                  At TEKNOVIA, we specialize in developing enterprise software
                  solutions tailored to your unique business requirements.
                  Whether you need an Enterprise Resource Planning (ERP) system,
                  Customer Relationship Management (CRM) platform, Human
                  Resource Management System (HRMS), Supply Chain Management
                  solution, or a fully custom business application, our team
                  delivers technology that enhances efficiency, collaboration,
                  and decision-making.
                </p>

                <p>
                  Our enterprise applications are designed with scalability,
                  security, and performance at their core, enabling
                  organizations to manage data, automate workflows, integrate
                  business processes, and gain real-time insights across
                  departments. By leveraging modern technologies, cloud
                  platforms, and industry best practices, we help businesses
                  reduce operational costs, improve customer experiences, and
                  accelerate digital transformation.
                </p>
                <p>
                  From startups and growing enterprises to large organizations,
                  TEKNOVIA develops future-ready software solutions that adapt
                  to evolving business needs while ensuring reliability,
                  compliance, and long-term success.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <ThreePModel />
      <SixDModel />
      <EnterpriseSolutions/>
      <FAQ
        title="Frequently Asked Questions"
        description="Common questions about enterprise software development"
        faqs={enterpriseFaqs}
      />
    </main>
  );
}
