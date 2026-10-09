import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";

import { BlogPost, formatPostDate } from "@/lib/data/blogs-data";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

function Meta({
  post,
  light = false,
}: {
  post: BlogPost;
  light?: boolean;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs ${
        light ? "text-white/70" : "text-gray-500"
      }`}
    >
      <time dateTime={post.date}>{formatPostDate(post.date)}</time>

      <span className="inline-flex items-center gap-1.5">
        <Clock3 className="size-3.5" />
        {post.readTime} min read
      </span>
    </div>
  );
}

export function BlogCard({
  post,
  featured = false,
}: BlogCardProps) {
  const href = `/blog/${post.slug}`;

  if (featured) {
    return (
      <Link
        href={href}
        className="group grid overflow-hidden rounded-3xl border border-gray-200 bg-white transition duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-slate-900/5 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="relative min-h-56 overflow-hidden bg-gray-100 sm:min-h-72 lg:min-h-full">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          <span className="w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
            {post.category}
          </span>

          <h2 className="mt-4 font-heading text-2xl font-bold leading-tight tracking-tight text-gray-950 transition-colors group-hover:text-primary sm:text-3xl">
            {post.title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            {post.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <Meta post={post} />

            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-200 group-hover:gap-2.5">
              Read article
              <ArrowRight className="size-4" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-slate-900/5"
    >
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
            {post.category}
          </span>
        </div>

        <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-gray-950 transition-colors group-hover:text-primary">
          {post.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <Meta post={post} />

          <ArrowRight className="size-4 shrink-0 text-gray-300 transition group-hover:translate-x-1 group-hover:text-primary" />
        </div>
      </div>
    </Link>
  );
}