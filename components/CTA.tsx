import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundEffect } from "./Background";

interface CTAProps {
  id?: string;
  title: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
  image?: string;
  imageAlt?: string;
}

export function CTA({
  id = "contact",
  title,
  description,
  button,
  image = "/images/home-hero.jpg",
  imageAlt = "",
  
}: CTAProps) {
  return (
    <section
      id={id}
      className="relative flex w-full items-center justify-center overflow-hidden"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#18342F]/90" />
      <BackgroundEffect/>

      <div className="relative flex w-full max-w-345 flex-col items-center justify-between gap-10 px-8 py-8 sm:py-16 lg:flex-row">
        <div>
          <p className="text-2xl font-bold text-white sm:text-3xl">
            {title}
          </p>

          <h2 className="mt-4 max-w-2xl text-base leading-7 text-white/90">
            {description}
          </h2>
        </div>

        <Link
          href={button.href}
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-primary transition hover:bg-slate-100"
        >
          {button.label}
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}