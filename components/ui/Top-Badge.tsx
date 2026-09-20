export function TopBadge({data}:{data:string}) {
  return (
    <div className="mb-2 flex items-center gap-3">
      <span className="text-lg font-extrabold uppercase tracking-widest text-primary">
        {data}
      </span>
    </div>
  );
}
