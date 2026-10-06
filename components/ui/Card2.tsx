import type { LucideIcon } from "lucide-react";

interface GrowthCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  circle?: string;
  bar?: string;
}

export function Card2({
  icon: Icon,
  title,
  description,
  circle = "bg-primary-50 text-primary",
  bar = "bg-primary",
}: GrowthCardProps) {
  return (
    <li className="flex flex-col items-center rounded-3xl border border-gray-200/80 bg-white px-5 pb-8 pt-7 text-center shadow-[0_8px_28px_rgba(15,23,42,0.05)] transition-shadow hover:shadow-[0_14px_40px_rgba(15,23,42,0.10)]">
      <div
        className={`flex size-20 items-center justify-center rounded-full ${circle}`}
      >
        <Icon strokeWidth={1.6} className="size-9" />
      </div>

      <h3 className="mt-5 font-heading text-lg font-black tracking-tight text-gray-950">
        {title}
      </h3>

      <span
        aria-hidden
        className={`mt-3 h-0.75 w-9 rounded-full ${bar}`}
      />

      <p className="mt-4 text-sm leading-6 text-gray-600">{description}</p>
    </li>
  );
}