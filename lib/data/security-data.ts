import { Shield, Lock, Server, FileText, CheckCircle2, Key, RefreshCw, Cpu } from "lucide-react";

export interface SecurityPillar {
  id: string;
  title: string;
  badge: string;
  icon: typeof Shield;
  description: string;
  points: string[];
}

export const securityPillars: SecurityPillar[] = [
  {
    id: "appsec",
    title: "Application Security & Secure Coding",
    badge: "OWASP Top 10 Aligned",
    icon: Shield,
    description: "Every line of code shipped by Teknovia undergoes automated vulnerability linting and rigorous peer review before reaching production.",
    points: [
      "Strict defense against SQL Injection (SQLi), Cross-Site Scripting (XSS), and CSRF vulnerabilities.",
      "End-to-end type safety using TypeScript strict mode to prevent runtime memory and null-pointer exceptions.",
      "Automated Static Application Security Testing (SAST) and weekly dependency vulnerability scans (Dependabot / Snyk).",
      "Sanitized data input handling and strict Content Security Policies (CSP) configured in Next.js runtime.",
    ],
  },
  {
    id: "data-privacy",
    title: "Data Privacy & Regulatory Compliance",
    badge: "DPDP Act 2023 & GDPR Aligned",
    icon: Lock,
    description: "We architect data schemas adhering to modern privacy-by-design standards, giving users complete transparency and control over their records.",
    points: [
      "Strict compliance with India's Digital Personal Data Protection (DPDP) Act 2023 and global GDPR principles.",
      "Zero-knowledge encryption for sensitive records: AES-256 at rest and TLS 1.3 in transit.",
      "Role-Based Access Control (RBAC) ensuring users only view data authorized by their verified permission tier.",
      "Built-in audit trails tracking sensitive data access, updates, and deletion events.",
    ],
  },
  {
    id: "cloud-infra",
    title: "Cloud Infrastructure & Edge Defense",
    badge: "Enterprise Resilient",
    icon: Server,
    description: "Multi-region cloud deployments on AWS and Cloudflare designed for high-availability, zero single points of failure, and sub-second failovers.",
    points: [
      "Enterprise Cloudflare DDoS mitigation and Web Application Firewall (WAF) filtering malicious bot traffic.",
      "Virtual Private Cloud (VPC) isolation with private subnets for relational and vector databases.",
      "Cryptographically salted HMAC SHA-256 tokens and ephemeral session state management.",
      "Zero-trust API boundaries with automated IP rate-limiting to prevent brute-force attacks.",
    ],
  },
  {
    id: "governance",
    title: "Intellectual Property & Legal Protections",
    badge: "100% Client Ownership",
    icon: FileText,
    description: "Complete legal security guaranteeing that your proprietary algorithms, product trade secrets, and codebases remain solely your assets.",
    points: [
      "Legally binding mutual Non-Disclosure Agreements (NDAs) signed prior to discovery or technical discussions.",
      "Full intellectual property (IP) assignment transferring all copyright, code, and patents upon milestone completion.",
      "Clean separation of client repositories with zero shared libraries or cross-client data leakage.",
      "Background-verified software engineers and strict internal clean-desk and encrypted device policies.",
    ],
  },
];

export const securityPractices = [
  {
    title: "Automated CI/CD Vulnerability Gates",
    description: "Pull requests cannot merge into staging or production branches without passing automated security linting, unit tests, and secret-leak checks.",
    icon: CheckCircle2,
  },
  {
    title: "Zero-Secret Exposure Policy",
    description: "API keys, database credentials, and certificates are never committed to code repositories. We utilize secure cloud vaults and server runtime environment secrets.",
    icon: Key,
  },
  {
    title: "Proactive Disaster Recovery & Backups",
    description: "Automated daily point-in-time database snapshots and multi-region replication ensure Recovery Point Objectives (RPO) of under 1 hour.",
    icon: RefreshCw,
  },
  {
    title: "Strict Identity & Access Governance",
    description: "Multi-Factor Authentication (MFA) is strictly enforced across all internal GitHub repositories, AWS consoles, and staging environments.",
    icon: Cpu,
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
