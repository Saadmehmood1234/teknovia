"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";

export type Section = {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
};

type ContentProps = {
  sections: Section[];
  contactHref?: string;
  contactLabel?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  lastUpdated: string;
};

export function Content({
  sections,
  contactHref = "/contact",
  contactLabel = "Contact Us",
  ctaTitle = "Have questions about these terms?",
  ctaDescription = "Our legal and operations team is available to help clarify anything you need.",
  lastUpdated,
}: ContentProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <section className="bg-slate-50/60">
      <Container>
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16 lg:py-20">
          {/* Table of contents sidebar - smooth scrollable without browser bar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pr-2">
              <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <BookOpen className="h-3.5 w-3.5" />
                <span>On this page</span>
              </div>

              <nav className="space-y-1 border-l-2 border-slate-200/80">
                {sections.map((section) => {
                  const isActive = activeId === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`group flex items-start gap-2 rounded-r-md border-l-2 py-1.5 pl-3 text-xs leading-5 transition-all ${
                        isActive
                          ? "border-primary bg-primary-50/80 font-semibold text-primary shadow-xs"
                          : "border-transparent text-slate-600 hover:-translate-y-px hover:border-primary/50 hover:bg-white hover:text-primary"
                      }`}
                    >
                      <span
                        className={`font-mono text-[11px] ${
                          isActive
                            ? "font-bold text-primary"
                            : "font-semibold text-slate-400 group-hover:text-primary"
                        }`}
                      >
                        {section.number}
                      </span>
                      <span className="line-clamp-2">{section.title}</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Policy Sections */}
          <div className="max-w-4xl">
            <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200/80 bg-white shadow-xs">
              {sections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 p-6 transition-colors hover:bg-slate-50/20 sm:p-10 lg:p-12"
                >
                  <div className="mb-6 flex items-start gap-4">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-50 font-mono text-xs font-bold text-primary ring-1 ring-primary/20">
                      {section.number}
                    </span>

                    <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                      {section.title}
                    </h2>
                  </div>

                  <div
                    className="
                      text-[14.5px] leading-relaxed text-slate-600
                      sm:ml-11
                      [&_h3]:mt-6
                      [&_h3]:mb-3
                      [&_h3]:text-base
                      [&_h3]:font-bold
                      [&_h3]:text-slate-900
                      [&_h4]:mt-4
                      [&_h4]:mb-2
                      [&_h4]:text-sm
                      [&_h4]:font-semibold
                      [&_h4]:text-slate-800
                      [&_p]:mb-4
                      [&_p:last-child]:mb-0
                      [&_ul]:mb-5
                      [&_ul]:list-none
                      [&_ul]:space-y-2
                      [&_li]:relative
                      [&_li]:pl-5
                      [&_li]:before:absolute
                      [&_li]:before:left-0
                      [&_li]:before:top-[0.7em]
                      [&_li]:before:h-1.5
                      [&_li]:before:w-1.5
                      [&_li]:before:-translate-y-1/2
                      [&_li]:before:rounded-full
                      [&_li]:before:bg-primary
                      [&_strong]:font-semibold
                      [&_strong]:text-slate-900
                      [&_a]:font-medium
                      [&_a]:text-primary
                      [&_a]:underline-offset-4
                      [&_a]:transition-colors
                      [&_a]:hover:text-primary-dark
                      [&_a]:hover:underline
                    "
                  >
                    {section.content}
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom consultation / question box */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-primary-200/60 bg-gradient-to-br from-primary-50/80 via-white to-primary-50/40 p-6 shadow-xs sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-primary-100/70 px-2.5 py-1 text-xs font-semibold text-primary">
                    <Mail className="h-3.5 w-3.5" />
                    Legal Inquiries
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {ctaTitle}
                  </h3>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-600">
                    {ctaDescription}
                  </p>
                </div>

                <Link
                  href={contactHref}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-primary-dark hover:shadow-md"
                >
                  {contactLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
              <Clock className="h-3.5 w-3.5" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
