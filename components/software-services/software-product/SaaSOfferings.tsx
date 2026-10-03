import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { offerings } from "@/lib/data/software-services/software-product-data";

export function SaaSOfferings() {
  return (
    <section className="border-b border-gray-100 bg-white py-8 sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="What&nbsp;We&nbsp;Offer" centerItem={true}/>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            SaaS & Software Product Development
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            From idea to launch and beyond, we build scalable, secure and
            high-performance software products that drive real business growth.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {offerings.map((item, index) => (
            <article
              key={item.title}
              className={`relative flex h-full  flex-col overflow-hidden rounded-2xl border border-gray-100 shadow-sm shadow-gray-300 ${item.bgColor}`}
            >
              <div className="flex flex-1 flex-col p-4">
                <div
                  className={`flex size-8 justify-center items-center shrink-0 rounded-full ${item.numColor} text-black`}
                >
                  <span className="font-mono text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-1">
                  <h3 className="font-heading text-lg font-semibold leading-7 text-gray-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="relative mt-auto h-40 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain object-center p-0"
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
