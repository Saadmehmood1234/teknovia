"use client";

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "../ui/breadcrumb";

export function IndustriesHero() {
  return (
    <section id="home" className="relative isolate overflow-hidden py-8">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/industry-hero.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[#040506]/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,150,137,0.14),transparent_55%)]" />
      <Container className="relative z-10">
        <Breadcrumb items={[{ label: "Industries" }]} />
        <div className="mt-8">
          <h1 className="w-full text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.5rem]">
            Solutions Built for{" "}
            <span className="text-primary-300">Every Industry.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            We understand every industry has unique challenges. Our solutions
            are crafted to drive growth, efficiency, and long-term impact across
            diverse sectors.
          </p>
        </div>
      </Container>
    </section>
  );
}
