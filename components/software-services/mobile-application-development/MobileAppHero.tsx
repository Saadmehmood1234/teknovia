import Image from "next/image";
import { ArrowRight, Smartphone, ShieldCheck, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TopBadge } from "@/components/ui/Top-Badge";
import Link from "next/link";

export function MobileAppHero() {
  return (
    <section
      id="mobile-app-home"
      className="relative isolate overflow-hidden bg-[#040706] pt-8 sm:pb-16 pb-8"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/mobile-app-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-[#040706]/80" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(0,150,137,0.18),transparent_45%)]" />

      <Container className="relative z-10">
        <Breadcrumb
          items={[
            {
              label: "Software Services",
              href: "/software-services",
            },
            {
              label: "Mobile App Development",
            },
          ]}
        />

        <div className="grid items-center gap-12 pt-8 lg:grid-cols-[1.05fr_0.95fr] ">
          <div>
            <TopBadge data="Secure • Scalable • User-Centric" />

            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl">
              Build Powerful Mobile Apps That{" "}
              <span className="text-primary">Drive Business Growth</span>
            </h1>

            <p className="mt-6 max-w-2xl text-md leading-7 text-white/65 sm:leading-8">
              Transform your ideas into powerful mobile apps with TEKNOVIA. We
              build secure, scalable, and user-friendly Android, iOS, and
              cross-platform applications that drive business growth.
            </p>
            <div className="flex max-w-2xl max-sm:flex-wrap items-center gap-8 mt-6">
              <div className="flex gap-3 justify-between mb-2 items-center">
                <Smartphone className="size-6 text-primary" />
                <p className="text-sm font-semibold text-white">
                  Android & iOS
                </p>
              </div>

              <div className="flex gap-3 justify-between mb-2 items-center">
                <ShieldCheck className="size-6 text-primary" />
                <p className="text-sm font-semibold text-white">
                  Secure by Design
                </p>
              </div>

              <div className="flex gap-3 justify-between mb-2 items-center">
                <Zap className="size-6 text-primary" />
                <p className="text-sm font-semibold text-white">
                  Built for Scale
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-[0_8px_20px_rgba(0,150,137,0.28)]"
              >
                Request a Free Consultation
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-primary hover:bg-white/5"
              >
                Get a Custom Quote
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />

            <div className="relative mx-auto aspect-4/5 max-w-80 overflow-hidden rounded-[3rem] border border-white/15 bg-white/5 p-2 shadow-[0_30px_100px_rgba(0,150,137,0.18)] backdrop-blur-sm">
              <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-slate-950">
                <Image
                  src="/images/mobile-app-hero.png"
                  alt="Mobile application development"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 320px"
                />

                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-md">
                  <p className="text-xs font-medium text-white/60">
                    DIGITAL EXPERIENCE
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    Designed for your customers
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-20 rounded-2xl border border-primary/20 bg-[#071211]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-10">
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
                PERFORMANCE
              </p>
              <p className="mt-1 text-xs font-semibold text-white">
                Fast & Responsive
              </p>
            </div>

            <div className="absolute -right-3 bottom-24 rounded-2xl border border-white/10 bg-[#071211]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-10">
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
                EXPERIENCE
              </p>
              <p className="mt-1 text-xs font-semibold text-white">
                Built Around Users
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
