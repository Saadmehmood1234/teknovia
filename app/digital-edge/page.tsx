import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Globe, MapPin, MessageSquare, Share2, Target, TrendingUp, Users } from "lucide-react";

import { CTA } from "@/components/CTA";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackgroundHero } from "@/components/ui/heroes/BackgroundHero";

export const metadata: Metadata = {
  title: "Digital Marketing & Growth Solutions",
  description:
    "Accelerate your business growth with Teknovia Digital Edge: SEO, Google Business Profile optimization, Social Media Marketing, WhatsApp Marketing, and B2B Lead Generation.",
  keywords: [
    "digital marketing services",
    "SEO services in Noida",
    "local SEO services",
    "social media optimization",
    "WhatsApp marketing solutions",
    "B2B lead generation",
    "digital marketing company Delhi NCR",
  ],
  alternates: {
    canonical: "/digital-edge",
  },
  openGraph: {
    title: "Digital Marketing & Growth Solutions",
    description:
      "Data-driven digital marketing, SEO, social media optimization, and B2B growth solutions designed to generate high-intent leads and revenue.",
    url: "/digital-edge",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia Digital Edge - Marketing & Growth",
      },
    ],
  },
};

const digitalOfferings = [
  {
    title: "Local SEO & Google Business Profile",
    slug: "/digital-edge/local-seo",
    icon: MapPin,
    badge: "Local Visibility",
    description:
      "Dominate local Google search and Maps. Turn nearby searches into walk-ins, phone inquiries, and paying customers.",
    highlights: ["Google Maps Pack Ranking", "Review & Reputation Strategy", "Local Citation Building"],
  },
  {
    title: "Search & AI Optimization (Web SEO)",
    slug: "/digital-edge/web-seo",
    icon: Globe,
    badge: "Organic Search",
    description:
      "Technical, on-page, and AI-driven search engine optimization built to rank for high-intent queries that drive qualified traffic.",
    highlights: ["Keyword Strategy & Architecture", "Core Web Vitals & Technical SEO", "High-Converting Content Strategy"],
  },
  {
    title: "Social Media Optimization (SMO)",
    slug: "/digital-edge/social-media-optimization",
    icon: Share2,
    badge: "Brand Authority",
    description:
      "Build credible brand presence across LinkedIn, Instagram, and Facebook to engage your audience and foster community trust.",
    highlights: ["Audience Growth & Engagement", "Brand Creative & Video Campaigns", "Social Sales Funnels"],
  },
  {
    title: "WhatsApp Marketing & Automation",
    slug: "/digital-edge/whatsapp-marketing",
    icon: MessageSquare,
    badge: "Direct Engagement",
    description:
      "Leverage the world's most engaging channel with automated drip campaigns, catalog broadcasting, and conversational support.",
    highlights: ["98% Open Rate Messaging", "Automated Drips & Support Bots", "Broadcasts & Catalog Commerce"],
  },
  {
    title: "B2B Marketing & Lead Generation",
    slug: "/digital-edge/b2b-marketing",
    icon: Target,
    badge: "Enterprise Growth",
    description:
      "Target decision-makers directly with multi-channel B2B funnels, account-based marketing, and predictable pipeline generation.",
    highlights: ["LinkedIn Account-Based Outreach", "Executive Lead Qualification", "Sales Pipeline Acceleration"],
  },
];

const pillars = [
  {
    icon: Bot,
    title: "AI-Powered Strategy",
    description: "Leverage AI-assisted content optimization, predictive intent analysis, and real-time audience modeling.",
  },
  {
    icon: TrendingUp,
    title: "Revenue-Focused Metrics",
    description: "We optimize for qualified leads, sales velocity, and CAC reduction—not vanity clicks.",
  },
  {
    icon: Users,
    title: "Multi-Touch Orchestration",
    description: "Seamlessly connect search, social, WhatsApp, and outreach to maximize brand recall and conversions.",
  },
];

export default function DigitalEdgePage() {
  return (
    <main>
      <BackgroundHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Digital Edge" },
        ]}
        badge="DIGITAL EDGE • MARKETING & GROWTH"
        title={
          <>
            Strategic Digital Growth That{" "}
            <span className="text-primary">Drives Real Revenue.</span>
          </>
        }
        description="Connect with your target audience, dominate local search, and build predictable customer acquisition funnels through integrated digital marketing."
        image={{
          src: "/images/digital-edge/bg-image.png",
          alt: "Teknovia Digital Edge Solutions",
        }}
        primaryButton={{
          label: "Discuss Growth Strategy",
          href: "/contact?tab=enquiry#contact-form",
        }}
        secondaryButton={{
          label: "Explore Offerings",
          href: "#offerings",
        }}
      />

      {/* Pillars Section */}
      <section className="border-b border-slate-100 bg-white py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="offerings" className="bg-[#FAFAFA] py-16 sm:py-20">
        <Container>
          <SectionHeading
            variant="centered"
            badge="Growth Solutions"
            title="Explore Our Digital Edge Services"
            description="End-to-end digital acquisition channels engineered to scale brand visibility and accelerate customer acquisition."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {digitalOfferings.map((offering) => {
              const Icon = offering.icon;
              return (
                <div
                  key={offering.title}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                        <Icon className="size-6" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        {offering.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 font-heading text-xl font-bold text-slate-950">
                      {offering.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {offering.description}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                      {offering.highlights.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <span className="size-1.5 rounded-full bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      href={offering.slug}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-200 group-hover:gap-3 hover:text-primary-700"
                    >
                      Explore Service
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTA
        title="Ready to Supercharge Your Growth Engine?"
        description="Schedule a consultation with our digital strategists to build a tailored acquisition roadmap for your business."
        button={{
          label: "Book Free Consultation",
          href: "/contact?tab=message#contact-form",
        }}
      />
    </main>
  );
}
