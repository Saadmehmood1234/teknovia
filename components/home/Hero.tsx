"use client";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
// import { TeknoviaBackground } from "@/components/home/TeknoviaBackground";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
// sm:bg-[#040506]
export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };
  return (
    <section id="home" className="relative overflow-hidden bg-[#022123]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(0,150,137,0.22),transparent_35%),radial-gradient(circle_at_20%_75%,rgba(0,150,137,0.10),transparent_32%)]" />

      {/* <TeknoviaBackground /> */}

      <Container className="relative z-10">
        <div className="grid min-h-142 items-center gap-10 py-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12 lg:py-10">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.h1
              variants={reveal}
              className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.5rem] xl:text-6xl"
            >
              Smart <span className="max-sm:block">Solutions.</span>
              <span className="block">Stronger</span>
              <span className="block">Businesses.</span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-6 max-w-xl text-lg leading-8 text-white/60"
            >
              Technology, digital growth, and innovative solutions that help
              businesses scale smarter, faster, and more efficiently.
            </motion.p>

            <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-[0_8px_20px_rgba(0,150,137,0.28)]"
              >
                Explore Solutions
                <ArrowRight size={17} />
              </a>

              <Link
                href="/contact?tab=message#contact-form"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-primary"
              >
                Get Free Consultation
              </Link>
            </motion.div>

            <motion.div
              variants={stagger}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                "Software Dev",
                "SEO",
                "SMO",
                "Web Design",
                "EduTech",
                "ERP / CRM",
                "Talent",
              ].map((item) => (
                <motion.span
                  key={item}
                  variants={reveal}
                  className="cursor-default rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-2xl"
          >
            <div className="absolute -inset-5 bg-primary/10 blur-3xl" />
            <div className="relative overflow-visible shadow-2xl">
              <div
                className="
                  relative aspect-4/3 overflow-hidden
                  mask-[linear-gradient(to_bottom,transparent_0%,black_8%,black_92%,transparent_100%),linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]
                  mask-intersect
                  [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_92%,transparent_100%),linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]
                  [-webkit-mask-composite:source-in]
                  "
              >
                <Image
                  src="/images/hero-background.png"
                  alt="Technology team collaborating in a modern office"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-slate-950/10" />
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -left-8 -top-5 z-20 sm:-left-4 sm:-top-6"
              >
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-950/45 px-4 py-3 shadow-xl backdrop-blur-xl">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <CheckCircle2 size={19} strokeWidth={2} />
                  </div>

                  <div>
                    <p className="text-lg font-bold leading-none text-primary-400">
                      50+
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-slate-200">
                      Project Delivered
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -bottom-5 -right-8 z-99 sm:-bottom-6 sm:-right-4">
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-950/45 px-4 py-3 shadow-xl backdrop-blur-xl">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <CheckCircle2 size={19} strokeWidth={2} />
                  </div>

                  <div>
                    <p className="text-lg font-bold leading-none text-primary">
                      98%
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-slate-200">
                      Client Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
