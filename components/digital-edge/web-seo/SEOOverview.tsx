import { ContentOverview } from "@/components/ui/ContentOverview";

export function SEOOverview() {
  return (
    <ContentOverview
      badge="Search and AI Optimization"
      title="Search Visibility That Connects You With the Right Audience"
      image={{
        src: "/images/digital-edge/web-seo-about.jpg",
        alt: "Teknovia Web SEO",
      }}
      imageOverlay
      imageBadge={{
        label: "ORGANIC GROWTH",
        text: "Built for long-term visibility",
      }}
      paragraphs={[
        <>
          Search Engine Optimization (SEO) helps your website appear
          higher in search results when potential customers search for
          your products or services.
        </>,
        <>
          It makes your website easier for search engines to understand,
          crawl, and rank. Effective SEO connects your business with
          people who are actively looking for what you offer.
        </>,
        <>
          It helps attract relevant organic traffic without paying for
          every click. Over time, SEO builds online visibility,
          credibility, and sustainable business growth.
        </>,
      ]}
      points={[
        { text: "Improve organic visibility" },
        { text: "Reach active searchers" },
        { text: "Build long-term authority" },
        { text: "Generate relevant traffic" },
      ]}
    />
  );
}