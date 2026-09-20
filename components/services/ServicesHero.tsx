import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Breadcrumb } from "../ui/breadcrumb";
import { Container } from "../ui/Container";
import { TopBadge } from "../ui/Top-Badge";

export function ServicesHero() {
  return (
    <section
      className="relative py-8 isolate overflow-hidden border-b border-white/10 bg-[#040506]"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(4,5,6,1) 0%,
            rgba(4,5,6,0.98) 35%,
            rgba(4,5,6,0.82) 55%,
            rgba(4,5,6,0.35) 75%,
            rgba(4,5,6,0.05) 100%
          ),
          url("/images/services1.jpg")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-grid absolute inset-0 -z-10 opacity-20" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_30%,rgba(0,150,137,0.14),transparent_35%)]" />

      <Container>
        <Breadcrumb
          items={[{ label: "Services" }]}
        />

        <div className="relative flex items-center py-8">
          <div className="max-w-3xl">
            <TopBadge data="OUR SERVICES" />

            <h1 className="mt-5 max-w-4xl font-heading text-5xl font-semibold leading-[1.08] tracking-tight text-white">
              Digital Solutions That Move Your Business Forward
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              We design, develop and optimize digital solutions that help
              businesses operate better, reach more customers and grow with
              confidence.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                Start a Project
                <ArrowRight size={17} />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-primary hover:text-primary"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}