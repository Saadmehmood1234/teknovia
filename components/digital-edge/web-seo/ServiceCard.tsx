export function ServiceCard({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
    icon?: React.ElementType;
  };
  index: number;
}) {
  const Icon = item.icon;

  return (
    <article className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
      <div className="absolute -right-10 -top-10 size-28 rounded-full bg-primary-50 opacity-0 blur-2xl" />

      <div className="relative flex items-start justify-between gap-4">
        {Icon && (
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
            <Icon className="size-5" />
          </div>
        )}

        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-50 font-mono text-[10px] font-bold text-gray-400">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative mt-6 font-heading text-lg font-bold text-gray-950">
        {item.title}
      </h3>

      <p className="relative mt-3 text-sm leading-6 text-gray-600">
        {item.description}
      </p>
    </article>
  );
}
