import type { LucideIcon } from "lucide-react";

import {
  Clock,
  MessageCircle,
  User,
  BarChart3,
  X,
  Zap,
  Inbox,
  Bot,
  TrendingUp,
  Target,
  Boxes,
  Send,
  Megaphone,
  UsersRound,
  MessagesSquare,
  CheckCircle2,
  ClipboardCheck,
  UserRoundCheck,
  CalendarClock,
  MessageSquareText,
  MousePointerClick,
  RefreshCw,
} from "lucide-react";

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const problems: FeatureItem[] = [
  {
    icon: Clock,
    title: "Delayed Responses",
    text: "Slow replies lead to lost leads and sales.",
  },
  {
    icon: MessageCircle,
    title: "Scattered Conversations",
    text: "Messages are everywhere, hard to track and manage.",
  },
  {
    icon: User,
    title: "No Automation",
    text: "Manual handling is time consuming and inefficient.",
  },
  {
    icon: BarChart3,
    title: "No Data & Insights",
    text: "No visibility, no tracking, no performance growth.",
  },
  {
    icon: X,
    title: "Missed Opportunities",
    text: "Leads get lost, follow-ups are inconsistent.",
  },
];

export const solutions: FeatureItem[] = [
  {
    icon: Zap,
    title: "Instant Responses",
    text: "Automated replies & chatbots ensure real-time engagement.",
  },
  {
    icon: Inbox,
    title: "Centralized Inbox",
    text: "All conversations in one place, easy to track and manage.",
  },
  {
    icon: Bot,
    title: "Automation at Scale",
    text: "Smart workflows & chatbots handle more with less effort.",
  },
  {
    icon: TrendingUp,
    title: "Data & Insights",
    text: "Track performance, analyze conversations, improve ROI.",
  },
  {
    icon: Target,
    title: "More Conversions",
    text: "Timely follow-ups & organized processes close more deals.",
  },
];

export const whatsappFaqs = [
  {
    question: "What is WhatsApp Business API?",
    answer:
      "It is an official solution that allows businesses to automate chats, manage leads, and scale communication.",
  },
  {
    question: "How is it different from WhatsApp Business App?",
    answer:
      "The API supports automation, multiple users, and CRM integration, unlike the basic app.",
  },
  {
    question: "How long does setup take?",
    answer: "Typically 2–5 working days, depending on verification.",
  },
  {
    question: "Is it approved by Meta?",
    answer: "Yes, it is an official solution provided via Meta Platforms.",
  },
  {
    question: "What are the messaging charges?",
    answer:
      "Meta charges per conversation within the applicable 24-hour window, based on message category such as marketing or utility.",
  },
  {
    question: "Can I send bulk messages?",
    answer: "Yes, through approved templates and broadcast campaigns.",
  },
  {
    question: "Do I need technical knowledge to use it?",
    answer:
      "No, Teknovia can manage setup, automation, and daily operations for you.",
  },
  {
    question: "Can multiple team members use it?",
    answer: "Yes, it supports multi-agent access with a shared inbox.",
  },
  {
    question: "Will it integrate with my CRM or website?",
    answer: "Yes, it can be integrated with CRM, website, and ad platforms.",
  },
  {
    question: "Is it suitable for small businesses?",
    answer:
      "Yes, especially if you want to automate and grow customer communication efficiently.",
  },
];

export const watsappBlogTopics = [
  "WhatsApp Business API vs WhatsApp Business App – Which One is Right for You?",
  "How to Generate Leads Using WhatsApp Marketing (Step-by-Step Guide)",
  "Top 7 WhatsApp Automation Strategies to Increase Conversions",
  "WhatsApp Marketing Pricing Explained (India) – Complete Cost Breakdown",
  "How Small Businesses Can Scale Using WhatsApp CRM & Automation",
];

export const watsappServices = [
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


export const watsAppFeatures = [
  {
    title: "Team Inbox",
    description:
      "All customer messages come into one place so your team can reply together without confusion. No more missed chats or switching between phones.",
    icon: MessagesSquare,
        circle: "bg-rose-100 text-rose-600",
    bar: "bg-rose-500",
  },
  {
    title: "Auto Replies & Follow-ups",
    description:
      "Customers get instant replies even when you’re busy. Follow-ups happen automatically so no lead is forgotten.",
    icon: Bot,
        circle: "bg-blue-100 text-blue-700",
    bar: "bg-blue-600",
  },
  {
    title: "Customer Segmentation",
    description:
      "Group customers based on interest or stage—new, interested, or existing—so you can send the right message to the right people.",
    icon: UsersRound,
        circle: "bg-orange-100 text-orange-600",
    bar: "bg-orange-500",
  },
  {
    title: "Lead Capture from Ads",
    description:
      "When someone clicks your ad, they can directly start a WhatsApp chat. Capture qualified leads without relying on lengthy forms.",
    icon: Megaphone,
        circle: "bg-purple-100 text-purple-700",
    bar: "bg-purple-600",
  },
  {
    title: "Performance Tracking",
    description:
      "See how many people messaged, replied, and converted. Clear insights help you understand what is working.",
    icon: BarChart3,
        circle: "bg-emerald-100 text-emerald-700",
    bar: "bg-emerald-500",
  },
  {
    title: "Broadcast Messaging",
    description:
      "Send offers, updates, and reminders to many customers at once for promotions and repeat sales.",
    icon: Send,
        circle: "bg-sky-100 text-sky-700",
    bar: "bg-sky-500",
  },
  {
    title: "Reliable & Scalable System",
    description:
      "Handle a large number of chats through a structured communication system and grow without worrying about fragmented operations.",
    icon: Boxes,
        circle: "bg-pink-100 text-pink-700",
    bar: "bg-pink-500",
  },
];

export const stages = [
  { name: "Setup", text: "Number, profile and templates approved" },
  { name: "Automation", text: "Replies and workflows switched on" },
  { name: "Management", text: "Our team runs chats and campaigns" },
  { name: "Growth", text: "Follow-ups turn leads into orders" },
];

export const highlights = [
  { icon: MessageCircle, label: "Instant engagement" },
  { icon: Bot, label: "Automation at scale" },
  { icon: UsersRound, label: "Multi-agent support" },
];

export const points = [
  {
    icon: TrendingUp,
    value: "90%+",
    title: "Open rates",
    text: "90%+ open rates for maximum visibility.",
  },
  {
    icon: MessageCircle,
    value: "Instant",
    title: "Engagement",
    text: "Instant engagement with faster replies and support.",
  },
  {
    icon: Bot,
    value: "24/7",
    title: "Automation",
    text: "Automation at scale using chatbots and workflows.",
  },
  {
    icon: MousePointerClick,
    value: "Higher",
    title: "Conversions",
    text: "Higher conversions through quick response and follow-ups.",
  },
  {
    icon: RefreshCw,
    value: "CRM",
    title: "Integration",
    text: "CRM integration to track and manage leads efficiently.",
  },
];
