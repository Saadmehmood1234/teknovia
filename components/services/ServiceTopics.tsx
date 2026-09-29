import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "../ui/Top-Badge";
import { serviceTopics } from "@/lib/data/site";

export function ServiceTopics() {
  return (
    <section className="bg-white py-8 sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="Our Services" centerItem />

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Solutions Built Around Your Needs
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Explore our software, digital, ecommerce, education and
            industry-specific solutions.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {serviceTopics.map((topic) => {
            const TopicIcon = topic.icon;

            return (
              <div key={topic.title}>
                <div className="mb-7 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
                    <TopicIcon size={20} />
                  </div>

                  <div className="flex w-full flex-col items-start justify-start">
                    <h3 className="text-2xl font-extrabold text-slate-950">
                      {topic.title}
                    </h3>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {topic.services.map((service, index) => {
                    const ServiceIcon = service.icon;

                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`
                          group relative grid min-h-40 overflow-hidden rounded-2xl
                          border ${service.borderColor}
                          ${service.bgColor}
                          transition-all duration-300
                          hover:-translate-y-1
                          hover:bg-white
                          hover:shadow-[0_18px_45px_rgba(0,150,137,0.08)]
                          sm:grid-cols-[180px_1fr]
                          xl:grid-cols-[220px_1fr]
                        `}
                      >
                        <span
                          className={`
                            absolute right-4 top-3 z-20
                            font-mono text-[10px] font-bold
                            tracking-widest text-gray-300
                            transition-colors
                            group-hover:${service.txtColor.replace(
                              "text-",
                              "text-",
                            )}
                          `}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div
                          className={`
                            relative flex min-h-48 items-center justify-center
                            overflow-hidden
                            ${service.iconColor}
                            sm:min-h-full
                          `}
                        >
                          <div
                            className={`
                              relative flex size-20 items-center justify-center
                              rounded-2xl border
                              bg-white
                              ${service.borderColor}
                              ${service.txtColor}
                              shadow-sm
                              transition-all duration-500
                              group-hover:scale-110
                              group-hover:shadow-md
                            `}
                          >
                            <ServiceIcon
                              className="
                                size-10
                                stroke-[1.7]
                                transition-transform duration-500
                                group-hover:scale-110
                              "
                            />
                          </div>
                          <div
                            className={`
                              pointer-events-none absolute
                              -left-10 -top-10 size-28 rounded-full
                              border ${service.borderColor}
                            `}
                          />

                          <div
                            className={`
                              pointer-events-none absolute
                              -bottom-12 -right-12 size-32 rounded-full
                              border ${service.borderColor}
                              transition-transform duration-500
                              group-hover:scale-125
                            `}
                          />
                        </div>
                        <div className="flex min-w-0 flex-col justify-center p-5 sm:p-6">
                          <h4
                            className={`
                              font-heading text-base font-bold leading-6
                              text-gray-950
                              transition-colors
                              sm:text-lg
                              group-hover:${service.txtColor}
                            `}
                          >
                            {service.title}
                          </h4>

                          {service.description && (
                            <p className="mt-2 text-xs leading-5 text-gray-600 sm:text-sm sm:leading-6">
                              {service.description}
                            </p>
                          )}
                        </div>

                        {/* Bottom Decorative Element */}
                        <div
                          className={`
                            pointer-events-none absolute
                            -bottom-8 -right-8 size-20 rounded-full
                            ${service.iconColor}
                            opacity-50
                            transition-transform duration-500
                            group-hover:scale-150
                          `}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}