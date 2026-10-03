import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { FaFacebook } from "react-icons/fa6";
import { facebookServices } from "@/lib/data/digital-edge/social-media-optimization-data";


export function SMOFacebook() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-8 -z-10 rounded-full border border-primary/10" />
              <div className="absolute -inset-16 -z-10 rounded-full border border-primary/5" />
              <div className="relative overflow-hidden rounded-4xl border border-white bg-white shadow-[0_30px_80px_rgba(0,0,0,0.10)]">
                <Image
                  src="/images/digital-edge/facebook1.png"
                  alt="Facebook social media optimization"
                  width={800}
                  height={1000}
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/20 to-transparent" />
              </div>

              <div className="absolute -right-4 top-10 flex size-14 items-center justify-center rounded-2xl border border-gray-100 bg-white text-primary shadow-[0_12px_30px_rgba(0,0,0,0.10)] sm:-right-6">
                <FaFacebook className="size-8" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <TopBadge data="Facebook Marketing" />

            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-black leading-[1.1] tracking-tight text-gray-950 sm:text-4xl">
              Build <span className="text-primary">Connections</span>. Increase{" "}
              <span className="text-primary">Engagement</span>. Grow Your{" "}
              <span className="text-primary">Business.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Strategic Facebook marketing to build your brand awareness, engage
              your audience, and generate quality leads.
            </p>

            <div className="mt-9 grid border-y border-gray-200 sm:grid-cols-2">
              {facebookServices.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className={`relative flex gap-4 py-5 ${
                      index % 2 === 0
                        ? "sm:border-r sm:border-gray-200 sm:pr-6"
                        : "sm:pl-6"
                    } ${index < 4 ? "border-b border-gray-200" : ""}`}
                  >
                    <span className="pt-1 font-mono text-[10px] font-bold tracking-widest text-gray-300">
                      0{index + 1}
                    </span>
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-bold text-gray-950 sm:text-base">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-xs leading-5 text-gray-500 sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="mt-7 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />

              <p className="text-xs font-semibold tracking-wide text-gray-500">
                Strategy • Content • Engagement • Growth
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
