import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { ecommerceGrowthPoints } from "@/lib/data/ecommerce-solutions-data";

export function EcommerceGrowth() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-[#003F48] py-8 text-white sm:py-16">
      <Container className="relative">
        <div className="max-w-3xl">
          <TopBadge data="Built for Growth" />

          <h2 className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl">
            Commerce that grows{" "}
            <span className="text-teal-300">with your business.</span>
          </h2>
          <p className="text-sm mt-5 leading-7 text-white/75 sm:text-base">
            Your eCommerce platform should grow as your business grows. TEKNOVIA
            builds flexible and scalable platforms that adapt to changing
            products, customers, sales channels and business needs.
          </p>

          <p className="text-sm mt-5 leading-7 text-white/75 sm:text-base">
            With a secure, mobile-ready and integration-friendly architecture,
            your platform is designed to support growth today and tomorrow.
          </p>
        </div>

        <div className="mt-12 grid gap-px border border-white/15 bg-white/15 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {ecommerceGrowthPoints.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="relative bg-[#003F48] p-7 sm:p-9"
              >
                <span className="absolute left-0 top-0 h-px w-0 bg-teal-300" />

                <div className="flex items-start justify-between">
                  <Icon strokeWidth={1.4} className="size-10 text-teal-300" />
                </div>

                <h3 className="mt-10 font-heading text-lg font-bold tracking-tight sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-white/70">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
