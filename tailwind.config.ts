import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#E6E7EE",
        accent: "#5B6EF5",
        secondary: "#7C3AED",
        shadow: "#C8C8C8",
        highlight: "#FFFFFF",
        "text-main": "#1F2937",
      },
      fontFamily: {
        sora: ["Sora", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "neu-raised": "6px 6px 12px #C8C8C8, -6px -6px 12px #FFFFFF",
        "neu-card": "8px 8px 16px #C8C8C8, -8px -8px 16px #FFFFFF",
        "neu-hover": "12px 12px 24px #C8C8C8, -12px -12px 24px #FFFFFF",
        "neu-inset": "inset 4px 4px 8px #C8C8C8, inset -4px -4px 8px #FFFFFF",
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
