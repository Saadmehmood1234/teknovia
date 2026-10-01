import Image from "next/image";
import {
  Calendar,
  Play,
  PlusCircle,
  SquarePlay,
  UserCircle,
  UsersRound,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { FaInstagram } from "react-icons/fa6";
import { CgHashtag } from "react-icons/cg";

const instagramServices = [
  {
    icon: UserCircle,
    title: "Profile Optimization",
    description: "Create a professional and attractive Instagram Profile.",
  },
  {
    icon: PlusCircle,
    title: "Story Engagement",
    description: "Creative stories to connect and engage your audience.",
  },
  {
    icon: SquarePlay,
    title: "Reels Strategy",
    description: "Engaging reels to increase reach and followers.",
  },
  {
    icon: UsersRound,
    title: "Audience Growth",
    description: "Organic strategies to grow real and active followers.",
  },
  {
    icon: CgHashtag,
    title: "Hashtag Research",
    description: "Targeted hashtags to improve visibility and engagement.",
  },
  {
    icon: Calendar,
    title: "Content Planning",
    description: "Consistent content calender for better engagement.",
  },
];

export function SMOIntagram() {
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
                  src="/images/digital-edge/instagram.png"
                  alt="Instagram social media optimization"
                  width={800}
                  height={1000}
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/20 to-transparent" />
              </div>

              <div className="absolute -right-4 top-10 flex size-14 items-center justify-center rounded-2xl border border-gray-100 bg-white text-primary shadow-[0_12px_30px_rgba(0,0,0,0.10)] sm:-right-6">
                <FaInstagram className="size-8" />
              </div>

              <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.10)] sm:-left-6">
                <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-white">
                  <Play className="size-3.5 fill-current" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Content
                  </p>
                  <span className="text-xs font-bold text-gray-900">
                    Reels & Stories
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <TopBadge data="INSTAGRAM Marketing" />

            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-black leading-[1.1] tracking-tight text-gray-950 sm:text-4xl">
              Grow Your{" "}
              <span className="text-primary">Brand</span>. Engage Your{" "}
              <span className="text-primary">Audience</span>. Increase Your{" "}
              <span className="text-primary">Reach.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Strategic Instagram marketing to build your brand presence, boost
              engagement, and drive real results.
            </p>

            <div className="mt-9 grid border-y border-gray-200 sm:grid-cols-2">
              {instagramServices.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className={`relative flex gap-4 py-5 ${
                      index % 2 === 0
                        ? "sm:border-r sm:border-gray-200 sm:pr-6"
                        : "sm:pl-6"
                    } ${
                      index < 4
                        ? "border-b border-gray-200"
                        : ""
                    }`}
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