import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function About() {
  return (
    <section id="about" className="py-8 border-b border-gray-200 bg-white">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/teknovia-about.png"
                alt="Modern workspace with professionals planning strategy"
                width={900}
                height={700}
                className="h-96 w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="uppercase text-primary font-extrabold">
              About TEKNOVIA
            </p>

            <h2 className="mt-4 font-extrabold leading-tight tracking-tight text-slate-950 text-3xl">
              Technology-driven growth for modern businesses
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Integrated digital marketing, custom software, EduTech, and talent
              solutions designed to help businesses scale efficiently.
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              TEKNOVIA Technologies Private Limited is a technology-driven
              company delivering digital marketing, software development,
              eCommerce, EduTech, and talent acquisition solutions designed to
              help businesses scale efficiently.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              We combine strategy, technology, and execution to build secure
              systems, improve operations, increase visibility, and drive
              measurable business growth.
            </p>

            <div className="mt-7 space-y-3">
              <p className="text-primary-700 border-l-2 border-primary-300 text-[14px] font-heading pl-4">
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
