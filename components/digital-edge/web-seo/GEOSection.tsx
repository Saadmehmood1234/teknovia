import { BackgroundEffect } from "@/components/Background";
import { Container } from "@/components/ui/Container";
import { FeatureListItem } from "@/components/ui/ListItem";
import { TopBadge } from "@/components/ui/Top-Badge";
import { geoServices } from "@/lib/data/digital-edge/seo-data";
import { BrainCircuit } from "lucide-react";

export function GEOSection() {
  return (
    <section
      aria-labelledby="geo-heading"
      className="border-b relative border-gray-100 bg-[#18342F] py-8 sm:py-16"
    >
      <BackgroundEffect />
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="lg:sticky lg:top-16 lg:self-start">
            <TopBadge data="GENERATIVE ENGINE OPTIMIZATION" />

            <h2 className="mt-4 font-heading text-3xl font-black leading-tight tracking-tight text-white/80 sm:text-4xl">
              Get Discovered in{" "}
              <span className="text-primary">AI-Powered Search</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
              GEO helps your business{" "}
              <strong>
                get discovered and referenced in AI-powered search and
                generative answer platforms.
              </strong>
            </p>

            <div className="mt-6 space-y-4 text-sm leading-7 text-gray-400">
              <p>
                It makes your website and content easier for AI systems to
                <strong>understand, evaluate, and reference.</strong>
              </p>

              <p>
                GEO focuses on{" "}
                <strong>
                  useful information, clear content, expertise, factual
                  accuracy, and strong digital presence.
                </strong>
              </p>

              <p>
                It helps your business become more visible when people use AI
                tools to{" "}
                <strong>
                  search, compare, ask questions, or find recommendations.
                </strong>
              </p>
              <p>
                With a strong GEO strategy, your content can improve its chances
                of being{" "}
                <strong>
                  included or cited in relevant AI-generated answers.
                </strong>
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BrainCircuit className="size-5" />
              </div>

              <p className="text-sm font-semibold text-white">
                Built for the changing search landscape
              </p>
            </div>
          </div>
          <div>
            <p className="mb-8 font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
              GEO SERVICES
            </p>

            <ul className="border-t border-primary/50 lg:col-span-7">
              {geoServices.map((item, index) => (
                <FeatureListItem
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  index={index}
                  titleColor="text-white/80"
                  descriptionColor="text-gray-300"
                  iconColor="text-primary"
                  borderColor="border-primary/50"
                  accentColor="bg-primary"
                  numberColor="text-gray-400"
                />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
