export function NumberedServiceCard({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
  };
  index: number;
}) {
  return (
    <article className="relative rounded-2xl border border-gray-200 bg-[#FAFAFA] p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-50 font-mono text-xs font-bold text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <h3 className="font-heading text-lg font-bold text-gray-950">
            {item.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}
