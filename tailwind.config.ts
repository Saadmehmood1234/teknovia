import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B63F6",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },

        ink: {
          DEFAULT: "#111827",
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },

        surface: "#F8FAFC",
        navy: "#0B1220",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      maxWidth: {
        container: "1280px",
      },

      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },

      boxShadow: {
        soft: "0 10px 40px rgba(15, 23, 42, 0.07)",
        card: "0 8px 30px rgba(15, 23, 42, 0.06)",
      },

      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(15,23,42,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.05) 1px, transparent 1px)",
      },
    },
  },

  plugins: [],
};

export default config;