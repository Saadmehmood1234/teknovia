import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { company, industries, resources, solutions } from "@/lib/data/footer";

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#040506]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,150,137,0.14),transparent_55%)]" />
      </div>

      <div className="relative z-10">
        <Container>
          <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)] lg:gap-10">
            <div>
              <Link href="/" className="flex shrink-0 items-center pr-4">
                <Image
                  src="/dark-logo.png"
                  alt="Teknovia"
                  width={120}
                  height={40}
                  priority
                  className="h-7 w-auto object-contain"
                />
              </Link>

              <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
                Teknovia Technologies Private Limited.
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
                    <p>Noida, Uttar Pradesh - INDIA</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 space-y-1.5 text-sm text-slate-400">
                <div className="flex flex-col sm:flex-row items-start justify-start gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <Phone
                      className="mt-0.5 shrink-0 text-primary-300"
                      size={16}
                    />
                    <a
                      href="tel:+919712980864"
                      className="block transition hover:text-white"
                    >
                      +91 97129 80864
                    </a>
                  </div>
                  <a
                    href="tel:+919897053555"
                    className="block transition hover:text-white sm:border-l sm:border-slate-700 sm:pl-3"
                  >
                    +91 98970 53555
                  </a>
                </div>
                <div className="flex items-center justify-start gap-4 pt-1">
                  <div className="flex gap-2">
                    <Mail
                      className="mt-0.5 shrink-0 text-primary-300"
                      size={16}
                    />

                    <a
                      href="mailto:info@teknovia.in"
                      className="block transition hover:text-white"
                    >
                      info@teknovia.in
                    </a>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg
                      className="size-4 shrink-0 text-primary-300 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                    </svg>

                    <a
                      href="https://www.linkedin.com/company/teknovia-tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition hover:text-white"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <FooterColumn title="Solutions" items={solutions} />
            <FooterColumn title="Company" items={company} />
            <FooterColumn title="Resources" items={resources} />
            <FooterColumn title="Industries" items={industries} />
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Teknovia Technologies Private Limited. All Rights Reserved.</p>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/terms-and-conditions" className="transition text-xs text-slate-400 hover:text-white">
                Terms & Conditions
              </Link>

              <Link href="/privacy-policy" className="transition text-xs text-slate-400 hover:text-white">
                Privacy Policy
              </Link>

              <Link href="/cookie-policy" className="transition text-xs text-slate-400 hover:text-white">
                Cookie Policy
              </Link>

              <Link href="/disclaimer" className="transition text-xs text-slate-400 hover:text-white">
                Disclaimer
              </Link>

              <Link href="/security" className="transition text-xs text-slate-400 hover:text-white">
                Security & Trust
              </Link>

              <Link href="/sitemap.xml" className="transition text-xs text-slate-400 hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

type ItemsType = {
  title: string;
  href: string;
};

type FooterColumnProps = {
  title: string;
  items: ItemsType[];
};

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
        {title}
      </h3>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group flex items-center gap-1 text-sm text-slate-400 transition hover:text-white"
          >
            <span className="text-primary transition-transform duration-200 group-hover:translate-x-0.5">
              ›
            </span>

            <span>{item.title}</span>

            <ArrowUpRight
              size={11}
              className="text-primary opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
