import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { geoServices } from "@/lib/data/digital-edge";
import { BrainCircuit, Sparkles } from "lucide-react";

export function GEOSection() {
  return (
    <section className="relative overflow-hidden bg-[#050807] py-8 text-white sm:py-16">
      <div className="absolute inset-0 z-0">
        <div className="hero-grid absolute inset-0 opacity-10" />
        <div className="absolute left-1/2 top-0 size-150 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <TopBadge data="GENERATIVE ENGINE OPTIMIZATION" />

            <h2 className="mt-4 font-heading text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
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
            <p className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
              GEO SERVICES
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {geoServices.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-primary/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <Sparkles className="size-4 text-primary/60" />
                  </div>

                  <h3 className="mt-5 font-heading text-base font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
