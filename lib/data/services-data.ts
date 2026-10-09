import {
    BriefcaseBusiness,
    Building2,
    Calculator,
  ClipboardList,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Factory,
  Globe,
  GraduationCap,
  HeartPulse,
  Hotel,
  House,
  Laptop,
  LucideIcon,
  MapPin,
  Megaphone,
  MessageCircle,
  PenTool,
  Rocket,
  School,
  Search,
  Share2,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Truck,
  Users,
  Zap,
} from "lucide-react";


interface ServiceCard {
  title: string;
  href: string;
  description?: string;
  image?: string;
  txtColor: string;
  iconColor: string;
  bgColor: string;
  borderColor: string;
  icon: LucideIcon;
}

interface ServiceTopic {
  title: string;
  icon: React.ElementType;
  description: string;
  services: ServiceCard[];
}

export const serviceTopics: ServiceTopic[] = [
  {
    title: "Software Solution",
    icon: Laptop,
    description:
      "Build scalable, secure and high-performance software solutions tailored to your business.",
    services: [
      {
        title: "Enterprise Software Solution",
        href: "/software-services/enterprise-software-solution",
        description:
          "Custom enterprise software designed around your business processes and goals.",
        txtColor: "text-[#2563eb]",
        iconColor: "bg-[#2563eb]/10",
        bgColor: "bg-[#2563eb]/5",
        borderColor: "border-[#2563eb]/20",
        icon: Building2,
      },
      {
        title: "Web Application Development",
        href: "/software-services/web-application-development",
        description:
          "Modern and scalable web applications built for performance and growth.",
        txtColor: "text-[#7c3aed]",
        iconColor: "bg-[#7c3aed]/10",
        bgColor: "bg-[#7c3aed]/5",
        borderColor: "border-[#7c3aed]/20",
        icon: Globe,
      },
      {
        title: "Mobile Application Development",
        href: "/software-services/mobile-application-development",
        description:
          "User-focused mobile applications for modern digital experiences.",
        txtColor: "text-[#0891b2]",
        iconColor: "bg-[#0891b2]/10",
        bgColor: "bg-[#0891b2]/5",
        borderColor: "border-[#0891b2]/20",
        icon: Smartphone,
      },
      {
        title: "SaaS & Software Product",
        href: "/software-services/software-product",
        description:
          "Transform your product idea into a scalable and market-ready software solution.",
        txtColor: "text-[#db2777]",
        iconColor: "bg-[#db2777]/10",
        bgColor: "bg-[#db2777]/5",
        borderColor: "border-[#db2777]/20",
        icon: Cloud,
      },
      {
        title: "IoT Development",
        href: "/software-services/iot-development",
        description:
          "Build connected IoT solutions that automate processes, monitor operations, and enable smarter decision-making.",
        txtColor: "text-[#059669]",
        iconColor: "bg-[#059669]/10",
        bgColor: "bg-[#059669]/5",
        borderColor: "border-[#059669]/20",
        icon: Cpu,
      },
    ],
  },

  {
    title: "Digital Services",
    icon: Megaphone,
    description:
      "Grow your digital presence with strategies and services focused on visibility, engagement and conversions.",
    services: [
      {
        title: "Google My Business - Local SEO",
        href: "/digital-edge/local-seo",
        description:
          "Improve local visibility and help customers discover your business.",
        txtColor: "text-[#ea580c]",
        iconColor: "bg-[#ea580c]/10",
        bgColor: "bg-[#ea580c]/5",
        borderColor: "border-[#ea580c]/20",
        icon: MapPin,
      },
      {
        title: "Web SEO",
        href: "/digital-edge/web-seo",
        description:
          "Increase search visibility and attract relevant organic traffic.",
        txtColor: "text-[#16a34a]",
        iconColor: "bg-[#16a34a]/10",
        bgColor: "bg-[#16a34a]/5",
        borderColor: "border-[#16a34a]/20",
        icon: Search,
      },
      {
        title: "Social Media Optimization",
        href: "/digital-edge/social-media-optimization",
        description:
          "Build stronger social presence and engage your target audience.",
        txtColor: "text-[#e11d48]",
        iconColor: "bg-[#e11d48]/10",
        bgColor: "bg-[#e11d48]/5",
        borderColor: "border-[#e11d48]/20",
        icon: Share2,
      },
      {
        title: "WhatsApp Marketing",
        href: "/digital-edge/whatsapp-marketing",
        description:
          "Connect with customers through targeted WhatsApp marketing campaigns.",
        txtColor: "text-[#16a34a]",
        iconColor: "bg-[#16a34a]/10",
        bgColor: "bg-[#16a34a]/5",
        borderColor: "border-[#16a34a]/20",
        icon: MessageCircle,
      },
      {
        title: "B2B Marketing",
        href: "/digital-edge/b2b-marketing",
        description:
          "Generate qualified B2B leads and build stronger business relationships.",
        txtColor: "text-[#4f46e5]",
        iconColor: "bg-[#4f46e5]/10",
        bgColor: "bg-[#4f46e5]/5",
        borderColor: "border-[#4f46e5]/20",
        icon: Users,
      },
    ],
  },

  {
    title: "eCommerce Solution",
    icon: ShoppingCart,
    description:
      "Create and optimize ecommerce experiences that help businesses sell and scale online.",
    services: [
      {
        title: "eCommerce Solution",
        href: "/ecommerce-solutions",
        description:
          "Build scalable online stores with seamless shopping experiences, secure payments, and efficient order management.",
        txtColor: "text-[#16a34a]",
        iconColor: "bg-[#16a34a]/10",
        bgColor: "bg-[#16a34a]/5",
        borderColor: "border-[#16a34a]/20",
        icon: ShoppingBag,
      },
    ],
  },

  {
    title: "EdTech Solution",
    icon: GraduationCap,
    description:
      "Build modern digital learning solutions for educational institutions, organizations and learners.",
    services: [
      {
        title: "EdTech Solution",
        href: "/edtech-solution",
        description:
          "Digital learning platforms and technology solutions for modern education.",
        txtColor: "text-[#9333ea]",
        iconColor: "bg-[#9333ea]/10",
        bgColor: "bg-[#9333ea]/5",
        borderColor: "border-[#9333ea]/20",
        icon: School,
      },
    ],
  },

  {
    title: "Industries",
    icon: BriefcaseBusiness,
    description:
      "Industry-focused technology solutions designed around specific business needs and workflows.",
    services: [
      {
        title: "Manufacturing",
        description:
          "Digital solutions that streamline manufacturing operations, production workflows, and business processes.",
        href: "/industries#manufacturing",
        txtColor: "text-[#475569]",
        iconColor: "bg-[#475569]/10",
        bgColor: "bg-[#475569]/5",
        borderColor: "border-[#475569]/20",
        icon: Factory,
      },
      {
        title: "Hospitality & Travel",
        description:
          "Technology solutions that improve guest experiences, travel operations, bookings, and customer engagement.",
        href: "/industries#hospitality",
        txtColor: "text-[#db2777]",
        iconColor: "bg-[#db2777]/10",
        bgColor: "bg-[#db2777]/5",
        borderColor: "border-[#db2777]/20",
        icon: Hotel,
      },
      {
        title: "Logistics & Supply Chain",
        description:
          "Connected digital tools for managing logistics, inventory, transportation, and supply chain operations.",
        href: "/industries#logistics",
        txtColor: "text-[#7c3aed]",
        iconColor: "bg-[#7c3aed]/10",
        bgColor: "bg-[#7c3aed]/5",
        borderColor: "border-[#7c3aed]/20",
        icon: Truck,
      },
      {
        title: "Education",
        description:
          "Digital learning and education solutions that support institutions, educators, students, and training programs.",
        href: "/industries#education",
        txtColor: "text-[#2563eb]",
        iconColor: "bg-[#2563eb]/10",
        bgColor: "bg-[#2563eb]/5",
        borderColor: "border-[#2563eb]/20",
        icon: GraduationCap,
      },
      {
        title: "Healthcare",
        description:
          "Technology solutions that help healthcare businesses improve workflows, services, and digital experiences.",
        href: "/industries#healthcare",
        txtColor: "text-[#dc2626]",
        iconColor: "bg-[#dc2626]/10",
        bgColor: "bg-[#dc2626]/5",
        borderColor: "border-[#dc2626]/20",
        icon: HeartPulse,
      },
      {
        title: "Retail & Ecommerce",
        description:
          "Digital commerce solutions for online stores, customer experiences, sales operations, and retail growth.",
        href: "/industries#retail",
        txtColor: "text-[#ea580c]",
        iconColor: "bg-[#ea580c]/10",
        bgColor: "bg-[#ea580c]/5",
        borderColor: "border-[#ea580c]/20",
        icon: ShoppingCart,
      },
      {
        title: "Real Estate",
        description:
          "Digital platforms and tools that simplify property management, listings, sales, and customer engagement.",
        href: "/industries#real-estate",
        txtColor: "text-[#0891b2]",
        iconColor: "bg-[#0891b2]/10",
        bgColor: "bg-[#0891b2]/5",
        borderColor: "border-[#0891b2]/20",
        icon: House,
      },
      {
        title: "SMEs & Businesses",
        description:
          "Practical technology solutions that help small and medium businesses automate operations and grow efficiently.",
        href: "/industries#smes",
        txtColor: "text-[#16a34a]",
        iconColor: "bg-[#16a34a]/10",
        bgColor: "bg-[#16a34a]/5",
        borderColor: "border-[#16a34a]/20",
        icon: Calculator,
      },
    ],
  },
];


export const developmentSteps = [
  {
    number: "01",
    title: "Discover",
    image: "/images/steps/discover1.png",
    description:
      "We explore your business, understand challenges, analyze opportunities, and define the right problem to solve.",
    detail:
      "Identify business needs, challenges, opportunities, and project objectives to establish a strong foundation.",
    icon: Compass,
    bgColor: "from-[#A5CBF9] to-[#2C5FD4]",
    txtColor: "text-[#1D4BCB]",
    borderColor: "border-[#1D4BCB]",
  },
  {
    number: "02",
    title: "Define",
    image: "/images/steps/define1.png",
    description:
      "We define clear requirements, prioritize features, identify KPIs, and create a roadmap aligned with your business goals.",
    detail:
      "Establish project scope, success metrics, requirements, priorities, and implementation strategy.",
    icon: ClipboardList,
    bgColor: "from-[#D1C5F6] to-[#BDA9ED]",
    txtColor: "text-[#493FD7]",
    borderColor: "border-[#493FD7]",
  },
  {
    number: "03",
    title: "Design",
    image: "/images/steps/design1.png",
    description:
      "We craft intuitive user experiences and robust architectures that are scalable, secure, and future-ready.",
    detail:
      "Create user-centric interfaces, workflows, system architecture, and solution blueprints.",
    icon: PenTool,
    bgColor: "from-[#BCA4F3] to-[#B599EE]",
    txtColor: "text-[#6123C2]",
    borderColor: "border-[#6123C2]",
  },
  {
    number: "04",
    title: "Develop",
    image: "/images/steps/develop1.png",
    description:
      "We build clean, efficient, and secure code using industry best practices and modern technologies.",
    detail:
      "Develop scalable applications, integrations, and enterprise-grade software solutions.",
    icon: Code2,
    bgColor: "from-[#FFCF99] to-[#FBA05A]",
    txtColor: "text-[#D64D0C]",
    borderColor: "border-[#D64D0C]",
  },
  {
    number: "05",
    title: "Deploy",
    image: "/images/steps/deploy1.png",
    description:
      "We ensure a smooth launch with seamless integration, data migration, testing, and user training.",
    detail:
      "Launch solutions efficiently while minimizing disruption and ensuring business continuity.",
    icon: Rocket,
    bgColor: "from-[#81C5C7] to-[#81C5C7]",
    txtColor: "text-[#0F7F76]",
    borderColor: "border-[#0F7F76]",
  },
  {
    number: "06",
    title: "Drive",
    image: "/images/steps/drive1.png",
    description:
      "We continuously optimize, provide support, measure performance, and drive innovation for long-term business growth.",
    detail:
      "Enhance performance, support users, implement improvements, and scale for future growth.",
    icon: Zap,
    bgColor: "from-[#6C9366] to-[#2E5B40]",
    txtColor: "text-[#056A4D]",
    borderColor: "border-[#056A4D]",
  },
];

export const services = [
  {
    image: "/images/software-solution-intro.jpg",
    title: "Software Services",
    description:
      "Build scalable enterprise software, web applications, mobile applications and software products.",
    href: "/software-services",
  },
  {
    image: "/images/digital-marketing.png",
    title: "Digital Edge",
    description:
      "Grow your online presence through SEO, social media, B2B marketing, influencer marketing and more.",
    href: "/digital-edge",
  },
  {
    image: "/images/e-commerce-solutions.jpg",
    title: "Ecommerce Solutions",
    description:
      "Create and optimize ecommerce experiences that help businesses sell products and services online.",
    href: "/ecommerce-solutions",
  },
  {
    image: "/images/edtech-use-startups.jpg",
    title: "EdTech Solutions",
    description:
      "Build modern digital learning experiences for educational institutions, businesses and learners.",
    href: "/edtech-solution",
  },
];


