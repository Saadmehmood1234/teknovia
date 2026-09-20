import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";

export function FeaturedPost() {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50">
      <div className="grid lg:grid-cols-2">
        <div className="hero-grid flex min-h-[360px] items-end bg-primary-50 p-8 sm:p-12">
          <div className="w-full rounded-2xl border border-white/70 bg-white/80 p-6 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              FEATURED ARTICLE
            </p>

            <p className="mt-3 font-heading text-3xl font-semibold text-slate-950">
              Building Digital Products That Actually Solve Business Problems
            </p>
          </div>
        </div>

        <div className="p-8 sm:p-12">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <CalendarDays size={16} />
            Digital Strategy
          </div>

          <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-slate-950">
            From idea to scalable digital product
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Successful digital products are built around real users and
            measurable business goals. Discover how strategy, design and
            technology work together to create products that deliver lasting
            value.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Read More
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}