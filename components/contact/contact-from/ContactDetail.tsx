import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export function ContactDetail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: ReactNode;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm ring-1 ring-gray-200">
        <Icon className="h-4 w-4" />
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {label}
        </p>

        <div className="mt-1 text-sm leading-6 text-gray-700">
          {value}
        </div>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      className="block transition hover:opacity-75"
    >
      {content}
    </a>
  );
}

