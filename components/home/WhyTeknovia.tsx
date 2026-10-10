import { Container } from "@/components/ui/Container";
import { WhyTeknoviaReasons } from "../NoteBook";
import { SectionHeading } from "../ui/SectionHeading";
import {Fragment} from "react"
export function WhyTeknovia() {
  return (
    <section className="bg-white py-8 sm:py-16">
      <Container className="flex flex-col items-center justify-center">
        <SectionHeading
          variant="centered"
          badge="Why&nbsp;Choose&nbsp;Teknovia"
          title={[
            <Fragment key="why-teknovia">
            Our Growth is <span className="text-primary">Our Commitment.</span>
            </Fragment>
          ]}
        />

          <WhyTeknoviaReasons />
      </Container>
    </section>
  );
}
