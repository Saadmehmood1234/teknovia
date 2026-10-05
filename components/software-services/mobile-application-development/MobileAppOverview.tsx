import { ContentOverview } from "@/components/ui/ContentOverview";
import { points } from "@/lib/data/software-services/mobile-application-development-data";

export function MobileAppOverview() {
  return (
    <ContentOverview
      badge="MOBILE APP DEVELOPMENT"
      title="Mobile Experiences Built Around Your Business"
      image={{
        src: "/images/mobile-app-overview.png",
        alt: "Mobile application development",
      }}
      paragraphs={[
        <>
          Mobile devices have become a primary touchpoint between
          businesses and customers. A well-designed mobile application can
          improve customer engagement, strengthen brand visibility,
          enhance user experience, and create new digital revenue
          opportunities.
        </>,
        <>
          At TEKNOVIA, we build custom mobile applications tailored to
          your business objectives. Whether you need a customer-facing
          app, enterprise mobility solution, eCommerce application,
          educational platform, healthcare app, or on-demand service
          platform, we design and develop solutions around your users and
          workflows.
        </>,
      ]}
      points={points.map((point) => ({
        text: point,
      }))}
      imageBadge={{
        label: "MOBILE FIRST",
        text: "Built around real users",
      }}
    />
  );
}