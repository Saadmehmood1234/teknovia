import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { localSeoBenefits } from "@/lib/data/digital-edge";

export function LocalSeoBenefits() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="KEY BENEFITS" centerItem />
          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl ">
            Benefits of <span className="text-primary">Local SEO</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Turn local searches into visibility, engagement, and measurable
            business growth.
          </p>
        </div>
        <div className="mx-auto mt-8 hidden max-w-6xl px-6 lg:grid [--orb:clamp(18rem,30vw,24.375rem)] grid-cols-[1fr_var(--orb)_1fr] items-stretch">
          {/* Left column */}
          <div className="flex flex-col justify-between py-[3%]">
            {localSeoBenefits.slice(0, 3).map((benefit, i, arr) => (
              <OrbitBenefit
                key={benefit.title}
                benefit={benefit}
                index={i}
                side="left"
                pushIn={!(arr.length === 3 && i === 1)}
              />
            ))}
          </div>

          {/* Orbit: every size is a % of --orb, so it scales cleanly */}
          <div className="relative aspect-square w-(--orb)">
            <div className="absolute inset-0 rounded-full border border-primary/30" />
            <div className="absolute inset-[9%] rounded-full border border-dashed border-primary/35" />

            <div className="absolute inset-[17.2%] z-20 overflow-hidden rounded-full border-8 border-white bg-primary-50 shadow-[0_20px_70px_rgba(0,150,137,0.15)]">
              <Image
                src="/images/digital-edge/seo-center.png"
                alt="Local SEO"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 256px, 22vw"
              />
              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-primary/20" />
            </div>

            <div className="absolute left-1/2 top-[82%] z-30 -translate-x-1/2 -translate-y-1/2">
              <div className="whitespace-nowrap rounded-full border border-white bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary shadow-sm">
                Local Growth
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-between py-[3%]">
            {localSeoBenefits.slice(3, 6).map((benefit, i, arr) => (
              <OrbitBenefit
                key={benefit.title}
                benefit={benefit}
                index={i + 3}
                side="right"
                pushIn={!(arr.length === 3 && i === 1)}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 lg:hidden">
          <div className="relative mx-auto size-[min(78vw,20rem)]">
            <div className="absolute inset-0 rounded-full border border-primary/30" />
            <div className="absolute inset-[9%] rounded-full border border-dashed border-primary/35" />
            <div className="absolute inset-[17.2%] overflow-hidden rounded-full border-[6px] border-white bg-primary-50 shadow-[0_20px_60px_rgba(0,150,137,0.15)]">
              <Image
                src="/images/digital-edge/seo-center.png"
                alt="Local SEO"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 55vw, 256px"
              />
            </div>
            <div className="absolute left-1/2 top-[82%] z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary shadow-sm">
              Local Growth
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {localSeoBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.title}
                  className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-gray-200 bg-[#FAFAFA] p-4 transition-all duration-300 hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-primary/5"
                >
                  <span className="absolute inset-y-0 left-0 w-1 bg-primary/0 transition-colors duration-300 group-hover:bg-primary" />

                  <div className="relative shrink-0">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-5" />
                    </div>
                    <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full border border-white bg-primary font-mono text-[9px] font-bold text-white shadow-sm">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="min-w-0 flex-1 font-heading text-sm font-bold leading-snug text-gray-950">
                    {benefit.title}
                  </h3>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}


type LocalSeoBenefit = (typeof localSeoBenefits)[number];

function OrbitBenefit({
  benefit,
  index,
  side,
  pushIn,
}: {
  benefit: LocalSeoBenefit;
  index: number;
  side: "left" | "right";
  pushIn: boolean; // top/bottom items sit further from the ring, so shorten their connector
}) {
  const Icon = benefit.icon;
  const isLeft = side === "left";

  return (
    <div
      className={`group flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"} ${
        pushIn
          ? isLeft
            ? "mr-[calc(var(--orb)*0.2)]"
            : "ml-[calc(var(--orb)*0.2)]"
          : ""
      }`}
    >
      <article
        className={`flex w-52 shrink-0 items-center gap-3 xl:w-60 xl:gap-4 ${
          isLeft ? "flex-row" : "flex-row-reverse text-right"
        }`}
      >
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-primary-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          <Icon className="size-5" />
        </div>
        <div className="min-w-0">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-heading text-sm font-bold leading-snug text-gray-950 xl:text-base">
            {benefit.title}
          </h3>
        </div>
      </article>

      {/* connector stretches to meet the ring */}
      <div className="relative h-px min-w-6 flex-1 bg-primary/20">
        <span
          className={`absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-primary ${
            isLeft ? "right-0" : "left-0"
          }`}
        />
      </div>
    </div>
  );
}
