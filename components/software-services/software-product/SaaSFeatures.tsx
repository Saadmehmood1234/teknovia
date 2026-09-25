import {
  BarChart3,
  Cloud,
  Code2,
  Database,
  GitBranch,
  KeyRound,
  Layers3,
  LockKeyhole,
  PlugZap,
  Server,
  ShieldCheck,
  Smartphone,
  UsersRound,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const features = [
  {
    title: "Multi-Tenant Architecture",
    description:
      "Serve multiple customers from a single SaaS platform while maintaining data isolation, security, and scalability.",
    icon: Layers3,
  },
  {
    title: "Subscription Management",
    description:
      "Manage recurring subscriptions, pricing plans, renewals, and customer billing through a streamlined system.",
    icon: KeyRound,
  },
  {
    title: "User Authentication & Authorization",
    description:
      "Protect your software with secure authentication and controlled access to sensitive business data.",
    icon: LockKeyhole,
  },
  {
    title: "Role-Based Access Control",
    description:
      "Assign roles and permissions so users can access only the features and information relevant to their responsibilities.",
    icon: UsersRound,
  },
  {
    title: "Cloud Deployment & Scalability",
    description:
      "Deploy applications on modern cloud infrastructure designed to scale as your users, data, and business grow.",
    icon: Cloud,
  },
  {
    title: "API-First Development",
    description:
      "Build flexible products with robust APIs that simplify integrations and support future expansion.",
    icon: Code2,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Gain actionable insights through dashboards, performance metrics, and advanced reporting capabilities.",
    icon: BarChart3,
  },
  {
    title: "Third-Party Integrations",
    description:
      "Connect your product with CRM, ERP, payment gateways, accounting systems, and other applications.",
    icon: PlugZap,
  },
  {
    title: "High Security & Compliance",
    description:
      "Implement strong security measures, data protection practices, and compliance-ready development processes.",
    icon: ShieldCheck,
  },
  {
    title: "Automated Testing & CI/CD",
    description:
      "Accelerate delivery with automated testing and continuous integration and deployment pipelines.",
    icon: GitBranch,
  },
];

function FeatureItem({
  feature,
  index,
  side,
}: {
  feature: (typeof features)[number];
  index: number;
  side: "left" | "right";
}) {
  const Icon = feature.icon;

  return (
    <div
      className={`absolute top-0 flex w-[43%] items-center gap-3 xl:gap-4 ${
        side === "left" ? "left-0 justify-end" : "right-0 justify-start"
      }`}
    >
      {side === "left" && (
        <>
          {/* Number badge */}
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary xl:size-11">
            <span className="font-mono text-[10px] font-bold xl:text-xs">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Text block */}
          <div className="w-48 text-right xl:w-56 2xl:w-62.5">
            <h3 className="font-heading text-sm font-bold leading-5 text-[#10284B] xl:text-base 2xl:text-lg 2xl:leading-6">
              {feature.title}
            </h3>
            <p className="mt-1.5 text-xs leading-4 text-gray-500 xl:mt-2 xl:text-[13px] xl:leading-5 2xl:text-sm">
              {feature.description}
            </p>
          </div>

          {/* Icon node */}
          <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-white shadow-[0_8px_30px_rgba(0,150,137,0.12)] xl:size-16 2xl:size-19">
            <div className="flex size-11 items-center justify-center rounded-full bg-primary-50 text-primary xl:size-12 2xl:size-14">
              <Icon className="size-5 xl:size-5.5 2xl:size-6" />
            </div>

            {/* Connector line + dot */}
            <div className="absolute left-full top-1/2 h-px w-10 bg-primary/30 xl:w-12 2xl:w-16" />
            <div className="absolute left-[calc(100%+2.5rem)] top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-primary xl:left-[calc(100%+3rem)] xl:size-2 2xl:left-[calc(100%+4rem)]" />
          </div>
        </>
      )}

      {side === "right" && (
        <>
          {/* Icon node */}
          <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-white shadow-[0_8px_30px_rgba(0,150,137,0.12)] xl:size-16 2xl:size-19">
            <div className="flex size-11 items-center justify-center rounded-full bg-primary-50 text-primary xl:size-12 2xl:size-14">
              <Icon className="size-5 xl:size-5.5 2xl:size-6" />
            </div>

            <div className="absolute right-full top-1/2 h-px w-10 bg-primary/30 xl:w-12 2xl:w-16" />
            <div className="absolute right-[calc(100%+2.5rem)] top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-primary xl:right-[calc(100%+3rem)] xl:size-2 2xl:right-[calc(100%+4rem)]" />
          </div>

          {/* Text block */}
          <div className="w-48 xl:w-56 2xl:w-62.5">
            <h3 className="font-heading text-sm font-bold leading-5 text-[#10284B] xl:text-base 2xl:text-lg 2xl:leading-6">
              {feature.title}
            </h3>
            <p className="mt-1.5 text-xs leading-4 text-gray-500 xl:mt-2 xl:text-[13px] xl:leading-5 2xl:text-sm">
              {feature.description}
            </p>
          </div>

          {/* Number badge */}
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary xl:size-11">
            <span className="font-mono text-[10px] font-bold xl:text-xs">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

function SaaSCenterVisual() {
  return (
    <div className="relative mx-auto flex h-90 w-full max-w-90 items-center justify-center xl:h-100 xl:max-w-100 2xl:h-117.5 2xl:max-w-107.5">
      {/* Orbits */}
      <div className="absolute size-70 rounded-full border border-dashed border-primary/20 xl:size-80 2xl:size-95" />
      <div className="absolute size-58 rounded-full border border-primary/10 bg-primary-50/40 xl:size-66 2xl:size-78.75" />
      <div className="absolute size-48 rounded-full bg-primary-100/50 blur-2xl xl:size-55 2xl:size-65" />

      {/* Main SaaS cloud badge */}
      <div className="relative z-20 flex h-28 w-40 items-center justify-center rounded-[45%] border border-primary/20 bg-white shadow-[0_20px_50px_rgba(0,150,137,0.15)] xl:h-32 xl:w-46 2xl:h-36 2xl:w-52">
        <div className="absolute -top-5 left-1/2 size-15 -translate-x-1/2 rounded-full border border-primary/20 bg-white xl:-top-6 xl:size-17 2xl:-top-7 2xl:size-20" />
        <div className="absolute -top-2.5 left-5 size-12 rounded-full border border-primary/20 bg-white xl:-top-3 xl:left-6 xl:size-14 2xl:-top-3 2xl:left-7 2xl:size-16" />
        <div className="absolute -top-2 right-5 size-12 rounded-full border border-primary/20 bg-white xl:-top-2.5 xl:right-6 xl:size-14 2xl:-top-2 2xl:right-7 2xl:size-16" />

        <div className="relative z-10 text-center">
          <Cloud className="mx-auto size-6 text-primary xl:size-7 2xl:size-8" />
          <span className="mt-0.5 block font-heading text-2xl font-bold tracking-tight text-primary xl:text-2xl 2xl:mt-1 2xl:text-3xl">
            SaaS
          </span>
        </div>
      </div>

      {/* Left monitor */}
      <div className="absolute bottom-12 left-3 z-20 hidden -rotate-6 sm:block xl:bottom-14 xl:left-4 2xl:bottom-16 2xl:left-5">
        <div className="flex h-16 w-24 items-center justify-center rounded-lg border border-primary/20 bg-white shadow-lg xl:h-18 xl:w-26 2xl:h-20 2xl:w-28">
          <div className="flex h-10 w-17 items-center justify-center rounded border border-primary/20 bg-primary-50 xl:h-11 xl:w-19 2xl:h-12 2xl:w-20">
            <BarChart3 className="size-6 text-primary xl:size-7 2xl:size-8" />
          </div>
        </div>
        <div className="mx-auto h-1.5 w-28 rounded-b-xl bg-primary/20 xl:h-2 xl:w-30 2xl:w-32" />
      </div>

      {/* Right monitor */}
      <div className="absolute bottom-10 right-3 z-20 hidden rotate-3 sm:block xl:bottom-12 xl:right-3 2xl:bottom-14 2xl:right-4">
        <div className="flex h-20 w-28 items-center justify-center rounded-lg border border-primary/20 bg-white shadow-lg xl:h-22 xl:w-30 2xl:h-24 2xl:w-32">
          <div className="flex h-12 w-21 items-center justify-center rounded border border-primary/20 bg-primary-50 xl:h-13 xl:w-22 2xl:h-14 2xl:w-24">
            <BarChart3 className="size-7 text-primary xl:size-8 2xl:size-9" />
          </div>
        </div>
        <div className="mx-auto mt-1 h-4 w-9 border-x border-b border-primary/20 xl:h-5 xl:w-10" />
        <div className="mx-auto h-1.5 w-14 rounded-full bg-primary/20 xl:w-15 2xl:w-16" />
      </div>

      {/* Database stack */}
      <div className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 xl:bottom-6 2xl:bottom-7">
        <div className="flex flex-col gap-1">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="flex h-6 w-17 items-center justify-center rounded-md border border-primary/20 bg-white shadow-sm xl:h-7 xl:w-18 2xl:w-20"
            >
              <Database className="size-3.5 text-primary xl:size-4" />
            </div>
          ))}
        </div>
      </div>

      {/* Phone */}
      <div className="absolute bottom-6 right-16 z-30 hidden rotate-12 sm:block xl:bottom-7 xl:right-17 2xl:bottom-8 2xl:right-20">
        <div className="flex h-16 w-8 items-center justify-center rounded-lg border-2 border-primary/20 bg-white shadow-lg xl:h-18 xl:w-9 2xl:h-20 2xl:w-10">
          <Smartphone className="size-4 text-primary xl:size-5" />
        </div>
      </div>

      {/* Floating icons */}
      <div className="absolute left-16 top-16 z-10 flex size-9 items-center justify-center rounded-xl border border-primary/20 bg-white shadow-md xl:left-18 xl:top-18 xl:size-10 2xl:left-20 2xl:top-20 2xl:size-11">
        <Server className="size-4 text-primary xl:size-5" />
      </div>
      <div className="absolute right-13 top-19 z-10 flex size-9 items-center justify-center rounded-xl border border-primary/20 bg-white shadow-md xl:right-14 xl:top-21 xl:size-10 2xl:right-16 2xl:top-24 2xl:size-11">
        <Code2 className="size-4 text-primary xl:size-5" />
      </div>
      <div className="absolute bottom-22 left-22 z-10 flex size-8 items-center justify-center rounded-xl border border-primary/20 bg-white shadow-md xl:bottom-24 xl:left-24 xl:size-9 2xl:bottom-28 2xl:left-28 2xl:size-10">
        <ShieldCheck className="size-4 text-primary xl:size-5" />
      </div>

      {/* Node dots */}
      <div className="absolute left-[17%] top-1/2 size-1.5 rounded-full bg-primary xl:size-2" />
      <div className="absolute right-[17%] top-1/2 size-1.5 rounded-full bg-primary xl:size-2" />
      <div className="absolute left-1/2 top-[13%] size-1.5 -translate-x-1/2 rounded-full bg-primary xl:size-2" />
      <div className="absolute bottom-[12%] left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-primary xl:size-2" />
    </div>
  );
}


function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_12px_30px_rgba(0,150,137,0.1)] sm:p-6">
      {/* Subtle corner glow */}
      <div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary-50/60 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <div className="flex size-11 items-center justify-center rounded-full bg-primary-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white sm:size-12">
          <Icon className="size-5 sm:size-5.5" />
        </div>

        <span className="flex size-8 items-center justify-center rounded-full bg-primary-50 font-mono text-[10px] font-bold text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative mt-5 font-heading text-base font-bold text-gray-950 sm:text-lg">
        {feature.title}
      </h3>

      <p className="relative mt-2 text-sm leading-6 text-gray-500">
        {feature.description}
      </p>

      {/* Bottom accent bar */}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
    </article>
  );
}

export function SaaSFeatures() {
  const leftFeatures = features.slice(0, 5);
  const rightFeatures = features.slice(5, 10);

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 2xl:py-24">
      {/* Background grid + glow */}
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-40 size-80 -translate-x-1/2 rounded-full bg-primary-50/60 blur-3xl" />

      <Container className="relative">
        {/* ── Header ─────────────────────────────────────── */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-primary sm:text-xs lg:text-sm">
            KEY FEATURES
          </p>

          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-[#10284B] sm:text-3xl lg:text-4xl xl:text-5xl">
            Built for Scale,{" "}
            <span className="text-primary">Security and Growth</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
            Powerful features to help you build, manage and scale your SaaS
            product with confidence.
          </p>
        </div>

        {/* ── DESKTOP: orbital layout (lg+) ──────────────── */}
        <div className="relative mx-auto mt-14 hidden h-160 w-full max-w-[1400px] lg:block xl:h-175 xl:max-w-[1500px] 2xl:h-190 2xl:max-w-375">
          {/* Center visual */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <SaaSCenterVisual />
          </div>

          {/* Left column — 5 items */}
          <div className="absolute left-0 top-[5%] w-full xl:left-4 2xl:left-10">
            <FeatureItem feature={leftFeatures[0]} index={0} side="left" />
          </div>
          <div className="absolute left-0 top-[24%] w-full xl:-left-8 2xl:-left-20">
            <FeatureItem feature={leftFeatures[1]} index={1} side="left" />
          </div>
          <div className="absolute left-0 top-[43%] w-full xl:-left-12 2xl:-left-32">
            <FeatureItem feature={leftFeatures[2]} index={2} side="left" />
          </div>
          <div className="absolute left-0 top-[62%] w-full xl:-left-8 2xl:-left-20">
            <FeatureItem feature={leftFeatures[3]} index={3} side="left" />
          </div>
          <div className="absolute left-0 top-[81%] w-full xl:left-4 2xl:left-10">
            <FeatureItem feature={leftFeatures[4]} index={4} side="left" />
          </div>

          {/* Right column — 5 items */}
          <div className="absolute right-0 top-[5%] w-full xl:right-4 2xl:right-10">
            <FeatureItem feature={rightFeatures[0]} index={5} side="right" />
          </div>
          <div className="absolute right-0 top-[24%] w-full xl:-right-8 2xl:-right-20">
            <FeatureItem feature={rightFeatures[1]} index={6} side="right" />
          </div>
          <div className="absolute right-0 top-[43%] w-full xl:-right-12 2xl:-right-32">
            <FeatureItem feature={rightFeatures[2]} index={7} side="right" />
          </div>
          <div className="absolute right-0 top-[62%] w-full xl:-right-8 2xl:-right-20">
            <FeatureItem feature={rightFeatures[3]} index={8} side="right" />
          </div>
          <div className="absolute right-0 top-[81%] w-full xl:right-4 2xl:right-10">
            <FeatureItem feature={rightFeatures[4]} index={9} side="right" />
          </div>
        </div>

        {/* ── MOBILE / TABLET: card grid (below lg) ─────── */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:hidden">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}