import { ContentOverview } from "@/components/ui/ContentOverview";
import { points } from "@/lib/data/software-services/software-product-data";

export function SaaSProductOverview() {
  return (
    <ContentOverview
      badge="SAAS & SOFTWARE PRODUCTS"
      title="Turn Ideas Into Scalable Software Products"
      image={{
        src: "/images/saas-about.png",
        alt: "SaaS and software product development",
      }}
      paragraphs={[
        <>
          At TEKNOVIA, we help startups and enterprises transform
          innovative ideas into scalable SaaS platforms and software
          products.
        </>,
        <>
          Our end-to-end product development services cover strategy,
          UI/UX design, development, deployment, and ongoing support. We
          build secure, cloud-native, and high-performance solutions
          tailored to your business objectives.
        </>,
        <>
          Whether you need an MVP, a multi-tenant SaaS application, or a
          custom software product, our team delivers solutions designed
          for growth and long-term success.
        </>,
      ]}
      points={points.map((point) => ({
        text: point,
      }))}
      imageBadge={{
        label: "LAUNCH FASTER",
        text: "From idea to MVP",
      }}
    />
  );
}