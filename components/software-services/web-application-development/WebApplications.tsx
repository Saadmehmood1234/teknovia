import { webApplications } from "@/lib/data/software-services";
import {
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

export default function WebApplications() {
  return (
    <section className="relative overflow-hidden bg-[#071416] py-16 text-white sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-125 w-125 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-100 w-100 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-size-[56px_56px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                What We Build
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Web Applications
              <span className="block text-primary">We Develop</span>
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-lg font-semibold leading-8 text-white/85">
              Powerful Applications. Built for Real Business Impact.
            </p>
            <p className="mt-3 text-base leading-7 text-gray-400">
              From customer-facing platforms to complex enterprise systems, we
              develop web applications designed to solve real business
              challenges and create measurable value.
            </p>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10">
          {webApplications.map((application) => {
            const Icon = application.icon;
            return (
              <a
                key={application.number}
                href="#contact"
                className="group relative block border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/2 sm:py-8"
              >
                <span className="absolute left-0 top-0 h-full w-px scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />

                <div className="grid gap-5 px-1 sm:grid-cols-[56px_56px_minmax(0,0.8fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-6">
                  <span className="font-mono text-sm font-semibold text-gray-500 transition-colors group-hover:text-primary">
                    {application.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_24px_-4px] group-hover:shadow-primary/60">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-lg font-bold text-white/90 transition-colors duration-300 group-hover:text-primary sm:text-xl">
                    {application.title}
                  </h3>

                  <p className="max-w-xl text-sm leading-6 text-gray-400 transition-colors group-hover:text-gray-300">
                    {application.description}
                  </p>

                  <ChevronRight className="hidden h-4 w-4 text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary sm:block" />
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-white/10 bg-linear-to-br from-white/4 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-sm font-semibold text-white">
              Have a different application in mind?
            </p>
            <p className="mt-1 text-sm text-gray-400">
              We build custom solutions around your business requirements.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-primary/30"
          >
            Discuss Your Project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
