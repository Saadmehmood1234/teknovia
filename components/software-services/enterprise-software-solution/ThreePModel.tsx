"use client";

import {
  Activity,
  BarChart3,
  Building2,
  Database,
  Gauge,
  Maximize2,
  Network,
  Settings,
  ShieldAlert,
  Target,
  TrendingUp,
  Users,
  UserX,
  Workflow,
} from "lucide-react";
import Image from "next/image";

const challenges = {
  process: [
    {
      icon: Database,
      title: "Data Silos",
      description:
        "Disparate systems and isolated data create duplication and delays.",
    },
    {
      icon: Settings,
      title: "Inefficient Workflows",
      description:
        "Complex approvals and broken processes slow down operations.",
    },
    {
      icon: Network,
      title: "Legacy Systems",
      description:
        "Outdated technology limits agility, integrations and innovation.",
    },
  ],
  people: [
    {
      icon: Workflow,
      title: "Manual Processes",
      description: "Repetitive, time-consuming tasks reduce productivity.",
    },
    {
      icon: UserX,
      title: "Human Errors",
      description: "Error-prone operations lead to mistakes and rework.",
    },
    {
      icon: Users,
      title: "Poor Collaboration",
      description:
        "Disconnected teams and lack of communication slow progress.",
    },
  ],
  performance: [
    {
      icon: TrendingUp,
      title: "Lack of Visibility",
      description:
        "Limited real-time insights hinder faster, data-driven decisions.",
    },
    {
      icon: ShieldAlert,
      title: "Security Risks",
      description:
        "Growing threats and vulnerabilities put critical data at risk.",
    },
    {
      icon: Maximize2,
      title: "Scalability Issues",
      description:
        "Systems struggle to scale with business growth and changing needs.",
    },
  ],
};

const metrics = [
  { icon: Gauge, title: "Improved", subtitle: "Efficiency" },
  { icon: Settings, title: "Operational", subtitle: "Excellence" },
  { icon: BarChart3, title: "Better", subtitle: "Decisions" },
  { icon: Activity, title: "Sustainable", subtitle: "Growth" },
];

function ChallengeCard({
  type,
  items,
}: {
  type: "process" | "people" | "performance";
  items: typeof challenges.process;
}) {
  const styles = {
    process: {
      border: "border-emerald-500/70",
      icon: "bg-emerald-500/20 text-emerald-300 ring-1 ring-primbg-primary/40",
    },
    people: {
      border: "border-primary/70",
      icon: "bg-primborder-primary/20 text-sky-300 ring-1 ring-primary/40",
    },
    performance: {
      border: "border-orange-500/70",
      icon: "bg-orange-500/20 text-orange-300 ring-1 ring-orange-400/40",
    },
  };

  const style = styles[type];

  return (
    <div
      className={`relative rounded-3xl border ${style.border} bg-slate-950/70 p-5 backdrop-blur-md`}
    >
      <div className="space-y-5">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex gap-4">
              <div
                className={`mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${style.icon}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Pillar({
  type,
  title,
  description,
}: {
  type: "people" | "process" | "performance";
  title: string;
  description: string;
}) {
  const styles = {
    people: {
      color: "text-[#38BDF8]",
      border: "border-[#38BDF8]/60",
      shadow: "shadow-[0_0_35px_rgba(56,189,248,0.35)]",
    },
    process: {
      color: "text-primary",
      border: "border-primary/60",
      shadow: "shadow-[0_0_35px_rgba(52,211,153,0.35)]",
    },
    performance: {
      color: "text-orange-400",
      border: "border-orange-400/60",
      shadow: "shadow-[0_0_35px_rgba(251,146,60,0.35)]",
    },
  };

  const style = styles[type];

  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 ${style.border} bg-slate-100/95 p-3 sm:h-40 sm:w-40 sm:p-4 ${style.shadow}`}
      >
        <h3
          className={`text-[11px] font-bold sm:text-base lg:text-lg ${style.color}`}
        >
          {title}
        </h3>
        <p className="mt-1.5 text-[9px] font-medium leading-tight text-slate-800 sm:mt-2 sm:text-xs sm:leading-4 lg:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function ThreePModel() {
  return (
    <section className="relative overflow-hidden py-12 text-white sm:py-16">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/3d-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#040506]/85" />

      {/* Subtle center glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.10),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="flex items-center justify-center gap-3 text-sm font-bold tracking-[0.18em] text-primary sm:text-base">
            <span className="hidden h-px w-12 bg-primary sm:block" />
            BUSINESS CHALLENGES WE SOLVE
            <span className="hidden h-px w-12 bg-primary sm:block" />
          </div>

          <h2 className="mt-5 text-3xl font-black uppercase tracking-tight sm:text-4xl">
            The <span className="text-primary">3P Model</span> for Enterprise
            Excellence
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-base text-slate-200">
            People. Process. Performance. The 3 pillars we strengthen to solve
            your toughest business challenges.
          </p>
        </div>

        <div className="mt-14 hidden lg:block">
          <div className="grid grid-cols-[280px_1fr_280px] items-center gap-6 xl:grid-cols-[320px_1fr_320px] xl:gap-10">
            <div className="space-y-8">
              <ChallengeCard type="process" items={challenges.process} />
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-162.5">
              <div className="absolute inset-[4%] rounded-full border border-primary/20" />
              <div className="absolute inset-[9%] rounded-full border border-dashed border-primary/40" />
              <div className="absolute inset-[15%] rounded-full bg-primborder-primary/10 blur-3xl" />
              <div className="absolute inset-[14%] rounded-full bg-[conic-gradient(from_0deg,#38bdf8_0deg_115deg,transparent_115deg_125deg,#FF8904,transparent_235deg_245deg,#009689,transparent_355deg_360deg)] p-3">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#061426]">
                  <div className="relative p-2 z-20 flex h-[50%] w-[50%] flex-col items-center justify-center rounded-full border border-primary/40 bg-[#071c34] text-center shadow-[0_0_50px_rgba(14,165,233,0.2)]">
                    <Building2 className="h-9 w-9 text-sky-300" />
                    <h3 className="mt-3 text-xs font-black uppercase leading-tight ">
                      Sustainable
                      <br />
                      Business Growth
                    </h3>
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 top-[-2%] z-10 -translate-x-1/2">
                <Pillar
                  type="people"
                  title="PEOPLE"
                  description="Empower your people and teams"
                />
              </div>

              <div className="absolute bottom-[2%] left-[8%] z-10">
                <Pillar
                  type="process"
                  title="PROCESS"
                  description="Streamline and automate with smart processes"
                />
              </div>

              <div className="absolute bottom-[2%] right-[8%] z-10">
                <Pillar
                  type="performance"
                  title="PERFORMANCE"
                  description="Drive measurable results and business impact"
                />
              </div>
              <div className="absolute right-0 top-[12%] z-0 h-px w-[12%] border-t border-dashed border-sky-400/50" />
              <div className="absolute left-0 bottom-[30%] z-0 h-px w-[12%] border-t border-dashed border-emerald-400/50" />
              <div className="absolute right-0 bottom-[30%] z-0 h-px w-[12%] border-t border-dashed border-orange-400/50" />
            </div>
            <div className="space-y-8">
              <ChallengeCard type="people" items={challenges.people} />
              <ChallengeCard
                type="performance"
                items={challenges.performance}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 lg:hidden">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-[4%] rounded-full border border-primary/20" />
            <div className="absolute inset-[9%] rounded-full border border-dashed border-primary/40" />
            <div className="absolute inset-[15%] rounded-full bg-primborder-primary/10 blur-3xl" />

            <div className="absolute inset-[14%] rounded-full bg-[conic-gradient(from_0deg,#38bdf8_0deg_115deg,transparent_115deg_125deg,#FF8904,transparent_235deg_245deg,#009689,transparent_355deg_360deg)] p-2 sm:p-3">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#061426]">
                <div className="relative z-20 flex h-[50%] w-[50%] flex-col items-center justify-center rounded-full border border-primary/40 bg-[#071c34] text-center shadow-[0_0_50px_rgba(14,165,233,0.2)]">
                  <Building2 className="h-6 w-6 text-sky-300 sm:h-8 sm:w-8" />
                  <h3 className="mt-1.5 text-[10px] font-black uppercase leading-tight sm:text-xs">
                    Sustainable
                    <br />
                    Business Growth
                  </h3>
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 top-[6%] sm:top-[-8%] z-10 -translate-x-1/2">
              <Pillar
                type="people"
                title="PEOPLE"
                description="Empower your people and teams"
              />
            </div>
            <div className="absolute sm:bottom-[2%] sm:left-[6%] bottom-[20%] left-[10%] z-10">
              <Pillar
                type="process"
                title="PROCESS"
                description="Streamline and automate with smart processes"
              />
            </div>
            <div className="absolute sm:bottom-[2%] sm:right-[6%] bottom-[20%] right-[10%] z-10">
              <Pillar
                type="performance"
                title="PERFORMANCE"
                description="Drive measurable results and business impact"
              />
            </div>
          </div>

          <div className="mt-10 space-y-6">
            <ChallengeCard type="process" items={challenges.process} />
            <ChallengeCard type="people" items={challenges.people} />
            <ChallengeCard type="performance" items={challenges.performance} />
          </div>
        </div>

        <div className="mt-12 rounded-4xl border border-primary/50 bg-slate-950/60 px-5 py-6 backdrop-blur-md sm:mt-14 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_2fr] lg:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-primborder-primary/10">
                <Target className="h-8 w-8 text-primary-300" />
              </div>
              <div>
                <p className="text-xl font-black uppercase">One 3P Focus.</p>
                <p className="text-xl font-black uppercase text-primary">
                  Endless Possibilities.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 divide-x divide-slate-700/70 sm:grid-cols-4">
              {metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.title}
                    className="flex items-center gap-3 px-4 first:pl-0 last:pr-0"
                  >
                    <Icon className="h-8 w-8 shrink-0 text-primary" />
                    <div className="text-sm font-semibold leading-5">
                      <p>{metric.title}</p>
                      <p>{metric.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
