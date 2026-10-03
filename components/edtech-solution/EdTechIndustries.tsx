import {
  GraduationCap,
} from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { edTechIndustries } from "@/lib/data/edutech-data";

function IndustryCard({
  title,
  description,
  icon: Icon,
  image,
  index,
}: {
  title: string;
  description: string;
  icon: typeof GraduationCap;
  image: string;
  index: number;
}) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-transparent" />

        <span className="absolute left-5 top-5 font-mono text-xs font-bold tracking-[0.2em] text-white/80 drop-shadow-md">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="absolute bottom-5 left-5 flex size-11 items-center justify-center rounded-xl border border-white/20 bg-black/35 text-white backdrop-blur-md">
          <Icon className="size-5" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-bold leading-tight text-gray-950 ">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {description}
        </p>

        <div className="mt-auto pt-6">
          <div className="h-px w-full bg-gray-200 " />

          <div className="mt-4 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary/60">
              EduTech
            </span>

            <span className="text-xs font-semibold text-gray-400">
              Education Solutions
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function EdTechIndustries() {
  return (
    <section
      id="edtech-industries"
      className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="CASE USE / INDUSTRIES" centerItem />

          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            EduTech Built for{" "}
            <span className="text-primary">Different Learning Ecosystems</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            From traditional institutions to digital-first education
            businesses, TEKNOVIA creates technology that adapts to different
            learning models, operational needs, and growth goals.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {edTechIndustries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              title={industry.title}
              description={industry.description}
              icon={industry.icon}
              image={industry.image}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}