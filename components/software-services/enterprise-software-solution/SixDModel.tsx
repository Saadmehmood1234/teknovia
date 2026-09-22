"use client";

import { Container } from "@/components/ui/Container";
import {
  Search,
  ClipboardCheck,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
  Users,
  Target,
  Shield,
  BrainCircuit,
  ChartNoAxesCombined,
  Handshake,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "DISCOVER",
    shortTitle: "Discover",
    color: "text-[#7d2ad1]",
    description:
      "Identify business needs, challenges, opportunities, and project objectives to establish a strong foundation.",
    icon: Search,
  },
  {
    number: "02",
    title: "DEFINE",
    shortTitle: "Define",
    color: "text-[#2a4ed1]",
    description:
      "Establish project scope, success metrics, requirements, priorities, and implementation strategy.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "DESIGN",
    shortTitle: "Design",
    color: "text-[#0e959e]",
    description:
      "Create user-centric interfaces, workflows, system architecture, and solution blueprints.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "DEVELOP",
    color: "text-[#0e9e3e]",
    shortTitle: "Develop",
    description:
      "Develop scalable applications, integrations, and enterprise-grade software solutions.",
    icon: Code2,
  },
  {
    number: "05",
    title: "DEPLOY",
    shortTitle: "Deploy",
    color: "text-[#f59425]",
    description:
      "Launch solutions efficiently while minimizing disruption and ensuring business continuity.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "DRIVE",
    shortTitle: "Drive",
    color: "text-[#941329]",
    description:
      "Enhance performance, support users, implement improvements, and scale for future growth.",
    icon: TrendingUp,
  },
];

const metrics = [
  {
    icon: Target,
    title: "Client-Centric",
    subtitle: "Your goals drive every decision.",
  },
  {
    icon: Shield,
    title: "Quality-First",
    subtitle: "Built for reliability, security, and scale.",
  },
  {
    icon: BrainCircuit,
    title: "Agile & Iterative",
    subtitle: "Adapt, evolve, and deliver value faster.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Transparent",
    subtitle: "Clear communication at every step.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partner",
    subtitle: "We grow with you, beyond development.",
  },
];

export default function SixDModel() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <Container>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,150,137,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,150,137,0.045) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-lg font-extrabold uppercase tracking-widest text-primary">
              OUR DEVELOPMENT APPROACH
            </p>

            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl ">
              6D SOLUTION FRAMEWORK
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              A proven, iterative approach that transforms ideas into scalable,
              high-impact enterprise solutions.
            </p>
          </div>
          <div className="relative mx-auto md:mt-16 max-w-6xl lg:mt-20">
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden lg:h-100 h-72 lg:w-100 w-72 -translate-x-1/2 -translate-y-1/2 md:block">
              <div className="absolute inset-0 rounded-full border border-primary/40" />

              <div className="absolute inset-8 rounded-full border border-dashed border-primary/40" />

              <div className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-primary/40" />
              <div className="absolute bottom-0 left-1/2 h-8 w-px -translate-x-1/2 bg-primary/40" />
              <div className="absolute left-0 top-1/2 h-px w-8 -translate-y-1/2 bg-primary/40" />
              <div className="absolute right-0 top-1/2 h-px w-8 -translate-y-1/2 bg-primary/40" />
            </div>

            <div className="relative hidden min-h-155 md:mt-16 md:block">
              {steps.map((step, index) => {
                const positions = [
                  "left-1/2 lg:-top-20 -top-10 -translate-x-1/2",
                  "right-0 top-[17%]",
                  "right-0 bottom-[8%]",
                  "left-1/2 lg:-bottom-16 -bottom-8 -translate-x-1/2",
                  "left-0 bottom-[8%]",
                  "left-0 top-[17%]",
                ];

                return (
                  <div
                    key={step.number}
                    className={`absolute w-67.5 ${positions[index]}`}
                  >
                    <FrameworkCard step={step} color={step.color} />
                  </div>
                );
              })}

              <CenterHub />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:hidden">
              {steps.map((step) => {
                return (
                  <FrameworkCard
                    key={step.number}
                    step={step}
                    color={step.color}
                  />
                );
              })}

              <div className="sm:col-span-2">
                <CenterHub />
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-24 mt-12 rounded-2xl border border-primary-300/50  px-5 py-6 backdrop-blur-md  sm:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.title}
                  className="flex items-center gap-3 border-r border-primary-300/60 px-4 last:border-r-0"
                >
                  <Icon className="h-9 w-9 shrink-0 text-primary" />

                  <div className="text-sm font-semibold leading-5">
                    <h3 className="text-md font-black">{metric.title}</h3>
                    <p className="text-xs">{metric.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FrameworkCard({
  step,
  color,
}: {
  step: (typeof steps)[number];
  color: string;
}) {
  return (
    <article className="relative overflow-hidden md:p-5 p-2">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-primary/0 transition-colors group-hover:bg-primary" />

      <div className="mt-5 flex flex-col justify-center items-center text-center">
        <div className="flex items-center justify-center gap-4">
          <span
            className={`font-mono text-2xl font-semibold tracking-wider ${color}`}
          >
            {step.number}
          </span>
          <h3
            className={`font-heading md:text-md text-lg font-semibold ${color}`}
          >
            {step.title}
          </h3>
        </div>
        <p className="mt-2 md:text-xs text-md leading-6 text-slate-600">
          {step.description}
        </p>
      </div>
    </article>
  );
}

function CenterHub() {
  return (
    <div className="relative md:flex hidden mx-auto min-h-52.5 w-full max-w-sm flex-col items-center justify-center overflow-hidden rounded-3xl border border-primary/30 bg-white p-8 text-center shadow-[0_20px_60px_rgba(0,150,137,0.10)] md:absolute md:left-1/2 md:top-1/2 md:size-57.5 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-full">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,150,137,0.3),transparent_65%)]" />

      <div className="relative flex size-14 items-center justify-center rounded-2xl bg-primary-100 text-primary md:size-16 md:rounded-full">
        <Users className="size-7" />
      </div>

      <h3 className="relative mt-4 font-heading text-lg font-bold uppercase tracking-wide text-gray-950">
        Your Success
      </h3>

      <p className="relative mt-1 text-sm text-slate-500">Our Commitment</p>

      <div className="relative mt-5 flex h-1 w-20 overflow-hidden rounded-full">
        <span className="flex-1 bg-primary" />
        <span className="flex-1 bg-primary/70" />
        <span className="flex-1 bg-primary/40" />
        <span className="flex-1 bg-primary/20" />
      </div>
    </div>
  );
}
