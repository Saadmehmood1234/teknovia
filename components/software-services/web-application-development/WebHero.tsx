"use client";

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import {
  ArrowRight,
  Layers3,
  ShieldCheck,
  Gauge,
  Workflow,
} from "lucide-react";
import { TopBadge } from "@/components/ui/Top-Badge";

const features = [
  {
    id: 1,
    icon: Layers3,
    text: "Scalable Architecture",
  },
  {
    id: 2,
    icon: ShieldCheck,
    text: "Secure & Reliable",
  },
  {
    id: 3,
    icon: Gauge,
    text: "High Performance",
  },
  {
    id: 4,
    icon: Workflow,
    text: "Seamless Experience",
  },
];
export function WebHero() {
  return (
    <section id="home" className="relative isolate overflow-hidden py-8">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/web-background.png"
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
            { label: "Web Application Development" },
          ]}
        />
        <div className="mt-8">
          <TopBadge data="Scalable&nbsp;Secure&nbsp;Future-Ready" />
          <h1 className="w-full text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl">
            Powerful Web Applications That Drive Business Growth
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            We design and develop custom web applications that streamline
            operations, enhance user experiences, and accelerate digital
            transformation for growing businesses.
          </p>
          <div className="flex max-w-2xl max-sm:flex-wrap sm:gap-0 gap-8 mt-6">
            {features.map((feature) => (
              <div key={feature.id} className="flex gap-3 justify-between mb-2 items-center">
                <feature.icon className="text-primary h-9 w-9"/>
                <p className="text-white text-sm">{feature.text}</p>
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
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-primary"
            >
              Explore Services
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
