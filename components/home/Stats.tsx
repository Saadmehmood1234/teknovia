const stats = [
  {
    value: "25+",
    label: "Happy Clients",
  },
  {
    value: "50+",
    label: "Projects Completed",
  },
  {
    value: "15+",
    label: "Team Members",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
];

export function Stats() {
  return (
    <section className="border-b border-slate-100 bg-[#FAFAFA]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 divide-x divide-slate-100 px-5 sm:px-8 md:grid-cols-4 md:px-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="px-5 py-10 text-center sm:py-4"
          >
            <p className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
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