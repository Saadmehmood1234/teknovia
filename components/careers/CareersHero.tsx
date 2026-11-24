import { BackgroundHero } from "../ui/heroes/BackgroundHero";

export function CareersHero() {
  return (

<BackgroundHero
  id="digital-edge-hero"
  breadcrumb={[{ label: "Careers" }]}
  badge="We're Hiring in Noida & Hybrid"
  title={
    <>
      Build Software That Matters.{" "}
      <span className="text-primary">Without the Red Tape.</span>
    </>
  }
  description="Teknovia is where engineers, product designers, and growth strategists come to do their best work. Small empowered teams, modern tech stacks, and direct ownership from day one."
  image={{
    src: "/career-bg.png",
    alt: "Teknovia Careers and Engineering Culture",
  }}
  primaryButton={{
    label: "Explore Open Roles",
    href: "#openings",
  }}
  secondaryButton={{
    label: "Why Teknovia?",
    href: "#culture",
  }}
/>
  );
}
