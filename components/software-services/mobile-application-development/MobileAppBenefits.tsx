import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

export function MobileAppBenefits() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#040706] py-8 text-white sm:py-16">
      <Image
        src="/images/mobile-app-benefits.png"
        alt=""
        fill
        preload
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#040706]/80" />

      <Container className="relative">
        <SectionHeading
          variant="centered"
          titleClassName="text-white"
          descriptionClassName="text-white/60 text-md"
          badge="WHY&nbsp;MOBILE"
          title="Why Your Business Needs a Mobile App."
          description="With smartphones becoming the primary way people access digital services, mobile apps have become a powerful tool for customer engagement, brand growth, and business efficiency. Research consistently shows that consumers spend significantly more time in mobile apps than on mobile websites, making apps a valuable channel for reaching and retaining customers."
        />
      </Container>
    </section>
  );
}
