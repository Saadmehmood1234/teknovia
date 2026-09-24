import { FAQItem } from "@/components/FAQ";
import {
  Boxes,
  Users,
  UserRoundCog,
  Warehouse,
  Truck,
  ShoppingCart,
  FolderKanban,
  GraduationCap,
  BarChart3,
  Workflow,
  MessageSquare,
  Wallet,
  Factory,
  Code2,
  Gauge,
  Cloud,
  Smartphone,
  Layers3,
  Globe2,
  UsersRound,
  Building2,
  ShoppingBag,
  CalendarDays,
  ShieldCheck,
  Rocket,
  PenTool,
  ClipboardList,
  MessageCircleMore,
  PlugZap,
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
  },
  {
    id: 2,
    title: "Customer Relationship Management (CRM)",
    description:
      "Manage leads, sales pipelines, customer interactions, and service activities to strengthen relationships and drive revenue growth.",
    icon: Users,
    link: "/software-services/crm-software",
  },
  {
    id: 3,
    title: "Human Resource Management System (HRMS)",
    description:
      "Simplify employee lifecycle management, payroll, attendance, leave tracking, and performance evaluation from a centralized platform.",
    icon: UserRoundCog,
    link: "/software-services/hrms-software",
  },
  {
    id: 4,
    title: "Inventory & Warehouse Management",
    description:
      "Track inventory levels, warehouse operations, stock movements, and replenishment in real time to reduce costs and improve accuracy.",
    icon: Warehouse,
    link: "/software-services/inventory-warehouse-management",
  },
  {
    id: 5,
    title: "Supply Chain Management",
    description:
      "Optimize procurement, logistics, supplier collaboration, and distribution processes to ensure seamless supply chain operations.",
    icon: Truck,
    link: "/software-services/supply-chain-management",
  },
  {
    id: 6,
    title: "Procurement Management System",
    description:
      "Automate purchasing workflows, vendor management, approvals, and contract tracking to improve control and reduce procurement costs.",
    icon: ShoppingCart,
    link: "/software-services/procurement-management",
  },
  {
    id: 7,
    title: "Project Management System",
    description:
      "Plan, execute, and monitor projects with task management, resource allocation, collaboration tools, and real-time progress tracking.",
    icon: FolderKanban,
    link: "/software-services/project-management",
  },
  {
    id: 8,
    title: "Learning Management System (LMS)",
    description:
      "Deliver, manage, and track employee training, certifications, assessments, and learning programs through a centralized digital platform.",
    icon: GraduationCap,
    link: "/software-services/learning-management-system",
  },
  {
    id: 9,
    title: "Business Intelligence & Analytics",
    description:
      "Transform business data into actionable insights with interactive dashboards, reports, KPIs, and advanced analytics.",
    icon: BarChart3,
    link: "/software-services/business-intelligence-analytics",
  },
  {
    id: 10,
    title: "Workflow Automation Solutions",
    description:
      "Automate repetitive tasks, approvals, notifications, and business processes to increase productivity and minimize manual effort.",
    icon: Workflow,
    link: "/software-services/workflow-automation",
  },
  {
    id: 11,
    title: "Enterprise Collaboration Platforms",
    description:
      "Enable seamless communication, knowledge sharing, and teamwork across departments, locations, and business units.",
    icon: MessageSquare,
    link: "/software-services/enterprise-collaboration",
  },
  {
    id: 12,
    title: "Financial Management Systems",
    description:
      "Streamline accounting, budgeting, cash flow management, financial reporting, and compliance with integrated finance solutions.",
    icon: Wallet,
    link: "/software-services/financial-management",
  },
  {
    id: 13,
    title: "Manufacturing Management Systems",
    description:
      "Monitor production planning, shop floor operations, quality control, and resource utilization to improve manufacturing efficiency.",
    icon: Factory,
    link: "/software-services/manufacturing-management",
  },
  {
    id: 14,
    title: "Custom Enterprise Applications",
    description:
      "Develop tailored software solutions designed around your unique business processes, goals, and operational requirements.",
    icon: Code2,
    link: "/software-services/custom-enterprise-applications",
  },
];

export const webAppservices = [
  {
    number: "01",
    image: "/images/web-dev-services/card1.png",
    title: "Custom Web Application Development",
    description:
      "Build tailor-made web applications designed around your unique business processes, workflows, users, and objectives.",
  },
  {
    number: "02",
    image: "/images/web-dev-services/card2.png",
    title: "Enterprise Web Solutions",
    description:
      "Develop secure, scalable, and high-performance enterprise applications that streamline operations and support business expansion.",
  },
  {
    number: "03",
    image: "/images/web-dev-services/card3.png",
    title: "API Development & Integration",
    description:
      "Connect applications, platforms, databases, and third-party services through robust APIs and seamless integrations.",
  },
  {
    number: "04",
    image: "/images/web-dev-services/card4.png",
    title: "Cloud-Based Applications",
    description:
      "Build flexible and highly available web applications using modern cloud technologies for improved scalability and reliability.",
  },
  {
    number: "05",
    image: "/images/web-dev-services/card5.png",
    title: "Application Modernization",
    description:
      "Transform legacy systems into modern, secure, feature-rich applications using current technologies and development practices.",
  },
  {
    number: "06",
    image: "/images/web-dev-services/card6.png",
    title: "Maintenance & Support",
    description:
      "Keep your application secure, reliable, and optimized through monitoring, updates, bug fixes, and technical support.",
  },
];


export const webApptechnologies = [
  {
    category: "Frontend",
    items: [
      { title: "React.js", image: "/images/technologies/react.png" },
      { title: "Next.js", image: "/images/technologies/nextjs.jpeg" },
      { title: "Angular", image: "/images/technologies/angular.png" },
      { title: "JavaScript", image: "/images/technologies/javascript.jpeg" },
      { title: "TypeScript", image: "/images/technologies/typescript.webp" },
    ],
  },
  {
    category: "Backend",
    items: [
      { title: "Node.js", image: "/images/technologies/nodejs.jpg" },
      { title: "Express.js", image: "/images/technologies/express.avif" },
      { title: "Laravel", image: "/images/technologies/laravel.webp" },
      { title: "Python", image: "/images/technologies/python.webp" },
    ],
  },
  {
    category: "Databases",
    items: [
      { title: "PostgreSQL", image: "/images/technologies/postgresql.svg" },
      { title: "MySQL", image: "/images/technologies/mysql.png" },
      { title: "MongoDB", image: "/images/technologies/mongodb.png" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { title: "AWS", image: "/images/technologies/aws.png" },
      { title: "Azure", image: "/images/technologies/azure.jpeg" },
      { title: "Docker", image: "/images/technologies/docker.png" },
      { title: "Kubernetes", image: "/images/technologies/kubernetes.webp" },
    ],
  }
];


export const webAppfaqs = [
  {
    question: "What are custom web application development services?",
    answer:
      "Custom web application development involves designing, developing, and deploying browser-based software specifically around a business's requirements. These applications can automate processes, improve efficiency, and provide better user experiences.",
  },
  {
    question:
      "Why should businesses invest in custom web application development?",
    answer:
      "Custom applications provide greater flexibility and control because they are designed around your specific workflows and requirements. They can also be scaled, integrated, and extended as your business grows.",
  },
  {
    question: "What types of web applications does TEKNOVIA develop?",
    answer:
      "We develop customer portals, enterprise applications, SaaS platforms, eCommerce applications, CRM systems, learning management systems, booking platforms, vendor portals, and custom business applications.",
  },
  {
    question: "How much does web application development cost?",
    answer:
      "The cost depends on factors such as application complexity, features, integrations, technology requirements, number of users, and development timeline. We provide an estimate after understanding your project requirements.",
  },
  {
    question: "How long does it take to develop a web application?",
    answer:
      "Development timelines vary according to scope and complexity. Smaller applications can take a few weeks, while complex enterprise applications may require several months.",
  },
  {
    question: "Which technologies does TEKNOVIA use?",
    answer:
      "Our technology stack includes React.js, Next.js, Angular, Node.js, Laravel, Python, Django, ASP.NET, PostgreSQL, MySQL, MongoDB, AWS, Azure, Docker, and Kubernetes.",
  },
  {
    question: "Can TEKNOVIA develop enterprise web applications?",
    answer:
      "Yes. We develop secure and scalable enterprise applications designed to automate workflows, improve collaboration, centralize data, and support business growth.",
  },
  {
    question: "Do you develop SaaS applications?",
    answer:
      "Yes. We build cloud-based SaaS platforms with features such as multi-user access, subscriptions, role-based permissions, analytics, and scalable architecture.",
  },
  {
    question: "Can you integrate APIs and third-party systems?",
    answer:
      "Yes. We integrate applications with payment gateways, CRM and ERP systems, cloud services, communication platforms, external APIs, and other third-party systems.",
  },
  {
    question: "Will my web application be mobile-friendly?",
    answer:
      "Yes. Our web applications are designed to work across desktops, tablets, and smartphones with responsive interfaces and adaptive layouts.",
  },
  {
    question: "Do you provide maintenance and support?",
    answer:
      "Yes. We provide ongoing maintenance, security updates, performance optimization, bug fixes, monitoring, and technical support after deployment.",
  },
  {
    question:
      "What is the difference between web application development and website development?",
    answer:
      "A traditional website primarily presents information and content, while a web application provides interactive functionality such as dashboards, user accounts, transactions, workflows, data processing, and business operations.",
  },
  {
    question:
      "What is the difference between web application development and software development?",
    answer:
      "Web application development focuses specifically on browser-based applications. Software development is a broader term that includes web applications, desktop software, mobile applications, enterprise systems, and other software products.",
  },
  {
    question: "What are the benefits of cloud-based web applications?",
    answer:
      "Cloud-based applications provide remote accessibility, flexible scaling, high availability, easier deployment, centralized management, and integration with modern cloud services.",
  },
  {
    question: "Can you modernize an existing web application?",
    answer:
      "Yes. We can modernize legacy applications by upgrading technologies, improving performance and security, redesigning interfaces, adding new functionality, and migrating infrastructure to modern cloud environments.",
  },
  {
    question: "Is web application development suitable for startups and SMEs?",
    answer:
      "Yes. Custom web applications can help startups and SMEs automate operations, reduce repetitive work, improve customer engagement, centralize business data, and create scalable digital products.",
  },
  {
    question: "How do I choose the right web application development company?",
    answer:
      "Consider the company's relevant experience, technology expertise, development process, security practices, communication approach, scalability capabilities, and previous projects that are relevant to your requirements.",
  },
];


export const webApplications = [
  {
    number: "01",
    title: "Customer Portals",
    description:
      "Secure self-service portals where customers can manage accounts, orders, documents, support requests, and services.",
    icon: UsersRound,
  },
  {
    number: "02",
    title: "Enterprise Applications",
    description:
      "Custom business systems that centralize information, automate workflows, improve collaboration, and streamline operations.",
    icon: Building2,
  },
  {
    number: "03",
    title: "SaaS Platforms",
    description:
      "Scalable SaaS products with subscriptions, role-based access, analytics, multi-user capabilities, and multi-tenant architecture.",
    icon: Globe2,
  },
  {
    number: "04",
    title: "eCommerce Applications",
    description:
      "B2B, B2C, and multi-vendor commerce platforms with payments, inventory, orders, shipping, and customer management.",
    icon: ShoppingBag,
  },
  {
    number: "05",
    title: "Booking & Reservation Platforms",
    description:
      "Flexible booking systems for appointments, events, travel, hospitality, healthcare, and service-based businesses.",
    icon: CalendarDays,
  },
  {
    number: "06",
    title: "Learning Management Systems",
    description:
      "Complete LMS platforms for courses, training, assessments, user management, progress tracking, and content delivery.",
    icon: GraduationCap,
  },
  {
    number: "07",
    title: "Business Process Automation",
    description:
      "Digital workflows that replace repetitive manual tasks with automated approvals, notifications, integrations, and reporting.",
    icon: Workflow,
  },
];

export const webAppFeatures = [
  {
    id: 1,
    icon: Layers3,
    text: "Scalable Architecture",
  },
  {
    id: 2,
    icon: ShieldCheck,
    text: "Secure & Reliable",
  },
  {
    id: 3,
    icon: Gauge,
    text: "High Performance",
  },
  {
    id: 4,
    icon: Workflow,
    text: "Seamless Experience",
  },
];


export const developmentProcess = [
  {
    number: "01",
    title: "Discover & Analyze",
    description: "We understand your business, goals, and requirements.",
    icon: MessageCircleMore,
  },
  {
    number: "02",
    title: "Plan & Strategize",
    description:
      "We define the roadmap and architecture aligned with your objectives.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Design & Prototype",
    description:
      "We create intuitive UI/UX designs and interactive prototypes.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Develop & Integrate",
    description:
      "We build, integrate, and implement with clean and scalable code.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Test & Quality Assurance",
    description:
      "Rigorous testing to ensure performance, security, and reliability.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Deploy & Support",
    description:
      "We deploy your application and provide ongoing support and optimization.",
    icon: Rocket,
  },
];

export const WebDevCapabilities = [
  {
    number: "01",
    title: "Responsive & Mobile-Friendly",
    description:
      "Optimized for desktops, tablets, and smartphones to provide a consistent experience across devices.",
    icon: Smartphone,
  },
  {
    number: "02",
    title: "Secure & Role-Based Access",
    description:
      "Authentication, authorization, permissions, and secure access controls help protect business and customer data.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Third-Party Integrations",
    description:
      "Connect your application with APIs, payment gateways, CRM, ERP, communication platforms, cloud services, and other external systems.",
    icon: PlugZap,
  },
  {
    number: "04",
    title: "Cloud Deployment & Scalability",
    description:
      "Build applications ready for cloud environments with architectures designed to support growing traffic and workloads.",
    icon: Cloud,
  },
  {
    number: "05",
    title: "Real-Time Reporting & Analytics",
    description:
      "Interactive dashboards and real-time data insights help teams monitor performance and make informed decisions.",
    icon: BarChart3,
  },
  {
    number: "06",
    title: "High Performance & Reliability",
    description:
      "Clean architecture, optimized code, caching, database optimization, and modern development practices deliver reliable applications.",
    icon: Gauge,
  },
];


export const mobileAppFaqs = [
  {
    question: "How long does it take to develop a mobile application?",
    answer:
      "The timeline depends on the application's complexity, number of features, platforms, integrations, and design requirements. After understanding your requirements, we can provide a more accurate development estimate.",
  },
  {
    question: "Can you develop apps for both Android and iOS?",
    answer:
      "Yes. We can develop native Android and iOS applications as well as cross-platform applications using modern frameworks. The right approach depends on your product requirements, budget, performance expectations, and long-term roadmap.",
  },
  {
    question: "Can you integrate APIs and third-party services?",
    answer:
      "Yes. Mobile applications can be integrated with REST APIs, authentication systems, payment gateways, cloud services, analytics platforms, maps, notifications, and other third-party services.",
  },
  {
    question: "Do you provide UI/UX design for mobile applications?",
    answer:
      "Yes. We can handle the complete mobile UI/UX process, including user flows, wireframes, visual design, interactive prototypes, and responsive design systems.",
  },
  {
    question: "Can you maintain and update an existing mobile application?",
    answer:
      "Yes. We provide ongoing maintenance, bug fixes, performance optimization, security improvements, OS compatibility updates, and new feature development for existing applications.",
  },
  {
    question: "Can you help publish the app to the App Store and Google Play?",
    answer:
      "Yes. We can assist with production preparation, release builds, store requirements, deployment, and the technical steps required to publish your application.",
  },
];

export const mobileAppTechnologies = [
  {
    category: "Mobile",
    items: [
      {
        title: "React Native",
        image: "/images/technologies/react.png",
      },
      {
        title: "Flutter",
        image: "/images/technologies/flutter.png",
      },
      {
        title: "Android",
        image: "/images/technologies/android.png",
      },
      {
        title: "iOS",
        image: "/images/technologies/apple.webp",
      },
      {
        title: "Expo",
        image: "/images/technologies/expo.svg",
      },
    ],
  },

  {
    category: "Frontend",
    items: [
      {
        title: "React",
        image: "/images/technologies/react.png",
      },
      {
        title: "Next.js",
        image: "/images/technologies/nextjs.jpeg",
      },
      {
        title: "TypeScript",
        image: "/images/technologies/typescript.webp",
      },
      {
        title: "JavaScript",
        image: "/images/technologies/javascript.jpeg",
      },
    ],
  },

  {
    category: "Backend",
    items: [
      {
        title: "Node.js",
        image: "/images/technologies/nodejs.jpg",
      },
      {
        title: "Express.js",
        image: "/images/technologies/express.avif",
      },
      {
        title: "REST APIs",
        image: "/images/technologies/api.png",
      },
      {
        title: "JWT",
        image: "/images/technologies/jwt.webp",
      },
    ],
  },

  {
    category: "Database & Cloud",
    items: [
      {
        title: "PostgreSQL",
        image: "/images/technologies/postgresql.svg",
      },
      {
        title: "MongoDB",
        image: "/images/technologies/mongodb.png",
      },
      {
        title: "Redis",
        image: "/images/technologies/redis.svg",
      },
      {
        title: "Docker",
        image: "/images/technologies/docker.png",
      },
      {
        title: "Cloud Storage",
        image: "/images/technologies/cloud.png",
      },
    ],
  },
];