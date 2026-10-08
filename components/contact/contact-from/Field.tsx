export function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-gray-600"
      >
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={
          type === "email"
            ? 254
            : name === "name"
              ? 120
              : name === "phone"
                ? 30
                : name === "company"
                  ? 150
                  : name === "subject"
                    ? 200
                    : undefined
        }
        className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
      />
    </div>
  );
}

