"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function About() {
  return (
    <section
      id="about"
      className="border-b border-gray-200 bg-white py-4 sm:py-8"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/teknovia-about.png"
              alt="Modern workspace with professionals planning strategy"
              width={900}
              height={700}
              className="h-auto w-full object-contain"
              priority
            />
          </div>

          <div>
            <p className="font-extrabold uppercase text-primary">
              About TEKNOVIA
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-950">
              Technology-driven growth for modern businesses
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600">
              TEKNOVIA Technologies Private Limited is a technology-driven
              company delivering digital marketing, software development,
              eCommerce, EduTech, and talent acquisition solutions designed to
              help businesses scale efficiently.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              We combine strategy, technology, and execution to build secure
              systems, improve operations, increase visibility, and drive
              measurable business growth.
            </p>

            <p className="mt-6 text-sm leading-8 text-gray-500">
              Integrated digital marketing, custom software, EduTech, and talent
              solutions designed to help businesses scale efficiently.
            </p>

            <div className="mt-7 space-y-3">
              <p className="border-l-2 border-primary-300 pl-4 font-heading text-[14px] text-primary-700">
                Our approach focuses on creating practical, scalable, and
                result-oriented solutions that generate long-term impact for
                organizations across industries.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
