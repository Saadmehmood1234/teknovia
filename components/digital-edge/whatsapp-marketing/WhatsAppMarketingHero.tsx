import { ArrowRight, Bot, MessageCircle, UsersRound } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TopBadge } from "@/components/ui/Top-Badge";
import Image from "next/image";

const highlights = [
  { icon: MessageCircle, label: "Instant engagement" },
  { icon: Bot, label: "Automation at scale" },
  { icon: UsersRound, label: "Multi-agent support" },
];

// function WhatsAppMockup() {
//   return (
//     <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
//       <div className="absolute -inset-8 rounded-full bg-primary/15 blur-3xl" />

//       <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#111817] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
//         <div className="overflow-hidden rounded-3xl bg-[#efeae2]">
//           <div className="flex items-center gap-3 bg-[#075e54] px-4 py-4 text-white">
//             <div className="flex size-10 items-center justify-center rounded-full bg-white/15">
//               <MessageCircle className="size-5" />
//             </div>
//             <div className="min-w-0">
//               <p className="font-heading text-sm font-bold">Your Business</p>
//               <p className="text-[11px] text-white/70">Online • WhatsApp</p>
//             </div>
//             <div className="ml-auto flex gap-1">
//               <span className="size-1.5 rounded-full bg-white/60" />
//               <span className="size-1.5 rounded-full bg-white/60" />
//               <span className="size-1.5 rounded-full bg-white/60" />
//             </div>
//           </div>

//           <div className="space-y-3 bg-[radial-gradient(circle_at_20%_20%,rgba(0,150,137,0.08),transparent_30%),#efeae2] p-4 sm:p-5">
//             <div className="ml-auto max-w-[78%] rounded-2xl rounded-tr-sm bg-[#d9fdd3] px-4 py-3 text-xs leading-5 text-slate-700 shadow-sm">
//               Hi! I’m interested in your offer. Can you share more details?
//             </div>
//             <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-xs leading-5 text-slate-700 shadow-sm">
//               Absolutely. I can help you with pricing, availability and the next
//               steps.
//             </div>
//             <div className="ml-auto max-w-[70%] rounded-2xl rounded-tr-sm bg-[#d9fdd3] px-4 py-3 text-xs leading-5 text-slate-700 shadow-sm">
//               Yes, please send me the details.
//             </div>
//             <div className="flex items-center gap-2 pt-2">
//               <div className="flex-1 rounded-full bg-white px-4 py-3 text-[11px] text-slate-400 shadow-sm">
//                 Type a message
//               </div>
//               <div className="flex size-10 items-center justify-center rounded-full bg-[#128c7e] text-white shadow-sm">
//                 <ArrowRight className="size-4" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-primary/15 bg-white px-4 py-3 shadow-xl sm:block">
//         <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
//           Live engagement
//         </p>
//         <p className="mt-1 text-sm font-bold text-gray-950">Lead captured</p>
//       </div>
//     </div>
//   );
// }

export function WhatsAppMarketingHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#031823] pt-8 pb-8 sm:pb-16 text-white">
      {/* <div className="pointer-events-none absolute inset-0 -z-10 hero-grid opacity-20" />
      <div className="pointer-events-none absolute right-[-15%] top-[-20%] -z-10 size-130 rounded-full bg-primary/10 blur-3xl" /> */}

      <Container className="relative z-10">
        <Breadcrumb
          items={[
            { label: "Digital Edge", href: "/digital-edge" },
            { label: "WhatsApp Marketing" },
          ]}
        />
        <div className="grid items-center gap-12 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <TopBadge data="WHATSAPP MARKETING • BUSINESS API" />

            <h1 className="max-w-4xl font-heading text-4xl font-black leading-[1.03] tracking-[-0.045em] sm:text-5xl">
              Turn WhatsApp Conversations Into{" "}
              <span className="text-primary">Measurable Growth</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:leading-8">
              Build a smarter WhatsApp communication system with automation, CRM
              integration, lead capture, follow-ups and hands-on account
              management—all in one place.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <Icon className="size-5 text-primary" />
                    <span className="text-sm font-semibold text-white/90">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-600 hover:shadow-[0_10px_30px_rgba(0,150,137,0.28)]"
              >
                Start WhatsApp Growth
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#key-features"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-primary/50 hover:bg-white/5"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/40">
              <span className="size-1.5 rounded-full bg-primary" />
              WhatsApp Business API
              <span className="text-white/20">•</span>
              Automation
              <span className="text-white/20">•</span>
              CRM Integration
            </div>
          </div>

          <div className="relative w-full pb-8 sm:pb-10">
            <div className="relative aspect-4/3">
              <div className="relative h-full w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/digital-edge/watsapp.png"
                  alt="Teknovia technology and business solutions"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>

              {/* Softly blends image edges into the background */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{background: `radial-gradient(ellipse at center, transparent 45%, #031823 88%, #031823 100%`,}}/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
