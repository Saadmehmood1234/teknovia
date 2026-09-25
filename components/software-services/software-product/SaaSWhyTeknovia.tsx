import {
  CloudCog,
  Handshake,
  Layers3,
  LockKeyhole,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

const reasons = [
  {
    number: "01",
    title: "Product Development Expertise",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "In-House Software Products",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Scalable Cloud Architecture",
    icon: CloudCog,
  },
  {
    number: "04",
    title: "Agile Development Process",
    icon: RefreshCw,
  },
  {
    number: "05",
    title: "Security-First Approach",
    icon: LockKeyhole,
  },
  {
    number: "06",
    title: "Long-Term Technology Partner",
    icon: Handshake,
  },
];

export function SaaSWhyTeknovia() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-16">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/saas-why-teknovia.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[#040506]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,150,137,0.14),transparent_55%)]" />

      <Container className="relative">
        <div className="flex w-full flex-col items-center justify-between gap-6 text-center">
          <div className="max-w-2xl">
            <p className="font-mono text-lg font-extrabold uppercase tracking-[0.2em] text-primary">
              WHY TEKNOVIA
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-white/70 sm:text-4xl">
              More Than a Development Team
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-400 ">
              We bring product thinking, engineering expertise, and long-term
              partnership together to turn ideas into scalable software.
            </p>
          </div>
        </div>
        <div className="relative hidden md:block mx-auto mt-8 max-w-5xl lg:mt-16">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-primary/40 to-transparent md:block"
          />
          <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
            <div className="flex size-24 items-center justify-center rounded-full border border-primary bg-white shadow-[0_10px_40px_rgba(0,150,137,0.08)]">
              <div className="flex size-16 items-center justify-center rounded-full bg-primary text-center">
                <span className="font-heading text-xs font-bold uppercase leading-4 tracking-wider text-white">
                  Why
                  <br />
                  Us
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-0">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={reason.number}
                  className="relative md:grid md:min-h-32 md:grid-cols-2"
                >
                  <div
                    className={`relative flex items-center ${
                      isLeft
                        ? "md:justify-end md:pr-20"
                        : "md:col-start-2 md:justify-start md:pl-20"
                    }`}
                  >
                    <div className="relative flex w-full max-w-97.5 items-center gap-4">
                      <span className="absolute right-4 top-3 font-mono text-md font-bold tracking-wider text-gray-200 transition-colors duration-300 group-hover:text-primary">
                        {reason.number}
                      </span>
                      <div className="relative flex size-12 shrink-0 items-center justify-center text-primary">
                        <Icon className="size-5" />
                        <span className="absolute -bottom-7 left-1/2 h-7 w-px bg-primary/45 md:hidden" />
                      </div>
                      <h3 className="font-heading text-base font-bold leading-5 text-white sm:text-lg sm:leading-6">
                        {reason.title}
                      </h3>
                      <span
                        className={`absolute top-1/2 hidden h-px w-20 bg-primary/60 md:block ${
                          isLeft ? "-right-20" : "-left-20"
                        }`}
                      />
                      <span
                        className={`absolute top-1/2 hidden size-2.5 -translate-y-1/2 rounded-full border-2 border-white bg-primary shadow-[0_0_0_4px_rgba(0,150,137,0.10)] md:block ${
                          isLeft ? "-right-21.5" : "-left-21.25"
                        }`}
                      />
                    </div>
                  </div>
                  {isLeft && <div className="hidden md:block" />}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 md:hidden">
          <div className="relative">
            <div className="absolute bottom-6 left-6 top-6 w-px bg-primary/60" />

            <div className="space-y-5">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.number}
                    className="group relative flex items-center gap-4"
                  >
                    <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_0_1px_rgba(0,150,137,0.15)]">
                      <Icon className="size-6" />
                    </div>
                    <div className="flex min-h-18.5 flex-1 items-center justify-between">
                      <h3 className="pr-3 font-heading text-xl font-bold leading-5 text-white/70">
                        {reason.title}
                      </h3>

                      <span className="shrink-0 font-mono text-xl font-bold text-primary/50">
                        {reason.number}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-14 flex max-w-3xl items-center justify-center gap-3 text-center lg:mt-20">
          <span className="size-1.5 rounded-full bg-primary" />

          <p className="text-xs font-medium uppercase tracking-[0.16em] text-gray-400 sm:text-sm">
            Strategy
            <span className="mx-2 text-primary">·</span>
            Engineering
            <span className="mx-2 text-primary">·</span>
            Partnership
          </p>

          <span className="size-1.5 rounded-full bg-primary" />
        </div>
      </Container>
    </section>
  );
}
