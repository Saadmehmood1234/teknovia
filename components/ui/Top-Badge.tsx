type ItemsProps={
  data:string;
  centerItem?:boolean
}
export function TopBadge({data,centerItem=false}:ItemsProps) {
  return (
    <div className={`mb-2 flex items-center ${centerItem&&"justify-center"} gap-3`}>
      <span className="text-lg font-extrabold uppercase tracking-widest text-primary">
        {data}
      </span>
    </div>
  );
}
