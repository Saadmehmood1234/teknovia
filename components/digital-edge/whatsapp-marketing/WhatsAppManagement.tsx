import {
  CalendarClock,
  CheckCheck,
  CheckCircle2,
  ClipboardCheck,
  MessageSquareText,
  UserRoundCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";

const services = [
  {
    title: "Complete WhatsApp handling",
    description:
      "We manage your entire WhatsApp communication, from first inquiry to follow-up. Your team stops replying and tracking by hand.",
    icon: MessageSquareText,
  },
  {
    title: "Campaign execution and scheduling",
    description:
      "We plan, write and send broadcasts for you, so promotions and offers go out on time and customers stay engaged.",
    icon: CalendarClock,
  },
  {
    title: "Daily chat management",
    description:
      "We answer queries, share information and nurture leads, so no inquiry goes unanswered.",
    icon: UserRoundCheck,
  },
  {
    title: "Template and content management",
    description:
      "We create and maintain approved message templates, keeping every message professional and compliant.",
    icon: ClipboardCheck,
  },
  {
    title: "Lead tracking and follow-ups",
    description:
      "Every lead is tracked, categorized and followed up in a set routine, so fewer opportunities slip away.",
    icon: CheckCircle2,
  },
];

const stages = [
  { name: "Setup", text: "Number, profile and templates approved" },
  { name: "Automation", text: "Replies and workflows switched on" },
  { name: "Management", text: "Our team runs chats and campaigns" },
  { name: "Growth", text: "Follow-ups turn leads into orders" },
];

function ChatPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1C18] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="flex size-8 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
          A
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-white">Aarav Sharma</p>
          <p className="text-xs text-white/40">Handled by your Teknovia team</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-4 text-[13px] leading-snug">
        <p className="max-w-[78%] self-start rounded-xl rounded-tl-sm bg-white/[0.07] px-3 py-2 text-white/80">
          Do you have the 12 kg pack in stock?
        </p>
        <p className="max-w-[78%] self-end rounded-xl rounded-tr-sm bg-primary/90 px-3 py-2 text-[#04120E]">
          Yes, it&apos;s in stock. Delivery takes 2 days. Shall I share the price list?
          <CheckCheck className="ml-1 inline size-3.5 align-text-bottom" />
        </p>
        <p className="max-w-[78%] self-start rounded-xl rounded-tl-sm bg-white/[0.07] px-3 py-2 text-white/80">
          Please do.
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
            <UserRoundCheck className="size-3.5" /> Tagged: hot lead
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-xs text-white/60">
            <CalendarClock className="size-3.5" /> Follow-up set for tomorrow, 10:00
          </span>
        </div>
      </div>
    </div>
  );
}

export function WhatsAppManagement() {
  return (
    <section className="relative overflow-hidden bg-[#06100E] py-8 text-white sm:py-16">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-10" />
      <div className="pointer-events-none absolute -left-32 top-24 size-[480px] rounded-full bg-primary/10 blur-3xl" />

      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="">
            <TopBadge data="DEDICATED ACCOUNT MANAGEMENT" />

            <h2 className="mt-4 font-heading text-3xl font-black tracking-tight sm:leading-[1.05]">
              Your WhatsApp, run end to end by our team.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
              We don&apos;t stop at the technology. We also run the
              communication around it: campaigns, chats, templates, tracking
              and follow-ups. You focus on the business.
            </p>

            <div className="mt-8 max-w-md">
              <ChatPreview />
              <p className="mt-4 text-sm font-medium text-white/80">
                Technology and execution under one roof.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="flex gap-4 border-b border-white/10 p-5 last:border-b-0 sm:gap-5 sm:p-7"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-lg font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 max-w-lg text-sm leading-6 text-white/55">
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Journey: a real sequence, so a connected track fits */}
        <ol className="relative mt-16 grid gap-6 sm:mt-20 sm:grid-cols-4 sm:gap-4">
          <span
            aria-hidden
            className="absolute left-[7px] top-2 hidden h-px w-[calc(100%-14px)] bg-gradient-to-r from-primary via-primary/40 to-primary/10 sm:block"
          />
          <span
            aria-hidden
            className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-primary/30 sm:hidden"
          />
          {stages.map((stage) => (
            <li key={stage.name} className="relative pl-8 sm:pl-0 sm:pt-8">
              <span className="absolute left-0 top-1 size-3.5 rounded-full border-2 border-primary bg-[#06100E] sm:top-0" />
              <p className="font-heading text-base font-bold text-white">
                {stage.name}
              </p>
              <p className="mt-1 max-w-[16rem] text-sm leading-6 text-white/50">
                {stage.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}