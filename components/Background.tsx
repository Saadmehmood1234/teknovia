export const BackgroundEffect = () => {
  return (
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    />
  );
};
