import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { MessageCircleQuestion } from "lucide-react";
import { aeoServices } from "@/lib/data/digital-edge/seo-data";
import { FeatureListItem } from "@/components/ui/ListItem";
import { BackgroundEffect } from "@/components/Background";

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
            <div className="mt-8 relative overflow-hidden rounded-2xl border border-primary-200 bg-[#18342F]">
              <BackgroundEffect />
              <div className="border-b border-primary-700 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <MessageCircleQuestion className="size-5" aria-hidden />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Our Approach
                    </p>

                    <h3 className="mt-0.5 font-heading text-base font-bold text-gray-300">
                      Our seven-step process
                    </h3>
                  </div>
                </div>
              </div>

              <ol className="px-6 py-6">
                {process.map((step, i) => (
                  <li key={step} className="relative flex gap-4 pb-5 last:pb-0">
                    {i < process.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute left-3.5 top-8 h-[calc(100%-1.75rem)] w-px bg-primary/20"
                      />
                    )}
                    <span className="relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/5 text-xs font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex min-h-7 items-center">
                      <span className="text-sm font-medium leading-6 text-gray-200">
                        {step}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div>
            <p className="mb-8 font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
              AEO SERVICES
            </p>

            <ul className="border-t border-gray-200 lg:col-span-7">
              {aeoServices.map((item, index) => (
                <FeatureListItem
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
