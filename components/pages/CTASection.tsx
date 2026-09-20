import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="section-padding">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-7 py-14 text-white sm:px-12 lg:px-16">
          <div className="hero-grid absolute inset-0 opacity-20" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
              LET&apos;S BUILD TOGETHER
            </p>

            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              {description}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary transition hover:bg-primary-50"
            >
              Start a Conversation
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}