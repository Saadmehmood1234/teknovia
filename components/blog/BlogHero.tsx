import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export function BlogHero() {
  return (
    <section className="hero-grid relative isolate border-b border-primary-100 bg-primary-50/40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(0,150,137,0.12),transparent_35%)]" />

      <div className="container-page section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            <BookOpen size={16} />
            TEKNOVIA BLOG
          </div>

          <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Ideas, Insights & Perspectives on Digital Growth
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore practical insights about software development, digital
            marketing, ecommerce, technology and building better digital
            experiences.
          </p>

          <Link
            href="#articles"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Explore Articles
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}