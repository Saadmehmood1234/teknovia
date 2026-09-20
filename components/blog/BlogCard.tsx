import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type BlogCardProps = {
  category: string;
  title: string;
  description: string;
  href?: string;
};

export function BlogCard({
  category,
  title,
  description,
  href = "/contact",
}: BlogCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(0,80,70,0.08)]"
    >
      <div className="hero-grid aspect-[16/9] bg-primary-50 p-5">
        <div className="flex h-full items-end">
          <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="p-7">
        <div className="flex items-start justify-between gap-5">
          <h3 className="font-heading text-xl font-semibold text-slate-900">
            {title}
          </h3>

          <ArrowUpRight
            size={20}
            className="shrink-0 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {description}
        </p>

        <p className="mt-6 text-sm font-semibold text-primary">
          Read Article
        </p>
      </div>
    </Link>
  );
}