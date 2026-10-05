import { ContentOverview } from "@/components/ui/ContentOverview";

export function B2BMarketingIntroduction() {
  return (
    <ContentOverview
      badge="WHAT IS B2B MARKETING?"
      title={
        <>
          Marketing built around{" "}
          <span className="text-primary">
            business decisions.
          </span>
        </>
      }
      image={{
        src: "/images/digital-edge/b2b-background.png",
        alt: "B2B marketing solutions",
      }}
      paragraphs={[
        <>
          <strong className="font-semibold text-gray-900">
            B2B marketing (business-to-business marketing)
          </strong>{" "}
          is the process of promoting products or services to other
          businesses rather than individual customers. It helps businesses
          reach the right decision-makers, build trust, generate qualified
          leads, and develop valuable business relationships. Unlike B2C
          marketing, B2B marketing often involves longer buying cycles and
          multiple decision-makers. A well-planned B2B marketing strategy
          helps businesses stay visible, build credibility, and create
          consistent opportunities for growth.
        </>,
        <>
          At{" "}
          <strong className="font-semibold text-gray-900">
            TEKNOVIA
          </strong>
          , we combine{" "}
          <strong className="font-semibold text-gray-900">
            SEO, content marketing, social media, digital advertising, and
            data-driven strategies
          </strong>{" "}
          to connect businesses with relevant audiences. Our approach
          focuses on understanding your industry, target market, and
          business goals so your marketing efforts generate meaningful
          engagement and support long-term business growth.
        </>,
      ]}
    />
  );
}