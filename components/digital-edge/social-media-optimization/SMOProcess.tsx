import {
  BarChart3,
  ChevronRight,
  ClipboardCheck,
  Megaphone,
  Search,
  ShieldCheck,
  SquarePen,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";

import { Container } from "@/components/ui/Container";

export const process = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We understand your business goals, target audience and current social media presence.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Strategize",
    description:
      "We create a customized social media strategy tailored to your brand and objectives.",
  },
  {
    number: "03",
    icon: SquarePen,
    title: "Plan & Create",
    description:
      "We plan content and create engaging posts, visuals and campaigns that connect.",
  },
  {
    number: "04",
    icon: Megaphone,
    title: "Publish & Engage",
    description:
      "We publish content consistently and engage with your audience to build strong relationships.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Analyze",
    description:
      "We track performance using advanced analytics to measure results and identify opportunities.",
  },
  {
    number: "06",
    icon: Trophy,
    title: "Optimize & Grow",
    description:
      "We optimize strategies continuously to maximize growth and deliver better results.",
  },
];

const principles = [
  {
    icon: Target,
    title: "Goal Focused",
    description: "Every step is aligned with your business objectives.",
  },
  {
    icon: Users,
    title: "Transparent Process",
    description: "You're informed at every stage of the journey.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description: "We focus on metrics that matter and drive real growth.",
  },
  {
    icon: ShieldCheck,
    title: "Long Term Growth",
    description: "We build sustainable strategies for lasting brand success.",
  },
];

export function SMOProcess() {
  const lastIndex = process.length - 1;

  return (
    <section
      aria-labelledby="process-heading"
      className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16"
    >
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="process-heading"
            className="font-heading text-4xl font-black uppercase tracking-tight text-gray-950 "
          >
            How we <span className="text-primary">work</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-800">
            A simple, transparent and result-driven process to{" "}
            <span className="font-semibold text-primary">grow your brand</span>{" "}
            on social media.
          </p>
        </div>

        <div className="relative mt-16">
          <span
            aria-hidden
            className="absolute bottom-1.25 left-[calc(100%/12-10px)] right-[calc(100%/12-10px)] hidden border-t border-dashed border-primary/50 lg:block"
          />

          <ol className="relative grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-6">
            {process.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === lastIndex;

              return (
                <li key={item.number} className="relative flex flex-col">
                  <div className="relative flex-1 rounded-2xl border border-gray-200 bg-white px-4 pb-6 pt-8 text-center shadow-sm">
                    <span className="absolute -top-5 left-1/2 flex size-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-white shadow-md ring-4 ring-[#FAFAFA]">
                      {item.number}
                    </span>

                    <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#0D5C56] text-white shadow-lg shadow-primary/20">
                      <Icon className="size-7" aria-hidden />
                    </div>

                    <h3 className="mt-5 font-heading text-sm font-bold uppercase tracking-wide text-primary">
                      {item.title}
                    </h3>

                    <span
                      aria-hidden
                      className="mx-auto mt-2 block h-0.5 w-5 rounded-full bg-primary"
                    />

                    <p className="mt-3 text-sm leading-6 text-gray-700">
                      {item.description}
                    </p>
                  </div>
                  <div
                    aria-hidden
                    className="hidden flex-col items-center lg:flex"
                  >
                    <span className="h-8 border-l border-dashed border-primary/50" />
                    <span className="size-3 rounded-full border-2 border-primary bg-white" />
                  </div>
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute -right-6 top-46 hidden w-6 justify-center text-primary lg:flex"
                    >
                      <ChevronRight className="size-5" strokeWidth={3} />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-3xl bg-[#0D5C56] text-white shadow-xl shadow-primary/20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <ul className="grid divide-y divide-white/15 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <li
                  key={item.title}
                  className="flex items-start gap-4 p-6 sm:p-7"
                >
                  <Icon className="size-10 shrink-0 text-white" aria-hidden />

                  <div>
                    <h3 className="font-heading text-base font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/80">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
