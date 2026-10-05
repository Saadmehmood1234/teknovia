import { ContentOverview } from "../ui/ContentOverview";

export function EcommerceIntroduction() {
  return (
    <ContentOverview
      id="about-ecommerce"
      badge="Build Your Digital Store"
      title="Technology-driven growth for modern businesses"
      image={{
        src: "/images/ecommerce-about.png",
        alt: "More than a store. A commerce platform built for growth.",
        width: 900,
        height: 700,
        priority: true,
        className: "h-auto w-full object-contain",
      }}
      backgroundClass="bg-white"
      gridClassName="lg:grid-cols-2"
      paragraphs={[
        <>
          Your online store should be more than just a place to display
          products. It should deliver a seamless shopping experience while
          supporting your business operations and future growth.
        </>,
        <>
          TEKNOVIA builds modern{" "}
          <strong className="font-semibold text-gray-900">
            eCommerce platforms
          </strong>{" "}
          tailored to your business model, products and customers. From{" "}
          <strong className="font-semibold text-gray-900">
            B2B and B2C eCommerce
          </strong>{" "}
          to{" "}
          <strong className="font-semibold text-gray-900">
            D2C and custom eCommerce platforms
          </strong>
          , we create flexible digital storefronts that are easy to manage,
          scalable and ready for growth.
        </>,
        <>
          Whether you are launching a new online business or taking an existing
          business into digital commerce, we help you build the right{" "}
          <strong className="font-semibold text-gray-900">
            eCommerce platform
          </strong>{" "}
          from the ground up.
        </>,
      ]}
    ></ContentOverview>
  );
}
