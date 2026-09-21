"use client";

import {
  ArrowRight,
  BarChart3,
  Building2,
  GraduationCap,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/Container";

type Metric = {
  value: string;
  label: string;
  icon: LucideIcon;
};

type CaseStudy = {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  categoryBg: string;
  categoryColor: string;
  metrics: Metric[];
};

const caseStudies: CaseStudy[] = [
  {
    title: "Academic ERP for Educational Institution",
    category: "Education",
    description:
      "Developed a comprehensive ERP solution to automate academic, administrative, and communication processes.",
    icon: GraduationCap,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-700",
    categoryBg: "bg-teal-50",
    categoryColor: "text-teal-700",
    metrics: [
      {
        value: "60%",
        label: "Time Saved",
        icon: TrendingUp,
      },
      {
        value: "90%",
        label: "Process Automation",
        icon: Zap,
      },
      {
        value: "5,000+",
        label: "Students Managed",
        icon: Users,
      },
    ],
  },
  {
    title: "Marketplace Optimization & Growth Campaign",
    category: "eCommerce",
    description:
      "Executed a data-driven digital marketing strategy that improved visibility, traffic, and conversions for a leading marketplace.",
    icon: ShoppingCart,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-700",
    categoryBg: "bg-blue-50",
    categoryColor: "text-blue-700",
    metrics: [
      {
        value: "120%",
        label: "Traffic Increase",
        icon: TrendingUp,
      },
      {
        value: "85%",
        label: "Lead Growth",
        icon: Target,
      },
      {
        value: "3.5X",
        label: "ROI Achieved",
        icon: Wallet,
      },
    ],
  },
  {
    title: "Real Estate Platform Development",
    category: "Real Estate",
    description:
      "Built a feature-rich platform for property listing, lead management, and customer engagement.",
    icon: Building2,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-700",
    categoryBg: "bg-violet-50",
    categoryColor: "text-violet-700",
    metrics: [
      {
        value: "70%",
        label: "Faster Lead Response",
        icon: Users,
      },
      {
        value: "95%",
        label: "Client Satisfaction",
        icon: Target,
      },
      {
        value: "2X",
        label: "Business Growth",
        icon: BarChart3,
      },
    ],
  },
];

export function SuccessStories() {
  return (
    <section className="bg-white mt-8 sm:mt-16">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
          <div className="flex shrink-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-sm">
              <BarChart3 className="h-5 w-5" />
            </div>

            <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Success Stories
            </h2>
          </div>

          <div className="hidden h-px flex-1 bg-slate-200 lg:block" />

          <p className="text-sm font-medium text-slate-600 lg:whitespace-nowrap">
            Solutions that drive measurable impact across industries.
          </p>

          <div className="hidden h-px flex-1 bg-slate-200 lg:block" />

          <a
            href="#case-studies"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-md border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            View All Case Studies

            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Case Studies */}
        <div className="mt-7 grid gap-4 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
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
            <MainIcon className={`h-8 w-8 ${study.iconColor}`} strokeWidth={1.8} />
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
      <Icon
        className="mt-0.5 h-5 w-5 shrink-0 text-primary"
        strokeWidth={2}
      />

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