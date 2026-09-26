import { Container } from "@/components/ui/Container";
import { WhyTeknoviaReasons } from "../NoteBook";
import { TopBadge } from "../ui/Top-Badge";

export function WhyTeknovia() {
  return (
    <section className="bg-white py-8 sm:py-16">
      <Container className="flex flex-col items-center justify-center">
        <div className="max-w-3xl text-center">
          <TopBadge data="Why&nbsp;Choose&nbsp;Teknovia" centerItem={true} />

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Your Growth is Our Commitment
          </h2>
        </div>

        <WhyTeknoviaReasons />
      </Container>
    </section>
  );
}
