import { Users, Target, RefreshCw, ShieldCheck, Code, FileCheck, Clock, Zap } from "lucide-react";

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
    name: "Dedicated Engineering Pod",
    tagline: "Your autonomous, full-stack development team scaled to your roadmap.",
    badge: "Most Popular for Scaling Startups & SaaS",
    popular: true,
    idealFor: "Startups, SaaS companies, and digital businesses needing continuous product velocity without internal hiring overhead.",
    billingStructure: "Predictable monthly retainer per specialist with bi-weekly sprint planning.",
    flexibility: "High",
    timeline: "3 to 12+ Months",
    keyFeatures: [
      "Dedicated Full Stack Engineers, UI/UX Designers, QA, and Tech Lead allocated 100% to your codebase.",
      "Direct integration into your Slack, Jira, GitHub, or preferred project workspace.",
      "Daily asynchronous standups, weekly sprint demos, and real-time sprint velocity tracking.",
      "Ability to scale team capacity up or down with 30-day notice flexibility.",
    ],
    deliverables: [
      "Production-ready code shipped on a weekly sprint cadence.",
      "Complete test coverage, automated CI/CD pipelines, and documentation.",
      "Continuous architectural guidance and scalability reviews.",
    ],
  },
  {
    id: "fixed-scope-milestone",
    name: "Fixed-Scope Milestone Delivery",
    tagline: "Turnkey project execution with guaranteed timelines and agreed pricing.",
    badge: "Best for Well-Defined MVPs & Digital Overhauls",
    popular: false,
    idealFor: "Companies with clear technical requirements, discrete MVPs, website revamps, or standalone application builds.",
    billingStructure: "Milestone-based payments tied directly to verified feature deliverables.",
    flexibility: "Medium",
    timeline: "6 to 18 Weeks",
    keyFeatures: [
      "Exhaustive pre-development technical discovery and Software Requirement Specification (SRS).",
      "Guaranteed delivery dates tied to clear staging demo approval gates.",
      "Fixed budget with zero hidden fees or unexpected creep.",
      "Comprehensive 60-day post-launch warranty and bug-fix guarantee included.",
    ],
    deliverables: [
      "Complete turn-key production application deployed to your cloud environment.",
      "Full design system, source code, database schemas, and architectural runbooks.",
      "Interactive onboarding hand-off sessions for your internal teams.",
    ],
  },
  {
    id: "growth-retainer",
    name: "Product Growth & DevOps Retainer",
    tagline: "Continuous feature enhancement, cloud optimization, and security support.",
    badge: "Best for Operational Reliability & Growth",
    popular: false,
    idealFor: "Established platforms needing reliable 24/7 uptime, proactive security patches, continuous SEO tuning, and incremental feature rollouts.",
    billingStructure: "Monthly bucket of committed engineering and digital marketing hours.",
    flexibility: "Agile",
    timeline: "Ongoing (Monthly / Annual)",
    keyFeatures: [
      "Proactive cloud infrastructure monitoring, database tuning, and cost optimization.",
      "Priority SLA response times for critical production incidents (< 1 hour).",
      "Regular technical SEO audits, Core Web Vitals optimization, and security vulnerability patching.",
      "Roll-over unused hours with complete transparency and time-log reporting.",
    ],
    deliverables: [
      "Monthly performance and security health check reports.",
      "Continuous dependency updates, bug fixes, and minor feature releases.",
      "Quarterly technical roadmap and infrastructure modernization reviews.",
    ],
  },
];

export const comparisonTable = [
  {
    criteria: "Scope Definition",
    dedicated: "Evolving / Dynamic Roadmap",
    fixed: "Strictly Defined Upfront",
    retainer: "Flexible Monthly Backlog",
  },
  {
    criteria: "Billing Model",
    dedicated: "Monthly Flat Rate / Engineer",
    fixed: "Milestone-Based Payouts",
    retainer: "Monthly Hours Retainer",
  },
  {
    criteria: "Team Dedicatedness",
    dedicated: "100% Dedicated to Your Product",
    fixed: "Project Squad Managed by Teknovia",
    retainer: "Shared Specialists on Retainer",
  },
  {
    criteria: "Direct Communication",
    dedicated: "Direct Slack / GitHub Access",
    fixed: "Weekly Milestones & Demo Calls",
    retainer: "Monthly Reviews & Standby Desk",
  },
  {
    criteria: "Speed to Kickoff",
    dedicated: "1 to 2 Weeks",
    fixed: "2 to 3 Weeks (Scoping phase)",
    retainer: "Immediate (< 48 Hours)",
  },
  {
    criteria: "IP & Code Ownership",
    dedicated: "100% Client Ownership from Day 1",
    fixed: "100% Transferred Upon Delivery",
    retainer: "100% Client Ownership Always",
  },
];

export const onboardingSteps = [
  {
    step: "01",
    title: "Discovery & Technical Alignment",
    description: "We schedule an in-depth workshop to analyze your business goals, target audience, technology constraints, and budget expectations.",
    icon: Target,
  },
  {
    step: "02",
    title: "Architecture & Roadmap Blueprint",
    description: "Our technical architects craft a granular roadmap with stack recommendations, sprint schedules, and clear milestones.",
    icon: Code,
  },
  {
    step: "03",
    title: "Rapid Sprint Shipping & Transparency",
    description: "We begin coding immediately in two-week agile sprints. You receive live staging previews, sprint demos, and direct access to task boards.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Deployment, Handover & SLA Support",
    description: "We orchestrate production release on your cloud infrastructure, transfer all credentials and source code, and initiate ongoing support.",
    icon: ShieldCheck,
  },
];

export const clientProtections = [
  {
    title: "100% IP & Source Code Transfer",
    description: "All code, documentation, designs, and database architectures remain 100% your proprietary property with zero vendor lock-in.",
    icon: FileCheck,
  },
  {
    title: "Strict Mutual NDA Protection",
    description: "We sign enforceable Non-Disclosure Agreements prior to sharing a single line of business context or technical documentation.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Git Workflows",
    description: "You have real-time visibility into every git commit, pull request, and code review directly inside your company’s GitHub or GitLab repository.",
    icon: Users,
  },
  {
    title: "60-Day Post-Launch Warranty",
    description: "Every fixed-scope project includes 60 days of complimentary bug fixing and performance stabilization to ensure flawless operations.",
    icon: Clock,
  },
];
