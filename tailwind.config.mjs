/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: { 900: "#0f172a", 700: "#1e293b", 500: "#64748b" },
        bg: { soft: "#f8fafc", white: "#ffffff" },
        brand: { 500: "#6366f1", 600: "#4f46e5" },
        cyan: { 500: "#06b6d4" },
        line: "#e2e8f0",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      letterSpacing: { tightish: "-0.015em" },
      boxShadow: {
        lift: "0 10px 30px -10px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};
