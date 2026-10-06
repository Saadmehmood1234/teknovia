import type { LucideIcon } from "lucide-react";

interface FeatureListItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureListItem({
  icon: Icon,
  title,
  description,
  index,
}: FeatureListItemProps) {
  return (
    <li className="relative border-b border-gray-200">
      <span className="pointer-events-none absolute -bottom-px left-0 h-px w-0 bg-primary" />

      <div className="flex items-start gap-5 py-6 transition-transform duration-300 sm:gap-7 sm:py-8">
        <Icon
          strokeWidth={1.5}
          className="mt-0.5 size-7 shrink-0 text-gray-400"
        />

        <div className="min-w-0 flex-1">
          <h3 className="font-heading text-lg font-bold tracking-tight text-gray-950 sm:text-xl">
            {title}
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-7 text-gray-600">
            {description}
          </p>
        </div>

        <span className="pt-1.5 font-mono text-[11px] font-bold tracking-[0.18em] text-gray-300">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </li>
  );
}