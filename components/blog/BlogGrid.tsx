import { posts } from "@/lib/data/blogs-data";
import { BlogCard } from "./BlogCard";


export function BlogGrid() {
  return (
    <div
      id="articles"
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {posts.map((post) => (
        <BlogCard key={post.title} {...post} />
      ))}
    </div>
  );
}