"use client";

import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";
import { industries } from "@/lib/data/industries";
import { useRef } from "react";

export function IndustriesGrid() {
  const [activeIndustry, setActiveIndustry] = useState("manufacturing");

  const industryScrollRef = useRef<HTMLDivElement>(null);

  const scrollIndustries = (direction: "prev" | "next") => {
    if (!industryScrollRef.current) return;

    industryScrollRef.current.scrollBy({
      left: direction === "next" ? 250 : -250,
      behavior: "smooth",
    });
  };
  const industryAliases: Record<string, string> = {
    "retail-ecommerce": "retail",
    "logistics-supply-chain": "logistics",
    "hospitality-travel": "hospitality",
  };

  useEffect(() => {
    const handleIndustryFromUrl = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();

      if (!hash) return;

      const industryId = industryAliases[hash] || hash;

      const matchedIndustry = industries.find(
        (industry) => industry.id.toLowerCase() === industryId,
      );

      if (!matchedIndustry) return;

      setActiveIndustry(matchedIndustry.id);

      requestAnimationFrame(() => {
        document.getElementById("industries")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    };


    handleIndustryFromUrl();

    // Normal browser hash navigation
    window.addEventListener("hashchange", handleIndustryFromUrl);

    // Same-page Next.js navigation
    window.addEventListener("industrychange", handleIndustryFromUrl);

    return () => {
      window.removeEventListener("hashchange", handleIndustryFromUrl);
      window.removeEventListener("industrychange", handleIndustryFromUrl);
    };
  }, []);

  const active = industries.find((industry) => industry.id === activeIndustry)!;

  const ActiveIcon = active.icon;

  return (
    <section
      id="industries"
      className="border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <Container>
        <div className="flex justify-center items-center">
          <div className="max-w-3xl flex items-center justify-center flex-col">
            <p className="font-mono text-md sm:text-lg font-bold uppercase tracking-wider text-primary">
              Industries We Serve
            </p>

            <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Domains and Industry
              <span className="text-primary"> we serve</span>
            </h2>

            <p className="mt-5 max-w-2xl text-center text-sm leading-7 text-slate-600 sm:text-base">
              Technology solutions designed around the operational needs,
              challenges, and growth goals of organizations across diverse
              industries.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[270px_1fr] lg:gap-10">
          <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <div
              ref={industryScrollRef}
              className="
                flex w-full min-w-0
                gap-2 overflow-x-auto overscroll-x-contain
                pb-2
                scrollbar-none
                [&::-webkit-scrollbar]:hidden
                lg:block lg:space-y-2
                lg:overflow-visible lg:pb-0
                "
            >
              {industries.map((industry) => {
                const Icon = industry.icon;
                const isActive = industry.id === activeIndustry;

                return (
                  <button
                    key={industry.id}
                    type="button"
                    onClick={() => {
                      setActiveIndustry(industry.id);
                      window.location.hash = industry.id;
                    }}
                    className={`group flex shrink-0 min-w-max items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200 lg:w-full ${
                      isActive
                        ? "border-primary bg-primary-100/50 text-primary shadow-[0_8px_25px_rgba(0,150,137,0.15)]"
                        : "border-slate-200 bg-white text-slate-700 hover:border-primary/30 hover:bg-primary/5"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        isActive
                          ? "bg-primary/15 text-primary"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="whitespace-nowrap text-sm font-semibold">
                      {industry.shortTitle}
                    </span>

                    <ArrowRight
                      className={`ml-auto hidden h-4 w-4 transition-transform lg:block ${
                        isActive
                          ? "translate-x-0 opacity-100"
                          : "opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
            <div className="mt-3 flex items-center justify-end gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => scrollIndustries("prev")}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:border-primary hover:bg-primary hover:text-white"
                aria-label="Previous industries"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollIndustries("next")}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:border-primary hover:bg-primary hover:text-white"
                aria-label="Next industries"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </aside>

          <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60">
            <div className="p-5 sm:p-7 lg:p-9">
              <div
                className="relative overflow-hidden rounded-2xl bg-cover bg-center px-5 py-8 sm:px-7 sm:py-10 lg:px-9 lg:py-12"
                style={{
                  backgroundImage: `url(${active.image})`,
                }}
              >
                <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                      <ActiveIcon className="h-7 w-7" />
                    </div>

                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                        Industry Solutions
                      </p>

                      <h3 className="mt-1 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                        {active.title}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-7 max-w-4xl space-y-4">
                    <p className="text-base font-medium leading-7 text-slate-700">
                      {active.description}
                    </p>

                    <p className="text-sm leading-7 text-slate-600">
                      {active.intro}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-9">
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-200" />

                  <h4 className="shrink-0 text-sm font-extrabold uppercase tracking-wider text-slate-900">
                    Our Solutions
                  </h4>

                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {active.solutions.map((solution) => (
                    <div
                      key={solution}
                      className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>

                      <span>{solution}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-9 grid gap-8 border-t border-slate-200 pt-8 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
                    Benefits
                  </h4>

                  <div className="mt-4 space-y-3">
                    {active.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>

                        <span className="text-sm leading-5 text-slate-600">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
                    Ideal For
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.idealFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary-800"
                      >
                        {item}
                      </span>
                    ))}
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
