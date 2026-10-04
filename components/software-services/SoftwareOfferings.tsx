import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { offerings } from "@/lib/data/software-services";
export const metadata = {
  title: "Software Services",
  description:
    "Custom software solutions, enterprise applications, web applications, mobile apps, SaaS products, and digital systems built for modern businesses.",
};

export default function SoftwareOffering() {
  return (
    <section className="bg-white sm:py-16 py-8">
      <Container>
        <div className="">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Software Offerings</span>

              <h2 className="mt-3 font-heading text-3xl font-bold text-gray-950 sm:text-4xl">
                Explore Our Software Solutions
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              Flexible technology solutions designed to support businesses from
              early-stage growth to enterprise scale.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {offerings.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex gap-5 rounded-3xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading text-lg font-bold text-gray-950">
                        {item.title}
                      </h3>

                      <ArrowRight className="h-4 w-4 text-gray-300 transition group-hover:translate-x-1 group-hover:text-primary" />
                    </div>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
