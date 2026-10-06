import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { watsappBlogTopics } from "@/lib/data/digital-edge/watsapp-marketing-data";
import { BlogGrid } from "@/components/ui/BlogGrid";

const readTime = (i: number) => 4 + (i % 3);

export function WhatsAppBlogTopics() {
  const featuredTopic = watsappBlogTopics[0];
  const remainingTopics = watsappBlogTopics.slice(1);

  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <TopBadge data="WHATSAPP MARKETING INSIGHTS" centerItem />
          </div>
          <h2 className="font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            Learn how to turn
            <span className="text-primary">conversations into</span> growth
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
            Turn WhatsApp conversations into meaningful customer engagement,
            stronger relationships, and measurable business growth.
          </p>
        </div>
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
