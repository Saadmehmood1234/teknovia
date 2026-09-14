import { stats } from "@/lib/data/site";


export function Stats() {
  return (
    <section className="border-b border-slate-100 bg-[#FAFAFA]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 divide-x divide-slate-100 px-4 sm:px-8 md:grid-cols-4 md:px-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="px-5 py-4 text-center sm:py-4"
          >
            <p className="font-extrabold tracking-tight text-primary text-4xl">
              {stat.value}
            </p>

            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}