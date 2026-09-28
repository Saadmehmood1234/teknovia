import { ArrowRight, Check, MapPin, Search, Star } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { TopBadge } from "@/components/ui/Top-Badge";

const auditPoints = [
  "Google Business Profile health check",
  "Local pack & Google Maps ranking gaps",
  "Review, citation and NAP consistency review",
];

export function LocalSeoCTA() {
  return (
    <section className="relative overflow-hidden py-8 text-white sm:py-16">
      <Image
        src="/images/digital-edge/seo-cta-bg.png"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#06100e]/90" />
      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="">
            <TopBadge data="Local growth starts here" />

            <h2 className=" font-heading text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl">
              Ready to Improve Your{" "}
              <span className="bg-linear-to-r from-primary to-primary-300 bg-clip-text text-transparent">
                Local Visibility?
              </span>
            </h2>

            <p className="mx-auto mt-5 lg:max-w-xl text-sm leading-7 text-white/60 sm:text-base lg:mx-0">
              Get a free GMB audit and discover opportunities to improve your
              Google Maps visibility, local search presence, and customer
              acquisition.
            </p>

            <ul className="mx-auto mt-8 grid lg:max-w-md gap-3 text-left lg:mx-0">
              {auditPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm text-white/80"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-4 justify-start">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-primary px-7 py-4 text-sm font-bold text-white shadow-[0_10px_40px_rgba(0,150,137,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-[0_15px_50px_rgba(0,150,137,0.5)]"
              >
                Get Free GMB Audit
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <span className="text-xs text-white/40">
                Free · No obligation
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full lg:max-w-md ">
            <div className="relative aspect-5/4 overflow-hidden rounded-3xl border border-white/10 bg-[#0a1a17] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "linear-linear(rgba(255,255,255,0.05) 1px, transparent 1px), linear-linear(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
              <div className="absolute left-0 top-[38%] h-2 w-full -rotate-6 bg-white/6" />
              <div className="absolute left-[55%] top-0 h-full w-2 rotate-12 bg-white/6" />
              <div className="absolute left-[-10%] top-[72%] h-1.5 w-[120%] rotate-3 bg-white/5" />
              <div className="absolute inset-x-4 top-4 z-10 flex items-center gap-2.5 rounded-full border border-white/10 bg-[#06100e]/90 px-4 py-2.5 text-xs text-white/60 backdrop-blur">
                <Search className="size-3.5 text-primary" />
                best services near me
              </div>
              <MapDot className="left-[18%] top-[52%]" />
              <MapDot className="right-[16%] top-[30%]" />
              <MapDot className="right-[26%] top-[74%]" />
              <div className="absolute left-[42%] top-[40%] z-10 -translate-x-1/2 -translate-y-1/2">
                <span className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-primary/30" />
                <span className="relative flex size-11 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_30px_rgba(0,150,137,0.7)] ring-4 ring-primary/25">
                  <MapPin className="size-5" />
                </span>
              </div>

              <div className="absolute inset-x-4 bottom-4 z-10 rounded-2xl border border-white/10 bg-[#06100e]/90 p-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 font-mono text-sm font-black text-primary">
                    #1
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="h-2.5 w-3/4 rounded-full bg-primary/80" />
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex gap-0.5 text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="size-3 fill-current" />
                        ))}
                      </div>
                      <div className="h-2 w-16 rounded-full bg-white/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-24 z-20 hidden items-center gap-2 rounded-full border border-white/10 bg-[#0a1a17] px-3.5 py-2 text-[11px] font-semibold shadow-xl sm:flex lg:-left-6">
              <Star className="size-3.5 fill-amber-400 text-amber-400" />
              Top-rated
            </div>
            <div className="absolute -right-3 bottom-28 z-20 hidden items-center gap-2 rounded-full border border-primary/30 bg-primary px-3.5 py-2 text-[11px] font-bold shadow-xl sm:flex lg:-right-6">
              <MapPin className="size-3.5" />
              Map Pack
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function MapDot({ className }: { className: string }) {
  return (
    <span
      className={`absolute size-3 rounded-full border-2 border-[#0a1a17] bg-white/30 ${className}`}
    />
  );
}
