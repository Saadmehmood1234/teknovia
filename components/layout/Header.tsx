"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, type ReactNode, type MouseEvent } from "react";

export const navigation = [
  {
    label: "Software Solution",
    href: "/software-services",
    children: [
      {
        label: "Enterprise Software Development",
        href: "/software-services/enterprise-software-solution",
      },
      {
        label: "Web Application Development",
        href: "/software-services/web-application-development",
      },
      {
        label: "Mobile Application Development",
        href: "/software-services/mobile-application-development",
      },
      {
        label: "SaaS & Software Products",
        href: "/software-services/software-product",
      },
    ],
  },

  {
    label: "Digital Edge",
    href: "/digital-marketing",
    children: [
      {
        label: "Google My Business - Local SEO",
        href: "/digital-marketing/local-seo",
      },
      {
        label: "Search Engine Optimization",
        href: "/digital-marketing/web-seo",
      },
      {
        label: "Social Media Optimization",
        href: "/digital-marketing/social-media-optimization",
      },
      {
        label: "WhatsApp Marketing",
        href: "/digital-marketing/whatsapp-marketing",
      },
      {
        label: "B2B Marketing",
        href: "/digital-marketing/b2b-marketing",
      },
      // {
      //   label: "Influencer Marketing",
      //   href: "/digital-marketing/influencer-marketing",
      // },
    ],
  },

  {
    label: "eCommerce Solution",
    href: "/ecommerce-solutions",
    children: [
      {
        label: "JioMart",
        href: "/ecommerce-solutions/jio-mart",
      },
      {
        label: "Shopify",
        href: "/ecommerce-solutions/shopify",
      },
    ],
  },

  {
    label: "EdTech Solution",
    href: "/edtech-solution",
  },

  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        label: "Manufacturing",
        href: "/industries#manufacturing",
      },
      {
        label: "Hospitality & Travel",
        href: "/industries#hospitality",
      },
      {
        label: "Logistics & Supply Chain",
        href: "/industries#logistics",
      },
      {
        label: "Education",
        href: "/industries#education",
      },
      {
        label: "Healthcare",
        href: "/industries#healthcare",
      },
      {
        label: "Retail & eCommerce",
        href: "/industries#retail",
      },
      {
        label: "Real Estate",
        href: "/industries#real-estate",
      },
      // {
      //   label: "Finance & Accounting",
      //   href: "/industries#finance-accounting",
      // },
      {
        label: "SMEs & Businesses",
        href: "/industries#smes",
      },
    ],
  },

  {
    label: "Blog",
    href: "/blog",
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleIndustryNavigation = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const currentPath = window.location.pathname.replace(/\/$/, "");
    const url = new URL(href, window.location.origin);
    const targetPath = url.pathname.replace(/\/$/, "");

    if (currentPath === "/industries" && targetPath === "/industries") {
      e.preventDefault();

      const newUrl = `${url.pathname}${url.hash}`;

      window.history.pushState(null, "", newUrl);

      window.dispatchEvent(new Event("industrychange"));
    }
  };
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 text-xs backdrop-blur">
      <div className="px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex shrink-0 items-center pr-4"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/teknovia-logo.png"
              alt="Teknovia"
              width={120}
              height={40}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>
          <nav className="hidden items-center gap-4 xl:flex 2xl:gap-4">
            <NavLink href="/" active={isActive("/")}>
              Home
            </NavLink>
            <NavLink href="/corporate" active={isActive("/corporate")}>
              Corporate
            </NavLink>

            {navigation.map((item) =>
              item.children ? (
                <Dropdown
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  active={isActive(item.href)}
                >
                  {item.children.map((child) => (
                    <DropdownItem
                      key={child.href}
                      label={child.label}
                      href={child.href}
                      active={pathname === child.href}
                      onClick={(e) => handleIndustryNavigation(e, child.href)}
                    />
                  ))}
                </Dropdown>
              ) : (
                <NavLink
                  key={item.href}
                  href={item.href}
                  active={isActive(item.href)}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>
          <Link
            href="/contact"
            className={`ml-1 hidden xl:inline-flex items-center justify-center rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
              isActive("/contact")
                ? "bg-primary-50 text-primary"
                : "bg-primary text-white hover:bg-primary-dark"
            }`}
          >
            Contact Us
          </Link>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-primary/30 hover:text-primary xl:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="border-t border-slate-100 py-5 xl:hidden">
            <nav className="flex flex-col gap-1 pb-2">
              {/* Home */}
              <MobileNavLink
                href="/"
                active={isActive("/")}
                onClick={() => setOpen(false)}
              >
                Home
              </MobileNavLink>

              {/* Corporate */}
              <MobileNavLink
                href="/corporate"
                active={isActive("/corporate")}
                onClick={() => setOpen(false)}
              >
                Corporate
              </MobileNavLink>

              {/* Dynamic navigation */}
              {navigation.map((item) => (
                <MobileNavItem
                  key={item.href}
                  item={item}
                  pathname={pathname}
                  onNavigate={() => setOpen(false)}
                  onIndustryNavigate={handleIndustryNavigation}
                />
              ))}

              {/* Contact */}
              <MobileNavLink
                href="/contact"
                active={isActive("/contact")}
                onClick={() => setOpen(false)}
                primary
              >
                Contact Us
              </MobileNavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`whitespace-nowrap rounded-lg px-2 py-1 text-sm font-medium transition-colors ${
        active
          ? "bg-primary-50 text-primary"
          : "text-slate-700 hover:bg-slate-50 hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );
}

function Dropdown({
  label,
  href,
  children,
  active,
}: {
  label: string;
  href: string;
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <div className="group relative">
      <div
        className={`flex items-center gap-1 whitespace-nowrap rounded-md text-sm font-medium transition-colors ${
          active
            ? "bg-primary-50 px-2 text-primary"
            : "text-slate-700 hover:bg-slate-50 hover:text-primary"
        }`}
      >
        <Link href={href} className="py-2 leading-none">
          {label}
        </Link>

        <ChevronDown
          size={14}
          strokeWidth={1.8}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </div>

      <div className="invisible absolute left-1/2 top-full z-50 w-max min-w-55 -translate-x-1/2 translate-y-2 rounded-xl border border-slate-100 bg-white p-1.5 opacity-0 shadow-soft transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {children}
      </div>
    </div>
  );
}

function DropdownItem({
  label,
  href,
  active,
  onClick,
}: {
  label: string;
  href: string;
  active?: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <Link
      href={href}
      onClick={(e) => onClick?.(e)}
      className={`block whitespace-nowrap rounded-lg px-3 py-2 text-sm leading-5 transition-colors ${
        active
          ? "bg-primary-50 text-primary"
          : "text-slate-600 hover:bg-primary-50 hover:text-primary"
      }`}
    >
      {label}
    </Link>
  );
}

function MobileNavItem({
  item,
  pathname,
  onNavigate,
  onIndustryNavigate,
}: {
  item: (typeof navigation)[number];
  pathname: string;
  onNavigate: () => void;
  onIndustryNavigate: (e: MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

  if (!item.children) {
    return (
      <MobileNavLink href={item.href} active={active} onClick={onNavigate}>
        {item.label}
      </MobileNavLink>
    );
  }

  return (
    <div className="rounded-lg">
      <Link
        href={item.href}
        onClick={onNavigate}
        className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
          active
            ? "bg-primary-50 text-primary"
            : "text-slate-700 hover:bg-primary-50 hover:text-primary"
        }`}
      >
        {item.label}
      </Link>

      <div className="ml-3 border-l border-slate-200 pl-3">
        {item.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={(e) => {
              onIndustryNavigate(e, child.href);
              onNavigate();
            }}
            className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
              pathname === child.href
                ? "text-primary"
                : "text-slate-500 hover:bg-primary-50 hover:text-primary"
            }`}
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileNavLink({
  href,
  children,
  active,
  onClick,
  primary = false,
}: {
  href: string;
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
        primary
          ? "mt-2 bg-primary text-center text-white hover:bg-primary-dark"
          : active
            ? "bg-primary-50 text-primary"
            : "text-slate-700 hover:bg-primary-50 hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );
}
