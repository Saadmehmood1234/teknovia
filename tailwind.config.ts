import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#009689",
          dark: "#00786f",
          50: "#e6f7f5",
          100: "#ccefeb",
          200: "#99dfd7",
          300: "#66cec3",
          400: "#33bdb2",
          500: "#009689",
          600: "#00877d",
          700: "#00786f",
          800: "#00645d",
          900: "#00514b",
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
        sans: ["var(--font-manrope)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
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
          "linear-gradient(rgba(0,150,137,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,150,137,.06) 1px, transparent 1px)",
      },
    },
  },

  plugins: [],
};

export default config;
