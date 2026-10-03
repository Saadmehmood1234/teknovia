import {
  CheckCircle2,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import Image from "next/image";
import { highlights } from "@/lib/data/digital-edge/social-media-optimization-data";


export function SMOIntroduction() {
  return (
    <section className="border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative flex flex-col justify-center items-center gap-4">
            <div className="relative w-full overflow-hidden rounded-3xl border border-gray-200 bg-white">
              <Image
                src="/images/digital-edge/smo-about.jpg"
                alt="Mobile application development"
                width={1000}
                height={750}
                className="h-auto w-full rounded-2xl object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 flex items-center gap-3 rounded-2xl border border-primary/15 bg-white p-4 shadow-sm">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                <CheckCircle2 className="size-5" />
              </div>
              <p className="text-sm font-semibold leading-6 text-gray-800">
                One strategy for content, engagement, audience growth and social
                media visibility.
              </p>
            </div>
          </div>
          <div>
            <TopBadge data="WHY SOCIAL MEDIA OPTIMIZATION?" />

            <h2 className="mt-4 max-w-xl font-heading text-3xl font-black tracking-tight text-gray-950">
              Make Your Brand{" "}
              <span className="text-primary">Worth Following.</span>
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-gray-600 sm:text-base">
              <p>
                In today’s digital world, your audience spends more time on
                social media than ever before. Social Media Optimization (SMO)
                helps businesses build a strong online presence, improve
                engagement, increase brand awareness, and generate quality leads
                through platforms like Instagram and Facebook.
              </p>
              <p>
                Social Media Optimization is the process of optimizing your
                social media profiles, content, and engagement strategies to
                improve visibility, audience interaction, and brand credibility
                across social platforms.
              </p>

              <p>
                At TEKNOVIA Technologies Private Limited, we create data-driven
                social media strategies designed to connect your brand with the
                right audience and turn followers into customers.
              </p>
            </div>
            <div className="grid mt-8 gap-3 grid-cols-2 sm:grid-cols-4">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="flex gap-4 items-center">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                      <Icon className="size-5" />
                    </div>

                    <div>
                      <h3 className="font-heading text-sm font-bold text-black/70">
                        {item.title}
                      </h3>
                      {/* <p className="mt-1 text-xs leading-5 text-gray-500">
                        {item.text}
                      </p> */}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
