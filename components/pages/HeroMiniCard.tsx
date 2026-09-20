export function HeroMiniCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
        {title}
      </p>

      <p className="mt-2 font-heading text-lg font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}