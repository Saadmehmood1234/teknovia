export function TextareaField({
  label,
  name,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
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

      <textarea
        id={name}
        name={name}
        rows={4}
        required={required}
        maxLength={5000}
        placeholder={placeholder}
        className="w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
      />
    </div>
  );
}


