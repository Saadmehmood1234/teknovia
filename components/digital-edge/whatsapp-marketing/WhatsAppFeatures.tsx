import {
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { watsAppFeatures } from "@/lib/data/digital-edge";

export function WhatsAppFeatures() {
  return (
    <section
      id="key-features"
      className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-25" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="KEY FEATURES" centerItem={true} />
          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            Simple to use,{" "}
            <span className="text-primary">powerful for growth.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Everything your team needs to manage conversations, automate
            follow-ups, capture leads and measure performance.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {watsAppFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 ${
                  index === watsAppFeatures.length - 1
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <div className="absolute right-0 top-0 size-28 rounded-full bg-primary-50 opacity-0 blur-3xl" />

                <div className="relative flex items-start justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-gray-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mt-6 font-heading text-lg font-bold text-gray-950">
                  {feature.title}
                </h3>
                <p className="relative mt-2 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-primary">
                  <CheckCircle2 className="size-4" />
                  Built for everyday operations
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
