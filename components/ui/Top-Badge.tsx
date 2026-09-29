type ItemsProps = {
  data: string;
  centerItem?: boolean;
};

export function TopBadge({
  data,
  centerItem = false,
}: ItemsProps) {
  return (
    <div
      className={`mb-4 flex w-full items-center gap-2 ${
        centerItem ? "justify-center text-center" : "justify-start"
      }`}
    >
      <span
        className="
          max-w-full
          text-xs
          font-extrabold
          uppercase
          tracking-[0.12em]
          text-primary
          sm:text-sm
          sm:tracking-[0.18em]
          md:text-base
        "
      >
        {data}
      </span>
    </div>
  );
}