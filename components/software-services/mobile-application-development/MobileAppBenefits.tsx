import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
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
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="WHY&nbsp;MOBILE" centerItem={true} />

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Why Your Business Needs a Mobile App
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-lg">
            With smartphones becoming the primary way people access digital
            services, mobile apps have become a powerful tool for customer
            engagement, brand growth, and business efficiency. Research
            consistently shows that consumers spend significantly more time in
            mobile apps than on mobile websites, making apps a valuable channel
            for reaching and retaining customers.
          </p>
        </div>
      </Container>
    </section>
  );
}
