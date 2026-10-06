import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { ecommerceGrowthPoints } from "@/lib/data/ecommerce-solutions-data";
import { Card2 } from "../ui/Card2";

const HERO_IMAGE = "/images/ecommerce-growth.png";

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

        <ul className="mt-8 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {ecommerceGrowthPoints.map((item) => (
            <Card2
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              circle={item.circle}
              bar={item.bar}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
