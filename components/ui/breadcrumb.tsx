import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
  textColor?: string;
};

export function Breadcrumb({
  items,
  className = "",
  textColor = "text-gray-500",
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`w-full overflow-hidden ${className}`}
    >
      <ol className="scrollbar-hide flex min-w-0 items-center gap-1.5 overflow-x-auto whitespace-nowrap text-[11px] sm:gap-2 sm:text-[12px]">
        <li className="shrink-0">
          <Link
            href="/"
            className={`font-mono font-medium tracking-wide ${textColor} transition-colors hover:text-primary`}
          >
            Home
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-2"
            >
              <ChevronRight size={13} className={`shrink-0 ${textColor}`} />

              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`max-w-30 truncate font-mono font-medium tracking-wide transition-colors hover:text-primary sm:max-w-none ${textColor}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={`max-w-37.5 truncate font-mono tracking-wide sm:max-w-none ${
                    isLast
                      ? `font-semibold ${textColor}`
                      : "font-medium text-gray-500"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
