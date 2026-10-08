import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { philosophyPoints } from "@/lib/data/edutech-data";
import { Card2 } from "../ui/Card2";
import { BackgroundEffect } from "../Background";

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
        <ul className="mt-8 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {philosophyPoints.map((item) => (
            <Card2
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              circle={item.circle}
              bar={item.bar}
            />
          ))}
        </ul>

        <div className="mt-8 relative rounded-2xl bg-[#274444] px-6 py-6 text-center sm:px-8">
          <BackgroundEffect/>
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
