import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

const points = [
  "Customer-facing mobile experiences",
  "Enterprise mobility solutions",
  "eCommerce and marketplace applications",
  "On-demand and booking platforms",
  "Education and healthcare applications",
  "Scalable backend and API integrations",
];

export function MobileAppOverview() {
  return (
    <section className="border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-2 shadow-sm">
              <Image
                src="/images/mobile-app-overview.png"
                alt="Mobile application development"
                width={1000}
                height={750}
                className="h-auto w-full rounded-2xl object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -bottom-5 right-5 rounded-2xl border border-primary/20 bg-white px-5 py-4 shadow-xl sm:right-8">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                MOBILE FIRST
              </p>
              <p className="mt-1 text-sm font-bold text-gray-950">
                Built around real users
              </p>
            </div>
          </div>

          <div>
            <p className="font-mono text-sm font-extrabold uppercase tracking-[0.18em] text-primary sm:text-base">
              MOBILE APP DEVELOPMENT
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Mobile Experiences Built Around Your Business
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                Mobile devices have become a primary touchpoint between
                businesses and customers. A well-designed mobile application
                can improve customer engagement, strengthen brand visibility,
                enhance user experience, and create new digital revenue
                opportunities.
              </p>

              <p>
                At TEKNOVIA, we build custom mobile applications tailored to
                your business objectives. Whether you need a customer-facing
                app, enterprise mobility solution, eCommerce application,
                educational platform, healthcare app, or on-demand service
                platform, we design and develop solutions around your users and
                workflows.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}