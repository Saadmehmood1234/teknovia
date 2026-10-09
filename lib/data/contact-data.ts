import { Mail, Phone, Send, ShieldCheck, Signal, Zap } from "lucide-react";

export type ContactFormType = "message" | "callback" | "enquiry";

export type ContactActionState = {
  success: boolean;
  message: string;
};

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

type ContactTab = "message" | "callback" | "enquiry";

export const services = [
  "Custom Software Development",
  "Enterprise Software Development",
  "Web Application Development",
  "Mobile Application Development",
  "SaaS Development",
  "IOT Development",
  "Google My Business - Local SEO",
  "Search and AI Optimization",
  "Social Media Optimization",
  "WhatsApp Marketing",
  "B2B Marketing",
  "eCommerce Solution",
  "EdTech Solution",
  "Other",
];

export const callbackTimes = [
  "9:00 AM – 11:00 AM",
  "11:00 AM – 1:00 PM",
  "1:00 PM – 3:00 PM",
  "3:00 PM – 6:00 PM",
];

export const initialContactState: ContactActionState = {
  success: false,
  message: "",
};


