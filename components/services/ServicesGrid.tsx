import { services } from "@/lib/data/services-data";
import { ServiceCard } from "../ui/Card";


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