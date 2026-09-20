import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Laptop,
  Megaphone,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";

interface ServiceCard {
  title: string;
  href: string;
  description?: string;
  image?: string;
}

interface ServiceTopic {
  title: string;
  icon: React.ElementType;
  description: string;
  services: ServiceCard[];
}

const serviceTopics: ServiceTopic[] = [
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
      },
      {
        title: "Web Application Development",
        href: "/software-services/web-application-development",
        description:
          "Modern and scalable web applications built for performance and growth.",
      },
      {
        title: "Mobile Application Development",
        href: "/software-services/mobile-application-development",
        description:
          "User-focused mobile applications for modern digital experiences.",
      },
      {
        title: "Software Product",
        href: "/software-services/software-product",
        description:
          "Transform your product idea into a scalable and market-ready software solution.",
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
        title: "Website Development",
        href: "/digital-marketing/website-development",
        description:
          "Professional websites designed to establish and grow your online presence.",
      },
      {
        title: "Local SEO",
        href: "/digital-marketing/local-seo",
        description:
          "Improve local visibility and help customers discover your business.",
      },
      {
        title: "Web SEO",
        href: "/digital-marketing/web-seo",
        description:
          "Increase search visibility and attract relevant organic traffic.",
      },
      {
        title: "Social Media Optimization",
        href: "/digital-marketing/social-media-optimization",
        description:
          "Build stronger social presence and engage your target audience.",
      },
      {
        title: "WhatsApp Marketing",
        href: "/digital-marketing/whatsapp-marketing",
        description:
          "Connect with customers through targeted WhatsApp marketing campaigns.",
      },
      {
        title: "B2B Marketing",
        href: "/digital-marketing/b2b-marketing",
        description:
          "Generate qualified B2B leads and build stronger business relationships.",
      },
      {
        title: "Influencer Marketing",
        href: "/digital-marketing/influencer-marketing",
        description:
          "Reach relevant audiences through strategic influencer partnerships.",
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
        title: "JioMart",
        href: "/ecommerce-solutions/jio-mart",
        description:
          "Ecommerce solutions and integrations for JioMart businesses.",
      },
      {
        title: "Shopify",
        href: "/ecommerce-solutions/shopify",
        description:
          "Build, customize and optimize Shopify ecommerce experiences.",
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
        title: "Education",
        href: "/industries/education",
      },
      {
        title: "Healthcare",
        href: "/industries/healthcare",
      },
      {
        title: "Retail & Ecommerce",
        href: "/industries/retail-ecommerce",
      },
      {
        title: "Real Estate",
        href: "/industries/real-estate",
      },
      {
        title: "Finance & Accounting",
        href: "/industries/finance-accounting",
      },
      {
        title: "Manufacturing",
        href: "/industries/manufacturing",
      },
      {
        title: "Logistics & Supply Chain",
        href: "/industries/logistics-supply-chain",
      },
      {
        title: "Hospitality & Travel",
        href: "/industries/hospitality-travel",
      },
      {
        title: "Professional Services",
        href: "/industries/professional-services",
      },
    ],
  },
];

export function ServiceTopics() {
  return (
    <section className="bg-white py-8 md:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm font-extrabold uppercase tracking-[0.2em] text-primary">
            Our Services
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Solutions Built Around Your Needs
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Explore our software, digital, ecommerce, education and
            industry-specific solutions.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {serviceTopics.map((topic) => {
            const TopicIcon = topic.icon;

            return (
              <div key={topic.title}>
                {/* Topic heading */}
                <div className="mb-7 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <TopicIcon size={23} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
                      {topic.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                      {topic.description}
                    </p>
                  </div>
                </div>

                {/* Service cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {topic.services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group flex min-h-40 flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                          <TopicIcon size={18} />
                        </span>

                        <ArrowRight
                          size={18}
                          className="mt-1 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
                        />
                      </div>

                      <h4 className="mt-5 text-base font-bold text-slate-950 transition-colors duration-300 group-hover:text-primary">
                        {service.title}
                      </h4>

                      {service.description && (
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">
                          {service.description}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}