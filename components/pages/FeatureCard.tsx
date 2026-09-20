import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  title,
  description,
  icon: Icon,
  number,
}: {
  title: string;
  description: string;
  icon?: LucideIcon;
  number?: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(0,80,70,0.08)]">
      {number && (
        <span className="absolute right-6 top-6 font-heading text-sm font-semibold text-primary/50">
          {number}
        </span>
      )}

      {Icon && (
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition group-hover:bg-primary group-hover:text-white">
          <Icon size={22} />
        </div>
      )}

      <h3 className="font-heading text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
        Explore
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </div>
  );
}