import Image from "next/image";

import { Container } from "@/components/ui/Container";

const offerings = [
  {
    title: "SaaS Product Development",
    description:
      "Design and build scalable Software-as-a-Service applications tailored to your business model.",
    image: "/images/saas/saas-product.png",
    txtColor: "text-[#4bebaa]",
    numColor: "bg-[#4bebaa]/40",
    bgColor: "bg-[#F7FDFE]",
  },
  {
    title: "Custom Software Product Development",
    description:
      "Develop unique software products around your specific business requirements and market needs.",
    image: "/images/saas/custom-software.png",
    txtColor: "text-[#2573e8]",
    numColor: "bg-[#2573e8]/40",
    bgColor: "bg-[#F7FBFE]",
  },
  {
    title: "MVP Development",
    description:
      "Launch focused MVPs with core features to validate ideas, gather feedback, and reduce development risks.",
    image: "/images/saas/mvp-development.png",
    txtColor: "text-[#e88025]",
    numColor: "bg-[#e88025]/40",
    bgColor: "bg-[#FAFDFA]",
  },
  {
    title: "Multi-Tenant SaaS Solutions",
    description:
      "Build SaaS platforms that serve multiple customers from a single application with scalable architecture.",
    image: "/images/saas/multi-tenant.png",
    txtColor: "text-[#8725e8]",
    numColor: "bg-[#8725e8]/40",
    bgColor: "bg-[#F9FAFE]",
  },
  {
    title: "Cloud-Native Application Development",
    description:
      "Create applications optimized for cloud environments with modern architectures and technologies.",
    image: "/images/saas/cloud-native.png",
    txtColor: "text-[#179606]",
    numColor: "bg-[#179606]/40",
    bgColor: "bg-[#F7FEFC]",
  },
  {
    title: "Web & Mobile Product Development",
    description:
      "Develop feature-rich web and mobile products that provide consistent experiences across devices.",
    image: "/images/saas/web-and-mobile.png",
    txtColor: "text-[#cc1247]",
    numColor: "bg-[#cc1247]/40",
    bgColor: "bg-[#FDFBFC]",
  },
  {
    title: "API & Microservices Development",
    description:
      "Design robust APIs and microservices that improve integration, flexibility, and future scalability.",
    image: "/images/saas/api-and-microservices.png",
    txtColor: "text-[#bdb111]",
    numColor: "bg-[#bdb111]/40",
    bgColor: "bg-[#F7FEFE]",
  },
  {
    title: "Product Modernization & Re-engineering",
    description:
      "Upgrade legacy software with modern technologies, architectures, security, and user experiences.",
    image: "/images/saas/product-modernization.png",
    txtColor: "text-[#3ED6CD]",
    numColor: "bg-[#3ED6CD]/40",
    bgColor: "bg-[#F7FBFE]",
  },
  {
    title: "Subscription & Billing Integration",
    description:
      "Implement subscription management, recurring billing, and secure payment processing systems.",
    image: "/images/saas/subscription-and-billing.png",
    txtColor: "text-[#a80a7e]",
    numColor: "bg-[#a80a7e]/40",
    bgColor: "bg-[#FEFDF9]",
  },
  {
    title: "Product Maintenance & Support",
    description:
      "Keep your software secure, stable, and up to date through monitoring, fixes, updates, and enhancements.",
    image: "/images/saas/product-mentainance.png",
    txtColor: "text-[#0a22a8]",
    numColor: "bg-[#0a22a8]/40",
    bgColor: "bg-[#FAF9FF]",
  },
];

export function SaaSOfferings() {
  return (
    <section className="border-b border-gray-100 bg-white py-8 sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">What We Offer</p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            SaaS & Software Product Development
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            From idea to launch and beyond, we build scalable, secure and
            high-performance software products that drive real business growth.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {offerings.map((item, index) => (
            <article
              key={item.title}
              className={`relative flex h-full  flex-col overflow-hidden rounded-2xl border border-gray-100 shadow-lg shadow-gray-300 ${item.bgColor}`}
            >
              <div className="flex flex-1 flex-col p-4">
                <div
                  className={`flex size-8 justify-center items-center shrink-0 rounded-full ${item.numColor} text-black`}
                >
                  <span className="font-mono text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-1">
                  <h3 className="font-heading text-lg font-semibold leading-7 text-gray-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="relative mt-auto h-40 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain object-center p-0"
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
