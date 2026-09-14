import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface BottomImageCardProps {
  image: string;
  title: string;
  description: string;
  href?: string;
}

export function BottomImageCard({
  image,
  title,
  description,
  href = "#",
}: BottomImageCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.14)]">
      {" "}
      <div className="flex min-h-44 flex-col p-5">
        <h3 className="text-lg font-bold text-slate-950 transition-colors duration-200 group-hover:text-primary">
          {title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
          {description}
        </p>

        <a
          href={href}
          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary transition-all duration-200 group-hover:gap-2 hover:text-primary-700"
        >
          Explore
          <ArrowRight size={14} />
        </a>
      </div>
      <div className="relative aspect-5/2 w-full overflow-hidden bg-primary-50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
    </article>
  );
}
