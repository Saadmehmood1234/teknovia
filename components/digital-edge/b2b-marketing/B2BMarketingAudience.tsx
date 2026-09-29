import {  Check } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { b2bAudienceTypes } from "@/lib/data/digital-edge";
import Image from "next/image";

const goals = [
  "Generate more qualified business enquiries",
  "Reach decision-makers",
  "Enter new markets",
  "Build industry authority",
  "Promote SaaS or technology solutions",
  "Find distributors and channel partners",
  "Strengthen their online presence",
  "Build a predictable digital lead pipeline",
];

export function B2BMarketingAudience() {
  return (
    <section className="border-b border-gray-100 bg-white py-8 sm:py-16">
      <Container>
        <div className="grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden bg-gray-950 p-7 text-white sm:p-10 lg:p-12">
            <Image
              src="/images/digital-edge/b2b-benefits.png"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gray-950/75" />
            <div className="hero-grid pointer-events-none absolute inset-0 opacity-15" />
            <div className="relative z-10">
              <TopBadge data="WHO CAN BENEFIT?" />

              <h2 className="mt-5 max-w-lg font-heading text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                Built for businesses ready to{" "}
                <span className="text-primary-300">
                  grow beyond their existing reach.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                B2B marketing can help businesses reach specific industries,
                locations, company types, and groups of decision-makers.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-2">
                {b2bAudienceTypes.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-2 items-center border border-white/10 bg-black/20 p-4 backdrop-blur-sm transition-colors duration-300 hover:border-primary-300/30 hover:bg-white/10"
                    >
                      <Icon className="size-5 text-primary-300" />

                      <p className="text-xs font-bold text-white">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:mt-0 mt-8 sm:px-10 lg:px-12">
            <div className="flex items-center justify-between border-b border-gray-200 pb-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                  Growth objectives
                </p>
                <h3 className="mt-1 font-heading text-xl font-bold text-gray-950">
                  What are you trying to achieve?
                </h3>
              </div>
            </div>

            <div className="mt-2 divide-y divide-gray-200">
              {goals.map((goal, index) => (
                <div key={goal} className="group flex items-center gap-4 py-4">
                  <span className="font-mono text-[10px] font-bold tracking-widest text-gray-300 group-hover:text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
                    <Check className="size-3.5" />
                  </div>

                  <p className="text-sm font-semibold text-gray-700 transition-colors group-hover:text-gray-950">
                    {goal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
