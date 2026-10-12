"use client";
import { ContentOverview } from "@/components/ui/ContentOverview";
import { highlights } from "@/lib/data/digital-edge/local-seo-data";
import {Fragment} from "react"
export function LocalSeoIntroduction() {
  return (
    <ContentOverview
      badge="WHAT IS LOCAL SEO?"
      title={
        <Fragment key="what-is-local-seo">
          Make Your Business{" "}
          <span className="text-primary">
            Visible Where Customers Search
          </span>
        </Fragment>
      }
      image={{
        src: "/images/digital-edge/seo-about.png",
        alt: "Local SEO and Google Business Profile",
      }}
      paragraphs={[
        <Fragment key="what-is-local-seo-desc1">
          Local SEO (GMB) is the process of optimizing your Google
          Business Profile to improve visibility in local search results
          and Google Maps.
        </Fragment>,
        <Fragment key="what-is-local-seo-desc2">
          It helps businesses appear when customers search for services
          “near me” or in a specific location. This increases calls,
          website visits, and physical footfall from high-intent users.
        </Fragment>,
        <Fragment key="what-is-local-seo-desc3">
          It builds trust through reviews, ratings, and accurate business
          information. Ultimately, it drives more local leads and
          conversions with minimal acquisition cost.
        </Fragment>,
      ]}
      points={highlights.map((item) => ({
        text: item.text,
        icon: item.icon,
      }))}
    />
  );
}