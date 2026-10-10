import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/data/software-services/mobile-application-development-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MobileAppServices() {
  return (
    <section id="mobile-app-services" className="py-8 sm:py-16">
      <Container>
        <SectionHeading
          variant="centered"
          badge="Our&nbsp;Services"
          title="Complete Mobile App Development Services."
          description="From product strategy and UI/UX design to development, deployment, and long-term support, we provide everything required to build and scale your mobile product."
        />

        <div className="mt-8 sm:mt-16 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
