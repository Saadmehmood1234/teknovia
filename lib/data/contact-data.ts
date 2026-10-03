import { Mail, Phone, Send, ShieldCheck, Signal, Zap } from "lucide-react";

type ContactTab = "message" | "callback" | "enquiry";

export const tabs = [
  {
    id: "message" as ContactTab,
    label: "Send a message",
    icon: Mail,
  },
  {
    id: "callback" as ContactTab,
    label: "Request a callback",
    icon: Phone,
  },
  {
    id: "enquiry" as ContactTab,
    label: "Project enquiry",
    icon: Send,
  },
];

export const contactFeatures = [
  {
    id: 1,
    icon: Zap,
    title: "Quick Response",
    description: "We respond within 24 hours.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Trusted Partner",
    description: "Reliable solutions you can count on.",
  },
  {
    id: 3,
    icon: Signal,
    title: "Results Focused",
    description: "We deliver measurable business impact.",
  },
];

export const contactFeatures2 = [
  {
    id: 1,
    icon: Zap,
    title: "Quick Response",
    description: "We respond within 24 hours.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Trusted Partner",
    description: "Reliable solutions you can count on.",
  },
  {
    id: 3,
    icon: Signal,
    title: "Results Focused",
    description: "We deliver measurable business impact.",
  },
];