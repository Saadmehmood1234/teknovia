import Image from "next/image";
import { Lightbulb, Puzzle, Settings2, TrendingUp } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { ecommerceTechnologies } from "@/lib/data/ecommerce-solutions-data";

const HERO_IMAGE = "/images/ecommerce2.png";


const accents = [
  {
    card: "from-emerald-50/90",
    pill: "bg-emerald-100 text-emerald-900",
    icon: "bg-emerald-100 text-emerald-700",
    dot: "bg-emerald-500 shadow-emerald-500/40",
  },
  {
    card: "from-purple-50/90",
    pill: "bg-purple-100 text-purple-900",
    icon: "bg-purple-100 text-purple-700",
    dot: "bg-purple-500 shadow-purple-500/40",
  },
  {
    card: "from-sky-50",
    pill: "bg-sky-100 text-sky-900",
    icon: "bg-sky-100 text-sky-700",
    dot: "bg-sky-500 shadow-sky-500/40",
  },
  {
    card: "from-orange-50/90",
    pill: "bg-orange-100 text-orange-900",
    icon: "bg-orange-100 text-orange-700",
    dot: "bg-orange-500 shadow-orange-500/40",
  },
  {
    card: "from-indigo-50/90",
    pill: "bg-indigo-100 text-indigo-900",
    icon: "bg-indigo-100 text-indigo-700",
    dot: "bg-indigo-500 shadow-indigo-500/40",
  },
];

const benefits = [
  {
    title: "Flexibility",
    text: "Choose the right approach for your business.",
    icon: Settings2,
    tint: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Integration",
    text: "Connect with your existing systems and business tools.",
    icon: Puzzle,
    tint: "bg-purple-100 text-purple-700",
  },
  {
    title: "Scalability",
    text: "Designed to support your growth.",
    icon: TrendingUp,
    tint: "bg-sky-100 text-sky-700",
  },
  {
    title: "Future-Ready",
    text: "Adapt to new technologies and business opportunities.",
    icon: Lightbulb,
    tint: "bg-orange-100 text-orange-600",
  },
];

export function EcommerceTechnology() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-128 rounded-full bg-[radial-linear(circle,rgba(167,139,250,0.18),rgba(56,189,248,0.10)_50%,transparent_70%)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <TopBadge data="eCommerce Technology Landscape" />

            <h2 className="mt-4 font-heading text-3xl font-black leading-[1.05] tracking-tight text-gray-950 sm:text-4xl">
              eCommerce
              <br />
              <span className="bg-primary bg-clip-text text-transparent">
                Technology Landscape
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base font-semibold leading-7 text-gray-900 sm:text-lg">
              Custom-built commerce for businesses that need more than
              off-the-shelf platforms.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              TEKNOVIA focuses on building custom eCommerce platforms around
              your business processes, products and growth objectives. Where
              required, we can also work with established commerce ecosystems
              and integrate with existing platforms.
            </p>
          </div>

          <div className="relative mx-auto aspect-4/3 w-full max-w-xl">
            <Image
              src={HERO_IMAGE}
              alt="Custom eCommerce platform across desktop and mobile"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-contain"
              priority={false}
            />
          </div>
        </div>
        <div className="relative mt-14 lg:mt-16">
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-2.75 hidden h-0.5 bg-linear-to-r from-emerald-400 via-purple-400 via-35% via-sky-400 via-60% to-indigo-400 lg:block"
          />

          <ul className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {ecommerceTechnologies.map((item, index) => {
              const Icon = item.icon;
              const accent = accents[index % accents.length];
              const featured = /custom/i.test(item.title);

              return (
                <li
                  key={item.title}
                  className={`flex flex-col ${featured ? "lg:-mt-6" : ""}`}
                >
                  <article
                    className={`flex flex-1 flex-col items-center rounded-3xl border bg-linear-to-b ${accent.card} to-white px-5 pb-6 pt-7 text-center ${
                      featured
                        ? "border-sky-300 shadow-[0_18px_50px_rgba(14,116,184,0.18)] ring-1 ring-sky-200"
                        : "border-gray-200/80 shadow-[0_8px_28px_rgba(15,23,42,0.05)]"
                    }`}
                  >
                    <div
                      className={`flex size-16 items-center justify-center rounded-2xl ${accent.icon}`}
                    >
                      <Icon strokeWidth={1.6} className="size-8" />
                    </div>

                    <h3
                      className={`mt-5 rounded-full px-4 py-1.5 font-heading text-sm font-bold ${accent.pill}`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </article>
                  <div className="relative hidden h-6 items-end justify-center lg:flex">
                    <span aria-hidden className="absolute bottom-3 h-3 w-px bg-gray-300" />
                    <span
                      aria-hidden
                      className={`relative size-5.5 rounded-full border-[3px] border-white shadow-lg ${accent.dot}`}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {benefits.map(({ title, text, icon: Icon, tint }) => (
            <li key={title} className="flex items-center gap-4">
              <div
                className={`flex size-14 shrink-0 items-center justify-center rounded-full ${tint}`}
              >
                <Icon strokeWidth={1.7} className="size-6" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-gray-950">
                  {title}
                </h3>
                <p className="mt-0.5 text-sm leading-5 text-gray-600">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}