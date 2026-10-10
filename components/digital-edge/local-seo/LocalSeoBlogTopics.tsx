import { Container } from "@/components/ui/Container";
import { localSeoBlogTopics } from "@/lib/data/digital-edge/local-seo-data";
import { BlogGrid } from "@/components/ui/BlogGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

const readTime = (i: number) => 4 + (i % 3);

export function LocalSeoBlogTopics() {
  const featuredTopic = localSeoBlogTopics[0];
  const remainingTopics = localSeoBlogTopics.slice(1);

  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <Container className="relative">
        <SectionHeading
          variant="centered"
          badge="LOCAL SEO INSIGHTS"
          title="Explore Our Local SEO Insights."
          description="Practical guides, strategies, and insights to help local businesses improve visibility, rankings, and customer reach."
        />
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
