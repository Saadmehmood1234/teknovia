"use client";

import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card2 } from "@/components/ui/Card2";
import {
  engagementModels,
  comparisonTable,
  onboardingSteps,
  clientProtections,
} from "@/lib/data/engagement-models-data";

export function EngagementView() {
  return (
    <div className="space-y-20 py-8 sm:py-16 bg-[#FAFAFA]">
      {/* 3 Core Model Cards */}
      <section>
        <Container>
          <SectionHeading
            variant="centered"
            badge="Tailored Partnership Options"
            title="Choose the Engagement Model That Fits Your Business"
            description="Whether launching a new digital product, scaling organic search and social media presence, or partnering for full-spectrum technology and growth retainers, we align with your goals."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {engagementModels.map((model) => (
              <div
                key={model.id}
                className={`relative flex flex-col justify-between rounded-3xl border bg-white p-8 transition shadow-xs hover:shadow-md ${
                  model.popular
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-slate-200/80"
                }`}
              >
                {model.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                      <Sparkles className="size-3" />
                      Recommended
                    </span>
                  </div>
                )}

                <div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {model.badge}
                  </span>

                  <h3 className="mt-4 font-heading text-2xl font-bold text-slate-950">
                    {model.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {model.tagline}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                      Billing Structure
                    </div>
                    <div className="mt-1 text-xs font-semibold text-slate-900 leading-snug">
                      {model.billingStructure}
                    </div>
                  </div>

                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                      Ideal For
                    </div>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {model.idealFor}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-900">
                      What&apos;s Included:
                    </div>
                    {model.keyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Link
                    href={`/contact?tab=enquiry&model=${model.id}`}
                    className={`flex h-11 w-full items-center justify-center gap-2 rounded-xl text-xs font-bold transition shadow-xs ${
                      model.popular
                        ? "bg-primary text-white hover:bg-primary-dark shadow-primary/20"
                        : "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    <span>Request Proposal for this Model</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Side-by-Side Comparison Matrix */}
      <section className="bg-white py-8 sm:py-16">
        <Container>
          <SectionHeading
            variant="centered"
            badge="Direct Comparison"
            title="Side-by-Side Framework Breakdown"
            description="Clear visibility into scope adaptability, team structure, code ownership, and onboarding timelines."
          />

          <div className="mt-12 overflow-x-auto rounded-3xl border border-slate-200 shadow-xs">
            <table className="w-full min-w-175 text-left text-xs">
              <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-900">
                <tr>
                  <th className="py-4 px-6 font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    Comparison Criteria
                  </th>
                  <th className="py-4 px-6 font-bold text-primary">
                    Dedicated Pod
                  </th>
                  <th className="py-4 px-6 font-bold text-slate-900">
                    Fixed-Scope Milestone
                  </th>
                  <th className="py-4 px-6 font-bold text-slate-900">
                    Product Growth Retainer
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600 bg-white">
                {comparisonTable.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition">
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      {row.criteria}
                    </td>
                    <td className="py-4 px-6 font-medium text-slate-800">
                      {row.dedicated}
                    </td>
                    <td className="py-4 px-6">
                      {row.fixed}
                    </td>
                    <td className="py-4 px-6">
                      {row.retainer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 4-Step Technical Onboarding Process */}
      <section>
        <Container>
          <SectionHeading
            variant="centered"
            badge="The Client Journey"
            title="How We Go From Idea to Production"
            description="A structured, no-nonsense onboarding roadmap designed to start coding with velocity within 14 days."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {onboardingSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-black text-primary/30">
                        {step.step}
                      </span>
                      <div className="flex size-10 items-center justify-center rounded-xl bg-primary-50 text-primary">
                        <Icon className="size-5" />
                      </div>
                    </div>

                    <h3 className="mt-4 font-heading text-base font-bold text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white pt-8 sm:pt-16">
        <Container>
          <SectionHeading
            variant="centered"
            badge="Trust & Protections"
            title="Our Commitment to Enterprise Transparency"
            description="Legal, operational, and intellectual guarantees built into every contract we sign."
          />

          <ul className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {clientProtections.map((item) => (
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
    </div>
  );
}
