import {
  Building2,
  Code2,
  Smartphone,
  ShoppingCart,
  Globe,
  Search,
  MapPin,
  Share2,
  MessageCircle,
  Users,
  GraduationCap,
  HeartPulse,
  Factory,
  Truck,
  Hotel,
  BriefcaseBusiness,
  Landmark,
  Boxes,
  BarChart3,
  Workflow,
  Database,
  ShieldCheck,
  Cloud,
  Zap,
} from "lucide-react";

export type PageFeature = {
  title: string;
  description: string;
  icon?: any;
};

export type DynamicPageData = {
  title: string;
  eyebrow: string;
  description: string;

  category?: string;

  features?: PageFeature[];

  services?: PageFeature[];

  process?: {
    title: string;
    description: string;
  }[];

  solutions?: PageFeature[];

  technologies?: string[];

  faqs?: {
    question: string;
    answer: string;
  }[];

  stats?: {
    value: string;
    label: string;
  }[];

  cta?: {
    title: string;
    description: string;
  };
};

export const pageData: Record<string, DynamicPageData> = {
  /* =========================================================
     SERVICES
  ========================================================= */

  services: {
    eyebrow: "OUR SERVICES",
    title: "Technology Services Built Around Your Business",
    description:
      "From software engineering and digital marketing to eCommerce and industry-focused solutions, we help businesses build, launch and scale digital experiences.",
    services: [
      {
        title: "Software Solutions",
        description:
          "Custom software platforms designed to automate operations, connect teams and support business growth.",
        icon: Code2,
      },
      {
        title: "Digital Marketing",
        description:
          "Digital growth services that improve visibility, engagement, leads and customer acquisition.",
        icon: Globe,
      },
      {
        title: "eCommerce Solutions",
        description:
          "Scalable commerce solutions for marketplaces, online stores and digital sellers.",
        icon: ShoppingCart,
      },
      {
        title: "EdTech Solutions",
        description:
          "Technology platforms that improve teaching, learning, administration and student engagement.",
        icon: GraduationCap,
      },
      {
        title: "Industry Solutions",
        description:
          "Technology solutions tailored to the operational requirements of different industries.",
        icon: Building2,
      },
    ],
    cta: {
      title: "Let's Build Something That Matters",
      description:
        "Tell us about your business challenge and our team will help you identify the right technology solution.",
    },
  },

  /* =========================================================
     SOFTWARE
  ========================================================= */

  "software-services": {
    eyebrow: "INTELLIGENT SOLUTIONS. MEASURABLE IMPACT.",
    title: "Smart Software Solutions Built for Your Success",
    description:
      "We design and develop customized software solutions that help businesses streamline operations, automate processes, improve efficiency and accelerate growth.",
    features: [
      {
        title: "Business Focused",
        description: "Solutions aligned with your business goals and processes.",
        icon: BriefcaseBusiness,
      },
      {
        title: "Tailored & Scalable",
        description: "Software designed around your requirements and built to grow.",
        icon: Boxes,
      },
      {
        title: "Secure & Reliable",
        description: "Robust applications built with security and performance in mind.",
        icon: ShieldCheck,
      },
      {
        title: "Insight Driven",
        description: "Dashboards and data-driven tools for better decisions.",
        icon: BarChart3,
      },
    ],
    services: [
      {
        title: "Customized Software Solutions",
        description:
          "Tailored software built around your unique business processes and objectives.",
        icon: Code2,
      },
      {
        title: "eCommerce Solutions",
        description:
          "B2B, B2C and marketplace platforms with inventory, orders and payments.",
        icon: ShoppingCart,
      },
      {
        title: "Website Development",
        description:
          "Modern responsive websites designed for performance, usability and search visibility.",
        icon: Globe,
      },
      {
        title: "Web Applications",
        description:
          "Secure and scalable applications that improve productivity and automate workflows.",
        icon: Workflow,
      },
      {
        title: "IoT Applications",
        description:
          "Connected applications for monitoring, automation and intelligent insights.",
        icon: Zap,
      },
      {
        title: "Mobile App Development",
        description:
          "High-performance mobile applications for Android, iOS and cross-platform environments.",
        icon: Smartphone,
      },
    ],
    cta: {
      title: "Technology That Transforms. Solutions That Deliver.",
      description:
        "Let's discuss your business requirements and build a solution around them.",
    },
  },

  "software-services/enterprise-software-solution": {
    eyebrow: "ENTERPRISE SOFTWARE",
    title: "Enterprise Software Development Solutions",
    description:
      "We design and develop scalable, secure and intelligent enterprise applications that automate processes, improve productivity and support long-term business growth.",
    features: [
      {
        title: "ERP Systems",
        description:
          "Connect finance, inventory, procurement, sales and operations in one platform.",
        icon: Database,
      },
      {
        title: "CRM Platforms",
        description:
          "Manage leads, customer relationships, sales pipelines and service activities.",
        icon: Users,
      },
      {
        title: "HRMS",
        description:
          "Manage employees, attendance, leave, payroll and performance from one system.",
        icon: Users,
      },
      {
        title: "Workflow Automation",
        description:
          "Automate repetitive operations, approvals, notifications and business processes.",
        icon: Workflow,
      },
      {
        title: "Business Intelligence",
        description:
          "Transform business data into dashboards, reports and actionable insights.",
        icon: BarChart3,
      },
      {
        title: "Financial Management",
        description:
          "Streamline accounting, budgeting, reporting and financial operations.",
        icon: Landmark,
      },
    ],
    process: [
      {
        title: "Discover",
        description:
          "Understand business requirements, challenges, opportunities and objectives.",
      },
      {
        title: "Define",
        description:
          "Define scope, requirements, priorities, KPIs and implementation strategy.",
      },
      {
        title: "Design",
        description:
          "Create user experiences, workflows, architecture and solution blueprints.",
      },
      {
        title: "Develop",
        description:
          "Build secure, scalable and maintainable enterprise applications.",
      },
      {
        title: "Deploy",
        description:
          "Launch the solution with testing, integrations, migration and training.",
      },
      {
        title: "Drive",
        description:
          "Continuously optimize, support and improve the platform.",
      },
    ],
    cta: {
      title: "Ready to Build Your Enterprise Software?",
      description:
        "Get in touch to discuss your business processes, requirements and technology goals.",
    },
  },

  "software-services/web-application-development": {
    eyebrow: "OUR SERVICES",
    title: "Powerful Web Applications That Drive Business Growth",
    description:
      "We design and develop custom web applications that streamline operations, enhance user experiences and accelerate digital transformation.",
    services: [
      {
        title: "Custom Web Applications",
        description:
          "Tailor-made applications designed around your workflows and business objectives.",
        icon: Code2,
      },
      {
        title: "Enterprise Web Solutions",
        description:
          "Secure and scalable applications for complex business operations.",
        icon: Building2,
      },
      {
        title: "API Development & Integration",
        description:
          "Connect platforms and third-party services through robust APIs.",
        icon: Workflow,
      },
      {
        title: "Cloud-Based Applications",
        description:
          "Flexible cloud-ready applications designed for availability and scale.",
        icon: Cloud,
      },
      {
        title: "Application Modernization",
        description:
          "Transform legacy applications into modern digital experiences.",
        icon: Zap,
      },
      {
        title: "Maintenance & Support",
        description:
          "Ongoing monitoring, updates, security fixes and technical support.",
        icon: ShieldCheck,
      },
    ],
    solutions: [
      {
        title: "Customer Portals",
        description:
          "Self-service portals for accounts, orders, support and customer interactions.",
        icon: Users,
      },
      {
        title: "Enterprise Applications",
        description:
          "Business applications that automate workflows and improve collaboration.",
        icon: Building2,
      },
      {
        title: "SaaS Platforms",
        description:
          "Multi-tenant applications with subscriptions, analytics and scalable infrastructure.",
        icon: Cloud,
      },
      {
        title: "eCommerce Applications",
        description:
          "B2B, B2C and marketplace applications with integrated commerce workflows.",
        icon: ShoppingCart,
      },
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Angular",
      "Node.js",
      "Laravel",
      "Python",
      "Django",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
    cta: {
      title: "Let's Build Your Web Application",
      description:
        "Tell us what you want to build and we'll help turn your idea into a scalable product.",
    },
  },

  "software-services/mobile-application-development": {
    eyebrow: "MOBILE APPLICATION DEVELOPMENT",
    title: "Mobile Applications Designed for Modern Users",
    description:
      "We build secure, intuitive and high-performance mobile applications for Android, iOS and cross-platform environments.",
    services: [
      {
        title: "Native App Development",
        description:
          "Platform-specific mobile applications optimized for performance.",
        icon: Smartphone,
      },
      {
        title: "Cross-Platform Applications",
        description:
          "Efficient applications that provide consistent experiences across platforms.",
        icon: Code2,
      },
      {
        title: "Mobile UI/UX",
        description:
          "User-focused interfaces designed for simple and engaging mobile experiences.",
        icon: Zap,
      },
      {
        title: "API & Backend Integration",
        description:
          "Secure mobile applications connected to scalable backend systems.",
        icon: Workflow,
      },
      {
        title: "App Security",
        description:
          "Authentication, authorization and secure data handling.",
        icon: ShieldCheck,
      },
      {
        title: "Maintenance & Support",
        description:
          "Continuous updates, monitoring and improvements after launch.",
        icon: Cloud,
      },
    ],
    cta: {
      title: "Have a Mobile App Idea?",
      description:
        "Let's turn your product idea into a reliable mobile experience.",
    },
  },

  "software-services/software-product": {
    eyebrow: "SAAS & SOFTWARE PRODUCTS",
    title: "Software Products Built for Scale",
    description:
      "We help businesses transform ideas into reliable software products with scalable architecture, intuitive interfaces and modern technology.",
    services: [
      {
        title: "Product Strategy",
        description:
          "Define product goals, users, features and a practical technology roadmap.",
        icon: BriefcaseBusiness,
      },
      {
        title: "MVP Development",
        description:
          "Launch focused MVPs quickly and validate product-market requirements.",
        icon: Zap,
      },
      {
        title: "SaaS Development",
        description:
          "Build scalable SaaS platforms with subscriptions, users and analytics.",
        icon: Cloud,
      },
      {
        title: "Product UI/UX",
        description:
          "Design clean interfaces that make complex products easy to use.",
        icon: Globe,
      },
      {
        title: "Product Engineering",
        description:
          "Build reliable, maintainable and scalable product infrastructure.",
        icon: Code2,
      },
      {
        title: "Product Support",
        description:
          "Improve performance, reliability and functionality as your product grows.",
        icon: ShieldCheck,
      },
    ],
    cta: {
      title: "Have a Product Idea?",
      description:
        "Let's turn your idea into a scalable digital product.",
    },
  },

  /* =========================================================
     DIGITAL MARKETING
  ========================================================= */

  "digital-marketing": {
    eyebrow: "DIGITAL SERVICES",
    title: "Digital Growth Solutions That Create Visibility",
    description:
      "Build your online presence, reach the right audience and turn digital visibility into measurable business growth.",
    services: [
      {
        title: "Website Development",
        description:
          "Modern, responsive and SEO-friendly websites for businesses.",
        icon: Globe,
      },
      {
        title: "Local SEO",
        description:
          "Improve local visibility and reach customers searching in your area.",
        icon: MapPin,
      },
      {
        title: "Search Engine Optimization",
        description:
          "Improve organic visibility through technical, on-page and content SEO.",
        icon: Search,
      },
      {
        title: "Social Media Optimization",
        description:
          "Grow your presence across Instagram, Facebook and other social channels.",
        icon: Share2,
      },
      {
        title: "WhatsApp Marketing",
        description:
          "Reach customers directly through targeted WhatsApp campaigns.",
        icon: MessageCircle,
      },
      {
        title: "B2B Marketing",
        description:
          "Generate qualified business enquiries through targeted campaigns.",
        icon: Users,
      },
      {
        title: "Influencer Marketing",
        description:
          "Connect your brand with relevant creators and communities.",
        icon: Users,
      },
    ],
    cta: {
      title: "Ready to Grow Your Digital Presence?",
      description:
        "Let's create a digital strategy around your audience, market and business goals.",
    },
  },

  "digital-marketing/website-development": {
    eyebrow: "WEBSITE DEVELOPMENT",
    title: "Modern Websites Built to Represent Your Business",
    description:
      "We create responsive, fast and SEO-friendly websites that strengthen your brand and turn visitors into customers.",
    services: [
      {
        title: "Corporate Websites",
        description:
          "Professional websites that communicate your brand and services clearly.",
        icon: Building2,
      },
      {
        title: "Business Websites",
        description:
          "Conversion-focused websites designed around your business goals.",
        icon: Globe,
      },
      {
        title: "CMS Development",
        description:
          "Flexible content management systems that make website updates simple.",
        icon: Database,
      },
      {
        title: "Landing Pages",
        description:
          "Focused landing pages designed for campaigns and lead generation.",
        icon: Zap,
      },
      {
        title: "Responsive Design",
        description:
          "Optimized experiences across mobile, tablet and desktop.",
        icon: Smartphone,
      },
      {
        title: "SEO-Friendly Development",
        description:
          "Clean structure and technical foundations that support search visibility.",
        icon: Search,
      },
    ],
    cta: {
      title: "Build a Website That Works for Your Business",
      description:
        "Let's create a website that looks professional and supports measurable growth.",
    },
  },

  "digital-marketing/local-seo": {
    eyebrow: "LOCAL SEO",
    title: "Get Found by Customers Near You",
    description:
      "Improve your local search visibility with Google Business Profile optimization, local SEO and reputation management.",
    services: [
      {
        title: "Google Business Profile",
        description:
          "Optimize your business profile for stronger local visibility.",
        icon: MapPin,
      },
      {
        title: "Local Keyword Strategy",
        description:
          "Target search terms used by customers in your service area.",
        icon: Search,
      },
      {
        title: "Review Management",
        description:
          "Build a stronger online reputation through structured review strategies.",
        icon: Users,
      },
      {
        title: "Local Citations",
        description:
          "Improve consistency across important business directories.",
        icon: Globe,
      },
      {
        title: "Local Content",
        description:
          "Create useful location-focused content that supports local discovery.",
        icon: Code2,
      },
      {
        title: "Performance Tracking",
        description:
          "Monitor visibility, enquiries and local search performance.",
        icon: BarChart3,
      },
    ],
    cta: {
      title: "Want More Local Customers?",
      description:
        "Let's improve how customers discover your business online.",
    },
  },

  "digital-marketing/web-seo": {
    eyebrow: "SEARCH ENGINE OPTIMIZATION",
    title: "SEO That Builds Sustainable Search Visibility",
    description:
      "Improve rankings, organic traffic and discoverability with a structured SEO strategy.",
    services: [
      {
        title: "Technical SEO",
        description:
          "Improve crawlability, indexing, performance and website structure.",
        icon: Code2,
      },
      {
        title: "On-Page SEO",
        description:
          "Optimize pages, headings, metadata, content and internal linking.",
        icon: Search,
      },
      {
        title: "Content Optimization",
        description:
          "Create useful content aligned with search intent and customer needs.",
        icon: Globe,
      },
      {
        title: "Keyword Research",
        description:
          "Identify valuable search opportunities for your business.",
        icon: Search,
      },
      {
        title: "SEO Analytics",
        description:
          "Track organic traffic, rankings, conversions and growth.",
        icon: BarChart3,
      },
      {
        title: "SEO Audits",
        description:
          "Identify technical and content opportunities across your website.",
        icon: ShieldCheck,
      },
    ],
    cta: {
      title: "Improve Your Search Visibility",
      description:
        "Build an SEO strategy that supports long-term organic growth.",
    },
  },

  "digital-marketing/social-media-optimization": {
    eyebrow: "SOCIAL MEDIA OPTIMIZATION",
    title: "Build a Stronger Social Media Presence",
    description:
      "Grow awareness and engagement with structured social media planning, content and community management.",
    services: [
      {
        title: "Social Strategy",
        description:
          "Develop a social strategy aligned with your brand and audience.",
        icon: Share2,
      },
      {
        title: "Content Planning",
        description:
          "Create consistent content calendars around your goals.",
        icon: Globe,
      },
      {
        title: "Instagram Growth",
        description:
          "Improve visibility, engagement and brand presence on Instagram.",
        icon: Share2,
      },
      {
        title: "Facebook Marketing",
        description:
          "Build community and customer engagement through Facebook.",
        icon: Users,
      },
      {
        title: "Community Management",
        description:
          "Respond to conversations and build meaningful customer relationships.",
        icon: MessageCircle,
      },
      {
        title: "Analytics",
        description:
          "Measure reach, engagement and audience growth.",
        icon: BarChart3,
      },
    ],
    cta: {
      title: "Make Your Brand More Social",
      description:
        "Create a consistent digital presence that your audience remembers.",
    },
  },

  "digital-marketing/whatsapp-marketing": {
    eyebrow: "WHATSAPP MARKETING",
    title: "Connect With Customers Directly",
    description:
      "Use WhatsApp as a direct communication channel for customer updates, promotions, lead nurturing and engagement.",
    services: [
      {
        title: "Campaign Management",
        description:
          "Plan targeted WhatsApp campaigns around customer needs.",
        icon: MessageCircle,
      },
      {
        title: "Lead Nurturing",
        description:
          "Keep prospects engaged with timely and relevant communication.",
        icon: Users,
      },
      {
        title: "Customer Updates",
        description:
          "Send useful notifications, reminders and service updates.",
        icon: Zap,
      },
      {
        title: "Promotional Campaigns",
        description:
          "Promote offers and products through direct customer communication.",
        icon: ShoppingCart,
      },
      {
        title: "Automated Messaging",
        description:
          "Create structured communication flows for recurring interactions.",
        icon: Workflow,
      },
      {
        title: "Analytics",
        description:
          "Track engagement and campaign performance.",
        icon: BarChart3,
      },
    ],
    cta: {
      title: "Reach Customers Where They Already Are",
      description:
        "Build direct communication campaigns around your customer journey.",
    },
  },

  "digital-marketing/b2b-marketing": {
    eyebrow: "B2B MARKETING",
    title: "Generate Better B2B Opportunities",
    description:
      "Reach decision-makers with focused B2B campaigns designed around qualified enquiries and business growth.",
    services: [
      {
        title: "Lead Generation",
        description:
          "Create campaigns focused on qualified business opportunities.",
        icon: Users,
      },
      {
        title: "Audience Research",
        description:
          "Identify the industries, roles and businesses that matter.",
        icon: Search,
      },
      {
        title: "Content Marketing",
        description:
          "Develop useful content that supports trust and consideration.",
        icon: Globe,
      },
      {
        title: "LinkedIn Strategy",
        description:
          "Build professional visibility and connect with relevant decision-makers.",
        icon: Share2,
      },
      {
        title: "Landing Pages",
        description:
          "Create focused pages designed to convert business visitors.",
        icon: Zap,
      },
      {
        title: "Analytics",
        description:
          "Measure campaign performance and lead quality.",
        icon: BarChart3,
      },
    ],
    cta: {
      title: "Build a Stronger B2B Pipeline",
      description:
        "Let's create a focused digital strategy for your business audience.",
    },
  },

  "digital-marketing/influencer-marketing": {
    eyebrow: "INFLUENCER MARKETING",
    title: "Connect Your Brand With the Right Creators",
    description:
      "Build awareness and trust through relevant influencer partnerships and creator-led campaigns.",
    services: [
      {
        title: "Influencer Discovery",
        description:
          "Identify creators whose audience aligns with your brand.",
        icon: Search,
      },
      {
        title: "Campaign Strategy",
        description:
          "Plan campaigns around awareness, engagement and conversions.",
        icon: BriefcaseBusiness,
      },
      {
        title: "Creator Coordination",
        description:
          "Manage communication, deliverables and campaign execution.",
        icon: Users,
      },
      {
        title: "Content Collaboration",
        description:
          "Develop authentic content with creators.",
        icon: Share2,
      },
      {
        title: "Performance Tracking",
        description:
          "Measure reach, engagement and campaign outcomes.",
        icon: BarChart3,
      },
      {
        title: "Brand Partnerships",
        description:
          "Build long-term creator relationships that strengthen brand visibility.",
        icon: Globe,
      },
    ],
    cta: {
      title: "Put Your Brand in Front of the Right Audience",
      description:
        "Let's plan an influencer campaign around your business goals.",
    },
  },

  /* =========================================================
     ECOMMERCE
  ========================================================= */

  "ecommerce-solutions": {
    eyebrow: "MARKETPLACE SOLUTIONS",
    title: "eCommerce Solutions Built for Digital Commerce",
    description:
      "Build and manage scalable online commerce experiences that help businesses reach customers and grow sales.",
    services: [
      {
        title: "JioMart Solutions",
        description:
          "Technology and marketplace support for businesses selling through JioMart.",
        icon: ShoppingCart,
      },
      {
        title: "Shopify Solutions",
        description:
          "Store development, customization and optimization for Shopify businesses.",
        icon: ShoppingCart,
      },
      {
        title: "Marketplace Development",
        description:
          "Build scalable multi-vendor marketplace experiences.",
        icon: Boxes,
      },
      {
        title: "Inventory Management",
        description:
          "Connect inventory and order workflows for better operational control.",
        icon: Database,
      },
    ],
    cta: {
      title: "Ready to Grow Your Online Business?",
      description:
        "Let's build an eCommerce solution around your products and customers.",
    },
  },

  "ecommerce-solutions/jio-mart": {
    eyebrow: "JIOMART",
    title: "JioMart Solutions for Growing Sellers",
    description:
      "Get your products positioned for marketplace growth with structured catalog, listing and marketplace support.",
    services: [
      {
        title: "Product Listing",
        description:
          "Create accurate and optimized product listings.",
        icon: ShoppingCart,
      },
      {
        title: "Catalog Management",
        description:
          "Keep product information structured and up to date.",
        icon: Database,
      },
      {
        title: "Marketplace Optimization",
        description:
          "Improve discoverability and product presentation.",
        icon: Search,
      },
      {
        title: "Order Management",
        description:
          "Streamline order processing and operational workflows.",
        icon: Boxes,
      },
    ],
    cta: {
      title: "Grow Your JioMart Presence",
      description:
        "Let's build a structured marketplace strategy for your products.",
    },
  },

  "ecommerce-solutions/shopify": {
    eyebrow: "SHOPIFY",
    title: "Shopify Stores Designed for Growth",
    description:
      "Build, customize and optimize Shopify stores that provide smooth customer experiences and scalable commerce operations.",
    services: [
      {
        title: "Shopify Store Development",
        description:
          "Launch a professional and responsive Shopify storefront.",
        icon: ShoppingCart,
      },
      {
        title: "Theme Customization",
        description:
          "Customize your store around your brand and customer experience.",
        icon: Code2,
      },
      {
        title: "Product Setup",
        description:
          "Organize products, collections and catalog information.",
        icon: Boxes,
      },
      {
        title: "Payment Integration",
        description:
          "Connect secure payment solutions to your store.",
        icon: ShieldCheck,
      },
      {
        title: "Performance Optimization",
        description:
          "Improve storefront speed and usability.",
        icon: Zap,
      },
      {
        title: "Store Support",
        description:
          "Keep your Shopify store updated and optimized.",
        icon: Cloud,
      },
    ],
    cta: {
      title: "Build Your Shopify Store",
      description:
        "Let's create a Shopify experience designed around your customers.",
    },
  },

  /* =========================================================
     EDTECH
  ========================================================= */

  "edtech-solution": {
    eyebrow: "EDTECH SOLUTIONS",
    title: "Technology Solutions for Modern Education",
    description:
      "Empower schools, colleges, coaching institutes and education businesses with connected digital platforms.",
    services: [
      {
        title: "Learning Management Systems",
        description:
          "Manage courses, lessons, assignments and learner progress.",
        icon: GraduationCap,
      },
      {
        title: "Student Information Systems",
        description:
          "Centralize student, academic and administrative information.",
        icon: Database,
      },
      {
        title: "Online Exams",
        description:
          "Conduct assessments and manage results digitally.",
        icon: BarChart3,
      },
      {
        title: "Virtual Classrooms",
        description:
          "Enable interactive online learning experiences.",
        icon: Globe,
      },
      {
        title: "Fee Management",
        description:
          "Simplify fee collection, records and financial reporting.",
        icon: Landmark,
      },
      {
        title: "Parent & Student Portals",
        description:
          "Connect students, parents, teachers and administrators.",
        icon: Users,
      },
    ],
    cta: {
      title: "Build the Future of Learning",
      description:
        "Let's create technology that makes education more connected and accessible.",
    },
  },

  /* =========================================================
     INDUSTRIES
  ========================================================= */

  industries: {
    eyebrow: "INDUSTRY SOLUTIONS",
    title: "Solutions Built for Every Industry",
    description:
      "Every industry has unique challenges. Our technology solutions are designed around real operational needs.",
    services: [
      {
        title: "Education",
        description:
          "Digital platforms for learning, administration and student engagement.",
        icon: GraduationCap,
      },
      {
        title: "Healthcare",
        description:
          "Technology solutions for patient management and healthcare operations.",
        icon: HeartPulse,
      },
      {
        title: "Retail & eCommerce",
        description:
          "Commerce and retail solutions for inventory, orders and customer experiences.",
        icon: ShoppingCart,
      },
      {
        title: "Real Estate",
        description:
          "Solutions for property management, leads and customer engagement.",
        icon: Building2,
      },
      {
        title: "Finance & Accounting",
        description:
          "Secure systems for financial operations, reporting and compliance.",
        icon: Landmark,
      },
      {
        title: "Manufacturing",
        description:
          "Digital systems for production, quality and operational efficiency.",
        icon: Factory,
      },
      {
        title: "Logistics & Supply Chain",
        description:
          "Technology for transport, warehousing, tracking and supply chain visibility.",
        icon: Truck,
      },
      {
        title: "Hospitality & Travel",
        description:
          "Booking, guest management and customer experience platforms.",
        icon: Hotel,
      },
      {
        title: "Professional Services",
        description:
          "Digital tools for projects, clients, workflows and billing.",
        icon: BriefcaseBusiness,
      },
    ],
    cta: {
      title: "Your Industry. Our Expertise.",
      description:
        "Tell us about your industry and we'll help identify the right digital solution.",
    },
  },

  "industries/education": {
    eyebrow: "EDUCATION",
    title: "Technology Solutions for Education",
    description:
      "Digital platforms that improve learning, administration, communication and student engagement.",
    services: [
      {
        title: "LMS & eLearning",
        description:
          "Manage digital courses, learning content and student progress.",
        icon: GraduationCap,
      },
      {
        title: "Student Information Systems",
        description:
          "Centralize academic and student records.",
        icon: Database,
      },
      {
        title: "Online Exams",
        description:
          "Create assessments, evaluate learners and manage results.",
        icon: BarChart3,
      },
      {
        title: "Virtual Classrooms",
        description:
          "Enable interactive digital learning.",
        icon: Globe,
      },
    ],
    cta: {
      title: "Let's Build Better Education Technology",
      description:
        "Create connected digital experiences for students, teachers and administrators.",
    },
  },

  "industries/healthcare": {
    eyebrow: "HEALTHCARE",
    title: "Digital Solutions for Healthcare",
    description:
      "Secure technology platforms that improve healthcare operations, patient engagement and administrative efficiency.",
    services: [
      {
        title: "Hospital Management",
        description:
          "Connect operational workflows across departments.",
        icon: HeartPulse,
      },
      {
        title: "Electronic Health Records",
        description:
          "Centralize patient information and healthcare records.",
        icon: Database,
      },
      {
        title: "Telemedicine",
        description:
          "Enable digital consultations and remote healthcare experiences.",
        icon: Globe,
      },
      {
        title: "Patient Engagement",
        description:
          "Improve communication between healthcare providers and patients.",
        icon: Users,
      },
    ],
    cta: {
      title: "Modernize Healthcare Operations",
      description:
        "Let's build secure technology around your healthcare workflows.",
    },
  },

  "industries/retail-ecommerce": {
    eyebrow: "RETAIL & ECOMMERCE",
    title: "Digital Solutions for Retail & eCommerce",
    description:
      "Build better commerce experiences while improving inventory, orders, customer engagement and operations.",
    services: [
      {
        title: "eCommerce Platforms",
        description:
          "Build scalable online stores and marketplaces.",
        icon: ShoppingCart,
      },
      {
        title: "Inventory Management",
        description:
          "Track inventory and stock movement in real time.",
        icon: Boxes,
      },
      {
        title: "Order Management",
        description:
          "Streamline order processing from purchase to fulfillment.",
        icon: Workflow,
      },
      {
        title: "CRM & Loyalty",
        description:
          "Build stronger relationships with customers.",
        icon: Users,
      },
    ],
    cta: {
      title: "Build a Smarter Retail Business",
      description:
        "Connect your commerce operations through technology.",
    },
  },

  "industries/real-estate": {
    eyebrow: "REAL ESTATE",
    title: "Technology for Real Estate Businesses",
    description:
      "Digital tools for property management, lead generation, projects and customer relationships.",
    services: [
      {
        title: "Property Management",
        description:
          "Manage properties, tenants and operational information.",
        icon: Building2,
      },
      {
        title: "Lead Management",
        description:
          "Track prospects and improve sales workflows.",
        icon: Users,
      },
      {
        title: "Project Management",
        description:
          "Monitor projects, tasks and resources.",
        icon: Workflow,
      },
      {
        title: "CRM",
        description:
          "Centralize customer and prospect relationships.",
        icon: Users,
      },
    ],
    cta: {
      title: "Digitize Your Real Estate Operations",
      description:
        "Let's create a platform around your property and sales workflows.",
    },
  },

  "industries/finance-accounting": {
    eyebrow: "FINANCE & ACCOUNTING",
    title: "Secure Technology for Finance & Accounting",
    description:
      "Build reliable digital systems for accounting, financial operations, reporting and compliance.",
    services: [
      {
        title: "Financial Management",
        description:
          "Manage accounting and financial workflows centrally.",
        icon: Landmark,
      },
      {
        title: "Reporting & Analytics",
        description:
          "Turn financial data into useful business insights.",
        icon: BarChart3,
      },
      {
        title: "Compliance",
        description:
          "Build structured workflows around financial controls.",
        icon: ShieldCheck,
      },
      {
        title: "Business Automation",
        description:
          "Automate repetitive financial and accounting tasks.",
        icon: Workflow,
      },
    ],
    cta: {
      title: "Build Better Financial Workflows",
      description:
        "Let's create secure technology around your financial operations.",
    },
  },

  "industries/manufacturing": {
    eyebrow: "MANUFACTURING",
    title: "Digital Solutions for Manufacturing",
    description:
      "Improve production visibility, planning, quality and operational efficiency with connected software.",
    services: [
      {
        title: "Production Planning",
        description:
          "Plan production activities and resources efficiently.",
        icon: Factory,
      },
      {
        title: "Manufacturing Execution",
        description:
          "Connect shop-floor processes and production information.",
        icon: Workflow,
      },
      {
        title: "Quality Management",
        description:
          "Track quality processes and improve operational consistency.",
        icon: ShieldCheck,
      },
      {
        title: "Equipment Maintenance",
        description:
          "Manage equipment maintenance and operational schedules.",
        icon: Boxes,
      },
    ],
    cta: {
      title: "Digitize Your Manufacturing Operations",
      description:
        "Connect production, operations and business data.",
    },
  },

  "industries/logistics-supply-chain": {
    eyebrow: "LOGISTICS & SUPPLY CHAIN",
    title: "Technology for Smarter Logistics",
    description:
      "Improve transportation, warehouse operations, fleet visibility and supply chain coordination.",
    services: [
      {
        title: "Transport Management",
        description:
          "Manage transportation operations and deliveries.",
        icon: Truck,
      },
      {
        title: "Warehouse Management",
        description:
          "Improve warehouse visibility and inventory movement.",
        icon: Boxes,
      },
      {
        title: "Fleet Management",
        description:
          "Monitor vehicles, routes and fleet operations.",
        icon: Truck,
      },
      {
        title: "Route Optimization",
        description:
          "Improve route planning and operational efficiency.",
        icon: MapPin,
      },
    ],
    cta: {
      title: "Build a More Connected Supply Chain",
      description:
        "Let's improve visibility across your logistics operations.",
    },
  },

  "industries/hospitality-travel": {
    eyebrow: "HOSPITALITY & TRAVEL",
    title: "Digital Experiences for Hospitality & Travel",
    description:
      "Create better guest experiences while simplifying bookings, operations and customer management.",
    services: [
      {
        title: "Hotel Management",
        description:
          "Manage hotel operations and guest information.",
        icon: Hotel,
      },
      {
        title: "Booking Engines",
        description:
          "Enable seamless online reservations and bookings.",
        icon: Globe,
      },
      {
        title: "Customer Experience",
        description:
          "Create connected experiences across the customer journey.",
        icon: Users,
      },
      {
        title: "Travel CRM",
        description:
          "Manage customer relationships and travel enquiries.",
        icon: BriefcaseBusiness,
      },
    ],
    cta: {
      title: "Create Better Guest Experiences",
      description:
        "Let's build digital solutions for your hospitality or travel business.",
    },
  },

  "industries/professional-services": {
    eyebrow: "PROFESSIONAL SERVICES",
    title: "Technology for Professional Service Businesses",
    description:
      "Manage projects, clients, documents, workflows, time and billing through connected digital systems.",
    services: [
      {
        title: "Project Management",
        description:
          "Plan projects, tasks, teams and deadlines.",
        icon: Workflow,
      },
      {
        title: "Workflow Automation",
        description:
          "Automate repetitive operational processes.",
        icon: Zap,
      },
      {
        title: "Document Management",
        description:
          "Organize, store and manage business documents securely.",
        icon: Database,
      },
      {
        title: "Time & Billing",
        description:
          "Track work, billable hours and business finances.",
        icon: Landmark,
      },
    ],
    cta: {
      title: "Make Your Service Business More Efficient",
      description:
        "Let's build technology around your team's daily workflows.",
    },
  },

  /* =========================================================
     BLOG
  ========================================================= */

  blog: {
    eyebrow: "INSIGHTS",
    title: "Ideas, Insights & Digital Trends",
    description:
      "Explore practical insights around software development, digital marketing, eCommerce, technology and business growth.",
    services: [
      {
        title: "Software Development",
        description:
          "Technology insights, architecture, applications and software engineering.",
        icon: Code2,
      },
      {
        title: "Digital Marketing",
        description:
          "SEO, social media, content and digital growth insights.",
        icon: Globe,
      },
      {
        title: "eCommerce",
        description:
          "Trends and strategies for online commerce and marketplaces.",
        icon: ShoppingCart,
      },
      {
        title: "Business Technology",
        description:
          "Ideas for using technology to improve business operations.",
        icon: BriefcaseBusiness,
      },
    ],
    cta: {
      title: "Stay Ahead of Digital Change",
      description:
        "Explore our latest insights and technology perspectives.",
    },
  },

  /* =========================================================
     FAQ
  ========================================================= */

  faqs: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    description:
      "Find answers to common questions about our software, digital marketing, eCommerce and technology services.",
    faqs: [
      {
        question: "What services does Teknovia provide?",
        answer:
          "Teknovia provides custom software development, web and mobile application development, digital marketing, eCommerce solutions, EdTech solutions and industry-focused technology services.",
      },
      {
        question: "Can you build custom software for my business?",
        answer:
          "Yes. We build software around your specific business processes, workflows, users, integrations and growth requirements.",
      },
      {
        question: "Do you provide website development?",
        answer:
          "Yes. We build responsive, modern and SEO-friendly websites for businesses, organizations and digital products.",
      },
      {
        question: "Can you integrate third-party APIs?",
        answer:
          "Yes. Applications can be integrated with payment gateways, CRM systems, ERP platforms, cloud services, communication tools and other APIs.",
      },
      {
        question: "Do you provide maintenance after launch?",
        answer:
          "Yes. Ongoing support can include monitoring, bug fixes, security updates, performance optimization and feature enhancements.",
      },
      {
        question: "Do you work with startups and small businesses?",
        answer:
          "Yes. Solutions can be planned around the size, budget, stage and growth requirements of startups, SMEs and larger organizations.",
      },
      {
        question: "How do you start a project?",
        answer:
          "We begin by understanding your requirements, business objectives, users and technical needs before defining the scope and implementation roadmap.",
      },
      {
        question: "How much does software development cost?",
        answer:
          "The cost depends on the scope, features, integrations, technology requirements, number of users and project complexity. A proposal can be prepared after understanding the requirements.",
      },
    ],
    cta: {
      title: "Still Have Questions?",
      description:
        "Tell us what you are trying to build and we'll help you understand the right approach.",
    },
  },
};


export const navigation = [
  {
    label: "Software Solution",
    href: "/software-services",
    children: [
      {
        label: "Enterprise Software Development",
        href: "/software-services/enterprise-software-solution",
      },
      {
        label: "Web Application Development",
        href: "/software-services/web-application-development",
      },
      {
        label: "Mobile Application Development",
        href: "/software-services/mobile-application-development",
      },
      {
        label: "SaaS & Software Products",
        href: "/software-services/software-product",
      },
    ],
  },

  {
    label: "Digital Services",
    href: "/digital-marketing",
    children: [
      {
        label: "Website Development",
        href: "/digital-marketing/website-development",
      },
      {
        label: "Local SEO",
        href: "/digital-marketing/local-seo",
      },
      {
        label: "Search Engine Optimization",
        href: "/digital-marketing/web-seo",
      },
      {
        label: "Social Media Optimization",
        href: "/digital-marketing/social-media-optimization",
      },
      {
        label: "WhatsApp Marketing",
        href: "/digital-marketing/whatsapp-marketing",
      },
      {
        label: "B2B Marketing",
        href: "/digital-marketing/b2b-marketing",
      },
      {
        label: "Influencer Marketing",
        href: "/digital-marketing/influencer-marketing",
      },
    ],
  },

  {
    label: "eCommerce Solution",
    href: "/ecommerce-solutions",
    children: [
      {
        label: "JioMart",
        href: "/ecommerce-solutions/jio-mart",
      },
      {
        label: "Shopify",
        href: "/ecommerce-solutions/shopify",
      },
    ],
  },

  {
    label: "EdTech Solution",
    href: "/edtech-solution",
  },

  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        label: "Education",
        href: "/industries/education",
      },
      {
        label: "Healthcare",
        href: "/industries/healthcare",
      },
      {
        label: "Retail & eCommerce",
        href: "/industries/retail-ecommerce",
      },
      {
        label: "Real Estate",
        href: "/industries/real-estate",
      },
      {
        label: "Finance & Accounting",
        href: "/industries/finance-accounting",
      },
      {
        label: "Manufacturing",
        href: "/industries/manufacturing",
      },
      {
        label: "Logistics & Supply Chain",
        href: "/industries/logistics-supply-chain",
      },
      {
        label: "Hospitality & Travel",
        href: "/industries/hospitality-travel",
      },
      {
        label: "Professional Services",
        href: "/industries/professional-services",
      },
    ],
  },

  {
    label: "Blog",
    href: "/blog",
  },
];