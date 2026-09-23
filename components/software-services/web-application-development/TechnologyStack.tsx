import { Container } from "@/components/ui/Container";
import { webApptechnologies } from "@/lib/data/software-services";
import Image from "next/image";

export default function TechnologyStack() {
  return (
    <section className="relative overflow-hidden py-12 text-black sm:py-16 lg:py-20">
      <Container>
        <div className="relative">
          <div className="flex w-full flex-col items-center justify-between gap-6 text-center">
            <div className="max-w-2xl">
              <p className="font-mono text-lg font-extrabold uppercase tracking-[0.2em] text-primary">
                Technology Stack
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Technologies We Use
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600 ">
                Modern, proven technologies for secure, scalable, and
                high-performance web applications.
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16">
            {webApptechnologies.map((tech) => (
              <div
                key={tech.category}
                className="border-t border-slate-200 py-8 last:border-b sm:py-10"
              >
                <div className="grid gap-6 lg:grid-cols-[220px_1fr] lg:gap-12">
                  {/* Category */}
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
                      Technology
                    </p>

                    <h3 className="mt-2 text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                      {tech.category}
                    </h3>
                  </div>

                  {/* Technologies */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {tech.items.map((item) => (
                      <div
                        key={item.title}
                        className="group flex items-center gap-3 border border-slate-200 bg-white px-4 py-4 transition-all duration-300 hover:border-primary/30 hover:shadow-sm"
                      >
                        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={32}
                            height={32}
                            className="h-8 w-8 object-contain"
                          />
                        </div>

                        <span className="text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:text-primary">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
