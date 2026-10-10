import { Container } from "@/components/ui/Container";
import { watsappBlogTopics } from "@/lib/data/digital-edge/watsapp-marketing-data";
import { BlogGrid } from "@/components/ui/BlogGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

const readTime = (i: number) => 4 + (i % 3);

export function WhatsAppBlogTopics() {
  const featuredTopic = watsappBlogTopics[0];
  const remainingTopics = watsappBlogTopics.slice(1);

  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <Container className="relative">
        <SectionHeading
          variant="centered"
          badge="WHATSAPP MARKETING INSIGHTS"
          title="Learn how to turn conversations into growth."
          description="Turn WhatsApp conversations into meaningful customer engagement, stronger relationships, and measurable business growth."
        />
        <BlogGrid
          featuredTopic={featuredTopic}
          remainingTopics={remainingTopics}
          category="WhatsApp Marketing"
          featuredDescription="Discover practical strategies and actionable insights to use WhatsApp for customer engagement, lead generation, automation, and business growth."
          featuredReadTime={5}
          readTime={readTime}
        />
      </Container>
    </section>
  );
}
