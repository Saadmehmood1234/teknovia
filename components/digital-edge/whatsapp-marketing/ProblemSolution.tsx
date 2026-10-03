import { problems, solutions } from "@/lib/data/digital-edge/watsapp-marketing-data";
import type { LucideIcon } from "lucide-react";

import {
  MessageCircle,
  X,
  Check,
  Target,
  AlertCircle,
  Rocket,
  ChevronsRight,
  Mail,
  Phone,
  MessageSquare,
  FileText,
} from "lucide-react";

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type FeatureListProps = {
  items: FeatureItem[];
  tone: "red" | "green";
};

type BubbleProps = {
  children: React.ReactNode;
  className?: string;
};

type StatProps = {
  label: string;
  value: string;
  delta: string;
};

type ChatMsgProps = {
  side?: "in" | "out";
  children: React.ReactNode;
};

function FeatureList({ items, tone }: FeatureListProps) {
  const badge =
    tone === "red"
      ? "bg-red-400 text-white"
      : "bg-green-600 text-white";

  return (
    <ul className="space-y-3">
      {items.map(({ icon: Icon, title, text }) => (
        <li key={title} className="flex items-start gap-3">
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${badge}`}
          >
            <Icon size={18} />
          </span>

          <div>
            <p className="text-sm font-bold text-gray-900">{title}</p>
            <p className="text-xs leading-snug text-gray-600">{text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Bubble({ children, className = "" }: BubbleProps) {
  return (
    <span
      className={`absolute rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 shadow ${className}`}
    >
      {children}
    </span>
  );
}

function Stat({ label, value, delta }: StatProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-2">
      <p className="text-[9px] text-gray-500">{label}</p>
      <p className="text-lg font-bold text-gray-900">{value}</p>
      <p className="text-[9px] font-semibold text-green-600">
        ↑ {delta}
      </p>
    </div>
  );
}

function ChatMsg({ side = "in", children }: ChatMsgProps) {
  const cls =
    side === "in"
      ? "self-start bg-white"
      : "self-end bg-green-200";

  return (
    <div
      className={`max-w-[80%] rounded-lg px-2 py-1 text-[10px] text-gray-800 shadow-sm ${cls}`}
    >
      {children}
    </div>
  );
}
function StressedPerson() {
  return (
    <div className="relative mx-auto h-64 w-full max-w-sm">
      <Bubble className="left-16 top-0 font-semibold">Where is my order?</Bubble>
      <Bubble className="left-0 top-16">Any update?</Bubble>
      <Bubble className="right-0 top-14">Hello?</Bubble>
      <Bubble className="left-2 top-32">???</Bubble>
      <span className="absolute left-16 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-white text-red-500 shadow"><Mail size={16} /></span>
      <span className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white shadow"><MessageSquare size={16} /></span>
      <span className="absolute right-8 top-32 flex h-8 w-8 items-center justify-center rounded-full bg-red-400 text-white shadow"><Phone size={16} /></span>
      <svg viewBox="0 0 240 200" className="absolute bottom-0 left-1/2 h-48 -translate-x-1/2">
        <rect x="20" y="150" width="160" height="40" rx="6" fill="#9ca3af" />
        <rect x="30" y="120" width="140" height="34" rx="4" fill="#d1d5db" />
        <path d="M60 150 Q60 100 100 100 Q140 100 140 150 Z" fill="#1e2a44" />
        <path d="M92 100 L100 128 L108 100 Z" fill="#fff" />
        <circle cx="100" cy="70" r="24" fill="#d9a07a" />
        <path d="M76 66 Q78 42 100 44 Q124 42 124 66 Q112 52 100 54 Q88 52 76 66 Z" fill="#1f1a17" />
        <path d="M78 100 Q64 82 82 70" stroke="#d9a07a" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M122 100 Q136 82 118 70" stroke="#d9a07a" strokeWidth="9" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-3 shadow-lg">
      <p className="mb-2 text-xs font-bold text-gray-800">Dashboard</p>
      <div className="grid grid-cols-2 gap-2">
        <Stat label="Conversations" value="12,842" delta="28%" />
        <Stat label="Conversations" value="1,256" delta="21%" />
        <Stat label="Resolved" value="11,586" delta="32%" />
        <Stat label="Conversion Rate" value="23.6%" delta="21%" />
      </div>
      <p className="mb-1 mt-3 text-[9px] font-semibold text-gray-600">Conversations Over Time</p>
      <svg viewBox="0 0 200 60" className="h-16 w-full">
        <polyline points="0,52 25,46 50,48 75,36 100,38 125,24 150,26 175,12 200,6" fill="none" stroke="#16a34a" strokeWidth="2" />
        <polyline points="0,52 25,46 50,48 75,36 100,38 125,24 150,26 175,12 200,6 200,60 0,60" fill="#16a34a" opacity="0.12" />
      </svg>
    </div>
  );
}

function Phone_() {
  return (
    <div className="w-44 shrink-0 rounded-[1.75rem] border-4 border-gray-900 bg-gray-900 shadow-xl">
      <div className="flex items-center gap-2 rounded-t-[1.4rem] bg-green-800 px-3 py-2 text-white">
        <span className="h-6 w-6 rounded-full bg-green-300" />
        <div className="leading-tight">
          <p className="text-[10px] font-bold">Your Business</p>
          <p className="text-[8px] opacity-80">Online</p>
        </div>
      </div>
      <div className="flex h-56 flex-col gap-1.5 rounded-b-[1.4rem] bg-amber-50 p-2">
        <ChatMsg>Hi! I&apos;m interested in your product.</ChatMsg>
        <ChatMsg side="out">Hello! 👋 How can we help you today?</ChatMsg>
        <ChatMsg>Can you share more details?</ChatMsg>
        <ChatMsg side="out">
          Sure! Here are the details you asked.
          <span className="mt-1 flex items-center gap-1 rounded bg-white p-1 text-[9px]"><FileText size={10} />Product Brochure.pdf</span>
        </ChatMsg>
        <ChatMsg>Thanks! I&apos;ll place the order.</ChatMsg>
        <ChatMsg side="out">Great! Your order has been confirmed. ✓</ChatMsg>
      </div>
    </div>
  );
}

export default function ProblemSolution() {
  return (
    <section className="mx-auto w-full max-w-5xl bg-white p-4 font-sans py-8 sm:py-16">
      <header className="text-center">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
          <span className="text-red-600">PROBLEM</span>
          <span className="mx-3 text-gray-800">→</span>
          <span className="text-green-700">SOLUTION</span>
        </h1>
        <p className="mt-1 text-2xl font-extrabold text-gray-900">(HIGH IMPACT)</p>
        <p className="mt-1 text-base text-gray-700">
          From Missed Opportunities to <span className="font-bold text-green-700">Measurable Growth</span>
        </p>
      </header>

      <div className="relative mt-8 grid gap-6 md:grid-cols-2">
        <div className="relative rounded-2xl border border-red-200 bg-red-50 px-5 pb-5 pt-9">
          <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-lg bg-red-600 px-8 py-2 text-lg font-extrabold text-white shadow">
            <X size={20} className="rounded-full bg-white p-0.5 text-red-600" /> PROBLEM
          </span>
          <h2 className="mb-4 text-center text-2xl font-extrabold text-red-600">Businesses Struggle With</h2>
          <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
            <FeatureList items={problems} tone="red" />
            <StressedPerson />
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-lg bg-red-600 px-4 py-3 text-sm font-bold text-white">
            <AlertCircle className="shrink-0" />
            Result: Lost Leads, Low Conversions, Unhappy Customers, Low ROI
          </div>
        </div>

        {/* Arrow */}
        <span className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 shadow-lg md:flex">
          <ChevronsRight size={26} />
        </span>

        {/* Solution */}
        <div className="relative rounded-2xl border border-green-200 bg-green-50 px-5 pb-5 pt-9">
          <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-lg bg-green-700 px-8 py-2 text-lg font-extrabold text-white shadow">
            <Check size={20} className="rounded-full bg-white p-0.5 text-green-700" /> SOLUTION
          </span>
          <h2 className="mb-4 text-center text-2xl font-extrabold text-green-700">Teknovia WhatsApp Business API</h2>
          <div className="grid gap-4 lg:grid-cols-[1fr_1.3fr]">
            <FeatureList items={solutions} tone="green" />
            <div className="relative flex items-center gap-2">
              <Dashboard />
              <div className="-ml-16 mt-8 hidden sm:block lg:-ml-14">
                <Phone_ />
              </div>
              <span className="absolute -bottom-3 right-0 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg">
                <MessageCircle size={26} />
              </span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-lg bg-green-700 px-4 py-3 text-sm font-bold text-white">
            <Rocket className="shrink-0" />
            Result: Happy Customers, Higher Conversions, Better ROI, Sustainable Growth
          </div>
        </div>
      </div>

      {/* Footer banner */}
      <footer className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-xl bg-slate-900 px-6 py-4 text-sm font-bold text-white sm:text-base">
        <span className="flex items-center gap-2"><Target size={20} /> Problem Creates Loss.</span>
        <span className="hidden h-6 w-px bg-white/40 sm:block" />
        <span className="flex items-center gap-2">
          <MessageCircle size={20} className="text-green-400" />
          <span className="text-green-400">Teknovia Creates Impact.</span>
          <span>Let&apos;s Build Growth Together!</span>
        </span>
      </footer>
    </section>
  );
}