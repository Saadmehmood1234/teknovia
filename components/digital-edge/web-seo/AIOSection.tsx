import { Container } from "@/components/ui/Container";
import { aioServices } from "@/lib/data/digital-edge";
import { NumberedServiceCard } from "./NumberedServiceCard";
import { TopBadge } from "@/components/ui/Top-Badge";

export function AIOSection() {
  return (
    <section className="border-b border-gray-100 bg-white py-8 sm:py-16">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="lg:sticky lg:top-16 lg:self-start">
            <TopBadge data="AI OPTIMIZATION" />

            <h2 className="mt-4 font-heading text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl">
              Make Your Digital Presence{" "}
              <span className="text-primary">AI-Ready</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
              AIO helps your business{" "}
              <strong>
                become more visible and understandable to AI-powered platforms.
              </strong>
            </p>

            <div className="mt-6 space-y-4 text-sm leading-7 text-gray-400">
              <p>
                It makes your website, content, products, and business
                information{" "}
                <strong>
                  easy for AI systems to understand and interpret.
                </strong>
              </p>

              <p>
                It focuses on{" "}
                <strong>
                  clear information, accurate data, strong brand presence, and
                  AI-friendly content.
                </strong>
              </p>

              <p>
                Good AIO helps your business{" "}
                <strong>
                  stay discoverable as people increasingly use AI tools to
                  search, compare, and make decisions.
                </strong>
              </p>
            </div>
          </div>
          <div>
            <p className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
              AIO SERVICES
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {aioServices.map((item, index) => (
                <NumberedServiceCard
                  key={item.title}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
