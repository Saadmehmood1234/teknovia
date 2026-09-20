import { ServiceCard } from "../ui/Card";

const services = [
  {
    image: "/images/software-solution-intro.jpg",
    title: "Software Services",
    description:
      "Build scalable enterprise software, web applications, mobile applications and software products.",
    href: "/software-services",
  },
  {
    image: "/images/digital-marketing.png",
    title: "Digital Marketing",
    description:
      "Grow your online presence through SEO, social media, B2B marketing, influencer marketing and more.",
    href: "/digital-marketing",
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

export function ServicesGrid() {
  return (
    <div
      id="services"
      className="grid gap-5 pt-16 sm:grid-cols-2 lg:grid-cols-4"
    >
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          image={service.image}
          title={service.title}
          description={service.description}
          href={service.href}
        />
      ))}
    </div>
  );
}