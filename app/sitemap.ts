import type { MetadataRoute } from "next";
import { getCmsBlogSlugs } from "@/lib/cms-blog";

const BASE_URL = "https://www.teknovia.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const result = await getCmsBlogSlugs();
    blogEntries = result.items.filter((post) => !post.noIndex && (!post.canonicalUrl || post.canonicalUrl.startsWith(`${BASE_URL}/blog/`))).map((post) => ({ url: post.canonicalUrl || `${BASE_URL}/blog/${post.slug}`, lastModified: new Date(post.updatedAt), changeFrequency: "weekly" as const, priority: 0.7 }));
  } catch (error) {
    console.error("[cms-blog] sitemap posts could not be loaded", error instanceof Error ? error.message : "unknown error");
  }
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
    // ecommerce
    {
      url: `${BASE_URL}/ecommerce-solutions`,
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
    ...blogEntries,
  ];
}
