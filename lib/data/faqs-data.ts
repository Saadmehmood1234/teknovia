import { FAQItem } from "@/components/FAQ";
import { webAppfaqs } from "./software-services/web-application-development-data";
import { mobileAppFaqs } from "./software-services/mobile-application-development-data";
import { enterpriseFaqs } from "./software-services/enterprise-data";
import { saasFaqs } from "./software-services/software-product-data";
import { iotFaqs } from "./software-services/iot-development-data";
import { seoFaqs } from "./digital-edge/seo-data";
import { localSeoFaqs } from "./digital-edge/local-seo-data";
import { b2bMarketingFaqs } from "./digital-edge/b2b-marketing-data";
import { whatsappFaqs } from "./digital-edge/watsapp-marketing-data";
import { smoFaqs } from "./digital-edge/social-media-optimization-data";

export interface FAQCategoryGroup {
  id: string;
  name: string;
  shortLabel: string;
  description: string;
  faqs: FAQItem[];
}

export const generalFaqs: FAQItem[] = [
  {
    question: "What is Teknovia Technologies?",
    answer:
      "Teknovia Technologies Private Limited is a modern software engineering and digital marketing company headquartered in Noida, Uttar Pradesh, India. We engineer custom web applications, mobile apps, SaaS platforms, IoT architectures, and high-performance digital marketing solutions for startups, growing enterprises, and established global brands.",
  },
  {
    question: "Where is the Teknovia office located?",
    answer:
      "Our main development center is located at CLR Complex, Sector 149, Noida, Uttar Pradesh 201310, India. We operate on a hybrid model, combining in-person collaboration with distributed remote engineering.",
  },
  {
    question: "What engagement models do you offer?",
    answer:
      "We offer flexible engagement models tailored to your project requirements: 1) Fixed-Scope Milestone Delivery (best for well-defined MVPs and project builds), 2) Dedicated Engineering Team (best for long-term product iteration and SaaS growth), and 3) Time & Materials / Retainer (best for ongoing maintenance, feature expansion, and SEO marketing).",
  },
  {
    question: "Who owns the intellectual property (IP) and source code?",
    answer:
      "You do. 100% of all code, design assets, database architectures, and intellectual property developed during our engagement are fully transferred to your company upon milestone completion. We sign strict Non-Disclosure Agreements (NDAs) prior to project kickoff.",
  },
  {
    question: "How do we get started on a project with Teknovia?",
    answer:
      "You can reach out through our Contact page or email us at info@teknovia.in. Our solutions architects will schedule an introductory discovery call to discuss your technical goals, recommend an optimal technology stack, and provide an initial project scope and transparent cost estimate.",
  },
];

export const careersFaqs: FAQItem[] = [
  {
    question: "Are internships at Teknovia paid?",
    answer:
      "Yes, our standard engineering, AI, and design internships include a competitive monthly stipend (₹15,000 - ₹28,000/month), mentorship, and a performance-based Pre-Placement Offer (PPO) opportunity. We also offer specialized academic trainee tracks for undergraduate students looking for project experience and certification.",
  },
  {
    question: "What is the typical selection process for interns and full-time roles?",
    answer:
      "Our recruitment process typically includes: 1) Online application & resume screening, 2) Technical assignment or live code walkthrough, 3) Technical architecture & problem-solving discussion, and 4) Culture and leadership discussion followed by an offer letter.",
  },
  {
    question: "Can final-year students apply for internships?",
    answer:
      "Yes! Final-year and pre-final year students from B.Tech, BE, BCA, MCA, B.Sc, and related technical disciplines are welcome to apply. Flexible hybrid schedules are available to accommodate university exams and coursework.",
  },
  {
    question: "Do you offer Pre-Placement Offers (PPOs) to interns?",
    answer:
      "Absolutely. A significant portion of our full-time junior engineering roles are filled by top-performing interns who demonstrate ownership, clean coding standards, and fast learning discipline during their internship.",
  },
];

export const allFaqCategories: FAQCategoryGroup[] = [
  {
    id: "general",
    name: "General & Partnership",
    shortLabel: "General",
    description: "About Teknovia Technologies, engagement models, project kickoffs, and intellectual property.",
    faqs: generalFaqs,
  },
  {
    id: "web-app",
    name: "Web Application & Software Development",
    shortLabel: "Web & Software",
    description: "Architecture, modern frameworks (Next.js, React, Node.js), APIs, timelines, and custom business portals.",
    faqs: webAppfaqs,
  },
  {
    id: "mobile-app",
    name: "Mobile App Development (iOS & Android)",
    shortLabel: "Mobile Apps",
    description: "Cross-platform mobile apps, native development, App Store publishing, and API integrations.",
    faqs: mobileAppFaqs,
  },
  {
    id: "enterprise-saas",
    name: "Enterprise Systems & SaaS Products",
    shortLabel: "Enterprise & SaaS",
    description: "Multi-tenant cloud architectures, ERP/CRM systems, enterprise workflows, and microservices.",
    faqs: [...enterpriseFaqs, ...saasFaqs],
  },
  {
    id: "digital-edge",
    name: "Search Optimization (SEO) & Digital Growth",
    shortLabel: "SEO & Marketing",
    description: "Technical SEO, local search (GMB), B2B digital marketing, WhatsApp automation, and social media.",
    faqs: [...seoFaqs, ...localSeoFaqs, ...b2bMarketingFaqs, ...whatsappFaqs, ...smoFaqs],
  },
  {
    id: "iot-ai",
    name: "IoT & Applied AI Solutions",
    shortLabel: "IoT & AI",
    description: "Embedded device communications, real-time telemetry, smart hardware integrations, and LLM pipelines.",
    faqs: iotFaqs,
  },
  {
    id: "careers",
    name: "Careers, Hiring & Internships",
    shortLabel: "Careers",
    description: "Joining Teknovia, paid and unpaid internship tracks, selection timelines, and PPO pathways.",
    faqs: careersFaqs,
  },
];

export const totalFaqCount = allFaqCategories.reduce((acc, cat) => acc + cat.faqs.length, 0);
