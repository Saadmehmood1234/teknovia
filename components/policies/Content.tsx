import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
  ctaDescription = "Our team is available to help clarify anything you need.",
  lastUpdated,
}: ContentProps) {
  return (
    <section className="bg-[#fafcfb]">
      <Container>
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-20 lg:py-24">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                On this page
              </p>

              <nav className="border-l border-gray-200">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group block border-l-2 border-transparent py-1.5 pl-4 text-[12px] leading-5 text-gray-500 transition-all hover:border-primary hover:text-primary"
                  >
                    <span className="mr-2 font-mono text-[10px] text-gray-300 group-hover:text-primary-300">
                      {section.number}
                    </span>

                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="max-w-4xl">
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
              {sections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 px-5 py-9 sm:px-8 sm:py-11 lg:px-10"
                >
                  <div className="mb-5 flex items-start gap-4">
                    <span className="shrink-0 pt-1 font-mono text-xs font-semibold tracking-wider text-primary">
                      {section.number}
                    </span>

                    <h2 className="text-xl font-semibold tracking-[-0.02em] text-gray-950 sm:text-2xl">
                      {section.title}
                    </h2>
                  </div>

                  <div
                    className="
                      ml-0 text-[14px] leading-7 text-gray-600
                      sm:ml-9 sm:text-[15px] sm:leading-7
                      [&_p]:mb-5
                      [&_p:last-child]:mb-0
                      [&_ul]:mb-5
                      [&_ul]:list-none
                      [&_ul]:space-y-2.5
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
                      [&_strong]:text-gray-900
                      [&_a]:text-primary
                      [&_a]:transition-colors
                      [&_a]:hover:text-primary-dark
                    "
                  >
                    {section.content}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-primary-100 bg-primary-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div>
                <p className="font-heading text-lg font-semibold text-gray-950">
                  {ctaTitle}
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  {ctaDescription}
                </p>
              </div>

              <Link
                href={contactHref}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                {contactLabel}
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <p className="mt-8 text-center text-xs text-gray-400">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}