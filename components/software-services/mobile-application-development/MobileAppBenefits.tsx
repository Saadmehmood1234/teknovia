import { Container } from "@/components/ui/Container";
import Image from "next/image";


export function MobileAppBenefits() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#040706] py-8 text-white sm:py-16">
      <Image
        src="/images/mobile-app-benefits.png"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#040706]/80" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-primary sm:text-base">
            WHY MOBILE
          </p>

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
