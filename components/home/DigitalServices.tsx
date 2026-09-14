"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { ServiceCard } from "../ui/Card";
import { digitalServices } from "@/lib/data/site";

export function DigitalServices() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const element = scrollRef.current;

    if (!element) return;

    const { scrollLeft, scrollWidth, clientWidth } = element;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollButtons();

    const element = scrollRef.current;

    if (!element) return;

    element.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      element.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const cardWidth = scrollRef.current.clientWidth / 4;
    const gap = 16;

    scrollRef.current.scrollBy({
      left: direction === "right" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section id="digital-services" className="bg-white pb-8">
      <Container>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-lg font-extrabold uppercase tracking-widest text-primary">
              Digital Services
            </p>

            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">
              Digital Growth & Marketing
            </h2>
          </div>

          <a
            href="#contact"
            className="text-sm font-semibold text-primary transition-colors hover:text-primary-700"
          >
            All services →
          </a>
        </div>

        <div className="mt-6">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-hidden scroll-smooth"
          >
            {digitalServices.map((service) => (
              <div
                key={service.title}
                className="w-full shrink-0 sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
              >
                <ServiceCard
                  image={service.image}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous services"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-primary-300 hover:text-primary disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:shadow-none disabled:hover:border-slate-200 disabled:hover:bg-slate-100 disabled:hover:text-slate-400"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next services"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-primary-300 hover:text-primary disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:shadow-none disabled:hover:border-slate-200 disabled:hover:bg-slate-100 disabled:hover:text-slate-400"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}