import { Code2, Zap, HeartHandshake, Sparkles, Trophy, Lightbulb } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card2 } from "@/components/ui/Card2";

export const LifeAtTeknovia = [
  {
    icon: Code2,
    title: "High Craft & Code Standards",
    description:
      "We write type-safe, well-tested code with modern tools like Next.js 16, TypeScript, and Tailwind CSS. We care about performance, clean architecture, and building systems that scale gracefully.",
    circle: "bg-primary/10 text-primary",
    bar: "bg-primary",
  },
  {
    icon: Zap,
    title: "Radical Autonomy & Speed",
    description:
      "No multi-tiered approvals or endless status calls. You get clear problem statements, high ownership, and direct authority to ship solutions to production.",
    circle: "bg-amber-100 text-amber-600",
    bar: "bg-amber-500",
  },
  {
    icon: HeartHandshake,
    title: "Real Mentorship, Not Cheap Labor",
    description:
      "Whether you join as an intern or senior developer, you pair with experienced engineers who review your pull requests thoughtfully and invest in your career trajectory.",
    circle: "bg-emerald-100 text-emerald-600",
    bar: "bg-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Zero Ego, Honest Feedback",
    description:
      "The best idea wins, regardless of hierarchy. We encourage constructive debate, post-mortems without blame, and continuous personal growth.",
    circle: "bg-purple-100 text-purple-600",
    bar: "bg-purple-500",
  },
  {
    icon: Trophy,
    title: "Merit-Based Progression",
    description:
      "We promote and reward based on outcomes and initiative, not tenure. Interns with stellar performance receive fast-tracked Pre-Placement Offers (PPOs).",
    circle: "bg-blue-100 text-blue-600",
    bar: "bg-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Learning & Tooling Stipends",
    description:
      "We provide modern workstations, dual-monitor desks, premium software tooling, and annual budgets for books, developer courses, and technical certifications.",
    circle: "bg-rose-100 text-rose-600",
    bar: "bg-rose-500",
  },
];

export function CareersCulture() {
  return (
    <section id="culture" className="border-t border-slate-200/80 bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          variant="centered"
          badge="Life at Teknovia"
          title="How We Work & What We Stand For"
          description="We are building an engineering culture where talented problem solvers can do the most meaningful work of their lives without bureaucratic friction."
        />

        <ul className="mt-8 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {LifeAtTeknovia.map((item) => (
            <Card2
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              circle={item.circle}
              bar={item.bar}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
