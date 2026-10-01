import {
  BarChart,
  SquarePen,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { CgHashtag } from "react-icons/cg";

const optimisationAreas = [
  {
    icon: Users,
    number: "01",
    title: "Profile Optimization",
    description:
      "Create a strong and consistent brand identity.",
  },
  {
    icon: SquarePen,
    number: "02",
    title: "Engaging Content",
    description:
      "High-quality content that connects with your audience.",
  },
  {
    icon: CgHashtag,
    number: "03",
    title: "Hashtag Strategy",
    description:
      "Target the risk keywords to increase your reach.",
  },
  {
    icon: BarChart,
    number: "04",
    title: "Audience Engagement",
    description:
      "Build meaningful connections and boost interactions.",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "",
    description:
      "Track performance and optimize for better results.",
  },
];

export function SMOOptimisation() {
  const lastIndex = optimisationAreas.length - 1;

  return (
    <section
      id="optimisation"
      aria-labelledby="optimisation-heading"
      className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-20" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="Optimize. Engage. Grow." centerItem />

          <h2
            id="optimisation-heading"
            className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl"
          >
            Stronger Presence. Better Results.
          </h2>
        </div>
        <ol className="relative mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-5 lg:gap-6">
          <span
            aria-hidden
            className="absolute bottom-7 left-6.75 top-7 w-px bg-linear-to-b from-primary/50 to-primary/10 lg:hidden"
          />
          <span
            aria-hidden
            className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-linear-to-r from-primary/50 to-primary/10 lg:block"
          />

          {optimisationAreas.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === lastIndex;

            return (
              <li
                key={item.number}
                className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
              >
                <div className="relative z-10 shrink-0">
                  <div
                    className={
                      isLast
                        ? "flex size-14 items-center justify-center rounded-full border-2 border-primary bg-primary text-white shadow-lg shadow-primary/25"
                        : "flex size-14 items-center justify-center rounded-full border-2 border-primary/25 bg-white text-primary shadow-sm"
                    }
                  >
                    <Icon className="size-6" aria-hidden />
                  </div>

                  <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full border border-primary/20 bg-white font-mono text-[10px] font-bold text-primary">
                    {item.number}
                  </span>
                </div>

                <div className="pt-1 lg:mt-6 lg:pt-0">
                  {item.title && (
                    <h3 className="font-heading text-base font-bold text-gray-950">
                      {item.title}
                    </h3>
                  )}

                  <p className="mt-1.5 max-w-xs text-sm leading-6 text-gray-600 lg:mx-auto">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mx-auto mt-16 flex max-w-4xl flex-col gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-base font-bold text-gray-950">
              One strategy. Multiple social touchpoints.
            </p>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              We adapt the content and execution to the platform instead of
              treating every channel the same.
            </p>
          </div>

          <Target
            className="hidden size-8 shrink-0 text-primary sm:block"
            aria-hidden
          />
        </div>
      </Container>
    </section>
  );
}