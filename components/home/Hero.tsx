"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { TeknoviaBackground } from "@/components/home/TeknoviaBackground";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(0,150,137,0.22),transparent_35%),radial-gradient(circle_at_20%_75%,rgba(0,150,137,0.10),transparent_32%)]" />

      <TeknoviaBackground />

      <Container className="relative z-10">
        <div className="grid min-h-142 items-center gap-10 py-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12 lg:py-10">
          <div>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
              Smart Solutions.
              <span className="block">Stronger</span>
              <span className="block">Businesses.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              Digital Growth, Software Solutions, and Talent Systems to help
              your business scale efficiently.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-[0_8px_20px_rgba(0,150,137,0.28)]"
              >
                Explore Solutions
                <ArrowRight size={17} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-primary"
              >
                Get Free Consultation
                <Play size={15} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Software Dev",
                "SEO",
                "SMO",
                "Web Design",
                "EduTech",
                "ERP / CRM",
                "Talent",
              ].map((item) => (
                <span
                  key={item}
                  className="cursor-default rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            {/* Glow */}
            <div className="absolute -inset-5 rounded-4xl bg-primary/10 blur-3xl" />

            {/* Image + floating cards */}
            <div className="relative overflow-visible rounded-4xl shadow-2xl">
              {/* Image container */}
              <div className="relative aspect-4/3 overflow-hidden rounded-4xl">
                <Image
                  src="/images/teknovia-home.jpg"
                  alt="Technology team collaborating in a modern office"
                  fill
                  priority
                  className="z-[-20] object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-slate-950/10" />
              </div>

              <div className="absolute -left-8 -top-5 z-[99] sm:-left-4 sm:-top-6">
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-950/45 px-4 py-3 shadow-xl backdrop-blur-xl">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <CheckCircle2 size={19} strokeWidth={2} />
                  </div>

                  <div>
                    <p className="text-lg font-bold leading-none text-primary-400">
                      50+
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-slate-200">
                      Project Delivered
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom-right stat */}
              <div className="absolute -bottom-5 -right-8 z-[99] sm:-bottom-6 sm:-right-4">
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-950/45 px-4 py-3 shadow-xl backdrop-blur-xl">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <CheckCircle2 size={19} strokeWidth={2} />
                  </div>

                  <div>
                    <p className="text-lg font-bold leading-none text-primary">
                      98%
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-slate-200">
                      Client Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
