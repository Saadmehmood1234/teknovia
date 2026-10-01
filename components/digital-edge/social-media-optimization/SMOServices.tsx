import {
  ChartNoAxesColumn,
  ChartPie,
  FilterIcon,
  Headset,
  Megaphone,
  ShieldCheck,
  SquarePen,
  Target,
  Users,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { CgHashtag } from "react-icons/cg";

const smoServices = [
  {
    icon: Target,
    number: "01",
    title: "Strategy Development",
    description:
      "We create customized social media strategies aligned with your business goals.",
  },
  {
    icon: SquarePen,
    number: "02",
    title: "Content Creation",
    description:
      "Engaging and creative content that connects, informs, and converts your audience.",
  },
  {
    icon: Users,
    number: "03",
    title: "Community Management",
    description:
      "We engage with your audience, answer queries, and build strong relationships.",
  },
  {
    icon: Megaphone,
    number: "04",
    title: "Social Media Marketing",
    description:
      "Targeted campaigns to increase visbility, engagement, and brand awareness.",
  },
  {
    icon: ChartNoAxesColumn,
    number: "05",
    title: "Page Optimisation",
    description:
      "We optimise your social media profiles to attract more visitors and build trust.",
  },
  {
    icon: CgHashtag,
    number: "06",
    title: "Hashtag Research",
    description:
      "We find the best trending and relevant hashtags to maximize your content reach.",
  },
  {
    icon: ChartPie,
    number: "07",
    title: "Analytics & Reporting",
    description:
      "Detailed reports and insights to track performance and measure success.",
  },
  {
    icon: ShieldCheck,
    number: "08",
    title: "Reputation Management",
    description:
      "We monitor your brand image and manage feedback to build a positive reputation.",
  },
];

const smoServiceFeatures = [
  {
    icon: Users,
    text: "More Engagement More Followers",
  },
  {
    icon: Target,
    text: "Better Reach Better Visibility",
  },
  {
    icon: FilterIcon,
    text: "Quality Leads Higher Conversions",
  },
  {
    icon: Headset,
    text: "Dedicated Support All the Way",
  },
];

export function SMOServices() {
  return (
    <section
      id="optimisation"
      className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-20" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="OUR SMO Services" centerItem />

          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            Complete Social Media Solutions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            We help businesses build their brand, engage their audiences, and
            achieve remarkable growth on social media platforms.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
          {smoServices.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="relative bg-white p-6 sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-14 items-center justify-center rounded-full bg-primary-50 text-primary">
                    <Icon className="size-9" />
                  </div>

                  <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-gray-300">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-base font-bold text-gray-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="relative mt-8 flex flex-col rounded-2xl border border-primary/15 bg-[#0D5C56] p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          {smoServiceFeatures?.map((item, index) => (
            <div
              key={item.text}
              className={`flex min-w-0 flex-1 items-center gap-4 py-3 lg:justify-center lg:py-0 ${
                index < smoServiceFeatures.length - 1
                  && "border-b border-primary-100/20 lg:border-b-0"
              }`}
            >
              <item.icon className="size-7 shrink-0 text-white sm:size-8 ml-2" />

              <p className="text-sm leading-5 text-white/70 sm:text-base sm:leading-6">
                {item.text}
              </p>
              {index < smoServiceFeatures.length - 1 && (
                <div className="w-px bg-primary-100/50 h-10 lg:block hidden" />
              )}
            </div>
          ))}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
      </Container>
    </section>
  );
}
