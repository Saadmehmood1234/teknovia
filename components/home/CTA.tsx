import { ArrowRight } from "lucide-react";
import Image from "next/image";
export function CTA() {
  return (
    <section
      id="contact"
      className="relative mt-16 w-full flex justify-center items-center overflow-hidden"
    >
      <Image src="/images/home-hero.jpg" alt="" fill className="object-cover" />

      <div className="absolute inset-0 bg-[#0B7B74]/90" />
      <div className="relative gap-10 max-w-345 py-16 px-8 lg:flex-row flex-col flex justify-between items-center w-full">
        <div>
          <p className="text-3xl font-bold text-white">
            Let&apos;s Build Smart Solutions Together
          </p>

          <h2 className="mt-4 max-w-2xl text-base leading-7 text-white/90">
            Partner with Teknovia to innovate, grow and lead in your industry.
          </h2>
        </div>

        <a
          href="mailto:info@teknovia.com"
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-primary transition hover:bg-slate-100"
        >
          Get Free Consultation
          <ArrowRight size={17} />
        </a>
      </div>
    </section>
  );
}
