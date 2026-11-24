"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Mail,
} from "lucide-react";
import { useState, useRef, useCallback, useEffect, KeyboardEvent } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card2 } from "@/components/ui/Card2";
import {
  securityPillars,
  securityPractices,
  securityFaqs,
} from "@/lib/data/security-data";

export function SecurityView() {
  const [activePillarId, setActivePillarId] = useState("appsec");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  const scrollPillars = (direction: "prev" | "next") => {
    const el = scrollRef.current;
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
    const container = scrollRef.current;
    if (!container) return;
    const btn = container.querySelector<HTMLElement>(`[data-pillar="${activePillarId}"]`);
    if (!btn || container.scrollWidth <= container.clientWidth) return;
    container.scrollTo({
      left: btn.offsetLeft - container.clientWidth / 2 + btn.offsetWidth / 2,
      behavior: "smooth",
    });
  }, [activePillarId]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const navKeys = ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"];
    if (!navKeys.includes(event.key)) return;
    event.preventDefault();

    const current = securityPillars.findIndex((p) => p.id === activePillarId);
    let next = current;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (current + 1) % securityPillars.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (current - 1 + securityPillars.length) % securityPillars.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = securityPillars.length - 1;
    }

    const target = securityPillars[next];
    setActivePillarId(target.id);
    scrollRef.current
      ?.querySelector<HTMLButtonElement>(`[data-pillar="${target.id}"]`)
      ?.focus({ preventScroll: true });
  };

  const active =
    securityPillars.find((pillar) => pillar.id === activePillarId) ??
    securityPillars[0];
  const ActiveIcon = active.icon;

  return (
    <div className="space-y-20 pt-8 sm:pt-16 bg-[#FAFAFA]">
      {/* 4 Pillars of Security: Designed like Industries We Serve */}
      <section id="security-pillars" className="scroll-mt-20">
        <Container>
          <SectionHeading
            variant="centered"
            badge="Enterprise Trust Center"
            title="The 4 Pillars of Teknovia Security"
            description="How we protect client source code, safeguard customer personal records, and maintain resilient high-availability systems."
          />

          <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[300px_minmax(0,1fr)]">
            {/* Sidebar / Tabs */}
            <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
              <div className="relative lg:rounded-2xl lg:border lg:border-slate-200 lg:bg-white lg:p-3 lg:shadow-sm">
                <div className="mb-2 hidden items-center justify-between px-3 pt-1 lg:flex">
                  <p className="text-sm font-bold text-slate-900">Security Pillars</p>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                    {securityPillars.length}
                  </span>
                </div>

                {/* Mobile scroll shadow indicators */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-[#FAFAFA] to-transparent transition-opacity duration-200 lg:hidden ${
                    canScrollPrev ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-[#FAFAFA] to-transparent transition-opacity duration-200 lg:hidden ${
                    canScrollNext ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Mobile Scroll Arrows */}
                <button
                  type="button"
                  onClick={() => scrollPillars("prev")}
                  aria-label="Scroll pillars left"
                  tabIndex={canScrollPrev ? 0 : -1}
                  className={`absolute left-0 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:border-primary hover:bg-primary hover:text-white sm:flex lg:hidden ${
                    canScrollPrev ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollPillars("next")}
                  aria-label="Scroll pillars right"
                  tabIndex={canScrollNext ? 0 : -1}
                  className={`absolute right-0 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:border-primary hover:bg-primary hover:text-white sm:flex lg:hidden ${
                    canScrollNext ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <ArrowRight className="h-4 w-4" />
                </button>

                {/* Tab buttons */}
                <div
                  ref={scrollRef}
                  onScroll={updateScrollState}
                  onKeyDown={handleKeyDown}
                  role="tablist"
                  aria-label="Security pillars"
                  aria-orientation="vertical"
                  className="relative flex snap-x snap-proximity gap-2 overflow-x-auto overscroll-x-contain px-1 py-2 scrollbar-none [&::-webkit-scrollbar]:hidden lg:snap-none lg:flex-col lg:gap-1 lg:overflow-y-auto lg:overflow-x-visible lg:px-0 lg:py-0"
                >
                  {securityPillars.map((pillar) => {
                    const Icon = pillar.icon;
                    const isActive = pillar.id === activePillarId;

                    return (
                      <button
                        key={pillar.id}
                        id={`pillar-tab-${pillar.id}`}
                        data-pillar={pillar.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls="security-panel"
                        tabIndex={isActive ? 0 : -1}
                        onClick={() => setActivePillarId(pillar.id)}
                        className={`group relative flex shrink-0 snap-start items-center gap-2 whitespace-nowrap rounded-full border py-1.5 pl-1.5 pr-4 text-sm font-semibold transition-colors duration-200 lg:w-full lg:gap-3 lg:rounded-xl lg:py-2.5 lg:pl-2.5 lg:pr-3 lg:text-left ${
                          isActive
                            ? "border-primary bg-primary text-white shadow-sm lg:border-primary/20 lg:bg-primary/10 lg:text-primary lg:shadow-none"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 lg:border-transparent"
                        }`}
                      >
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200 lg:h-9 lg:w-9 lg:rounded-lg ${
                            isActive
                              ? "bg-white/20 text-white lg:bg-primary lg:text-white"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          <Icon className="h-4 w-4 lg:h-4.5 lg:w-4.5" />
                        </span>

                        <span>{pillar.shortTitle}</span>

                        <ChevronRight
                          aria-hidden
                          className={`ml-auto hidden h-4 w-4 shrink-0 lg:block ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* Active Pillar Details Panel (Clean, No-Hover Jumps) */}
            <div
              id="security-panel"
              role="tabpanel"
              aria-labelledby={`pillar-tab-${active.id}`}
              className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              {/* Panel Header */}
              <div className="border-b border-slate-100 bg-slate-50/60 px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-md shadow-primary/20 sm:h-16 sm:w-16">
                    <ActiveIcon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>

                  <div className="min-w-0">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                      {active.badge}
                    </span>
                    <h3 className="mt-1 text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl">
                      {active.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600">
                  {active.description}
                </p>
              </div>

              {/* Panel Body */}
              <div className="space-y-8 p-5 sm:p-8 lg:p-10">
                {/* Core Controls */}
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="text-base sm:text-lg font-bold tracking-tight text-slate-950">
                      Core Safeguards & Controls
                    </h4>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {active.features.length} Controls
                    </span>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {active.features.map((feat) => (
                      <div
                        key={feat.title}
                        className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3.5 text-sm leading-6 text-slate-700"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <div>
                          <strong className="block text-xs sm:text-sm font-bold text-slate-900">
                            {feat.title}
                          </strong>
                          <span className="mt-0.5 block text-xs leading-relaxed text-slate-600">
                            {feat.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guarantees & Compliance */}
                <div className="grid gap-6 border-t border-slate-200 pt-8 md:grid-cols-2 md:gap-8">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold tracking-tight text-slate-950">
                      Guaranteed Protections
                    </h4>

                    <ul className="mt-4 space-y-3">
                      {active.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          <span className="text-xs sm:text-sm leading-relaxed text-slate-600">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-primary/15 bg-primary/5 p-5 sm:p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold tracking-tight text-slate-950">
                        Enforced Standards
                      </h4>
                      <p className="mt-1 text-xs text-slate-600">
                        Architectural protocols enforced across every deployment:
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {active.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-primary/20 bg-white px-3 py-1.5 text-xs font-semibold text-primary-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 border-t border-primary/10 pt-4 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Status</span>
                      <span className="inline-flex items-center gap-1.5 font-bold text-primary">
                        <span className="size-2 rounded-full bg-emerald-500" />
                        {active.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Engineering Rigor: Using Card2 */}
      <section className="bg-white py-8 sm:py-16">
        <Container>
          <SectionHeading
            variant="centered"
            badge="Engineering Rigor"
            title="Operational Security Standards in Practice"
            description="Our day-to-day controls and automated gates ensuring continuous integrity across our engineering lifecycle."
          />

          <ul className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {securityPractices.map((item) => (
              <Card2
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                circle={item.circle}
                bar={item.bar}
              />
            ))}
          </ul>
        </Container>
      </section>

      {/* Responsible Disclosure & Security Desk */}
      <section>
        <Container>
          <div className="rounded-3xl border border-primary-200 bg-linear-to-br from-primary-50/80 via-white to-primary-50/50 p-8 sm:p-12 shadow-xs">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h3 className="mt-4 font-heading text-2xl font-bold text-slate-950 sm:text-3xl">
                  Report a Security Finding or Request an Audit
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  We take the security of our platforms and customer data with utmost seriousness. If you believe you have discovered a vulnerability, our dedicated security response team will evaluate, verify, and remediate the issue promptly.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-primary" />
                    <span>24-Hour SLA Acknowledgment</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-primary" />
                    <span>Coordinated Disclosure</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-primary" />
                    <span>Zero Retaliation Guarantee</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs text-center space-y-4">
                <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                  <Mail className="size-6" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-slate-900">
                    Dedicated Security Desk
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct PGP & secure mailbox for enterprise security questionnaires and disclosures:
                  </p>
                </div>
                <a
                  href="mailto:security@teknovia.in"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-primary-dark transition"
                >
                  <Mail className="size-4" />
                  <span>security@teknovia.in</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Security FAQs for CTOs & Legal Counsel */}
      <section className="bg-white py-8 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <SectionHeading
              variant="sticky"
              badge="Security FAQs"
              title="Questions from Technical Leadership"
              description="Answers to common architectural, data privacy, and intellectual property compliance inquiries."
            />

            <div className="divide-y divide-slate-100 border-y border-slate-100">
              {securityFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left group"
                    >
                      <span className="font-semibold text-sm sm:text-base text-slate-900 group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "border-primary bg-primary text-white"
                            : "border-slate-200 bg-white text-slate-500"
                        }`}
                      >
                        <ChevronDown
                          className={`size-3.5 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-5 text-xs sm:text-sm leading-relaxed text-slate-600">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
