import { ArrowRight, Target, UsersRound } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";

export function B2BMarketingCTA() {
  return (
    <section className="relative overflow-hidden bg-[#06100e] py-12 text-white sm:py-16 lg:py-20">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-20" />

      <div className="pointer-events-none absolute -left-32 top-1/2 size-96 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-0 size-96 rounded-full bg-primary/10 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              BUILD YOUR B2B GROWTH ENGINE
            </p>

            <h2 className="mt-4 font-heading text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Ready to reach the{" "}
              <span className="text-primary">right businesses?</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              Let’s build a B2B marketing strategy around your audience,
              business goals, sales process, and growth opportunities.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row lg:flex-col">
            <div className="flex items-center gap-3 text-xs text-white/60">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Target className="size-4" />
              </div>
              Target the right audience
            </div>

            <div className="flex items-center gap-3 text-xs text-white/60">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <UsersRound className="size-4" />
              </div>
              Generate qualified opportunities
            </div>

            <Link
              href="/contact"
              className="mt-2 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-[0_12px_35px_rgba(0,150,137,0.3)]"
            >
              Get a B2B Marketing Strategy
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}