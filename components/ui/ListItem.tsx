import type { LucideIcon } from "lucide-react";

interface FeatureListItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;

  titleColor?: string;
  descriptionColor?: string;
  iconColor?: string;
  borderColor?: string;
  accentColor?: string;
  numberColor?: string;
}

export function FeatureListItem({
  icon: Icon,
  title,
  description,
  index,
  titleColor = "text-gray-950",
  descriptionColor = "text-gray-600",
  iconColor = "text-gray-400",
  borderColor = "border-gray-200",
  accentColor = "bg-primary",
  numberColor = "text-gray-300",
}: FeatureListItemProps) {
  return (
    <li className={`relative border-b ${borderColor}`}>
      <span
        className={`pointer-events-none absolute -bottom-px left-0 h-px w-0 ${accentColor}`}
      />

      <div className="flex items-start gap-5 py-6 sm:gap-7 sm:py-8">
        <Icon
          strokeWidth={1.5}
          className={`mt-0.5 size-7 shrink-0 ${iconColor}`}
        />

        <div className="min-w-0 flex-1">
          <h3
            className={`font-heading text-lg font-bold tracking-tight sm:text-xl ${titleColor}`}
          >
            {title}
          </h3>

          <p
            className={`mt-2 max-w-xl text-sm leading-7 ${descriptionColor}`}
          >
            {description}
          </p>
        </div>

        <span
          className={`pt-1.5 font-mono text-[11px] font-bold tracking-[0.18em] ${numberColor}`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </li>
  );
}