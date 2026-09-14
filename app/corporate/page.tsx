import { ArrowRight, Eye, Rocket, Target } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { leaders, stats, strengths, values } from "@/lib/data/site";
import Image from "next/image";

export default function CorporatePage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative pt-6 border-b border-gray-200 pb-12 isolate overflow-hidden bg-linear-to-r from-primary/10 via-white to-white gap-10">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="w-full lg:w-[58%]">
              <div className="mb-5 flex items-center gap-3">
                <span className="text-lg font-extrabold uppercase tracking-widest text-primary">
                  About&nbsp;Teknovia
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-black sm:text-5xl">
                Technology, Software &{" "}
                <span className="lg:block">
                  Growth Solutions{" "}
                  <span className="text-primary">
                    Built for
                    <br className="hidden lg:block"/>
                    Modern Businesses
                  </span>
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-600 sm:leading-8">
                Integrated digital marketing, custom software, EduTech, and
                talent solutions designed to help businesses scale efficiently.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-700"
                >
                  Our Services
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm transition hover:border-primary hover:text-primary"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full lg:w-[38%]">
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/corporate-hero.png"
                  alt="Teknovia technology and business solutions"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid overflow-hidden rounded-2xl bg-[#09090B] p-2 shadow-xl shadow-slate-900/5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex items-center gap-4 p-4 ${
                  index !== 0 ? "border-gray-800 sm:border-l" : ""
                } ${
                  index === 2
                    ? "border-t sm:border-t-0 lg:border-l"
                    : index === 3
                      ? "border-t sm:border-l lg:border-t-0"
                      : ""
                }`}
              >
                <div className="rounded-xl border border-white/20 bg-white/10 p-3 text-primary-300 shadow-sm backdrop-blur-lg">
                  <stat.icon size={24} />
                </div>

                <div className="flex flex-col items-start justify-start">
                  <p className="text-xl font-black tracking-tight text-white">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs font-medium text-white/70">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="about" className="py-8 lg:py-16 border-b border-gray-200 ">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            <div className="relative pb-10 lg:pb-12">
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src="/images/about-teknovia.png"
                  alt="Teknovia technology solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-0 left-5 right-5 rounded-2xl border border-white/10 bg-white px-6 py-6 shadow-xl flex gap-4 justify-start items-center">
                <Target
                  className="p-2 bg-primary-50 rounded-lg border border-primary-100 text-primary"
                  size={32}
                />
                <div className="flex flex-col">
                  <p className="font-mono text-sm font-extrabold uppercase tracking-wider text-gray-400">
                    Our Purpose
                  </p>

                  <p className=" text-sm font-semibold leading-7 text-gray-600">
                    To create value through technology, talent, and innovation.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-md font-extrabold uppercase tracking-wider text-primary ">
                About Teknovia
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-950">
                Transforming ideas into scalable digital solutions that drive
                real business growth.
              </h2>

              <div className="mt-7 space-y-5 text-base leading-7 text-slate-600">
                <p>
                  Teknovia Technologies Private Limited is a technology-driven
                  company delivering custom software development, digital
                  marketing, EduTech solutions, business automation, and talent
                  services. We help startups, SMEs, educational institutions,
                  and enterprises improve efficiency, strengthen digital
                  presence, and accelerate business growth through innovative
                  technology solutions.
                </p>

                <p>
                  Our expertise spans software development, ERP systems, web and
                  mobile applications, marketplace platforms, and digital
                  transformation services designed to solve real business
                  challenges. By combining technology, automation, and strategic
                  execution, we deliver scalable, secure, and results-driven
                  solutions that help organizations innovate, grow smarter, and
                  scale with confidence.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-8">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex items-start gap-4 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm shadow-gray-200 ">
              <div className="flex p-4 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Eye size={24} />
              </div>

              <div className="flex flex-col items-start gap-2">
                <p className="text-sm font-extrabold uppercase tracking-wider text-black">
                  Our Vision
                </p>

                <p className="max-w-xl text-base leading-7 text-slate-600">
                  To be a trusted technology and digital solutions partner,
                  empowering businesses with scalable systems and data-driven
                  growth.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm shadow-gray-200 ">
              <div className="flex p-4 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Rocket size={24} />
              </div>

              <div className="flex flex-col items-start gap-2">
                <p className="text-sm font-extrabold uppercase tracking-wider text-black">
                  Our Mission
                </p>

                <p className="max-w-xl text-base leading-7 text-slate-600">
                  To deliver integrated digital marketing, software, EduTech,
                  and talent solutions that enhance efficiency, drive measurable
                  results, and create long-term business value.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-8 pb-16 border-b border-gray-100">
        <Container>
          <div className="bg-[#FBFBFB] p-8 rounded-3xl shadow-sm shadow-gray-200 border border-gray-100">
            <div className="max-w-2xl flex justify-start items-center gap-4">
              <div className="p-3 text-primary bg-primary-50/40 border border-primary-100 rounded-2xl">
                <Target />
              </div>
              <p className="font-mono text-md font-extrabold uppercase tracking-wider text-blac">
                Our Core Values
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {values.map((value) => (
                <article
                  key={value.number}
                  className="group rounded-2xl border border-slate-200 bg-white shadow-sm shadow-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-slate-900/5"
                >
                  <h3 className=" text-md font-extrabold text-slate-950">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#FAFAFA] py-16">
        <Container>
          <div className="flex flex-col w-full justify-between items-center text-center gap-6">
            <div className="max-w-2xl">
              <p className="font-mono text-lg font-extrabold uppercase tracking-[0.2em] text-primary">
                Our Strengths
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                What sets us apart.
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((strength) => {
              const Icon = strength.icon;

              return (
                <article
                  key={strength.title}
                  className="flex justify-start items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-gray-100"
                >
                  <div className="flex p-3 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary-100">
                    <Icon />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-md font-extrabold text-slate-950">
                      {strength.title}
                    </h3>

                    <p className="text-sm leading-6 text-slate-500">
                      {strength.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-lg font-extrabold uppercase tracking-wider text-primary">
              Our Leadership
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Meet the leaders driving Teknovia forward.
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />

                <div className="relative flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-black text-white">
                    {leader.initials}
                  </div>

                  <div>
                    <h3 className="text-md font-extrabold text-slate-950">
                      {leader.name}
                    </h3>

                    <p className="mt-1 text-sm font-bold uppercase tracking-wider text-primary">
                      {leader.role}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
