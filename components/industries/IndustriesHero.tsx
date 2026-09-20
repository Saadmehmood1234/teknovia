import { ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";

export function IndustriesHero() {
  return (
    <section className="hero-grid relative isolate border-b border-primary-100 bg-primary-50/40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(0,150,137,0.12),transparent_35%)]" />

      <div className="container-page section-padding">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            <Building2 size={16} />
            INDUSTRIES
          </div>

          <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Technology Solutions Designed for Your Industry
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            From education and healthcare to finance, manufacturing and
            hospitality, we create digital experiences and software solutions
            that address industry-specific challenges.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Discuss Your Industry
              <ArrowRight size={17} />
            </Link>

            <Link
              href="#industries"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-primary hover:text-primary"
            >
              Explore Industries
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}