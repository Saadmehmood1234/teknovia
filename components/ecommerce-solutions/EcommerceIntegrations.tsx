import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { ecommerceIntegrations } from "@/lib/data/ecommerce-solutions-data";

export function EcommerceIntegrations() {
  return (
    <section
      id="integrations"
      className="relative border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="Integrate Your Business" centerItem={true} />

          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            Connect commerce with your{" "}
            <span className="text-primary">entire business.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Your eCommerce platform should work as part of your business
            ecosystem. Connect the systems, channels and tools your business
            already depends on.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 mt-8 sm:mt-16">
          {ecommerceIntegrations.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                <div className="relative flex-1 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary-50 text-primary ring-1 ring-primary/10">
                      <Icon className="size-6" strokeWidth={1.7} />
                    </div>

                    <span className="font-mono text-3xl font-bold leading-none tracking-tight text-gray-200">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading text-lg font-bold tracking-tight text-gray-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
                <div className="relative border-t border-gray-100 bg-gray-50/70 px-6 py-4">
                  <p className="text-xs leading-5 text-gray-500 sm:text-[13px]">
                    {item.detail}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
