"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ChevronDown, HelpCircle, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { allFaqCategories, totalFaqCount } from "@/lib/data/faqs-data";

export function FaqPageView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return allFaqCategories
      .filter((cat) => selectedCategory === "all" || cat.id === selectedCategory)
      .map((cat) => {
        const matchingFaqs = cat.faqs.filter(
          (faq) =>
            q === "" ||
            faq.question.toLowerCase().includes(q) ||
            faq.answer.toLowerCase().includes(q)
        );
        return {
          ...cat,
          faqs: matchingFaqs,
        };
      })
      .filter((cat) => cat.faqs.length > 0);
  }, [selectedCategory, searchQuery]);

  const matchingCount = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.faqs.length, 0);
  }, [filteredCategories]);

  return (
    <section className="">
      <Container className="flex flex-col justify-start items-start">
        <div className="max-w-4xl space-y-6">
          {/* Search Box */}
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, framework, timeline, pricing, or keywords..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-12 text-sm sm:text-base text-slate-900 outline-none transition focus:border-primary/50 focus:ring-1 focus:ring-primary/10"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-start gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                selectedCategory === "all"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              All Topics ({totalFaqCount})
            </button>
            {allFaqCategories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                    active
                      ? "bg-primary text-white shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {cat.shortLabel} ({cat.faqs.length})
                </button>
              );
            })}
          </div>

          {/* Results Summary */}
          {searchQuery && (
            <div className="text-center text-xs text-slate-500">
              Found <span className="font-bold text-slate-900">{matchingCount}</span> answer
              {matchingCount === 1 ? "" : "s"} matching &ldquo;{searchQuery}&rdquo;
            </div>
          )}
        </div>

        {/* FAQs Accordion Sections */}
        <div className="mx-auto mt-12 max-w-7xl space-y-12">
          {filteredCategories.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <HelpCircle className="size-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-slate-900">
                No matching questions found
              </h3>
              <p className="mt-2 text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                We couldn&apos;t find an answer matching &ldquo;{searchQuery}&rdquo;. Try another term or contact our technical consultants directly.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  Clear search filters
                </button>
                <Link
                  href="/contact"
                  className="rounded-xl bg-primary px-5 py-2 text-xs font-bold text-white shadow-xs hover:bg-primary-dark transition"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className=""
              >
                {/* Category Header */}
                <div className="border-b border-slate-100 pb-5">
                  <h2 className="mt-1 font-heading text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    {cat.name}
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">{cat.description}</p>
                </div>

                {/* Accordion Questions */}
                <div className="divide-y divide-slate-100">
                  {cat.faqs.map((faq, index) => {
                    const itemKey = `${cat.id}-${index}`;
                    const isOpen = Boolean(openItems[itemKey]);

                    return (
                      <div key={itemKey}>
                        <button
                          type="button"
                          onClick={() => toggleItem(itemKey)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-4 py-5 text-left group"
                        >
                          <span className="flex items-start gap-3.5">
                            <span className="mt-0.5 shrink-0 font-mono text-xs font-bold text-primary">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="text-sm sm:text-base font-semibold leading-6 text-slate-900 group-hover:text-primary transition-colors">
                              {faq.question}
                            </span>
                          </span>

                          <span
                            className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                              isOpen
                                ? "border-primary bg-primary text-white"
                                : "border-slate-200 bg-white text-slate-500 group-hover:border-slate-300"
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
                            <div className="pb-5 pl-8 pr-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

      </Container>
    </section>
  );
}
