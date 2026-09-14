import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/ui/Container";
import Image from "next/image";

const solutions = [
  "Digital Growth Solutions",
  "Custom Software Solutions",
  "Marketplace & eCommerce Solutions",
  "Talent Solutions",
  "EduTech Solutions",
];

const company = ["About Us", "Our Process", "Case Studies", "Careers"];

const resources = ["Whitepapers", "Ebooks", "FAQ's", "Insights", "Help Center"];

const industries = [
  "Education",
  "Healthcare",
  "Retail & eCommerce",
  "Real Estate",
  "Finance & Accounting",
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <Container>
        {/* Main footer */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)] lg:gap-10">
          {/* Brand / Contact */}
          <div>
            <a href="#home" className="flex shrink-0 pr-4 items-center">
              <Image
                src="/dark-logo.png"
                alt="Teknovia"
                width={120}
                height={40}
                priority
                className="h-7 w-auto object-contain"
              />
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Innovative software, marketing & marketplace solutions designed
              for modern businesses.
            </p>

            <div className="mt-7">
              <div className="flex items-start justify-start gap-2">
                <MapPin
                  className="mt-0.5 shrink-0 text-primary-300"
                  size={16}
                />

                <div className="space-y-1.5 text-sm leading-6 text-slate-400">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white">
                    Head Office
                  </p>

                  <p>CLR Complex, Sector - 149</p>
                  <p>Noida - INDIA</p>
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-1.5 text-sm text-slate-400">
              <div className="flex items-start justify-start gap-2">
                <Phone className="mt-0.5 shrink-0 text-primary-300" size={16} />

                <a
                  href="tel:+919876543210"
                  className="block transition hover:text-white"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start justify-start gap-2">
                <Mail className="mt-0.5 shrink-0 text-primary-300" size={16} />

                <a
                  href="mailto:info@teknovia.com"
                  className="block transition hover:text-white"
                >
                  info@teknovia.com
                </a>
              </div>
            </div>
          </div>

          <FooterColumn title="Solutions" items={solutions} />
          <FooterColumn title="Company" items={company} />
          <FooterColumn title="Resources" items={resources} />
          <FooterColumn title="Industries" items={industries} />
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Stay Connected</p>

              <p className="mt-1 text-sm text-slate-400">
                Subscribe to our newsletter for latest updates and insights.
              </p>
            </div>

            <form className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-l-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-primary"
              />

              <button
                type="submit"
                className="rounded-r-lg bg-primary px-5 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Teknovia. All Rights Reserved.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="transition hover:text-white">
              Terms & Conditions
            </a>

            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Refund Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-primary uppercase font-mono tracking-wider">
        {title}
      </h3>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <a
            key={item}
            href="#"
            className="group flex items-center gap-1 text-sm text-slate-400 transition hover:text-white"
          >
            <span className="transition-transform text-primary duration-200 group-hover:translate-x-0.5">
              ›
            </span>

            <span>{item}</span>

            <ArrowUpRight
              size={11}
              className="opacity-0 text-primary transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
