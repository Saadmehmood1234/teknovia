interface ProgressBarProps {
  number: string;
  total?: number;
  className?: string;
  bgColor?: string;
}

export function ProgressBar({
  number,
  total = 6,
  className = "",
  bgColor = "bg-primary",
}: ProgressBarProps) {
  const current = Number(number);
  const progress = Math.min((current / total) * 100, 100);

  return (
    <div
      className={`h-1 w-full overflow-hidden rounded-full bg-slate-200 ${className}`}
    >
      <div
        className={`h-full rounded-full transition-all duration-500 ${bgColor}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}