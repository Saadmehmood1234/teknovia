import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  CloudCog,
  Code2,
  Database,
  Globe2,
  Layers3,
  LineChart,
  MonitorSmartphone,
  Network,
  Settings2,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Software Services",
  description:
    "Custom software solutions, enterprise applications, web applications, mobile apps, SaaS products, and digital systems built for modern businesses.",
};

const expertise = [
  {
    number: "01",
    icon: Settings2,
    title: "Customized Software Solutions",
    description:
      "Tailored software built around your unique business processes, operational needs, and growth goals.",
    points: [
      "Enterprise ERP & Management Systems",
      "Business Process Automation",
      "Industry-Specific Solutions",
      "Scalable, Secure & High Performance",
    ],
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Powerful eCommerce platforms designed to streamline operations, increase sales, and create better customer experiences.",
    points: [
      "B2B, B2C & Marketplace Development",
      "Inventory & Order Management",
      "Secure Payment Integration",
      "Vendor & Customer Management",
    ],
  },
  {
    number: "03",
    icon: Globe2,
    title: "Website Development",
    description:
      "Modern, responsive websites that strengthen your brand, communicate your value, and support business growth.",
    points: [
      "Responsive & Mobile-Friendly Design",
      "Corporate & Business Websites",
      "CMS Development",
      "SEO Friendly & Fast Loading",
    ],
  },
  {
    number: "04",
    icon: Workflow,
    title: "Web Applications",
    description:
      "Secure, scalable, and feature-rich web applications designed to improve productivity and simplify complex workflows.",
    points: [
      "Custom Web Application Development",
      "Dashboard & Analytics Solutions",
      "Customer & Partner Portals",
      "Cloud-Ready & Scalable Architecture",
    ],
  },
  {
    number: "05",
    icon: Network,
    title: "IoT Applications",
    description:
      "Connected solutions that integrate devices, capture real-time data, and turn information into actionable insights.",
    points: [
      "IoT Device Integration",
      "Real-time Monitoring & Alerts",
      "Data Analytics & Visualization",
      "Automation & Smart Solutions",
    ],
  },
  {
    number: "06",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Intuitive and high-performance mobile applications for Android, iOS, and cross-platform environments.",
    points: [
      "Native & Cross-Platform Development",
      "User-Centric UI/UX Design",
      "Feature-Rich & Secure Apps",
      "App Support & Maintenance",
    ],
  },
];

const offerings = [
  {
    icon: Layers3,
    title: "Enterprise Software Development",
    description:
      "Custom enterprise software including ERP, CRM, HRMS, workflow automation, and scalable business applications.",
  },
  {
    icon: Code2,
    title: "Web Application Development",
    description:
      "Custom web applications, SaaS platforms, customer portals, dashboards, and eCommerce applications.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile Application Development",
    description:
      "Secure and scalable Android, iOS, and cross-platform applications designed around your users.",
  },
  {
    icon: CloudCog,
    title: "SaaS & Software Products",
    description:
      "Product-focused software solutions designed to turn ideas into scalable, maintainable digital products.",
  },
];

const industries = [
  {
    icon: Target,
    title: "Academics & Education",
    description:
      "Technology solutions for schools, colleges, universities, coaching institutes, training centers, and EdTech organizations.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & eCommerce",
    description:
      "Digital systems for retailers, wholesalers, distributors, D2C brands, online businesses, and marketplaces.",
  },
  {
    icon: Building2,
    title: "Real Estate & Construction",
    description:
      "Software for builders, developers, contractors, property managers, and infrastructure companies.",
  },
  {
    icon: Database,
    title: "Healthcare & Hospitals",
    description:
      "Secure technology solutions for hospitals, clinics, diagnostic centers, healthcare providers, and wellness organizations.",
  },
  {
    icon: Network,
    title: "Logistics & Supply Chain",
    description:
      "Systems that improve tracking, inventory management, transportation, warehouse operations, and supply-chain visibility.",
  },
  {
    icon: Globe2,
    title: "Hospitality & Tourism",
    description:
      "Digital solutions for hotels, resorts, restaurants, travel agencies, tour operators, and hospitality businesses.",
  },
  {
    icon: Sparkles,
    title: "SMEs & Growing Businesses",
    description:
      "Practical software solutions that help startups and growing businesses automate operations and scale efficiently.",
  },
  {
    icon: Settings2,
    title: "Manufacturing & Industrial",
    description:
      "Technology systems that improve production processes, procurement, operational visibility, and delivery.",
  },
];

export default function SoftwareServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-200 bg-gray-50">
        <div className="absolute inset-0 hero-grid opacity-70" />

        <Container className="relative">
          <div className="py-16 sm:py-20 lg:py-24">
            <Breadcrumb
              items={[{ label: "Software Services" }]}
              className="mb-10"
            />

            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <span className="eyebrow">
                  Intelligent Solutions. Measurable Impact.
                </span>

                <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                  Smart Software Solutions Built for Your Success
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                  At Teknovia, we design and develop customized software
                  solutions that help businesses streamline operations,
                  automate processes, improve efficiency, and accelerate
                  growth.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="#solutions"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
                  >
                    Explore Solutions
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 transition hover:border-primary hover:text-primary"
                  >
                    Talk to Our Experts
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-4xl border border-white bg-white p-3 shadow-2xl shadow-slate-900/10">
                  <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-gray-100">
                    <Image
                      src="/images/software-services.jpg"
                      alt="Software development and technology solutions"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 48vw"
                    />
                  </div>

                  <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/30 bg-white/80 p-4 shadow-xl backdrop-blur-xl sm:p-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                        <Code2 className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="font-heading font-bold text-gray-950">
                          Built for Real Business
                        </p>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Scalable. Secure. Future-ready.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="bg-white">
        <Container>
          <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:py-24">
            <div>
              <span className="eyebrow">Why Teknovia</span>

              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                Technology designed around your business.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-gray-600">
                We understand that every organization has different
                processes, challenges, and goals. Our software solutions are
                designed around those realities rather than forcing your
                business into a fixed system.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["Business Focused", "Solutions aligned with your goals"],
                  ["Tailored & Scalable", "Built to grow with your needs"],
                  ["Secure & Reliable", "Performance-driven architecture"],
                  ["Insight Driven", "Data for better decisions"],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-gray-100 bg-gray-50 p-5"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary">
                      <Check className="h-4 w-4" />
                    </div>

                    <h3 className="font-heading font-semibold text-gray-950">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-5 top-10 hidden h-32 w-32 rounded-full bg-primary-50 lg:block" />

              <div className="relative overflow-hidden rounded-4xl bg-gray-100">
                <Image
                  src="/images/software-services-intro.jpg"
                  alt="Teknovia software solutions"
                  width={900}
                  height={650}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 right-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl sm:right-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <LineChart className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-heading font-bold text-gray-950">
                      Measurable Impact
                    </p>
                    <p className="text-sm text-gray-500">
                      Technology that delivers value
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Expertise */}
      <section
        id="solutions"
        className="border-y border-gray-200 bg-gray-50"
      >
        <Container>
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="max-w-2xl">
              <span className="eyebrow">Our Expertise</span>

              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                Smart Solutions. Stronger Businesses.
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                From enterprise-grade systems to emerging technologies, we
                help organizations improve efficiency, automate processes, and
                accelerate growth.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {expertise.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="group rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-slate-900/5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="font-heading text-sm font-bold text-gray-300">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-6 font-heading text-xl font-bold text-gray-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>

                    <ul className="mt-6 space-y-3 border-t border-gray-100 pt-5">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm text-gray-600"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Software Offerings */}
      <section className="bg-white">
        <Container>
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <span className="eyebrow">Software Offerings</span>

                <h2 className="mt-3 font-heading text-3xl font-bold text-gray-950 sm:text-4xl">
                  Explore Our Software Solutions
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-gray-500">
                Flexible technology solutions designed to support businesses
                from early-stage growth to enterprise scale.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {offerings.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href="/contact"
                    className="group flex gap-5 rounded-3xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading text-lg font-bold text-gray-950">
                          {item.title}
                        </h3>

                        <ArrowRight className="h-4 w-4 text-gray-300 transition group-hover:translate-x-1 group-hover:text-primary" />
                      </div>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="border-y border-gray-200 bg-gray-50">
        <Container>
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Industries We Serve</span>

              <h2 className="mt-3 font-heading text-3xl font-bold text-gray-950 sm:text-4xl">
                Technology Built for Real-World Challenges
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Domain-focused technology solutions designed to solve
                operational challenges across industries.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-primary/20 hover:shadow-lg hover:shadow-slate-900/5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 font-heading font-bold text-gray-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <Container>
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="relative overflow-hidden rounded-4xl bg-gray-950 px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-300">
                    Technology That Transforms
                  </span>

                  <h2 className="mt-3 max-w-3xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Solutions that deliver real business impact.
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                    We combine innovation, domain expertise, and technology to
                    deliver solutions that drive efficiency, enhance customer
                    experience, and create lasting value.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  Talk to Our Experts
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}