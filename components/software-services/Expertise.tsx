import { Check } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { BackgroundEffect } from "../Background";
import { expertise } from "@/lib/data/software-services";

export default function Expertise() {
  return (
    <section className="border-b border-gray-100 py-10 sm:py-20">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="Our Expertise" centerItem />

          <h2 className="mt-5 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl lg:text-[2.7rem]">
            Smart Solutions.
            <span className="pl-2 text-primary">Stronger Businesses.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            From enterprise-grade systems to emerging technologies, we help
            organizations improve efficiency, automate processes, and accelerate
            growth.
          </p>
        </div>

        <div className="grid gap-5 sm:mt-16 mt-8 lg:col-span-8">
          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="relative overflow-hidden rounded-3xl bg-[#18342F] ring-1 ring-white/10"
              >
                <BackgroundEffect />

                <div className="relative grid gap-8 p-6 sm:p-8 md:grid-cols-5">
                  <div className="md:col-span-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/30">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 font-heading text-xl font-bold text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-gray-300">
                      {item.description}
                    </p>
                  </div>

                  <ul className="space-y-3 border-t border-white/10 pt-6 md:col-span-2 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-200"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                          <Check className="h-3 w-3 text-primary" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
