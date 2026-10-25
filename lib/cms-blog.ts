import "server-only";

import type { BlogPost } from "@/lib/data/blogs-data";

const API_BASE = (process.env.CMS_API_URL || "https://headless-cms-api-test.onrender.com/api/v1").replace(/\/+$/, "");
const SITE_KEY = process.env.CMS_SITE_KEY?.trim();

export interface CmsTerm {
  name: string;
  slug: string;
}
export interface CmsImage {
  url: string;
  altText: string;
  width: number | null;
  height: number | null;
}
export interface CmsPostSummary {
  title: string;
  slug: string;
  excerpt: string | null;
  publishedAt: string;
  updatedAt: string;
  author: { name: string };
  featuredImage: CmsImage | null;
  categories: CmsTerm[];
  tags: CmsTerm[];
}
export interface CmsPost extends CmsPostSummary {
  contentHtml: string;
  seo: {
    title: string | null;
    description: string | null;
    canonicalUrl: string | null;
    ogTitle: string | null;
    ogDescription: string | null;
    noIndex: boolean;
  };
}

interface CmsPage {
  items: CmsPostSummary[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
interface CmsSlugList {
  items: { slug: string; publishedAt: string; updatedAt: string; noIndex: boolean; canonicalUrl: string | null }[];
  total: number;
  truncated: boolean;
}

async function cmsData<T>(path: string): Promise<T> {
  if (!SITE_KEY) {
    throw new Error("CMS_SITE_KEY is missing. Add the public site key from the Headless Blog CMS to your Vercel environment variables.");
  }
  const response = await fetch(`${API_BASE}/public/${encodeURIComponent(SITE_KEY)}${path}`, {
    next: { revalidate: 60, tags: ["cms-blog"] },
  });
  if (!response.ok) {
    console.error("[cms-blog] API request failed", { status: response.status, path });
    throw new Error(`Headless CMS request failed with status ${response.status}`);
  }
  const body = (await response.json()) as { data: T };
  return body.data;
}

function toBlogCard(post: CmsPostSummary): Omit<BlogPost, "icon"> {
  const image = post.featuredImage?.url || "/images/blogs/blog-bg.png";
  const date = post.publishedAt.slice(0, 10);
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt || "",
    category: post.categories[0]?.name || post.tags[0]?.name || "Insights",
    date,
    author: post.author?.name || "Teknovia Team",
    image,
    imageAlt: post.featuredImage?.altText || post.title,
    intro: post.excerpt || "",
    sections: [],
    readTime: 3,
  };
}

export async function getCmsBlogPosts(page = 1, limit = 50) {
  const result = await cmsData<CmsPage>(`/posts?page=${page}&limit=${limit}`);
  return {
    ...result,
    items: result.items.map(toBlogCard),
  };
}

export async function getCmsBlogPost(slug: string): Promise<CmsPost | null> {
  const path = `/posts/${encodeURIComponent(slug)}`;
  if (!SITE_KEY) {
    throw new Error("CMS_SITE_KEY is missing. Add the public site key from the Headless Blog CMS to your Vercel environment variables.");
  }
  const response = await fetch(`${API_BASE}/public/${encodeURIComponent(SITE_KEY)}${path}`, {
    redirect: "manual",
    next: { revalidate: 60, tags: ["cms-blog"] },
  });
  if (response.status === 404) return null;
  if (response.status === 301) {
    const body = (await response.json()) as { data: { slug: string } };
    return getCmsBlogPost(body.data.slug);
  }
  if (!response.ok) {
    console.error("[cms-blog] post request failed", { status: response.status, slug });
    throw new Error(`Headless CMS request failed with status ${response.status}`);
  }
  return ((await response.json()) as { data: CmsPost }).data;
}

export async function getCmsBlogSlugs() {
  return cmsData<CmsSlugList>("/slugs");
}

export async function getCmsBlogCategories() {
  return cmsData<(CmsTerm & { description: string | null; postCount: number })[]>("/categories");
}
