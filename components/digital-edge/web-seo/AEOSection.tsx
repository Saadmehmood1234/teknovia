import { Container } from "@/components/ui/Container";
import { NumberedServiceCard } from "./NumberedServiceCard";
import { TopBadge } from "@/components/ui/Top-Badge";
import { MessageCircleQuestion } from "lucide-react";
import { aeoServices } from "@/lib/data/digital-edge/seo-data";

const process = [
  "Research",
  "Understand",
  "Create",
  "Structure",
  "Optimize",
  "Monitor",
  "Improve",
];

export function AEOSection() {
  return (
    <section
      aria-labelledby="aeo-heading"
      className="border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="lg:sticky lg:top-16 lg:self-start">
            <TopBadge data="ANSWER ENGINE OPTIMIZATION" />

            <h2 className="mt-4 font-heading text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl">
              Become the answer when customers ask
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
              Answer Engine Optimization (AEO) helps your website{" "}
              <strong>appear when people ask questions online.</strong>
            </p>

            <div className="mt-6 space-y-4 text-sm leading-7 text-gray-400">
              <p>
                It structures your content so search engines and answer
                platforms can{" "}
                <strong>
                  quickly understand and deliver the right information.
                </strong>
              </p>

              <p>
                AEO focuses on{" "}
                <strong>
                  natural-language questions, direct answers, FAQs, and useful,
                  well-structured content.
                </strong>
              </p>

              <p>
                It helps your business provide{" "}
                <strong>
                  clear and relevant answers at the moment customers are looking
                  for information.
                </strong>
              </p>
              <p>
                With effective AEO, your content can gain greater visibility
                across{" "}
                <strong>
                  featured answers, voice search, and AI-powered search
                  experiences.
                </strong>
              </p>
            </div>
            <div className="mt-10 rounded-2xl border border-gray-200 bg-[#FAFAFA] p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-white">
                  <MessageCircleQuestion className="size-5" aria-hidden />
                </div>
                <h3 className="font-heading text-base font-bold text-gray-950">
                  Our seven-step process
                </h3>
              </div>

              <ol className="mt-6">
                {process.map((step, i) => (
                  <li key={step} className="relative flex gap-4 pb-4 last:pb-0">
                    {i < process.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute left-3.25 top-7 h-[calc(100%-1.75rem)] w-px bg-primary/20"
                      />
                    )}
                    <span className="relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-white text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-sm font-semibold text-gray-900">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div>
            <div className="mb-6 flex flex-col gap-1 border-b border-gray-200 pb-5">
              <h3 className="font-heading text-xl font-bold text-gray-950">
                What we deliver
              </h3>
              <p className="text-sm text-gray-600">
                Everything your content needs to be found, understood, and
                quoted as the answer.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aeoServices.map((item, index) => (
                <NumberedServiceCard
                  key={item.title}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
