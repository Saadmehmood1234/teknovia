export function SpamHoneypot({
  id,
}: {
  id: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="absolute left-[-9999px] h-px w-px overflow-hidden"
    >
      <label htmlFor={id}>Leave this field empty</label>

      <input
        id={id}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
