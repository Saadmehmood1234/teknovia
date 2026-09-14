"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";
import { reasons } from "@/lib/data/site";
import { ProgressBar } from "./ProgressBar";

export function WhyTeknovia() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % reasons.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  const activeReason = reasons[activeIndex];

  const ActiveIcon = activeReason.icon;

  const activeBg = activeReason.bgColor;

  const activeTxt = activeReason.txtColor;
  return (
    <section className="bg-white py-16">
      <Container className="flex justify-center items-center flex-col">
        <div className="max-w-3xl text-center">
          <p className="font-mono text-lg font-extrabold uppercase tracking-widest text-primary">
            Why Choose Teknovia
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950">
            Your Growth is Our Commitment
          </h2>
        </div>

        <div className="mt-16 flex w-full max-w-5xl min-w-0 gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1D3C5F] to-[#009689] p-4">
          <div className="flex shrink-0 flex-col items-center gap-2 py-6">
            {Array.from({ length: 14 }).map((_, index) => (
              <div
                key={index}
                className="h-3.5 w-3.5 rounded-full bg-slate-300"
              />
            ))}
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-3 md:grid md:grid-cols-[minmax(0,1fr)_auto]">
            <div
              className="relative min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-[#fffef9] px-6 py-8 shadow-[0_8px_25px_rgba(0,0,0,0.06)] sm:px-8"
              style={{
                backgroundImage: `
          linear-gradient(
            transparent 31px,
            #dbeafe 32px
          ),
          linear-gradient(
            90deg,
            transparent 0,
            transparent 55px,
            #fecaca 55px,
            #fecaca 56px,
            transparent 56px
          )
        `,
                backgroundSize: "100% 32px, 100% 100%",
              }}
            >
              <div className="relative pl-10 sm:pl-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${activeBg} text-white`}
                    >
                      <ActiveIcon size={24} strokeWidth={2} />
                    </div>

                    <h3 className="mt-2 min-w-0 text-xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                      {activeReason.title}
                    </h3>
                  </div>

                  <span className="shrink-0 font-mono text-xs text-gray-400">
                    {activeReason.number}
                  </span>
                </div>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                  {activeReason.description}
                </p>
              </div>

              <div className="relative sm:mt-10 mt-2 flex items-center gap-3 pl-6 sm:gap-4 sm:pl-8">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(
                      (prev) => (prev - 1 + reasons.length) % reasons.length,
                    )
                  }
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-primary hover:text-primary"
                  aria-label="Previous reason"
                >
                  <ArrowLeft size={16} />
                </button>

                <div className="min-w-0 flex-1">
                  <ProgressBar
                    number={activeReason.number}
                    bgColor={activeReason.bgColor}
                  />
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) => (prev + 1) % reasons.length)
                  }
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-primary hover:text-primary"
                  aria-label="Next reason"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
            <div className="min-w-0 max-w-full overflow-hidden">
              <div className="flex min-w-0 gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-col md:overflow-x-visible md:pb-0">
                {reasons.map((reason, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={reason.number}
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(index)}
                      className={`shrink-0 rounded-lg border border-primary-400 p-3 text-left transition-all duration-300 md:w-44 ${
                        isActive
                          ? "bg-white text-black"
                          : "bg-white/5 text-white backdrop-blur-sm hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono text-xs font-bold ${
                            isActive ? activeTxt : "text-white/60"
                          }`}
                        >
                          {reason.number}
                        </span>

                        <span className="whitespace-nowrap text-xs font-bold">
                          {reason.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
