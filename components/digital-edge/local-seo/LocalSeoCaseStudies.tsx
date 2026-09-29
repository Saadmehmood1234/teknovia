import {
  BarChart3,
  Clock3,
  FileSearch,
  Search,
  Star,
  TrendingUp,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { localSeoComingSoon, localSeoEvidence } from "@/lib/data/digital-edge";

const evidenceIcons = [FileSearch, BarChart3, Clock3, Star, Search];

export function LocalSeoCaseStudies() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16">
      <Container>
        <div>
          <div className="mx-auto max-w-3xl text-center">
            <TopBadge data="PROOF & REPORTING" centerItem />

            <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
              We measure what
              <span className="text-primary">actually matters.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Our reporting connects local SEO activity with measurable changes
              in visibility, rankings, reputation, and customer discovery.
            </p>
          </div>
          <div className="mt-10 grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="relative hidden lg:block">
              <div className="sticky top-24">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Our approach
                </span>

                <p className="mt-5 max-w-sm font-heading text-2xl font-bold leading-snug text-gray-950">
                  Every growth story starts with a clear{" "}
                  <span className="text-primary">baseline.</span>
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary-50 text-primary">
                    <TrendingUp className="size-4" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-gray-900">
                      Data before assumptions
                    </p>
                    <p className="mt-0.5 text-[11px] text-gray-400">
                      Track. Compare. Improve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {localSeoEvidence.map((item, index) => {
                const Icon = evidenceIcons[index];

                return (
                  <article
                    key={item.title}
                    className="relative flex gap-5 py-6 sm:py-7"
                  >
                    <span className="w-7 shrink-0 pt-1 font-mono text-[10px] font-bold tracking-widest text-gray-300">
                      {item.number}
                    </span>
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-400 sm:size-11">
                      <Icon className="size-4.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-base font-bold text-gray-950 sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 max-w-xl text-xs leading-5 text-gray-500 sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 sm:mt-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <TopBadge data="REAL GROWTH SNAPSHOT" />

              <h2 className="mt-5 font-heading text-3xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-4xl">
                Results worth <span className="text-primary">showing.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500 lg:pb-1">
              We are currently documenting our first client campaigns. This
              space will soon feature verified performance data and detailed
              growth stories.
            </p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {localSeoComingSoon.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative min-h-82.5 overflow-hidden border border-gray-200 bg-[#FAFAFA] transition-all duration-300 hover:border-primary/20 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                >
                  <div className="absolute inset-x-0 bottom-0 h-44 overflow-hidden opacity-70">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size-[32px_32px] opacity-50" />
                    <svg
                      viewBox="0 0 500 180"
                      preserveAspectRatio="none"
                      className="absolute bottom-0 left-0 h-40 w-full text-primary/20"
                    >
                      <path
                        d="M0 155 C55 140 75 145 120 115 C165 85 190 120 235 90 C280 60 300 80 340 55 C380 30 420 50 500 15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      />

                      <path
                        d="M0 155 C55 140 75 145 120 115 C165 85 190 120 235 90 C280 60 300 80 340 55 C380 30 420 50 500 15 L500 180 L0 180 Z"
                        fill="currentColor"
                        opacity="0.15"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-b from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent" />
                  <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
                    <div className="flex items-start justify-between">
                      <div className="flex size-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-primary shadow-sm">
                        <Icon className="size-5" />
                      </div>

                      <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-gray-300">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-auto">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-primary" />

                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-primary">
                          Case Study
                        </span>

                        <span className="text-[10px] text-gray-300">
                          / Coming Soon
                        </span>
                      </div>

                      <h3 className="max-w-sm font-heading text-xl font-bold leading-tight text-gray-950 sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-sm text-xs leading-5 text-gray-500">
                        Verified client performance data and campaign insights
                        will be published here.
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        <span>Performance report</span>
                        <span className="h-px w-6 bg-gray-300" />
                        <span>Coming soon</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
