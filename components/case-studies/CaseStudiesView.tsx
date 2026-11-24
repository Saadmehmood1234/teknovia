"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Clock,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { caseStudies } from "@/lib/data/case-studies-data";

const industries = [
  "All Projects",
  "Manufacturing & ERP",
  "eCommerce & Retail",
  "Healthcare & MedTech",
  "EdTech & Learning",
  "FinTech & Logistics",
] as const;

export function CaseStudiesView() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All Projects");

  const filteredStudies = caseStudies.filter((study) => {
    return selectedIndustry === "All Projects" || study.industry === selectedIndustry;
  });

  return (
    <section className="bg-[#FAFAFA] py-12 sm:py-20">
      <Container>
        {/* Industry Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200/80 pb-8">
          {industries.map((industry) => {
            const active = selectedIndustry === industry;
            const count =
              industry === "All Projects"
                ? caseStudies.length
                : caseStudies.filter((s) => s.industry === industry).length;

            return (
              <button
                key={industry}
                type="button"
                onClick={() => setSelectedIndustry(industry)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  active
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {industry} ({count})
              </button>
            );
          })}
        </div>

        {/* Case Studies Cards Stream */}
        <div className="mt-12 space-y-12">
          {filteredStudies.map((study) => (
            <article
              key={study.id}
              className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xs transition hover:shadow-md"
            >
              {/* Header Bar */}
              <div className="border-b border-slate-100 bg-slate-50/70 p-6 sm:px-10 sm:py-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary-100/70 px-3 py-1 text-xs font-bold text-primary-800">
                      {study.industry}
                    </span>

                    <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Building2 className="size-3.5 text-slate-400" />
                      {study.client}
                    </span>

                    <span className="text-slate-300">•</span>

                    <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Clock className="size-3.5 text-slate-400" />
                      {study.timeline}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-primary">
                    {study.service}
                  </span>
                </div>

                <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  {study.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {study.subtitle}
                </p>
              </div>

              {/* Main Content Body */}
              <div className="p-6 sm:p-10 space-y-8">
                {/* 3 Metrics Callouts */}
                <div className="grid gap-4 sm:grid-cols-3">
                  {study.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-5 shadow-2xs"
                    >
                      <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                        <span>{metric.label}</span>
                        <TrendingUp className="size-3.5 text-primary" />
                      </div>
                      <div className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-slate-950">
                        {metric.value}
                      </div>
                      <div className="mt-1 text-xs font-semibold text-emerald-700">
                        {metric.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution 2-Col Grid */}
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                      <span className="size-2 rounded-full bg-amber-500" />
                      The Engineering Challenge
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-primary-100 bg-primary-50/30 p-6">
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                      <Sparkles className="size-3.5 text-primary" />
                      The Teknovia Solution
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-700">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Architecture Highlights & Outcomes */}
                <div className="grid gap-6 lg:grid-cols-2 pt-2">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                      <Layers className="size-3.5 text-primary" />
                      Architectural Highlights
                    </h4>
                    <ul className="space-y-2.5">
                      {study.architectureHighlights.map((arch, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                          <span>{arch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="size-3.5 text-emerald-600" />
                      Key Business Outcomes
                    </h4>
                    <ul className="space-y-2.5">
                      {study.businessOutcome.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                          <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold mt-0.5">
                            ✓
                          </span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Pills & CTA */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-slate-100 pt-6">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-semibold text-slate-400 mr-1">Stack:</span>
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact?tab=enquiry"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition"
                  >
                    <span>Discuss Similar Architecture</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
