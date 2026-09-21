import {
  Building2,
  GraduationCap,
  HeartPulse,
  Hotel,
  Factory,
  ShoppingCart,
  Truck,
  Users,
    BarChart3,
  Boxes,
  Code2,
  Cog,
  Expand,
  Headphones,
  Lock,
  Puzzle,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  id: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  image: string;
  description: string;
  intro: string;
  solutions: string[];
  benefits: string[];
  idealFor: string[];
};

export const industries: Industry[] = [
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial Operations",
    shortTitle: "Manufacturing",
    image: "/images/card-17.png",
    icon: Factory,
    description:
      "Enabling manufacturers and industrial businesses to optimize production processes, improve operational visibility, and increase efficiency through intelligent software solutions.",
    intro:
      "We develop customized systems for manufacturing units, factories, production facilities, and industrial enterprises, helping streamline operations from procurement to production and delivery.",
    solutions: [
      "Manufacturing ERP Systems",
      "Production Planning & Monitoring Solutions",
      "Inventory & Warehouse Management",
      "Procurement & Supply Chain Management",
      "Quality Control & Compliance Systems",
      "Workforce & Shift Management",
      "IoT-Based Equipment Monitoring Solutions",
      "Maintenance & Asset Management Systems",
      "Reporting & Analytics Dashboards",
      "Process Automation & Workflow Management",
    ],
    benefits: [
      "Improved production efficiency and control",
      "Reduced operational delays and wastage",
      "Better inventory and resource utilization",
      "Real-time monitoring and performance tracking",
      "Enhanced decision-making through analytics",
    ],
    idealFor: [
      "Manufacturing Companies",
      "Factories",
      "Production Units",
      "Industrial Plants",
      "Processing Industries",
      "Engineering Firms",
      "Industrial Enterprises",
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality & Tourism Sector",
    shortTitle: "Hospitality & Tourism",
    image: "/images/card-19.png",
    icon: Hotel,
    description:
      "Enhancing guest experiences and operational efficiency through customized digital solutions for hospitality and tourism businesses.",
    intro:
      "We build software solutions for hotels, resorts, travel agencies, restaurants, tour operators, and hospitality service providers, helping manage operations, customer engagement, and bookings seamlessly.",
    solutions: [
      "Hotel & Hospitality Management Systems",
      "Booking & Reservation Platforms",
      "Customer Relationship Management (CRM)",
      "Billing & Finance Management",
      "Inventory & Resource Management",
      "Staff & Workforce Management",
      "Travel & Tour Management Portals",
      "Restaurant & Service Management Systems",
      "Analytics & Performance Dashboards",
      "Customer Feedback & Engagement Solutions",
    ],
    benefits: [
      "Improved guest experience and service quality",
      "Streamlined booking and operational processes",
      "Better resource and workforce management",
      "Increased customer retention and satisfaction",
      "Enhanced reporting and business insights",
    ],
    idealFor: [
      "Hotels",
      "Resorts",
      "Restaurants",
      "Travel Agencies",
      "Tour Operators",
      "Hospitality Groups",
      "Event & Leisure Businesses",
    ],
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain Sector",
    shortTitle: "Logistics",
    image: "/images/card-18.png",
    icon: Truck,
    description:
      "Driving operational efficiency through intelligent software solutions that improve tracking, inventory management, transportation, and supply chain visibility.",
    intro:
      "We develop customized systems for logistics companies, transport providers, warehouses, distributors, and supply chain businesses, enabling smoother operations and real-time decision-making.",
    solutions: [
      "Logistics & Supply Chain ERP Systems",
      "Warehouse Management Systems (WMS)",
      "Inventory & Stock Tracking",
      "Fleet & Vehicle Management Solutions",
      "Shipment & Delivery Tracking Systems",
      "Vendor & Procurement Management",
      "Route Planning & Monitoring",
      "IoT-Based Tracking & Monitoring Solutions",
      "Reporting & Analytics Dashboards",
      "Workforce & Operations Management Systems",
    ],
    benefits: [
      "Improved supply chain visibility",
      "Faster and more efficient operations",
      "Better inventory and fleet management",
      "Reduced delays and operational costs",
      "Real-time monitoring and data-driven decisions",
    ],
    idealFor: [
      "Logistics Companies",
      "Transport Providers",
      "Warehousing Businesses",
      "Distributors",
      "Supply Chain Operators",
      "Courier Services",
      "Fleet Management Companies",
    ],
  },
  {
    id: "education",
    title: "Academics & Education Sector",
    shortTitle: "Education",
    icon: GraduationCap,
    image: "/images/card-12.png",

    description:
      "Empowering educational institutions with technology-driven solutions to improve administration, learning experiences, and operational efficiency.",
    intro:
      "We develop customized software for schools, colleges, universities, coaching institutes, training centers, and EdTech organizations, enabling seamless management of academic and administrative processes.",
    solutions: [
      "School/College ERP Systems",
      "Learning Management Systems (LMS)",
      "Student Information Management",
      "Attendance & Examination Management",
      "Fee & Finance Management",
      "Online Assessment Platforms",
      "Course & Certification Portals",
      "Faculty & Staff Management",
      "Parent & Student Communication Systems",
      "Analytics & Performance Dashboards",
    ],
    benefits: [
      "Streamlined academic operations",
      "Improved student engagement",
      "Centralized data management",
      "Better transparency and reporting",
      "Enhanced digital learning experience",
    ],
    idealFor: [
      "Schools",
      "Colleges",
      "Universities",
      "Coaching Institutes",
      "Training Centers",
      "Online Learning Platforms",
      "EdTech Companies",
    ],
  },
  {
    id: "retail",
    title: "Retail & eCommerce Sector",
    shortTitle: "Retail & eCommerce",
    image: "/images/card-14.png",
    icon: ShoppingCart,
    description:
      "Helping retail businesses and online sellers streamline operations, manage inventory efficiently, and deliver seamless customer experiences through digital solutions.",
    intro:
      "We build customized software solutions for retail stores, wholesalers, distributors, D2C brands, online businesses, and eCommerce marketplaces, enabling smarter business management and scalable growth.",
    solutions: [
      "Retail ERP Systems",
      "Inventory & Stock Management",
      "Order Management Systems (OMS)",
      "Customer Relationship Management (CRM)",
      "Billing & POS Solutions",
      "Vendor & Procurement Management",
      "Warehouse Management Systems",
      "eCommerce Platforms & Marketplaces",
      "Multi-channel Selling Integration",
      "Sales Analytics & Business Dashboards",
    ],
    benefits: [
      "Improved inventory accuracy",
      "Faster order processing",
      "Better customer experience",
      "Centralized business operations",
      "Data-driven sales and growth decisions",
    ],
    idealFor: [
      "Retail Stores",
      "Wholesalers",
      "Distributors",
      "D2C Brands",
      "Online Sellers",
      "eCommerce Businesses",
      "Marketplace Operators",
      "Franchise Businesses",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate & Construction Sector",
    shortTitle: "Real Estate",
    image: "/images/card-15.png",
    icon: Building2,
    description:
      "Enabling real estate businesses and construction companies to improve project management, operational visibility, and resource planning through customized digital solutions.",
    intro:
      "We develop software solutions for real estate firms, builders, contractors, developers, infrastructure companies, and property management businesses, helping streamline workflows and enhance decision-making.",
    solutions: [
      "Real Estate ERP Systems",
      "Project & Construction Management Software",
      "Property & Asset Management Systems",
      "CRM for Leads & Customer Management",
      "Vendor & Procurement Management",
      "Inventory & Material Tracking",
      "Billing & Contract Management",
      "Workforce & Payroll Management",
      "Project Monitoring Dashboards",
      "Document Management & Reporting Systems",
    ],
    benefits: [
      "Better project tracking and control",
      "Improved resource utilization",
      "Centralized operations management",
      "Enhanced transparency and reporting",
      "Reduced delays and operational inefficiencies",
    ],
    idealFor: [
      "Builders",
      "Real Estate Developers",
      "Construction Companies",
      "Contractors",
      "Infrastructure Firms",
      "Property Management Companies",
      "Architectural & Engineering Firms",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare & Hospitals Sector",
    shortTitle: "Healthcare",
    image: "/images/health-care.png",
    icon: HeartPulse,
    description:
      "Supporting healthcare organizations with secure, efficient, and technology-driven solutions to improve patient management, operational workflows, and service delivery.",
    intro:
      "We build customized software solutions for hospitals, clinics, diagnostic centers, healthcare providers, and wellness organizations, helping streamline administrative and healthcare processes.",
    solutions: [
      "Hospital Management Systems (HMS)",
      "Clinic & Patient Management Software",
      "Appointment & Scheduling Systems",
      "Electronic Medical Records (EMR) Support Systems",
      "Billing & Finance Management",
      "Laboratory & Diagnostic Management",
      "Inventory & Pharmacy Management",
      "Staff & Workforce Management",
      "Reporting & Analytics Dashboards",
      "Teleconsultation & Healthcare Portals",
    ],
    benefits: [
      "Improved patient experience and service delivery",
      "Efficient administration and record management",
      "Better resource planning and operational control",
      "Reduced manual processes and errors",
      "Enhanced reporting and decision-making",
    ],
    idealFor: [
      "Hospitals",
      "Clinics",
      "Diagnostic Centers",
      "Laboratories",
      "Healthcare Providers",
      "Wellness Centers",
      "Multi-specialty Healthcare Organizations",
    ],
  },

  {
    id: "smes",
    title: "SMEs & Growing Businesses",
    shortTitle: "SMEs & Businesses",
    image: "/images/sme-growth.png",
    icon: Users,
    description:
      "Helping small and medium-sized businesses adopt digital solutions that improve efficiency, automate operations, and support sustainable growth.",
    intro:
      "We develop customized software for startups, SMEs, service businesses, trading firms, and growing enterprises, enabling better management of day-to-day operations and faster scaling.",
    solutions: [
      "Business ERP Systems",
      "CRM & Customer Management Solutions",
      "Accounting & Finance Management",
      "HRMS & Payroll Systems",
      "Inventory & Procurement Management",
      "Workflow & Process Automation",
      "Project & Task Management Tools",
      "Sales & Performance Dashboards",
      "Document Management Systems",
      "Custom Business Applications",
    ],
    benefits: [
      "Streamlined business operations",
      "Reduced manual work and operational costs",
      "Improved productivity and decision-making",
      "Better visibility across departments",
      "Scalable systems to support business growth",
    ],
    idealFor: [
      "Startups",
      "SMEs",
      "Service Businesses",
      "Trading Firms",
      "Agencies",
      "Consultants",
      "Growing Enterprises",
    ],
  },
];


export const principles = [
  {
    title: "Business-Centric Development",
    description:
      "Solutions aligned with operational goals, business processes, and real-world workflows.",
    icon: Boxes,
  },
  {
    title: "Customization & Flexibility",
    description:
      "Software designed around your requirements instead of forcing your business into generic templates.",
    icon: Code2,
  },
  {
    title: "Scalable Architecture",
    description:
      "Systems built to support long-term growth, increasing users, data, and business demands.",
    icon: Expand,
  },
  {
    title: "Security & Reliability",
    description:
      "Secure, stable, and performance-driven applications designed for dependable operations.",
    icon: Lock,
  },
  {
    title: "Integration Capability",
    description:
      "Seamless integration with third-party platforms, APIs, services, and existing systems.",
    icon: Puzzle,
  },
  {
    title: "Analytics & Insights",
    description:
      "Dashboards, reports, and meaningful data insights to support informed decision-making.",
    icon: BarChart3,
  },
  {
    title: "Automation & Efficiency",
    description:
      "Reducing repetitive manual work, streamlining processes, and improving productivity.",
    icon: Cog,
  },
  {
    title: "Continuous Support & Enhancement",
    description:
      "Ongoing maintenance, optimization, improvements, and upgrades as your needs evolve.",
    icon: Headphones,
  },
];