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

    // Software Services
    {
      url: `${BASE_URL}/software-services`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/software-services/enterprise-software-solution`,
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
      url: `${BASE_URL}/software-services/software-product`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/software-services/iot-development`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Digital Edge
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

    // EdTech
    {
      url: `${BASE_URL}/edtech-solution`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Industries
    {
      url: `${BASE_URL}/industries`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Blog
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}