import FAQ from "@/components/FAQ";
import { Container } from "@/components/ui/Container";
import { webAppfaqs, webAppservices } from "@/lib/data/software-services";
import { WebDevHero } from "@/components/software-services/web-application-development/WebDevHero";
import Image from "next/image";
import DevelopmentProcess from "@/components/software-services/web-application-development/DevelopmentProcess";
import WebApplications from "@/components/software-services/web-application-development/WebApplications";
import CoreCapabilities from "@/components/software-services/web-application-development/CoreCapabilities";
import TechnologyStack from "@/components/software-services/web-application-development/TechnologyStack";

export default function WebApplicationDevelopmentPage() {
  return (
    <main>
      <WebDevHero />
      <section className="border-b border-gray-100 bg-gray-50/50 py-8 sm:py-16">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            <div className="relative flex flex-col gap-4">
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/web-dev-about.png"
                  alt="Teknovia technology solutions"
                  width={1000}
                  height={750}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative lg:block hidden w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/web-background.png"
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
                Web Application Development Services
              </p>

              <h2 className="mt-3 text-2xl  sm:text-3xl font-black leading-tight tracking-tight text-slate-950">
                Building Digital Experiences That Work for Your Business
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-slate-600">
                <p>
                  Web applications have become essential for businesses looking
                  to improve efficiency, automate processes, enhance customer
                  experiences, and support long-term growth.
                </p>

                <p>
                  Unlike traditional websites, modern web applications provide
                  interactive functionality, real-time data processing, workflow
                  automation, secure user access, and seamless integration with
                  business systems.
                </p>

                <p>
                  At TEKNOVIA, we build custom web applications around your
                  business requirements. Whether you need a customer portal,
                  enterprise platform, SaaS product, eCommerce application,
                  booking system, learning management platform, or business
                  automation solution, we create secure, scalable, and
                  high-performance applications built for the modern digital
                  landscape.
                </p>
                <p>
                  From strategy and UI/UX design to development, integration,
                  deployment, and ongoing support, our end-to-end approach helps
                  businesses turn ideas into reliable digital products.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="web-dev-services" className=" py-8 sm:py-16">
        <Container>
          <div className="flex flex-col w-full justify-between items-center text-center gap-6">
            <div className="max-w-2xl">
              <p className="font-mono text-lg font-extrabold uppercase tracking-[0.2em] text-primary">
                Our Services
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Web Application Development Services
              </h2>
              <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
                From custom applications to enterprise platforms, we provide
                complete development services tailored to your business needs.
              </p>
            </div>
          </div>

          <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {webAppservices.map((strength) => {
              return (
                <div
                  key={strength.title}
                  className="flex h-full min-h-65 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-[#FAFAFA] p-6 text-center"
                >
                  <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-primary-100 bg-primary/10 p-3">
                    <Image
                      src={strength.image}
                      fill
                      alt={strength.title}
                      className="object-contain p-3"
                    />
                  </div>

                  <div className="mt-5 flex flex-1 flex-col items-center justify-center">
                    <h3 className="text-md font-extrabold leading-6 text-slate-950">
                      {strength.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {strength.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <DevelopmentProcess />
      <CoreCapabilities />
      <WebApplications />

      <TechnologyStack />

      <FAQ
        title="Web Application Development FAQs"
        description="Common questions about custom web application development, technologies, integrations, scalability, and support."
        faqs={webAppfaqs}
      />
    </main>
  );
}
