import type { LucideIcon } from "lucide-react";

export interface BlogSection {
  heading: string;
  paragraphs?: string[];
  points?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  author: string;
  icon?: LucideIcon;
  image: string;
  imageAlt: string;
  intro: string;
  sections?: BlogSection[];
  readTime: number;
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatPostDate(date: string) {
  if (!date) return "";
  const [year, month, day] = date.split("-").map(Number);
  if (!year || !month || !day) return date;
  return `${day} ${MONTHS[month - 1]} ${year}`;
}
