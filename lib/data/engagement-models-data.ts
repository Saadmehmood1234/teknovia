import { Users, Target, ShieldCheck, Code, FileCheck, Clock, Zap } from "lucide-react";

export interface EngagementModel {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  popular?: boolean;
  idealFor: string;
  billingStructure: string;
  flexibility: "High" | "Medium" | "Agile";
  keyFeatures: string[];
  deliverables: string[];
  timeline: string;
}

export const engagementModels: EngagementModel[] = [
  {
    id: "dedicated-pod",
    name: "Dedicated Team & Pods",
    tagline: "Your dedicated multidisciplinary team — from software engineers to SEO strategists and growth specialists.",
    badge: "Most Popular for Scaling Businesses",
    popular: true,
    idealFor:
      "Businesses, startups, and growing enterprises needing sustained velocity across software development, digital marketing, SEO, and brand growth without internal hiring overhead.",
    billingStructure: "Predictable monthly retainer per dedicated specialist with flexible cross-functional allocation.",
    flexibility: "High",
    timeline: "3 to 12+ Months",
    keyFeatures: [
      "Dedicated specialists across Software Engineering, UI/UX Design, SEO, Performance Marketing, and Social Media allocated 100% to your brand.",
      "Direct communication and seamless integration into your Slack, WhatsApp, Google Workspace, or preferred management board.",
      "Agile execution with regular progress demos, transparent weekly sprint velocity, and monthly ROI reviews.",
      "Flexibility to scale team size or adjust cross-functional skill sets as your business priorities evolve.",
    ],
    deliverables: [
      "Continuous deliverables: Production-ready digital assets, campaigns, and software features shipped weekly.",
      "Comprehensive analytics, SEO rank tracking, campaign performance dashboards, and code repositories.",
      "Regular strategy alignment sessions covering technology roadmap and digital market expansion.",
    ],
  },
  {
    id: "fixed-scope-milestone",
    name: "Fixed-Scope Project Delivery",
    tagline: "Turnkey project execution with clear milestones, guaranteed timelines, and transparent pricing.",
    badge: "Best for Well-Defined Projects & Campaigns",
    popular: false,
    idealFor:
      "Organizations with clear deliverables — such as custom web/app launches, eCommerce storefronts, end-to-end SEO overhauls, or structured digital branding campaigns.",
    billingStructure: "Milestone-based billing tied directly to verified deliverables and milestone sign-offs.",
    flexibility: "Medium",
    timeline: "4 to 16 Weeks",
    keyFeatures: [
      "Exhaustive discovery and scope blueprint outlining technical specifications, creative deliverables, and campaign goals.",
      "Guaranteed delivery timelines tied to agreed approval gates and milestone demos.",
      "Fixed, transparent budget with zero hidden costs or unexpected scope fees.",
      "Comprehensive post-launch warranty, transition handoff, and stabilization support included.",
    ],
    deliverables: [
      "Complete turnkey delivery: fully tested software, high-converting digital assets, or launched digital campaigns.",
      "Full transfer of all creative assets, codebase, configurations, analytics setups, and accounts.",
      "Walkthrough sessions and documentation for seamless team handoff.",
    ],
  },
  {
    id: "growth-retainer",
    name: "Ongoing Growth & Retainer",
    tagline: "Continuous optimization across technical maintenance, SEO rankings, social campaigns, and digital performance.",
    badge: "Best for Ongoing Maintenance & Continuous Growth",
    popular: false,
    idealFor:
      "Established businesses needing consistent digital presence, continuous SEO & social media marketing, technical maintenance, and ongoing conversions optimization.",
    billingStructure: "Flexible monthly hours or dedicated retainer packages across technical and marketing services.",
    flexibility: "Agile",
    timeline: "Ongoing (Monthly / Quarterly)",
    keyFeatures: [
      "Continuous multi-channel support covering SEO tuning, social media management, content creation, and platform updates.",
      "Priority turnaround and dedicated account manager for rapid campaign changes and technical updates.",
      "Proactive performance tracking, Core Web Vitals optimization, and conversion rate improvement.",
      "Flexible allocation between technical development and digital marketing as seasonal demands shift.",
    ],
    deliverables: [
      "Monthly digital marketing & SEO audit reports with ranking progress and traffic growth metrics.",
      "Continuous scheduled social media campaigns, creatives, and performance reporting.",
      "Regular technical updates, security patches, and incremental feature enhancements.",
    ],
  },
];

export const comparisonTable = [
  {
    criteria: "Scope Definition",
    dedicated: "Evolving / Dynamic Roadmap",
    fixed: "Strictly Defined Upfront",
    retainer: "Flexible Monthly Backlog & Campaigns",
  },
  {
    criteria: "Billing Model",
    dedicated: "Predictable Monthly / Specialist",
    fixed: "Milestone-Based Payments",
    retainer: "Monthly Growth Retainer / Hours",
  },
  {
    criteria: "Best For",
    dedicated: "Continuous Tech & Growth Velocity",
    fixed: "Specific Projects & New Launches",
    retainer: "Ongoing SEO, Marketing & Support",
  },
  {
    criteria: "Team Dedicatedness",
    dedicated: "100% Dedicated to Your Brand",
    fixed: "Project Squad Managed by Teknovia",
    retainer: "Multi-Disciplinary Specialists on Demand",
  },
  {
    criteria: "Direct Communication",
    dedicated: "Direct Slack / Workspace Access",
    fixed: "Milestone Checkpoints & Reviews",
    retainer: "Monthly Reviews & Dedicated Manager",
  },
  {
    criteria: "Speed to Kickoff",
    dedicated: "1 to 2 Weeks",
    fixed: "1 to 2 Weeks (Scoping phase)",
    retainer: "Immediate (< 48 Hours)",
  },
  {
    criteria: "IP & Asset Ownership",
    dedicated: "100% Client Ownership from Day 1",
    fixed: "100% Transferred Upon Delivery",
    retainer: "100% Client Ownership Always",
  },
];

export const onboardingSteps = [
  {
    step: "01",
    title: "Discovery & Goal Alignment",
    description:
      "We schedule an in-depth workshop to analyze your business goals, target audience, technology requirements, digital marketing objectives, and budget.",
    icon: Target,
  },
  {
    step: "02",
    title: "Strategy & Roadmap Blueprint",
    description:
      "Our strategists craft a granular roadmap with technical architecture, creative direction, campaign timelines, and clear milestones.",
    icon: Code,
  },
  {
    step: "03",
    title: "Agile Execution & Transparency",
    description:
      "We begin execution immediately. You receive live previews, campaign drafts, sprint demos, and direct access to task progress.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Launch, Growth & Handover",
    description:
      "We deploy your project or campaign, transfer full assets and access, and initiate continuous optimization and support.",
    icon: ShieldCheck,
  },
];

export const clientProtections = [
  {
    title: "100% IP & Asset Ownership",
    description:
      "All code, documentation, designs, marketing accounts, and digital assets remain 100% your proprietary property with zero vendor lock-in.",
    icon: FileCheck,
    circle: "bg-primary/10 text-primary",
    bar: "bg-primary",
  },
  {
    title: "Strict Mutual NDA Protection",
    description:
      "We sign enforceable Non-Disclosure Agreements prior to sharing any confidential business context, customer data, or campaign plans.",
    icon: ShieldCheck,
    circle: "bg-amber-100 text-amber-600",
    bar: "bg-amber-500",
  },
  {
    title: "Complete Process Transparency",
    description:
      "You have real-time visibility into project boards, campaign analytics, and task tracking directly in your preferred communication workspace.",
    icon: Users,
    circle: "bg-emerald-100 text-emerald-600",
    bar: "bg-emerald-500",
  },
  {
    title: "Dedicated Post-Launch Warranty",
    description:
      "Every fixed project includes dedicated post-launch support and performance stabilization to ensure flawless digital operations.",
    icon: Clock,
    circle: "bg-blue-100 text-blue-600",
    bar: "bg-blue-500",
  },
];
