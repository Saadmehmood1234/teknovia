import { TopBadge } from "@/components/ui/Top-Badge";

export function SectionHeading({
  badge,
  title,
  description,
  dark = false,
}: {
  badge: string;
  title: React.ReactNode;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <TopBadge data={badge} centerItem />

      <h2
        className={`mt-4 font-heading text-3xl font-black tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-gray-950"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base ${
            dark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
