import {
  BarChart3,
  Bot,
  Boxes,
  CheckCircle2,
  Megaphone,
  MessagesSquare,
  Send,
  UsersRound,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";

const features = [
  {
    title: "Team Inbox",
    description:
      "All customer messages come into one place so your team can reply together without confusion. No more missed chats or switching between phones.",
    icon: MessagesSquare,
  },
  {
    title: "Auto Replies & Follow-ups",
    description:
      "Customers get instant replies even when you’re busy. Follow-ups happen automatically so no lead is forgotten.",
    icon: Bot,
  },
  {
    title: "Customer Segmentation",
    description:
      "Group customers based on interest or stage—new, interested, or existing—so you can send the right message to the right people.",
    icon: UsersRound,
  },
  {
    title: "Lead Capture from Ads",
    description:
      "When someone clicks your ad, they can directly start a WhatsApp chat. Capture qualified leads without relying on lengthy forms.",
    icon: Megaphone,
  },
  {
    title: "Performance Tracking",
    description:
      "See how many people messaged, replied, and converted. Clear insights help you understand what is working.",
    icon: BarChart3,
  },
  {
    title: "Broadcast Messaging",
    description:
      "Send offers, updates, and reminders to many customers at once for promotions and repeat sales.",
    icon: Send,
  },
  {
    title: "Reliable & Scalable System",
    description:
      "Handle a large number of chats through a structured communication system and grow without worrying about fragmented operations.",
    icon: Boxes,
  },
];

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
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 ${
                  index === features.length - 1
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
