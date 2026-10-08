"use client";

import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import { Container } from "@/components/ui/Container";
import { industries } from "@/lib/data/industries";
import { TopBadge } from "../ui/Top-Badge";

const INDUSTRY_ALIASES: Record<string, string> = {
  "retail-ecommerce": "retail",
  "logistics-supply-chain": "logistics",
  "hospitality-travel": "hospitality",
};

export function IndustriesGrid() {
  const [activeIndustry, setActiveIndustry] = useState("manufacturing");
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const industryScrollRef = useRef<HTMLDivElement>(null);

  const updateScrollState = useCallback(() => {
    const el = industryScrollRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  const scrollIndustries = (direction: "prev" | "next") => {
    const el = industryScrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: (direction === "next" ? 1 : -1) * el.clientWidth * 0.6,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  useEffect(() => {
    const container = industryScrollRef.current;
    if (!container) return;

    const btn = container.querySelector<HTMLElement>(
      `[data-industry="${activeIndustry}"]`,
    );
    if (!btn || container.scrollWidth <= container.clientWidth) return;

    container.scrollTo({
      left: btn.offsetLeft - container.clientWidth / 2 + btn.offsetWidth / 2,
      behavior: "smooth",
    });
  }, [activeIndustry]);

  useEffect(() => {
    const handleIndustryFromUrl = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (!hash) return;

      const industryId = INDUSTRY_ALIASES[hash] || hash;
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

    window.addEventListener("hashchange", handleIndustryFromUrl);
    window.addEventListener("industrychange", handleIndustryFromUrl);

    return () => {
      window.removeEventListener("hashchange", handleIndustryFromUrl);
      window.removeEventListener("industrychange", handleIndustryFromUrl);
    };
  }, []);


  const selectIndustry = (id: string) => {
    setActiveIndustry(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const navKeys = ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"];
    if (!navKeys.includes(event.key)) return;
    event.preventDefault();

    const current = industries.findIndex((i) => i.id === activeIndustry);
    let next = current;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (current + 1) % industries.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (current - 1 + industries.length) % industries.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = industries.length - 1;
    }

    const target = industries[next];
    selectIndustry(target.id);
    industryScrollRef.current
      ?.querySelector<HTMLButtonElement>(`[data-industry="${target.id}"]`)
      ?.focus({ preventScroll: true });
  };

  const active =
    industries.find((industry) => industry.id === activeIndustry) ??
    industries[0];
  const ActiveIcon = active.icon;

  return (
    <section
      id="industries"
      className="scroll-mt-20 border-b border-gray-100 bg-white py-10 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="flex items-center justify-center">
          <div className="flex max-w-3xl flex-col items-center justify-center">
            <TopBadge data="Industries&nbsp;We&nbsp;Serve" centerItem={true} />

            <h2 className="mt-3 text-center text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
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

        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <div className="relative lg:rounded-2xl lg:border lg:border-slate-200 lg:bg-white lg:p-3 lg:shadow-sm">
              <div className="mb-2 hidden items-center justify-between px-3 pt-1 lg:flex">
                <p className="text-sm font-bold text-slate-900">Industries</p>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                  {industries.length}
                </span>
              </div>
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-white to-transparent transition-opacity duration-200 lg:hidden ${
                  canScrollPrev ? "opacity-100" : "opacity-0"
                }`}
              />
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-white to-transparent transition-opacity duration-200 lg:hidden ${
                  canScrollNext ? "opacity-100" : "opacity-0"
                }`}
              />
              <button
                type="button"
                onClick={() => scrollIndustries("prev")}
                aria-label="Scroll industries left"
                tabIndex={canScrollPrev ? 0 : -1}
                className={`absolute left-0 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:flex lg:hidden ${
                  canScrollPrev
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollIndustries("next")}
                aria-label="Scroll industries right"
                tabIndex={canScrollNext ? 0 : -1}
                className={`absolute right-0 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:flex lg:hidden ${
                  canScrollNext
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <ArrowRight className="h-4 w-4" />
              </button>

              {/* Tab list */}
              <div
                ref={industryScrollRef}
                onScroll={updateScrollState}
                onKeyDown={handleKeyDown}
                role="tablist"
                aria-label="Industries we serve"
                aria-orientation="vertical"
                className="relative flex snap-x snap-proximity gap-2 overflow-x-auto overscroll-x-contain px-1 py-2 scrollbar-none [&::-webkit-scrollbar]:hidden lg:max-h-[calc(100vh-11rem)] lg:snap-none lg:flex-col lg:gap-1 lg:overflow-y-auto lg:overflow-x-visible lg:px-0 lg:py-0"
              >
                {industries.map((industry) => {
                  const Icon = industry.icon;
                  const isActive = industry.id === activeIndustry;

                  return (
                    <button
                      key={industry.id}
                      id={`industry-tab-${industry.id}`}
                      data-industry={industry.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="industry-panel"
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => selectIndustry(industry.id)}
                      className={`group relative flex shrink-0 snap-start items-center gap-2 whitespace-nowrap rounded-full border py-1.5 pl-1.5 pr-4 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:w-full lg:gap-3 lg:rounded-xl lg:py-2 lg:pl-2 lg:pr-3 lg:text-left ${
                        isActive
                          ? "border-primary bg-primary text-white shadow-sm lg:border-primary/20 lg:bg-primary/10 lg:text-primary lg:shadow-none"
                          : "border-slate-200 bg-white text-slate-700 hover:border-primary/40 hover:bg-primary/5 lg:border-transparent lg:hover:bg-slate-50"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200 lg:h-9 lg:w-9 lg:rounded-lg ${
                          isActive
                            ? "bg-white/20 text-white lg:bg-primary lg:text-white"
                            : "bg-primary/10 text-primary group-hover:bg-primary/15"
                        }`}
                      >
                        <Icon className="h-4 w-4 lg:h-4.5 lg:w-4.5" />
                      </span>

                      <span>{industry.shortTitle}</span>

                      <ChevronRight
                        aria-hidden
                        className={`ml-auto hidden h-4 w-4 shrink-0 transition-all duration-200 lg:block ${
                          isActive
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <div
            id="industry-panel"
            role="tabpanel"
            aria-labelledby={`industry-tab-${active.id}`}
            className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            {/* Banner */}
            <div
              className="relative overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${active.image})` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/95 via-white/90 to-white/75" />

              <div className="relative z-10 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/25 sm:h-16 sm:w-16">
                    <ActiveIcon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-primary">
                      Industry solutions
                    </p>
                    <h3 className="mt-1 text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl">
                      {active.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 max-w-3xl space-y-3">
                  <p className="text-base font-medium leading-7 text-slate-800">
                    {active.description}
                  </p>
                  <p className="text-sm leading-7 text-slate-600">
                    {active.intro}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-10 p-5 sm:p-8 lg:p-10">
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="text-lg font-bold tracking-tight text-slate-950">
                    Our solutions
                  </h4>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {active.solutions.length}
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {active.solutions.map((solution) => (
                    <div
                      key={solution}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm font-medium leading-6 text-slate-700 transition-colors hover:border-primary/30 hover:bg-primary/5"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span>{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-8 border-t border-slate-200 pt-8 md:grid-cols-2 md:gap-10">
                <div>
                  <h4 className="text-lg font-bold tracking-tight text-slate-950">
                    Benefits
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {active.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-sm leading-6 text-slate-600">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-primary/15 bg-primary/5 p-5 sm:p-6">
                  <h4 className="text-lg font-bold tracking-tight text-slate-950">
                    Ideal for
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.idealFor.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-primary/20 bg-white px-3 py-1.5 text-xs font-semibold text-primary-800"
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