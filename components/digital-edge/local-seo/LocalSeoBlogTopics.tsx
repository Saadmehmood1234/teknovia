import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { localSeoBlogTopics } from "@/lib/data/digital-edge/local-seo-data";
import { BlogGrid } from "@/components/ui/BlogGrid";

const readTime = (i: number) => 4 + (i % 3);

export function LocalSeoBlogTopics() {
  const featuredTopic = localSeoBlogTopics[0];
  const remainingTopics = localSeoBlogTopics.slice(1);

  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <TopBadge data="LOCAL SEO INSIGHTS" centerItem />
          </div>
          <h2 className="font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Explore Our <span className="text-primary">Local SEO</span> Insights
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
            Practical guides, strategies, and insights to help local businesses
            improve visibility, rankings, and customer reach.
          </p>
        </div>
        <BlogGrid
          featuredTopic={featuredTopic}
          remainingTopics={remainingTopics}
          category="LOCAL SEO"
          featuredDescription="Discover practical strategies and actionable insights designed to help your business perform better in local search."
          featuredReadTime={5}
          readTime={readTime}
        />
      </Container>
    </section>
  );
}
