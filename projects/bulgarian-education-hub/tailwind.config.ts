import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          500: "#0284c7",
          600: "#0369a1",
          700: "#075985",
        },
        accent: {
          500: "#ea580c",
          600: "#c2410c",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
