import { Check } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { expertise } from "@/lib/data/software-services";
import { TopBadge } from "@/components/ui/Top-Badge";
export default function Expertise() {
  return (
      <section className="py-8 sm:py-16 border-b border-gray-100">
        <Container className="flex flex-col items-center justify-center">
          <div className="mx-auto max-w-3xl text-center">
            <TopBadge data="Our Expertise" centerItem />

            <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
              Smart Solutions.
              <span className="text-primary pl-2">Stronger Businesses.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              From enterprise-grade systems to emerging technologies, we help
              organizations improve efficiency, automate processes, and
              accelerate growth.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="rounded-3xl border border-gray-200 bg-white p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="font-heading text-sm font-bold text-gray-300">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-bold text-gray-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-gray-100 pt-5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-gray-600"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
  );
}
