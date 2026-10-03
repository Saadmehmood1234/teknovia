import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { services } from "@/lib/data/software-services/mobile-application-development-data";

export function MobileAppServices() {
  return (
    <section id="mobile-app-services" className="py-8 sm:py-16">
      <Container>
        <div className="flex w-full flex-col items-center justify-between gap-6 text-center">
          <div className="max-w-2xl">
            <TopBadge data="Our&nbsp;Services" centerItem={true} />

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Complete Mobile App Development Services
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              From product strategy and UI/UX design to development, deployment,
              and long-term support, we provide everything required to build and
              scale your mobile product.
            </p>
          </div>
        </div>

        <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full min-h-65 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-[#FAFAFA] p-6 text-center"
            >
              <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary-100 bg-primary/10 p-3">
                <Image
                  src={service.image}
                  fill
                  alt={service.title}
                  className="object-contain p-0"
                />
              </div>

              <div className="flex flex-1 flex-col items-center justify-center p-6">
                <h3 className="text-md font-extrabold leading-6 text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
