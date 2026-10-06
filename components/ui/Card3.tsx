import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface Card3Props {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export function Card3({
  title,
  description,
  href,
  icon: Icon,
}: Card3Props) {
  return (
    <Link
      href={href}
      className="group flex gap-5 rounded-3xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-heading text-lg font-bold text-gray-950">
            {title}
          </h3>

          <ArrowRight className="h-4 w-4 text-gray-300 transition group-hover:translate-x-1 group-hover:text-primary" />
        </div>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>
    </Link>
  );
}