import { Container } from "@/components/ui/Container";
import { WhyTeknoviaReasons } from "../NoteBook";
import { SectionHeading } from "../ui/SectionHeading";
import { AnimatedCard } from "../animations/AnimatedCards";

export function WhyTeknovia() {
  return (
    <section className="bg-white py-8 sm:py-16">
      <Container className="flex flex-col items-center justify-center">
        <SectionHeading
          variant="centered"
          badge="Why&nbsp;Choose&nbsp;Teknovia"
          title="our Growth is Our Commitment."
        />

        <AnimatedCard vertical>
          <WhyTeknoviaReasons />
        </AnimatedCard>
      </Container>
    </section>
  );
}
