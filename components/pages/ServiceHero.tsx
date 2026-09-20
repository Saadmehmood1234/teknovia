import type { DynamicPageData } from "@/lib/data/teknovia-pages";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { HeroMiniCard } from "./HeroMiniCard";

export function ServiceHero({ data }: { data: DynamicPageData }) {
  return (
    <section className="hero-grid relative isolate border-b border-primary-100 bg-primary-50/40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(0,150,137,0.12),transparent_35%)]" />

      <div className="container-page section-padding">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              <Sparkles size={16} />
              {data.eyebrow}
            </div>

            <h1 className="max-w-4xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
              {data.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {data.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                Get Started
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-primary hover:text-primary"
              >
                Talk to Our Experts
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-white p-3 shadow-[0_30px_80px_rgba(0,80,70,0.12)]">
              <div className="hero-grid rounded-[1.5rem] bg-primary-50 p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <HeroMiniCard
                    title="Scalable"
                    value="Built to Grow"
                  />

                  <HeroMiniCard
                    title="Secure"
                    value="Business Ready"
                  />

                  <HeroMiniCard
                    title="Modern"
                    value="Future Focused"
                  />

                  <HeroMiniCard
                    title="Reliable"
                    value="Performance Driven"
                  />
                </div>

                <div className="mt-5 rounded-2xl bg-white p-6 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Teknovia
                      </p>

                      <p className="mt-1 font-heading text-xl font-semibold text-slate-900">
                        Digital Growth Platform
                      </p>
                    </div>

                    <div className="rounded-full bg-primary-50 p-3 text-primary">
                      <Sparkles size={20} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[85, 68, 92].map((width, index) => (
                      <div
                        key={index}
                        className="h-2 overflow-hidden rounded-full bg-slate-100"
                      >
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${width}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}