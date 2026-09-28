import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import Image from "next/image";

export function B2BMarketingIntroduction() {
  return (
    <section className="border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div className="relative flex flex-col gap-4">
            <div className="relative w-full overflow-hidden rounded-3xl border border-gray-200 bg-white">
              <Image
                src="/images/digital-edge/b2b-background.png"
                alt="Mobile application development"
                width={1000}
                height={750}
                className="h-auto w-full rounded-2xl object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <TopBadge data="WHAT IS B2B MARKETING?" />

            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
              Marketing built around{" "}
              <span className="text-primary">business decisions.</span>
            </h2>

            <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-gray-600 s">
              <p>
                <strong className="font-semibold text-gray-900">
                  B2B marketing (business-to-business marketing)
                </strong>{" "}
                is the process of promoting products or services to other
                businesses rather than individual customers. It helps businesses
                reach the right decision-makers, build trust, generate qualified
                leads, and develop valuable business relationships. Unlike B2C
                marketing, B2B marketing often involves longer buying cycles and
                multiple decision-makers. A well-planned B2B marketing strategy
                helps businesses stay visible, build credibility, and create
                consistent opportunities for growth.
              </p>

              <p>
                At{" "}
                <strong className="font-semibold text-gray-900">
                  TEKNOVIA
                </strong>
                , we combine{" "}
                <strong className="font-semibold text-gray-900">
                  SEO, content marketing, social media, digital advertising, and
                  data-driven strategies
                </strong>{" "}
                to connect businesses with relevant audiences. Our approach
                focuses on understanding your industry, target market, and
                business goals so your marketing efforts generate meaningful
                engagement and support long-term business growth.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
