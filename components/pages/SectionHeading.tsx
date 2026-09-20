export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
     <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-3xl text-center">
        <p className="font-mono text-lg font-extrabold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>

        <h2 className="mt-4 text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
          {title}
        </h2>

        <p className="mt-5 sm:text-lg text-center text-sm leading-8 text-gray-500">
          {description}
        </p>
      </div>
      </div>
  );
}
