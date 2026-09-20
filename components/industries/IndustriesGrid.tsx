import {
  Building2,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Factory,
  Truck,
  Hotel,
  BriefcaseBusiness,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    title: "Education",
    description:
      "Digital platforms and technology solutions for schools, colleges, universities and education businesses.",
    href: "/industries/education",
    icon: GraduationCap,
  },
  {
    title: "Healthcare",
    description:
      "Technology solutions that improve healthcare workflows, accessibility and digital experiences.",
    href: "/industries/healthcare",
    icon: HeartPulse,
  },
  {
    title: "Retail & Ecommerce",
    description:
      "Digital commerce experiences designed to improve customer engagement and online sales.",
    href: "/industries/retail-ecommerce",
    icon: ShoppingBag,
  },
  {
    title: "Real Estate",
    description:
      "Digital platforms that help real estate businesses manage properties, leads and customer experiences.",
    href: "/industries/real-estate",
    icon: Home,
  },
  {
    title: "Finance & Accounting",
    description:
      "Secure and efficient digital solutions for financial operations, accounting and business management.",
    href: "/industries/finance-accounting",
    icon: Landmark,
  },
  {
    title: "Manufacturing",
    description:
      "Technology solutions that support manufacturing workflows, operations and business visibility.",
    href: "/industries/manufacturing",
    icon: Factory,
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Connected digital systems for logistics operations, supply chain visibility and process optimization.",
    href: "/industries/logistics-supply-chain",
    icon: Truck,
  },
  {
    title: "Hospitality & Travel",
    description:
      "Digital experiences that help hospitality and travel businesses engage customers and streamline operations.",
    href: "/industries/hospitality-travel",
    icon: Hotel,
  },
  {
    title: "Professional Services",
    description:
      "Digital tools and platforms designed for consulting, agencies and professional service organizations.",
    href: "/industries/professional-services",
    icon: BriefcaseBusiness,
  },
  {
    title: "Business & Enterprise",
    description:
      "Custom enterprise software and digital platforms designed around complex business requirements.",
    href: "/industries",
    icon: Building2,
  },
];

export function IndustriesGrid() {
  return (
    <div
      id="industries"
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {industries.map((industry, index) => {
        const Icon = industry.icon;

        return (
          <Link
            key={industry.title}
            href={industry.href}
            className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(0,80,70,0.08)]"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                <Icon size={22} />
              </div>

              <span className="font-heading text-sm font-semibold text-primary/50">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-6 font-heading text-xl font-semibold text-slate-900">
              {industry.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {industry.description}
            </p>

            <div className="mt-6 text-sm font-semibold text-primary">
              Explore Industry →
            </div>
          </Link>
        );
      })}
    </div>
  );
}