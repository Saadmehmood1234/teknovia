"use client";

import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { BlogCard } from "./BlogCard";
import { blogCategories, blogPosts } from "@/lib/data/blogs-data";

export function BlogList() {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === category);

  // The featured layout only makes sense on the unfiltered view
  const featured = category === "All" ? filtered[0] : undefined;
  const rest = featured ? filtered.slice(1) : filtered;

  return (
    <section className="border-b border-gray-100 bg-white py-8 sm:py-16">
      <Container>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter articles by category"
        >
          {blogCategories.map((item) => {
            const isActive = item === category;

            return (
              <button
                key={item}
                type="button"
                aria-pressed={isActive}
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  isActive
                    ? "border-primary bg-primary text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:border-primary/40 hover:bg-primary/5"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="mt-8 space-y-5 sm:mt-10">
          {featured && <BlogCard post={featured} featured />}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}