import { ArrowRight, Eye, Rocket, Target } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { leaders, strengths, values } from "@/lib/data/site";
import Image from "next/image";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Metadata } from "next";
import { TopBadge } from "@/components/ui/Top-Badge";

export const metadata: Metadata = {
  title: "Corporate",
  description:
    "Learn about Teknovia, our technology solutions, expertise, and commitment to helping modern businesses grow.",
};

export default function CorporatePage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="relative pt-8 border-b border-gray-200 pb-12 isolate overflow-hidden bg-linear-to-r from-primary/10 via-primary/5 to-white gap-10">
        <Container>
          <Breadcrumb items={[{ label: "Corporate" }]} className="mb-8" />
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="w-full lg:w-[58%]">
              <TopBadge data="About&nbsp;Teknovia" />

              <h1 className="max-w-4xl text-4xl font-black leading-[1.2] tracking-tight text-black sm:text-5xl">
                Technology, Software &{" "}
                <span className="lg:block">
                  Growth Solutions{" "}
                  <span className="text-primary">
                    Built for
                    <br className="hidden lg:block" />
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
            <div className="relative w-full lg:w-[38%]">
              <div className="relative aspect-5/4 overflow-hidden rounded-2xl">
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
        </Container>
      </section>

      <section id="about" className="border-b border-gray-200 py-8 lg:py-16">
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            <div className="relative pb-10 lg:pb-12">
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/about-teknovia.png"
                  alt="Teknovia technology solutions"
                  width={1000}
                  height={750}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Purpose Card */}
              <div className="absolute bottom-0 left-5 right-5 flex items-center justify-start gap-4 rounded-2xl border border-white/10 bg-white px-6 py-6 shadow-xl">
                <Target
                  className="shrink-0 rounded-lg border border-primary-100 bg-primary-50 p-2 text-primary"
                  size={40}
                />

                <div className="flex flex-col">
                  <p className="font-mono text-sm font-extrabold uppercase tracking-wider text-gray-400">
                    Our Purpose
                  </p>

                  <p className="text-sm font-semibold leading-7 text-gray-600">
                    To create value through technology, talent, and innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-md font-extrabold uppercase tracking-wider text-primary">
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
