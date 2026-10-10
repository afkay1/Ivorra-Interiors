import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F4F1EA",
        stone: "#E8E3DA",
        espresso: "#191714",
        charcoal: "#625E58",
        champagne: "#A58B62",
        walnut: "#211D19",
        line: "#D8D1C6",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        ar: ["var(--font-ar)", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1440px" },
      transitionTimingFunction: { lux: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};
export default config;
