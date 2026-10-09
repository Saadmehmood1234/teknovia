import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/ui/Container";
import { serviceTopics } from "@/lib/data/services-data";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealListItem } from "../animations/RevealListItem";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function ServiceTopics() {
  return (
    <section className="border-t border-slate-100 bg-white py-8 sm:py-16">
      <Container>
        <SectionHeading
          className="max-w-xl"
          variant="left"
          badge="Our Services"
          title="Explore our service areas."
          description="Software, digital marketing, eCommerce, education and industry-focused solutions, all in one place."
        />

        <div className="mt-10 lg:mt-14 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 xl:gap-20">
          {/* Mobile service navigation */}
          <nav
            aria-label="Service areas"
            className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:hidden"
          >
            {serviceTopics.map((topic) => (
              <a
                key={topic.title}
                href={`#${slugify(topic.title)}`}
                className="inline-flex shrink-0 items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-primary/40 hover:text-primary active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                {topic.title}
              </a>
            ))}
          </nav>

          {/* Desktop service navigation */}
          <aside className="hidden lg:block">
            <nav
              aria-label="Service areas"
              className="sticky top-28"
            >
              <ul className="space-y-1">
                {serviceTopics.map((topic) => {
                  const TopicIcon = topic.icon;

                  return (
                    <li key={topic.title}>
                      <a
                        href={`#${slugify(topic.title)}`}
                        className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                      >
                        <TopicIcon
                          size={18}
                          strokeWidth={1.8}
                          className="shrink-0 text-slate-400 transition-colors group-hover:text-primary"
                        />

                        <span className="flex-1">
                          {topic.title}
                        </span>

                        <span className="text-xs tabular-nums text-slate-400">
                          {topic.services.length}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Service categories */}
          <div className="min-w-0">
            {serviceTopics.map((topic, topicIndex) => {
              const TopicIcon = topic.icon;

              return (
                <Reveal
                  key={topic.title}
                  delay={topicIndex * 0.08}
                  className="w-full"
                >
                  <section
                    id={slugify(topic.title)}
                    className="scroll-mt-28 border-t border-slate-200 pb-12 pt-8 first:border-t-0 first:pt-0 last:pb-0"
                  >
                    {/* Category heading */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <TopicIcon
                          size={21}
                          strokeWidth={1.8}
                        />
                      </div>

                      <div>
                        <h3 className="font-heading text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                          {topic.title}
                        </h3>

                        <p className="mt-0.5 text-sm text-slate-500">
                          {topic.services.length}{" "}
                          {topic.services.length === 1
                            ? "service"
                            : "services"}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-6 divide-y divide-slate-100 border-y border-slate-100">
                      {topic.services.map((service, serviceIndex) => {
                        const ServiceIcon = service.icon;

                        return (
                          <RevealListItem
                            key={service.href}
                            delay={serviceIndex * 0.05}
                            className="list-none"
                          >
                            <Link
                              href={service.href}
                              className="group -mx-3 flex items-start gap-4 rounded-xl px-3 py-4 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 sm:items-center"
                            >
                              <ServiceIcon
                                size={22}
                                strokeWidth={1.7}
                                className="mt-0.5 shrink-0 text-slate-400 transition-colors group-hover:text-primary sm:mt-0"
                              />

                              <div className="min-w-0 flex-1">
                                <h4 className="font-heading text-base font-bold leading-6 text-slate-950 transition-colors group-hover:text-primary sm:text-lg">
                                  {service.title}
                                </h4>

                                {service.description && (
                                  <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500">
                                    {service.description}
                                  </p>
                                )}
                              </div>

                              <ArrowUpRight
                                size={18}
                                className="mt-1 shrink-0 text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:mt-0"
                              />
                            </Link>
                          </RevealListItem>
                        );
                      })}
                    </ul>
                  </section>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}