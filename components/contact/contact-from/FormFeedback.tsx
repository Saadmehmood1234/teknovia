import { ContactActionState } from "@/lib/data/contact-data";

export function FormFeedback({
  state,
}: {
  state: ContactActionState;
}) {
  if (!state.message) {
    return null;
  }

  return (
    <p
      role={state.success ? "status" : "alert"}
      aria-live="polite"
      className={`rounded-xl px-4 py-3 text-sm ${
        state.success
          ? "bg-primary-50 text-primary-800"
          : "bg-red-50 text-red-700"
      }`}
    >
      {state.message}
    </p>
  );
}
