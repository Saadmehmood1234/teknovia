import { FAQItem } from "@/components/FAQ";
import {
  BarChart3,
  Search,
  ClipboardCheck,
  PenTool,
  Rocket,
  TrendingUp,
  Database,
  Maximize2,
  Network,
  Settings,
  ShieldAlert,
  Target,
  Shield,
  BrainCircuit,
  ChartNoAxesCombined,
  Handshake,
  Boxes,
  Code2,
  Factory,
  FolderKanban,
  GraduationCap,
  MessageSquare,
  ShoppingCart,
  Truck,
  UserRoundCog,
  Users,
  Wallet,
  Warehouse,
  Workflow,
  UserX,
} from "lucide-react";
export const enterpriseFaqs: FAQItem[] = [
  {
    question:
      "How do I know if my business needs a custom software development solution?",
    answer:
      "If your business relies on spreadsheets, manual workflows, disconnected systems, or repetitive tasks, it may be time to invest in a custom software development solution. Custom software helps automate operations, improve productivity, reduce errors, and provide real-time visibility across your organization.",
  },
  {
    question:
      "What enterprise software development services does TEKNOVIA offer?",
    answer:
      "TEKNOVIA provides end-to-end enterprise software development services, including ERP software, CRM systems, HRMS platforms, workflow automation solutions, inventory management systems, business intelligence dashboards, customer portals, web applications, mobile apps, and industry-specific enterprise software solutions.",
  },
  {
    question:
      "What is the difference between custom software and off-the-shelf software?",
    answer:
      "Off-the-shelf software is built for a broad audience and may not fully align with your business processes. Custom software development creates solutions tailored specifically to your workflows, business goals, and operational requirements, offering greater flexibility, scalability, and long-term value.",
  },
  {
    question: "How long does enterprise software development take?",
    answer:
      "The timeline for enterprise software development depends on project complexity, features, integrations, and business requirements. Smaller applications may take a few weeks, while large-scale enterprise solutions can take several months. We provide a detailed project roadmap during the discovery phase.",
  },
  {
    question:
      "Can you integrate enterprise software with our existing systems?",
    answer:
      "Yes. We specialize in software integration services and can connect your enterprise software with ERP systems, CRM platforms, accounting software, payment gateways, eCommerce platforms, third-party APIs, cloud services, and other business applications to create a unified ecosystem.",
  },
  {
    question:
      "Is custom enterprise software scalable for future business growth?",
    answer:
      "Absolutely. Our enterprise software solutions are designed with scalable architectures that support growing users, increasing transaction volumes, expanding datasets, and future business requirements without requiring major redevelopment.",
  },
  {
    question: "How do you ensure software security and data protection?",
    answer:
      "Security is built into every stage of our software development process. We implement role-based access control (RBAC), multi-factor authentication (MFA), data encryption, secure APIs, audit trails, regular security testing, and industry best practices to protect sensitive business data.",
  },
  {
    question:
      "Do you provide software maintenance and support after deployment?",
    answer:
      "Yes. We offer ongoing software maintenance and support services, including performance monitoring, bug fixes, security updates, feature enhancements, technical support, and system optimization to ensure your solution continues to perform effectively.",
  },
  {
    question: "Can you modernize or upgrade our legacy software systems?",
    answer:
      "Yes. Our legacy application modernization services help businesses upgrade outdated software, improve performance, strengthen security, enhance user experience, migrate data, and integrate modern technologies while minimizing operational disruption.",
  },
  {
    question: "What are the benefits of enterprise software development?",
    answer:
      "Enterprise software development helps organizations automate business processes, improve operational efficiency, reduce costs, enhance collaboration, increase productivity, improve decision-making, and gain better visibility into business performance through centralized systems and real-time reporting.",
  },
  {
    question:
      "What industries do you serve with enterprise software solutions?",
    answer:
      "We develop enterprise software solutions for manufacturing, retail, wholesale distribution, education, healthcare, logistics, professional services, finance, eCommerce, and other industries. Our solutions are customized to address industry-specific challenges and business objectives.",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "The cost of custom software development depends on factors such as project scope, features, integrations, security requirements, number of users, deployment environment, and overall complexity. After understanding your requirements, we provide a transparent proposal and customized quotation tailored to your business needs.",
  },
  {
    question:
      "What technologies do you use for enterprise software development?",
    answer:
      "Our technology stack includes React, Next.js, Angular, Vue.js, Node.js, Python, Java, Golang, PostgreSQL, MySQL, MongoDB, AWS, Microsoft Azure, Google Cloud, Docker, Kubernetes, and other modern technologies to build secure, scalable, and high-performance enterprise applications.",
  },
  {
    question:
      "Why choose TEKNOVIA as your enterprise software development company?",
    answer:
      "TEKNOVIA combines business expertise, modern technologies, scalable architecture, security-first development practices, and a collaborative approach to deliver enterprise software solutions that drive efficiency, innovation, and long-term business growth. Through our 3P Model and 6D Solution Framework, we ensure every solution is aligned with your business objectives and future vision.",
  },
];

export const enterpriseSolutions = [
  {
    id: 1,
    title: "Enterprise Resource Planning (ERP)",
    description:
      "Integrate finance, inventory, procurement, sales, and operations into a unified platform that improves efficiency and business visibility.",
    icon: Boxes,
    link: "/software-services/erp-software",
    circle: "bg-rose-100 text-rose-600",
    bar: "bg-rose-500",
  },
  {
    id: 2,
    title: "Customer Relationship Management (CRM)",
    description:
      "Manage leads, sales pipelines, customer interactions, and service activities to strengthen relationships and drive revenue growth.",
    icon: Users,
    link: "/software-services/crm-software",
    circle: "bg-blue-100 text-blue-700",
    bar: "bg-blue-600",
  },
  {
    id: 3,
    title: "Human Resource Management System (HRMS)",
    description:
      "Simplify employee lifecycle management, payroll, attendance, leave tracking, and performance evaluation from a centralized platform.",
    icon: UserRoundCog,
    link: "/software-services/hrms-software",
    circle: "bg-orange-100 text-orange-600",
    bar: "bg-orange-500",
  },
  {
    id: 4,
    title: "Inventory & Warehouse Management",
    description:
      "Track inventory levels, warehouse operations, stock movements, and replenishment in real time to reduce costs and improve accuracy.",
    icon: Warehouse,
    link: "/software-services/inventory-warehouse-management",
    circle: "bg-purple-100 text-purple-700",
    bar: "bg-purple-600",
  },
  {
    id: 5,
    title: "Supply Chain Management",
    description:
      "Optimize procurement, logistics, supplier collaboration, and distribution processes to ensure seamless supply chain operations.",
    icon: Truck,
    link: "/software-services/supply-chain-management",
    circle: "bg-emerald-100 text-emerald-700",
    bar: "bg-emerald-500",
  },
  {
    id: 6,
    title: "Procurement Management System",
    description:
      "Automate purchasing workflows, vendor management, approvals, and contract tracking to improve control and reduce procurement costs.",
    icon: ShoppingCart,
    link: "/software-services/procurement-management",
    circle: "bg-sky-100 text-sky-700",
    bar: "bg-sky-500",
  },
  {
    id: 7,
    title: "Project Management System",
    description:
      "Plan, execute, and monitor projects with task management, resource allocation, collaboration tools, and real-time progress tracking.",
    icon: FolderKanban,
    link: "/software-services/project-management",
    circle: "bg-indigo-100 text-indigo-700",
    bar: "bg-indigo-500",
  },
  {
    id: 8,
    title: "Learning Management System (LMS)",
    description:
      "Deliver, manage, and track employee training, certifications, assessments, and learning programs through a centralized digital platform.",
    icon: GraduationCap,
    link: "/software-services/learning-management-system",
    circle: "bg-cyan-100 text-cyan-700",
    bar: "bg-cyan-500",
  },
  {
    id: 9,
    title: "Business Intelligence & Analytics",
    description:
      "Transform business data into actionable insights with interactive dashboards, reports, KPIs, and advanced analytics.",
    icon: BarChart3,
    link: "/software-services/business-intelligence-analytics",
    circle: "bg-amber-100 text-amber-700",
    bar: "bg-amber-500",
  },
  {
    id: 10,
    title: "Workflow Automation Solutions",
    description:
      "Automate repetitive tasks, approvals, notifications, and business processes to increase productivity and minimize manual effort.",
    icon: Workflow,
    link: "/software-services/workflow-automation",
    circle: "bg-teal-100 text-teal-700",
    bar: "bg-teal-500",
  },
  {
    id: 11,
    title: "Enterprise Collaboration Platforms",
    description:
      "Enable seamless communication, knowledge sharing, and teamwork across departments, locations, and business units.",
    icon: MessageSquare,
    link: "/software-services/enterprise-collaboration",
    circle: "bg-violet-100 text-violet-700",
    bar: "bg-violet-500",
  },
  {
    id: 12,
    title: "Financial Management Systems",
    description:
      "Streamline accounting, budgeting, cash flow management, financial reporting, and compliance with integrated finance solutions.",
    icon: Wallet,
    link: "/software-services/financial-management",
    circle: "bg-fuchsia-100 text-fuchsia-700",
    bar: "bg-fuchsia-500",
  },
  {
    id: 13,
    title: "Manufacturing Management Systems",
    description:
      "Monitor production planning, shop floor operations, quality control, and resource utilization to improve manufacturing efficiency.",
    icon: Factory,
    link: "/software-services/manufacturing-management",
    circle: "bg-red-100 text-red-700",
    bar: "bg-red-500",
  },
  {
    id: 14,
    title: "Custom Enterprise Applications",
    description:
      "Develop tailored software solutions designed around your unique business processes, goals, and operational requirements.",
    icon: Code2,
    link: "/software-services/custom-enterprise-applications",
    circle: "bg-lime-100 text-lime-700",
    bar: "bg-lime-500",
  },
];

export const steps = [
  {
    number: "01",
    title: "DISCOVER",
    shortTitle: "Discover",
    color: "text-[#7d2ad1]",
    description:
      "Identify business needs, challenges, opportunities, and project objectives to establish a strong foundation.",
    icon: Search,
  },
  {
    number: "02",
    title: "DEFINE",
    shortTitle: "Define",
    color: "text-[#2a4ed1]",
    description:
      "Establish project scope, success metrics, requirements, priorities, and implementation strategy.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "DESIGN",
    shortTitle: "Design",
    color: "text-[#0e959e]",
    description:
      "Create user-centric interfaces, workflows, system architecture, and solution blueprints.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "DEVELOP",
    color: "text-[#0e9e3e]",
    shortTitle: "Develop",
    description:
      "Develop scalable applications, integrations, and enterprise-grade software solutions.",
    icon: Code2,
  },
  {
    number: "05",
    title: "DEPLOY",
    shortTitle: "Deploy",
    color: "text-[#f59425]",
    description:
      "Launch solutions efficiently while minimizing disruption and ensuring business continuity.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "DRIVE",
    shortTitle: "Drive",
    color: "text-[#941329]",
    description:
      "Enhance performance, support users, implement improvements, and scale for future growth.",
    icon: TrendingUp,
  },
];

export const metrics = [
  {
    icon: Target,
    title: "Client-Centric",
    subtitle: "Your goals drive every decision.",
  },
  {
    icon: Shield,
    title: "Quality-First",
    subtitle: "Built for reliability, security, and scale.",
  },
  {
    icon: BrainCircuit,
    title: "Agile & Iterative",
    subtitle: "Adapt, evolve, and deliver value faster.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Transparent",
    subtitle: "Clear communication at every step.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partner",
    subtitle: "We grow with you, beyond development.",
  },
];

export const challenges = {
  process: [
    {
      icon: Database,
      title: "Data Silos",
      description:
        "Disparate systems and isolated data create duplication and delays.",
    },
    {
      icon: Settings,
      title: "Inefficient Workflows",
      description:
        "Complex approvals and broken processes slow down operations.",
    },
    {
      icon: Network,
      title: "Legacy Systems",
      description:
        "Outdated technology limits agility, integrations and innovation.",
    },
  ],
  people: [
    {
      icon: Workflow,
      title: "Manual Processes",
      description: "Repetitive, time-consuming tasks reduce productivity.",
    },
    {
      icon: UserX,
      title: "Human Errors",
      description: "Error-prone operations lead to mistakes and rework.",
    },
    {
      icon: Users,
      title: "Poor Collaboration",
      description:
        "Disconnected teams and lack of communication slow progress.",
    },
  ],
  performance: [
    {
      icon: TrendingUp,
      title: "Lack of Visibility",
      description:
        "Limited real-time insights hinder faster, data-driven decisions.",
    },
    {
      icon: ShieldAlert,
      title: "Security Risks",
      description:
        "Growing threats and vulnerabilities put critical data at risk.",
    },
    {
      icon: Maximize2,
      title: "Scalability Issues",
      description:
        "Systems struggle to scale with business growth and changing needs.",
    },
  ],
};
