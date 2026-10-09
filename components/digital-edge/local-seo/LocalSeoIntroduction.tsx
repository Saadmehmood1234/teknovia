"use client";
import { ContentOverview } from "@/components/ui/ContentOverview";
import { highlights } from "@/lib/data/digital-edge/local-seo-data";

export function LocalSeoIntroduction() {
  return (
    <ContentOverview
      badge="WHAT IS LOCAL SEO?"
      title={
        <>
          Make Your Business{" "}
          <span className="text-primary">
            Visible Where Customers Search
          </span>
        </>
      }
      image={{
        src: "/images/digital-edge/seo-about.png",
        alt: "Local SEO and Google Business Profile",
      }}
      paragraphs={[
        <>
          Local SEO (GMB) is the process of optimizing your Google
          Business Profile to improve visibility in local search results
          and Google Maps.
        </>,
        <>
          It helps businesses appear when customers search for services
          “near me” or in a specific location. This increases calls,
          website visits, and physical footfall from high-intent users.
        </>,
        <>
          It builds trust through reviews, ratings, and accurate business
          information. Ultimately, it drives more local leads and
          conversions with minimal acquisition cost.
        </>,
      ]}
      points={highlights.map((item) => ({
        text: item.text,
        icon: item.icon,
      }))}
    />
  );
}