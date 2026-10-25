import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Clock3 } from "lucide-react";

import { BlogCard } from "@/components/blog/BlogCard";
import { CTA } from "@/components/CTA";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TopBadge } from "@/components/ui/Top-Badge";
import {
  blogPosts,
  formatPostDate,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/data/blogs-data";
import Image from "next/image";
import { getCmsBlogPost, getCmsBlogPosts } from "@/lib/cms-blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getCmsBlogPost(slug);
  if (!post) return {};
  const description = post.seo.description ?? post.excerpt ?? undefined;
  return {
    title: post.seo.title ?? `${post.title} | Teknovia Blog`,
    description,
    alternates: { canonical: post.seo.canonicalUrl ?? `/blog/${post.slug}` },
    robots: post.seo.noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: post.seo.ogTitle ?? post.seo.title ?? post.title,
      description: post.seo.ogDescription ?? description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: post.featuredImage ? [{ url: post.featuredImage.url, alt: post.featuredImage.altText }] : undefined,
    },
    twitter: { card: post.featuredImage ? "summary_large_image" : "summary", title: post.title, description },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const relatedPage = await getCmsBlogPosts(1, 50);
  const related = relatedPage.items.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main>
      <section className="border-b border-gray-200 bg-[#EFF3F6] py-8 sm:py-12 lg:py-16">
        <Container>
          <Breadcrumb
            items={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
          />

          <div className="grid items-center gap-8 pt-8 lg:grid-cols-[1fr_0.85fr] lg:gap-12">
            <div>
              <TopBadge data={post.categories[0]?.name || post.tags[0]?.name || "Insights"} />

              <h1 className="mt-5 font-heading text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <p className="mt-6 text-base leading-7 text-gray-600 sm:leading-8">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
                <span className="font-semibold text-gray-700">
                  {post.author}
                </span>

                <time dateTime={post.date}>{formatPostDate(post.date)}</time>

                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="size-4" />
                  {3} min read
                </span>
              </div>
            </div>

            <div className="relative aspect-16/10 overflow-hidden rounded-3xl bg-gray-200">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white py-10 sm:py-16">
        <Container>
          <article className="max-w-3xl">
            <p className="text-lg font-medium leading-8 text-gray-800">
              <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </p>

            <Link
              href="/blog"
              className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3 hover:text-primary-700"
            >
              <ArrowLeft className="size-4" />
              All articles
            </Link>
          </article>
        </Container>
      </section>
      <section className="border-t border-gray-100 bg-[#FAFAFA] py-10 sm:py-16">
        <Container>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
            More articles
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Need help growing your business online?"
        description="Talk to the Teknovia team about marketing, websites and technology that fit your goals."
        button={{
          label: "Get Free Consultation",
          href: "mailto:info@teknovia.in",
        }}
      />
    </main>
  );
}
