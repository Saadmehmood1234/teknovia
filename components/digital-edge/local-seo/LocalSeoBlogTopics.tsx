import { ArrowUpRight, Clock3, FileText, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { localSeoBlogTopics } from "@/lib/data/digital-edge";

const readTime = (i: number) => 4 + (i % 3); 

export function LocalSeoBlogTopics() {
  const featuredTopic = localSeoBlogTopics[0];
  const remainingTopics = localSeoBlogTopics.slice(1);

  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <TopBadge data="LOCAL SEO INSIGHTS" />
          </div>
          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Explore Our <span className="text-primary">Local SEO</span> Insights
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
            Practical guides, strategies, and insights to help local businesses
            improve visibility, rankings, and customer reach.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-12">
          {featuredTopic && (
            <article className="group cursor-pointer relative flex min-h-95 flex-col justify-between overflow-hidden rounded-3xl bg-[#284545] p-6 text-white sm:p-8 lg:col-span-5 lg:min-h-full">
              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="absolute -bottom-24 -right-24 size-72 rounded-full bg-primary/40 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-primary/50" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] backdrop-blur">
                  <Sparkles className="size-3.5 text-primary-300" />
                  Featured Guide
                </span>
                <span className="font-mono text-xs font-bold text-white/40">
                  01
                </span>
              </div>

              <div className="relative z-10 mt-16">
                <h3 className="font-heading text-2xl font-black leading-tight tracking-tight sm:text-3xl xl:text-[34px]">
                  {featuredTopic}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
                  Discover practical strategies and actionable insights
                  designed to help your business perform better in local search.
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="inline-flex items-center gap-2 text-xs text-white/50">
                    <Clock3 className="size-3.5" />
                    5 min read
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold">
                    Read guide
                    <span className="flex size-10 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="size-4.5" />
                    </span>
                  </span>
                </div>
              </div>
            </article>
          )}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-7">
            {remainingTopics.map((topic, index) => (
              <article
                key={topic}
                className="group cursor-pointer relative flex min-h-47.5 flex-col justify-between overflow-hidden rounded-3xl border border-gray-200 bg-gray-50/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,150,137,0.10)] sm:p-6 sm:last:odd:col-span-2"
              >
                <span
                  className="pointer-events-none absolute -bottom-4 right-3 select-none font-mono text-[96px] font-black leading-none text-transparent transition-all duration-500 group-hover:-translate-y-1"
                  style={{ WebkitTextStroke: "1.5px rgba(0,150,137,0.15)" }}
                >
                  {String(index + 2).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-400 transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    <FileText className="size-5" />
                  </div>
                  <ArrowUpRight className="size-5 text-gray-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>

                <div className="relative z-10 mt-8">
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em]">
                    <span className="text-primary">Local SEO</span>
                    <span className="size-1 rounded-full bg-gray-300" />
                    <span className="inline-flex items-center gap-1 font-medium normal-case tracking-normal text-gray-400">
                      <Clock3 className="size-3" />
                      {readTime(index)} min read
                    </span>
                  </div>
                  <h3 className="max-w-[85%] font-heading text-base font-bold leading-snug text-gray-950 sm:text-[17px]">
                    {topic}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}