import Link from "next/link";
import { ArrowRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb({
  items,
  className = "",
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-2 text-[12px] ${className}`}
    >
      <Link
        href="/"
        className="flex items-center font-mono tracking-wider gap-1.5 font-medium text-gray-400 transition hover:text-primary"
      >
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={`${item.label}-${index}`} className="flex items-center gap-2">
            <ArrowRight className="text-gray-400/90" size={12}/>

            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="font-medium text-gray-500 font-mono tracking-wider transition hover:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current={isLast ? "page" : undefined}
                className={`font-semibold font-mono ${
                  isLast ? "text-gray-500" : "text-gray-500"
                }`}
              >
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}