"use client";

import { ArrowRight, BarChart3 } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { caseStudies, CaseStudy, Metric } from "@/lib/data/hero-data";
import { AnimatedCard, RevealGroup } from "../animations/AnimatedCards";
import { motion, useReducedMotion } from "motion/react";
export function SuccessStories() {
  const shouldReduceMotion = useReducedMotion();

  const textTransition = {
    duration: shouldReduceMotion ? 0 : 0.65,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section className="bg-white my-8 sm:my-16">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.12,
              },
            },
          }}
          className="flex flex-col gap-5 lg:flex-row lg:items-center"
        >
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: shouldReduceMotion ? 0 : 10,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: textTransition,
              },
            }}
            className="flex shrink-0 items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-sm">
              <BarChart3 className="h-5 w-5" />
            </div>

            <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Success Stories
            </h2>
          </motion.div>

          <div className="hidden h-px flex-1 bg-slate-200 lg:block" />

          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: shouldReduceMotion ? 0 : 8,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: textTransition,
              },
            }}
            className="text-sm font-medium text-slate-600 lg:whitespace-nowrap"
          >
            Solutions that drive measurable impact across industries.
          </motion.p>

          <div className="hidden h-px flex-1 bg-slate-200 lg:block" />

          <motion.a
            href="#case-studies"
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : 12,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-md border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            View All Case Studies
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        <RevealGroup className="mt-7 grid gap-4 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <AnimatedCard key={study.title}>
              <CaseStudyCard study={study} />
            </AnimatedCard>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const MainIcon = study.icon;

  return (
    <article className="group rounded-xl border border-slate-200 bg-white p-4 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(15,23,42,0.09)]">
      <div className="flex min-h-45 gap-4">
        <div className="flex min-w-0 flex-1 gap-3">
          <div
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg ${study.iconBg}`}
          >
            <MainIcon
              className={`h-8 w-8 ${study.iconColor}`}
              strokeWidth={1.8}
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-[15px] font-extrabold leading-5 text-slate-950">
              {study.title}
            </h3>

            <span
              className={`mt-2 inline-flex rounded-md px-2 py-1 text-[10px] font-semibold ${study.categoryBg} ${study.categoryColor}`}
            >
              {study.category}
            </span>

            <p className="mt-4 text-[11px] font-medium leading-5 text-slate-600">
              {study.description}
            </p>
          </div>
        </div>
        <div className="w-px shrink-0 bg-slate-200" />
        <div className="flex w-26.25 shrink-0 flex-col justify-between py-0.5">
          {study.metrics.map((metric) => (
            <MetricItem key={metric.label} metric={metric} />
          ))}
        </div>
      </div>
    </article>
  );
}

function MetricItem({ metric }: { metric: Metric }) {
  const Icon = metric.icon;

  return (
    <div className="flex items-start gap-2">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2} />

      <div className="min-w-0">
        <p className="text-lg font-black leading-none tracking-tight text-slate-900">
          {metric.value}
        </p>

        <p className="mt-1 text-[9px] font-medium leading-3 text-slate-600">
          {metric.label}
        </p>
      </div>
    </div>
  );
}
