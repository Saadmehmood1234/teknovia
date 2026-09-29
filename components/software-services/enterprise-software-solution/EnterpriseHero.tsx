"use client";

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";
import { TopBadge } from "@/components/ui/Top-Badge";
import Link from "next/link";

export function EnterpriseHero() {
  return (
    <section id="enterprise-home" className="relative isolate overflow-hidden py-8">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/enterprise-software-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[#040506]/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,150,137,0.14),transparent_55%)]" />
      <Container className="relative z-10">
        <Breadcrumb
          items={[
            {
              label: "Software Services",
              href: "/software-services",
            },
            { label: "Enterprise Software Development" },
          ]}
        />
        <div className="mt-8">
          <TopBadge data="Intelligent&nbsp;Integrated&nbsp;Enterprise-Ready" />
          <h1 className="w-full text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl">
            Enterprise Software Development Solutions
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            We design and develop scalable, secure, and intelligent enterprise
            applications that automate processes, improve productivity, and
            support long-term business growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-[0_8px_20px_rgba(0,150,137,0.28)]"
            >
              Get a Free Consultation
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-primary"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
