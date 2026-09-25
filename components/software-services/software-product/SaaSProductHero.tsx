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

{/* <div className="relative mx-auto w-full max-w-xl">
  <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />

  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1211] p-2 shadow-[0_30px_100px_rgba(0,150,137,0.18)]">
    <div className="flex h-11 items-center gap-2 border-b border-white/10 px-4">
      <span className="size-2.5 rounded-full bg-white/15" />
      <span className="size-2.5 rounded-full bg-white/15" />
      <span className="size-2.5 rounded-full bg-white/15" />

      <div className="ml-4 h-6 flex-1 rounded-md bg-white/5" />
    </div>

    <div className="grid min-h-100 grid-cols-[70px_1fr]">
      <div className="border-r border-white/10 p-3">
        <div className="mx-auto mb-7 flex size-9 items-center justify-center rounded-xl bg-primary">
          <Sparkles className="size-4 text-white" />
        </div>

        <div className="space-y-3">
          <div className="h-8 rounded-lg bg-primary/20" />
          <div className="h-8 rounded-lg bg-white/5" />
          <div className="h-8 rounded-lg bg-white/5" />
          <div className="h-8 rounded-lg bg-white/5" />
        </div>
      </div>
      <div className="p-5 sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-3 w-24 rounded bg-white/10" />
            <div className="mt-2 h-6 w-40 rounded bg-white/15" />
          </div>

          <div className="size-9 rounded-full bg-primary/20" />
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {["Revenue", "Customers", "Growth"].map((item, index) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/3 p-4"
            >
              <p className="text-[10px] uppercase tracking-wider text-white/40">
                {item}
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                {index === 0 ? "$84.2K" : index === 1 ? "2,481" : "+28.4%"}
              </p>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{
                    width: index === 0 ? "78%" : index === 1 ? "64%" : "88%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-white/10 bg-white/3 p-5">
          <div className="flex items-center justify-between">
            <div className="h-3 w-28 rounded bg-white/10" />
            <div className="h-3 w-16 rounded bg-primary/30" />
          </div>

          <div className="mt-7 flex h-28 items-end gap-2">
            {[35, 52, 42, 68, 57, 76, 64, 91, 74, 96].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t bg-primary/50"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="absolute -left-3 top-16 rounded-2xl border border-primary/20 bg-[#071211]/95 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-8">
    <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
      ARCHITECTURE
    </p>

    <p className="mt-1 text-xs font-semibold text-white">Multi-Tenant SaaS</p>
  </div>

  <div className="absolute -right-3 bottom-14 rounded-2xl border border-white/10 bg-[#071211]/95 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-8">
    <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
      PERFORMANCE
    </p>

    <p className="mt-1 text-xs font-semibold text-white">Ready to Scale</p>
  </div>
</div>; */}
