"use client";

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import {
  ArrowRight,
} from "lucide-react";
import { TopBadge } from "@/components/ui/Top-Badge";
import { webAppFeatures } from "@/lib/data/software-services";


export function WebDevHero() {
  return (
    <section id="web-dev-hero" className="relative pt-8 border-b border-gray-200 pb-12 isolate overflow-hidden bg-[#EFF3F6] gap-10">
      <Container>
        <Breadcrumb
          items={[
            {
              label: "Software Services",
              href: "/software-services",
            },
            { label: "Web Application Development" },
          ]}
        />
        <div className="flex flex-col gap-8 mt-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="w-full">
            <TopBadge data="Scalable&nbsp;Secure&nbsp;Future-Ready" />
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.2] tracking-tight text-black sm:text-5xl">
              Powerful Web Applications That Drive Business Growth
            </h1>

            <p className="mt-6 max-w-2xl text-md leading-7 text-gray-600 sm:leading-6">
              We design and develop custom web applications that streamline
              operations, enhance user experiences, and accelerate digital
              transformation for growing businesses.
            </p>

            <div className="flex max-w-2xl max-sm:flex-wrap sm:gap-0 gap-8 mt-6">
              {webAppFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="flex gap-3 justify-between mb-2 items-center"
                >
                  <feature.icon className="text-primary h-9 w-9" />
                  <p className="text-gray-600 text-sm">{feature.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-[0_8px_20px_rgba(0,150,137,0.28)]"
              >
                Start Your Project
                <ArrowRight size={17} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-black/25 px-6 py-3.5 text-sm font-semibold text-primary transition hover:bg-white/10 hover:border-primary"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative w-full bg-[#EFF3F6] pb-8 sm:pb-10">
            <div className="relative aspect-3/2">
              <div
                className="absolute -inset-3 rounded-4xl bg-[#EFF3F6] blur-xl"
                aria-hidden="true"
              />
              <div className="relative h-full w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/web-dev-background.png"
                  alt="Teknovia technology and business solutions"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl"
                  style={{
                    boxShadow: "inset 0 0 45px 25px #EFF3F6",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
