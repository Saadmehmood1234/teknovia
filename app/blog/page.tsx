import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { BlogGrid } from "@/components/ui/BlogGrid";
export default function BlogPage() {
  return (
    <main className="overflow-hidden bg-white">
      <BlogHero />

      <section className="section-padding">
        <div className="container-page">
          <FeaturedPost />

          <div className="mt-24">
            <div className="mb-10">
              <p className="eyebrow">LATEST ARTICLES</p>

              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Insights, Ideas & Digital Trends
              </h2>
            </div>

            {/* <BlogGrid />
                    <BlogGrid
                      featuredTopic={featuredTopic}
                      remainingTopics={remainingTopics}
                      category="LOCAL SEO"
                      featuredDescription="Discover practical strategies and actionable insights designed to help your business perform better in local search."
                      featuredReadTime={5}
                      readTime={readTime}
                    /> */}
          </div>
        </div>
      </section>

    </main>
  );
}