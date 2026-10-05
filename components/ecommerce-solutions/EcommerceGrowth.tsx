import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { ecommerceGrowthPoints } from "@/lib/data/ecommerce-solutions-data";

const HERO_IMAGE = "/images/ecommerce-growth.png";

const accents = [
  { circle: "bg-rose-100 text-rose-600", bar: "bg-rose-500" },
  { circle: "bg-blue-100 text-blue-700", bar: "bg-blue-600" },
  { circle: "bg-orange-100 text-orange-600", bar: "bg-orange-500" },
  { circle: "bg-purple-100 text-purple-700", bar: "bg-purple-600" },
  { circle: "bg-emerald-100 text-emerald-700", bar: "bg-emerald-500" },
  { circle: "bg-sky-100 text-sky-700", bar: "bg-sky-500" },
];

export function EcommerceGrowth() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16">
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <TopBadge data="Built for Growth" />

            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.05] tracking-tight text-gray-950 sm:4xl">
              Built for{" "}
              <span className="bg-primary bg-clip-text text-transparent">
                Growth
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Your eCommerce platform should grow as your business grows.
              TEKNOVIA builds flexible and scalable platforms that adapt to
              changing products, customers, sales channels and business needs.
              With a secure, mobile-ready and integration-friendly architecture,
              your platform is designed to support growth today and tomorrow.
            </p>
          </div>
          <div className="relative mx-auto lg:aspect-7/3 aspect-4/3 w-full max-w-xl">
            <Image
              src={HERO_IMAGE}
              alt="Scalable eCommerce platform across devices"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-contain"
            />
          </div>
        </div>

        <ul className="mt-8 sm:mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 ">
          {ecommerceGrowthPoints.map((item, index) => {
            const Icon = item.icon;
            const accent = accents[index % accents.length];

            return (
              <li
                key={item.title}
                className="flex flex-col items-center rounded-3xl border border-gray-200/80 bg-white px-5 pb-8 pt-7 text-center shadow-[0_8px_28px_rgba(15,23,42,0.05)] transition-shadow hover:shadow-[0_14px_40px_rgba(15,23,42,0.10)]"
              >
                <div
                  className={`flex size-20 items-center justify-center rounded-full ${accent.circle}`}
                >
                  <Icon strokeWidth={1.6} className="size-9" />
                </div>

                <h3 className="mt-5 font-heading text-lg font-black tracking-tight text-gray-950">
                  {item.title}
                </h3>

                <span
                  aria-hidden
                  className={`mt-3 h-0.75 w-9 rounded-full ${accent.bar}`}
                />

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
