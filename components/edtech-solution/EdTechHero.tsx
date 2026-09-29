import {
  ArrowRight,
  BarChart3,
  GraduationCap,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TopBadge } from "@/components/ui/Top-Badge";

export function EdTechHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#040706] py-8 text-white sm:pb-16">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/edtech-solution/edtech-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-[#040506]/50" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,150,137,0.16),transparent_55%)]" />

      <div className="hero-grid pointer-events-none absolute inset-0 opacity-20" />

      <Container className="relative z-10">
        <Breadcrumb
          items={[
            {
              label: "Industries",
              href: "/industries",
            },
            {
              label: "EduTech Solutions",
            },
          ]}
          textColor="text-gray-400"
        />

        <div className="pt-8">
          <TopBadge data="Edutech By Teknovia" />

          <h1 className="max-w-xl font-heading text-4xl font-extrabold leading-[1.03] tracking-[-0.045em] sm:text-5xl">
            Powering the Future of{" "}
            <span className="text-primary">Digital Learning</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:leading-8">
            Smart solutions to create engaging, scalable and technology-driven learning experiences
          </p>

          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4">
            <div className="flex items-center gap-2.5">
              <GraduationCap className="size-5 text-primary" />
              <span className="text-sm font-semibold text-white/85">
                Smart Learning
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <BarChart3 className="size-5 text-primary" />
              <span className="text-sm font-semibold text-white/85">
                Data-Driven Insights
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Smartphone className="size-5 text-primary" />
              <span className="text-sm font-semibold text-white/85">
                Accessible Anywhere
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="size-5 text-primary" />
              <span className="text-sm font-semibold text-white/85">
                Secure & Reliable
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-[0_10px_30px_rgba(0,150,137,0.3)]"
            >
             Book a Free Demo
              <ArrowRight size={17} />
            </Link>

            <Link
              href="#edtech-industries"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-primary hover:bg-white/5"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}