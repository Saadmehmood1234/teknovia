import type { MetadataRoute } from "next";

const BASE_URL = "https://www.teknovia.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/corporate`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/software-services`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/software-services/enterprise-software-development`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/software-services/web-application-development`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/software-services/mobile-application-development`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/software-services/saas-software-products`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/software-services/iot-development`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/digital-edge/web-seo`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/digital-edge/local-seo`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/digital-edge/social-media-optimization`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/digital-edge/whatsapp-marketing`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/digital-edge/b2b-marketing`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/ecommerce-solution`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ecommerce-solution/shopify`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/ecommerce-solution/jiomart`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // EdTech
    {
      url: `${BASE_URL}/edtech-solution`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/industries`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/industries/manufacturing`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/hospitality-travel`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/logistics-supply-chain`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/education`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/healthcare`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/retail-ecommerce`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/real-estate`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries/smes-businesses`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${BASE_URL}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}