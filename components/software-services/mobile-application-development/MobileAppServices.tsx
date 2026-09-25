import Image from "next/image";
import { Container } from "@/components/ui/Container";

const services = [
  {
    title: "Android App Development",
    description:
      "Custom Android applications designed for performance, scalability, and compatibility across Android devices.",
    image: "/images/services/android-app.png",
  },
  {
    title: "iOS App Development",
    description:
      "Premium iPhone and iPad applications built with security, speed, and seamless user experience.",
    image: "/images/services/ios-app.png",
  },
  {
    title: "Cross-Platform App Development",
    description:
      "Develop once and deploy across Android and iOS using modern frameworks to reduce costs and accelerate time-to-market.",
    image: "/images/services/cross-platform-app.png",
  },
  {
    title: "Enterprise Mobile Applications",
    description:
      "Internal business applications that improve productivity, communication, and operational efficiency.",
    image: "/images/services/enterprise-mobile-app.png",
  },
  {
    title: "eCommerce Mobile Applications",
    description:
      "Feature-rich shopping applications with secure payments, product management, and customer engagement tools.",
    image: "/images/services/ecommerce-mobiles-app.png",
  },
  {
    title: "Progressive Web Apps",
    description:
      "Fast, installable web applications that deliver app-like experiences across devices.",
    image: "/images/services/pwa-app.png",
  },
  {
    title: "Mobile App UI/UX Design",
    description:
      "User-centered design focused on engagement, usability, accessibility, and conversion optimization.",
    image: "/images/services/mobile-uiux-app.png",
  },
  {
    title: "App Maintenance & Support",
    description:
      "Ongoing updates, performance optimization, security enhancements, and feature upgrades.",
    image: "/images/services/mobile-maintenances-app.png",
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
