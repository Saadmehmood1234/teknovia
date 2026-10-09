import { Container } from "@/components/ui/Container";
import { industries } from "@/lib/data/hero-data";
import { BottomImageCard } from "../ui/BottomImageCard";
import Link from "next/link";
import { AnimatedCard, RevealGroup } from "../animations/AnimatedCards";
import { SectionHeading } from "../ui/SectionHeading";

export function Industries() {
  return (
    <section id="industries" className="sm:py-16 py-8 bg-surface bg-[#FAFAFA]">
      <Container>
        <SectionHeading
          variant="centered"
          badge="Industries&nbsp;We&nbsp;Serve"
          title="Multi-Industry Expertise."
          description="Technology solutions tailored to the unique needs of every sector we serve."
        />

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <AnimatedCard key={industry.title} vertical>
              <BottomImageCard
                image={industry.image}
                title={industry.title}
                description={industry.description}
                href={industry.href}
              />
            </AnimatedCard>
          ))}
        </RevealGroup>

        <div className="w-full flex justify-center mt-8 items-center">
          <Link
            href="/industries#manufacturing"
            className="text-slate-600 border border-slate-300 px-6 py-3 hover:border-primary hover:text-primary hover:bg-primary-300/20 cursor-pointer transition-all duration-200 rounded-xl"
          >
            View all industries
          </Link>
        </div>
      </Container>
    </section>
  );
}
