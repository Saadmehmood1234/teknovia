import { BlogCard } from "./BlogCard";

const posts = [
  {
    category: "Software",
    title: "How Modern Web Applications Improve Business Operations",
    description:
      "Explore the role of scalable web applications in improving workflows, productivity and customer experiences.",
  },
  {
    category: "SEO",
    title: "Why Search Visibility Matters for Growing Businesses",
    description:
      "A practical look at how businesses can improve their organic visibility and attract the right audience.",
  },
  {
    category: "Ecommerce",
    title: "Creating Better Ecommerce Experiences",
    description:
      "Discover the key elements that make an ecommerce experience easier to use and more effective.",
  },
  {
    category: "Technology",
    title: "Choosing the Right Technology for Your Product",
    description:
      "Technology decisions should follow product requirements, users and long-term business goals.",
  },
  {
    category: "Digital Marketing",
    title: "Building a Strong Digital Presence",
    description:
      "Learn how consistent digital experiences across search, social media and websites can support growth.",
  },
  {
    category: "Business",
    title: "When Should a Business Invest in Custom Software?",
    description:
      "Understand when custom software can make sense compared with off-the-shelf business tools.",
  },
];

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