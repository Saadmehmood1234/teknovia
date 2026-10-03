import {
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import Image from "next/image";
import { points } from "@/lib/data/digital-edge/watsapp-marketing-data";


export function WhatsAppWhy() {
  return (
    <section className="border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative flex flex-col justify-center items-center gap-4">
            <div className="relative w-full overflow-hidden rounded-3xl border border-gray-200 bg-white">
              <Image
                src="/images/digital-edge/watsapp-about.jpg"
                alt="Mobile application development"
                width={1000}
                height={750}
                className="h-auto w-full rounded-2xl object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 flex items-center gap-3 rounded-2xl border border-primary/15 bg-white p-4 shadow-sm">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                <CheckCircle2 className="size-5" />
              </div>
              <p className="text-sm font-semibold leading-6 text-gray-800">
                One system for messaging, automation, lead management and
                customer follow-up.
              </p>
            </div>
          </div>
          <div>
            <TopBadge data="WHY WHATSAPP BUSINESS API" />

            <h2 className="mt-4 max-w-xl font-heading text-3xl font-black tracking-tight text-gray-950">
              A direct channel between your business and your customers
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-gray-600 sm:text-base">
              <p>
                WhatsApp Business API helps businesses scale communication with
                automation, CRM integration, and real-time engagement. It
                enables companies to manage high volumes of conversations
                efficiently and improve customer experience.
              </p>
              <p>
                It&apos;s not just messaging—it&apos;s a complete{" "}
                <strong className="font-bold text-gray-950">
                  WhatsApp marketing and sales system.
                </strong>
              </p>
            </div>
            <div className="grid mt-8 gap-3 sm:grid-cols-2">
            {points.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className={`relative overflow-hidden ${
                    index === points.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="relative flex items-center gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl text-primary">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      {/* <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary">
                        {item.value}
                      </p> */}
                      {/* <h3 className="mt-1 font-heading text-base font-bold text-gray-950">
                        {item.title}
                      </h3> */}
                      <p className="text-sm font-semibold leading-6 text-gray-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
