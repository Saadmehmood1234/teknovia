import {
  Shield,
  Lock,
  Server,
  FileText,
  CheckCircle2,
  Key,
  RefreshCw,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export interface PillarFeature {
  title: string;
  desc: string;
}

export interface SecurityPillar {
  id: string;
  shortTitle: string;
  title: string;
  badge: string;
  status: string;
  icon: LucideIcon;
  description: string;
  features: PillarFeature[];
  points: string[];
  tags: string[];
}

export const securityPillars: SecurityPillar[] = [
  {
    id: "appsec",
    shortTitle: "Application Security",
    title: "Application Security & Secure Coding",
    badge: "OWASP Top 10 Aligned",
    status: "Active SAST Verification",
    icon: Shield,
    description:
      "Every line of code shipped undergoes automated vulnerability checks and rigorous peer reviews before reaching production.",
    features: [
      {
        title: "SQLi & XSS Shield",
        desc: "Parameterized queries and runtime input sanitization prevent injection risks.",
      },
      {
        title: "TypeScript Strict Mode",
        desc: "End-to-end type safety eliminating memory and null-pointer exceptions.",
      },
      {
        title: "Automated SAST & Scans",
        desc: "Dependabot and Snyk security scanners gating every pull request.",
      },
      {
        title: "Strict Content Security",
        desc: "Hardened CSP and secure HTTP headers configured in Next.js runtime.",
      },
    ],
    points: [
      "Zero tolerance for unverified third-party dependencies",
      "Mandatory multi-peer code reviews on all production branches",
      "Automated static security analysis on continuous integration",
    ],
    tags: ["OWASP Top 10", "TypeScript Strict", "Snyk SAST", "Next.js CSP"],
  },
  {
    id: "data-privacy",
    shortTitle: "Data Privacy",
    title: "Data Privacy & Regulatory Compliance",
    badge: "DPDP Act 2023 & GDPR Aligned",
    status: "Privacy-by-Design Enforced",
    icon: Lock,
    description:
      "Architected adhering to modern privacy-by-design standards, giving users complete transparency and control over their records.",
    features: [
      {
        title: "DPDP 2023 & GDPR",
        desc: "Compliant with India's DPDP Act and European GDPR principles.",
      },
      {
        title: "AES-256 & TLS 1.3",
        desc: "Zero-knowledge encryption at rest and enforced TLS 1.3 in transit.",
      },
      {
        title: "Role-Based Access Control",
        desc: "Granular RBAC ensuring users access strictly authorized data.",
      },
      {
        title: "Immutable Audit Trails",
        desc: "Verifiable logs tracking sensitive data access, updates, and deletion.",
      },
    ],
    points: [
      "Explicit user consent and purpose limitation by default",
      "Automated user data deletion and export workflows",
      "Separation of sensitive personally identifiable information (PII)",
    ],
    tags: ["DPDP Act 2023", "GDPR", "AES-256", "Granular RBAC"],
  },
  {
    id: "cloud-infra",
    shortTitle: "Cloud Infrastructure",
    title: "Cloud Infrastructure & Edge Defense",
    badge: "Enterprise Resilient",
    status: "99.99% Availability",
    icon: Server,
    description:
      "Multi-region cloud deployments on AWS and Cloudflare designed for high-availability, zero single points of failure, and sub-second failovers.",
    features: [
      {
        title: "Cloudflare Enterprise WAF",
        desc: "Global edge mitigation stopping DDoS and automated bot attacks.",
      },
      {
        title: "Isolated AWS VPC Subnets",
        desc: "Private subnets for databases with zero direct public exposure.",
      },
      {
        title: "HMAC Session Tokens",
        desc: "Cryptographically salted session tokens preventing replay exploits.",
      },
      {
        title: "Zero-Trust Rate Limiting",
        desc: "Automated rate limiting and IP reputation filtering to prevent abuse.",
      },
    ],
    points: [
      "Point-in-time database snapshots with sub-hour RPO recovery",
      "Automated health checks and sub-second load balancer failover",
      "Zero public internet ingress to internal database clusters",
    ],
    tags: ["Cloudflare WAF", "AWS Isolated VPC", "HMAC SHA-256", "Zero-Trust"],
  },
  {
    id: "governance",
    shortTitle: "Intellectual Property",
    title: "Intellectual Property & Legal Protections",
    badge: "100% Client Ownership",
    status: "Full Legal Assignment",
    icon: FileText,
    description:
      "Complete legal security guaranteeing that your proprietary algorithms, product trade secrets, and codebases remain solely your assets.",
    features: [
      {
        title: "Mutual NDA Protection",
        desc: "Enforceable non-disclosure agreements signed prior to discovery discussions.",
      },
      {
        title: "100% IP Assignment",
        desc: "Full transfer of copyright, code, and patents upon milestone completion.",
      },
      {
        title: "Repository Sandboxing",
        desc: "Isolated repositories ensuring zero cross-client code sharing.",
      },
      {
        title: "Vetted Engineering Team",
        desc: "Background-checked engineers with clean-desk and encrypted device policies.",
      },
    ],
    points: [
      "Complete legal transfer of all intellectual property and assets",
      "Strict confidentiality and non-solicitation covenants",
      "Zero vendor lock-in with fully documented deployment scripts",
    ],
    tags: ["Mutual NDA", "Complete IP Transfer", "Isolated Repos", "Vetted Team"],
  },
];

export const securityPractices = [
  {
    title: "Automated CI/CD Vulnerability Gates",
    description:
      "Pull requests cannot merge into staging or production branches without passing automated security linting, unit tests, and secret-leak checks.",
    icon: CheckCircle2,
    circle: "bg-primary/10 text-primary",
    bar: "bg-primary",
  },
  {
    title: "Zero-Secret Exposure Policy",
    description:
      "API keys, database credentials, and certificates are never committed to code repositories. We utilize secure cloud vaults and server runtime environment secrets.",
    icon: Key,
    circle: "bg-amber-100 text-amber-600",
    bar: "bg-amber-500",
  },
  {
    title: "Proactive Disaster Recovery & Backups",
    description:
      "Automated daily point-in-time database snapshots and multi-region replication ensure Recovery Point Objectives (RPO) of under 1 hour.",
    icon: RefreshCw,
    circle: "bg-emerald-100 text-emerald-600",
    bar: "bg-emerald-500",
  },
  {
    title: "Strict Identity & Access Governance",
    description:
      "Multi-Factor Authentication (MFA) is strictly enforced across all internal GitHub repositories, AWS consoles, and staging environments.",
    icon: Cpu,
    circle: "bg-blue-100 text-blue-600",
    bar: "bg-blue-500",
  },
];

export const securityFaqs = [
  {
    question: "How does Teknovia ensure our proprietary source code is protected?",
    answer:
      "All client projects are hosted exclusively within client-owned GitHub or GitLab organizations or isolated private repositories. We execute comprehensive IP assignment agreements ensuring that every single line of code, design asset, and architecture is 100% your legal property from day one.",
  },
  {
    question: "Do you sign Non-Disclosure Agreements (NDAs)?",
    answer:
      "Yes. We execute mutual, legally enforceable NDAs with all clients prior to receiving any confidential business specifications, product ideas, or technical documentation.",
  },
  {
    question: "How do you handle data privacy in customer-facing applications?",
    answer:
      "We build applications following the 'Privacy by Design' framework in strict compliance with the Indian Digital Personal Data Protection (DPDP) Act 2023 and GDPR guidelines. This includes explicit consent collection, purpose limitation, secure tokenization, and built-in user data export and deletion utilities.",
  },
  {
    question: "How do we report a security vulnerability?",
    answer:
      "We operate a responsible disclosure policy. If you identify a security issue or vulnerability across any Teknovia system, please email our security response desk directly at security@teknovia.in. We acknowledge reports within 24 hours and prioritize remediation immediately.",
  },
];
