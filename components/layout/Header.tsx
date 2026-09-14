"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import { Container } from "@/components/ui/Container";

const softwareLinks = [
  "Enterprise Software Development",
  "Web Application Development",
  "Mobile Application Development",
  "SaaS & Software Products",
];

const digitalLinks = [
  "Website Development",
  "Local SEO (GMB)",
  "Search Engine Optimization (SEO)",
  "SMO (Instagram & Facebook)",
  "Whatsapp Marketing",
  "B2B Marketing",
  "Influencer Marketing",
];

const industries = [
  "Education",
  "Healthcare",
  "Retail & eCommerce",
  "Real Estate",
  "Finance & Accounting",
  "Manufacturing",
  "Logistics & Supply Chain",
  "Hospitality & Travel",
  "Professional Services",
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <header className="sticky text-xs top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex shrink-0 pr-4 items-center">
            <Image
              src="/logo.png"
              alt="Teknovia"
              width={120}
              height={40}
              priority
              className="h-7 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-4 xl:flex 2xl:gap-6">
            <NavLink
              active={active === "home"}
              onClick={() => setActive("home")}
              href="#home"
            >
              Home
            </NavLink>

            <NavLink
              active={active === "about"}
              onClick={() => setActive("about")}
              href="#about"
            >
              Corporate
            </NavLink>

            <Dropdown label="Software Solution" active={active === "software"}>
              {softwareLinks.map((item) => (
                <DropdownItem key={item} label={item} />
              ))}
            </Dropdown>

            <Dropdown label="Digital Services" active={active === "digital"}>
              {digitalLinks.map((item) => (
                <DropdownItem key={item} label={item} />
              ))}
            </Dropdown>

            <Dropdown
              label="e-Commerce Solution"
              active={active === "ecommerce"}
            >
              <DropdownItem label="Jio Mart" />
              <DropdownItem label="Shopify" />
            </Dropdown>

            <NavLink
              active={active === "services"}
              onClick={() => setActive("services")}
              href="#services"
            >
              EdTech Solution
            </NavLink>

            <Dropdown label="Industries" active={active === "industries"}>
              {industries.map((item) => (
                <DropdownItem key={item} label={item} />
              ))}
            </Dropdown>

            <NavLink
              active={active === "testimonials"}
              onClick={() => setActive("testimonials")}
              href="#testimonials"
            >
              Blog
            </NavLink>

            <a
              href="#contact"
              className="ml-1 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Contact Us
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-primary/30 hover:text-primary xl:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-100 py-5 xl:hidden">
            <nav className="flex flex-col gap-1 pb-2">
              {[
                ["Home", "#home"],
                ["Corporate", "#about"],
                ["Software Solution", "#services"],
                ["Digital Services", "#digital-services"],
                ["e-Commerce Solution", "#ecosystem"],
                ["EdTech Solution", "#services"],
                ["Industries", "#industries"],
                ["Blog", "#testimonials"],
                ["Contact Us", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-primary-50 hover:text-primary"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

function NavLink({
  href,
  children,
  active,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`whitespace-nowrap text-sm font-medium transition-colors ${active ? "bg-primary-50 text-primary px-2 py-1 rounded-lg" : "text-slate-700 hover:bg-slate-50 hover:text-primary"}`}
    >
      {children}
    </a>
  );
}

function Dropdown({
  label,
  children,
  active,
}: {
  label: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className={`flex items-center gap-1 whitespace-nowrap py-5 text-sm font-medium transition-colors ${
          active
            ? "bg-primary-50 text-primary"
            : "text-slate-700 hover:bg-slate-50 hover:text-primary"
        }`}
      >
        {label}
        <ChevronDown
          size={14}
          strokeWidth={1.8}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </button>

      <div className="invisible absolute left-1/2 top-full z-50 w-max min-w-[220px] -translate-x-1/2 translate-y-2 rounded-xl border border-slate-100 bg-white p-1.5 opacity-0 shadow-soft transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {children}
      </div>
    </div>
  );
}

function DropdownItem({ label }: { label: string }) {
  return (
    <a
      href="#services"
      className="block whitespace-nowrap rounded-lg px-3 py-2 text-sm leading-5 text-slate-600 transition-colors hover:bg-primary-50 hover:text-primary"
    >
      {label}
    </a>
  );
}
