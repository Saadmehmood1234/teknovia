import {
  ArrowRight,
  Cloud,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TopBadge } from "@/components/ui/Top-Badge";
import Image from "next/image";

const highlights = [
  {
    icon: Cloud,
    label: "Cloud Native",
  },
  {
    icon: ShieldCheck,
    label: "Secure by Design",
  },
  {
    icon: Layers3,
    label: "Built to Scale",
  },
];

export function SaaSProductHero() {
  return (
    <section
      id="saas-product-home"
      className="relative isolate overflow-hidden bg-[#040706] pt-8 pb-8 text-white sm:pb-16"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/saas-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[#040506]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,150,137,0.14),transparent_55%)]" />
      <Container className="relative z-10">
        <Breadcrumb
          items={[
            {
              label: "Software Services",
              href: "/software-services",
            },
            {
              label: "SaaS & Software Products",
            },
          ]}
        />

        <div className="pt-8">
          <div className="w-full">
            <TopBadge data="Scalable • Secure • Product-Focused" />

            <h1 className="w-full text-4xl font-extrabold leading-[1.04] tracking-[-0.04em] sm:text-5xl">
              Build, Launch &{" "}
              <span className="text-primary">Scale SaaS Products</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:leading-8">
              Transform your ideas into secure, cloud-native, and market-ready
              software products with TEKNOVIA. From MVP development to
              enterprise-grade SaaS platforms, we build solutions designed for
              scalability, performance, and long-term success.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <Icon className="size-5 text-primary" />

                    <span className="text-sm font-semibold text-white">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-[0_8px_25px_rgba(0,150,137,0.3)]"
              >
                Let&apos;s Build Your SaaS Product
                <ArrowRight size={17} />
              </Link>

              <Link
                href="#saas-products"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-primary hover:bg-white/5"
              >
                Explore Our Products
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
