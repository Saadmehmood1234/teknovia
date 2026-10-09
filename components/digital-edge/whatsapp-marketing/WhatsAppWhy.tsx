"use client";
import { CheckCircle2 } from "lucide-react";

import { ContentOverview } from "@/components/ui/ContentOverview";
import { points } from "@/lib/data/digital-edge/watsapp-marketing-data";

export function WhatsAppWhy() {
  return (
    <ContentOverview
      badge="WHY WHATSAPP BUSINESS API"
      title="A direct channel between your business and your customers"
      image={{
        src: "/images/digital-edge/watsapp-about.jpg",
        alt: "WhatsApp Business API marketing",
      }}
      gridClassName="lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
      imageBadge={{
        label: "WHATSAPP BUSINESS API",
        text: "Built for scalable communication",
        icon: CheckCircle2,
      }}
      paragraphs={[
        <>
          WhatsApp Business API helps businesses scale communication with
          automation, CRM integration, and real-time engagement. It
          enables companies to manage high volumes of conversations
          efficiently and improve customer experience.
        </>,
        <>
          It&apos;s not just messaging—it&apos;s a complete{" "}
          <strong className="font-bold text-gray-950">
            WhatsApp marketing and sales system.
          </strong>
        </>,
      ]}
    >
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {points.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className={`relative overflow-hidden ${
                index === points.length - 1
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <div className="relative flex items-center gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl text-primary">
                  <Icon className="size-6" />
                </div>

                <p className="text-sm font-semibold leading-6 text-gray-500">
                  {item.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </ContentOverview>
  );
}
