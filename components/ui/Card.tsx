import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export function ServiceCard({
  image,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card">
      <div className="relative aspect-5/3 w-full overflow-hidden bg-primary-50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="flex min-h-52 flex-col p-5">
        <h3 className="text-md font-bold text-slate-950 transition-colors duration-200 group-hover:text-primary">
          {title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
          {description}
        </p>

        <a
          href="#contact"
          className="mt-auto inline-flex items-center gap-1 pt-6 text-xs font-semibold text-primary transition-all duration-200 group-hover:gap-2 hover:text-primary-700"
        >
          Explore
          <ArrowRight size={14} />
        </a>
      </div>
    </article>
  );
}