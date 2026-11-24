import { ChevronDown } from "lucide-react";

export function SelectField({
  label,
  name,
  options,
  placeholder = "Select an option",
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-gray-800"
      >
        {label}

        {required && (
          <span className="ml-1 text-primary">*</span>
        )}
      </label>

      <div className="relative">
        <select
          id={name}
          name={name}
          required={required}
          defaultValue=""
          className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white pl-4 pr-11 text-sm text-gray-700 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 cursor-pointer"
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
      </div>
    </div>
  );
}
