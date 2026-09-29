import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Breadcrumb } from "../ui/breadcrumb";
import { Container } from "../ui/Container";
import { TopBadge } from "../ui/Top-Badge";
import Image from "next/image";

export function ServicesHero() {
  return (
    <section
      className="relative py-8 isolate overflow-hidden border-b border-white/10 bg-[#040506]">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/service-bg.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
  
        <div className="absolute inset-0 bg-[#040506]/70" />
  
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,150,137,0.16),transparent_55%)]" />
  
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-20" />
  
      <Container>
        <Breadcrumb items={[{ label: "Services" }]} />

        <div className="relative flex items-center py-8">
          <div className="max-w-3xl">
            <TopBadge data="OUR SERVICES" />

            <h1 className="mt-5 max-w-4xl font-heading text-5xl font-semibold leading-[1.08] tracking-tight text-white">
              Digital Solutions That Move <br/><span className="text-primary">Your Business Forward</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              We design, develop and optimize digital solutions that help
              businesses operate better, reach more customers and grow with
              confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-[0_8px_20px_rgba(0,150,137,0.28)]"
              >
                Start a Project
                <ArrowRight size={17} />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-primary"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
