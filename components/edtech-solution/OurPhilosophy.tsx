import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { philosophyPoints } from "@/lib/data/edutech-data";


export function OurPhilosophy() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16">
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="OUR PHILOSOPHY" centerItem />

          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            Technology should not just digitize education it should{" "}
            <span className="text-primary">
              enhance how people learn and grow.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            At TEKNOVIA, EduTech is built around outcomes, not just platforms.
            We combine technology, content, and growth strategy to create
            learning ecosystems that are engaging, scalable, and results-driven.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
          {philosophyPoints.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="bg-[#FAFAFA] p-6 sm:p-7"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-5 font-heading text-base font-bold text-gray-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl bg-[#274444] px-6 py-6 text-center sm:px-8">
          <p className="font-heading text-lg font-bold text-white sm:text-xl">
            For us, EduTech is not a product — it&apos;s a{" "}
            <span className="text-primary-300">
              long-term growth engine for education businesses.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}
