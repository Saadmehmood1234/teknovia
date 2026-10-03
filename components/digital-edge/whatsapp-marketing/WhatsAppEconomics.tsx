import { ArrowDownRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import Image from "next/image";

export function WhatsAppEconomics() {
  return (
    <section className="border-b border-gray-100 bg-white py-8 sm:py-16">
      <Container>
        <div className="overflow-hidden rounded-4xl border border-primary/15 bg-[#162F30] text-white">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="p-7 sm:p-10 lg:p-14">
              <TopBadge data="ECONOMIC ADVANTAGE" />

              <h2 className="mt-4 max-w-2xl font-heading text-3xl font-black tracking-tight sm:text-4xl">
                More conversations.{" "}
                <span className="text-primary">Less wasted spend.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                WhatsApp Business API is more cost-effective than SMS, email,
                calling, and traditional offline marketing channels, especially
                in India. With conversation-based pricing and higher response
                rates, businesses achieve lower cost per lead and higher ROI.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                Automation also reduces manpower effort, making it an efficient
                marketing and customer support channel.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/4 px-4 py-3">
                <ArrowDownRight className="size-5 text-primary" />
                <span className="text-sm font-semibold">
                  Lower cost per lead
                </span>
              </div>
            </div>

            <div className="relative w-full">
              <div className="relative aspect-4/3">
                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                  <Image
                    src="/images/digital-edge/watsapp-economic-benefits.png"
                    alt="Teknovia technology and business solutions"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 38vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Turn missed opportunities into measurable growth
          </p>
        </div>
      </Container>
    </section>
  );
}
