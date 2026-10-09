import Image from "next/image";
import { Star } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { testimonials } from "@/lib/data/hero-data";
import { AnimatedCard, RevealGroup } from "../animations/AnimatedCards";
import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-b border-gray-100 bg-surface py-8 sm:py-16"
    >
      <Image
        src="/images/home-testimonials-bg.jpg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-white/90" />

      <Container className="relative">
        <SectionHeading
          variant="centered"
          badge="Testimonials&nbsp;&&nbsp;Success&nbsp;Stories"
          title="What Our Clients Say."
          description="Real results from businesses that partnered with Teknovia to scale smarter."
        />

        <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <AnimatedCard key={item.name} direction={index % 2 === 0 ? -1 : 1}>
              <article
                key={item.name}
                className="rounded-3xl border border-slate-200 bg-white/95 p-7 shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={17} className="text-[#FFB900]" />
                  ))}
                </div>

                <p className="mt-6 text-[15px] leading-7 text-slate-600">
                  “{item.quote}”
                </p>

                <div className="mt-7 border-t border-slate-100 pt-5">
                  <p className="font-bold text-slate-950">{item.name}</p>

                  <p className="mt-1 text-sm text-slate-500">{item.role}</p>
                </div>
              </article>
            </AnimatedCard>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
