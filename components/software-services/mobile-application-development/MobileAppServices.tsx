import Image from "next/image";
import { Container } from "@/components/ui/Container";

const services = [
  {
    title: "Android App Development",
    description:
      "Custom Android applications designed for performance, scalability, and compatibility across Android devices.",
    image: "/images/services/android.png",
  },
  {
    title: "iOS App Development",
    description:
      "Premium iPhone and iPad applications built with security, speed, and seamless user experience.",
    image: "/images/services/ios.png",
  },
  {
    title: "Cross-Platform App Development",
    description:
      "Develop once and deploy across Android and iOS using modern frameworks to reduce costs and accelerate time-to-market.",
    image: "/images/services/cross-platform.png",
  },
  {
    title: "Enterprise Mobile Applications",
    description:
      "Internal business applications that improve productivity, communication, and operational efficiency.",
    image: "/images/services/enterprise-mobile.png",
  },
  {
    title: "eCommerce Mobile Applications",
    description:
      "Feature-rich shopping applications with secure payments, product management, and customer engagement tools.",
    image: "/images/services/ecommerce-mobiles.png",
  },
  {
    title: "Progressive Web Apps",
    description:
      "Fast, installable web applications that deliver app-like experiences across devices.",
    image: "/images/services/pwa.png",
  },
  {
    title: "Mobile App UI/UX Design",
    description:
      "User-centered design focused on engagement, usability, accessibility, and conversion optimization.",
    image: "/images/services/mobile-uiux.png",
  },
  {
    title: "App Maintenance & Support",
    description:
      "Ongoing updates, performance optimization, security enhancements, and feature upgrades.",
    image: "/images/services/mobile-maintenances.png",
  },
];

export function MobileAppServices() {
  return (
    <section id="mobile-app-services" className="py-8 sm:py-16">
      <Container>
        <div className="flex w-full flex-col items-center justify-between gap-6 text-center">
          <div className="max-w-2xl">
            <p className="font-mono text-lg font-extrabold uppercase tracking-[0.2em] text-primary">
              Our Services
            </p>

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
              className="group flex h-full min-h-65 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-[#FAFAFA] text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,150,137,0.08)]"
            >
              <div className="relative aspect-5/3 w-full overflow-hidden bg-primary/10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
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
