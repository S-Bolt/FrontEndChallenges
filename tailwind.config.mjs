/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        neutral: {
          white: "var(--neutral-white)",
          slate: {
            100: "var(--neutral-slate-100)",
            300: "var(--neutral-slate-300)",
            500: "var(--neutral-slate-500)",
            700: "var(--neutral-slate-700)",
            800: "var(--neutral-slate-800)",
            900: "var(--neutral-slate-900)",
          },
        },
      },
      boxShadow: {
        top: "0 -7px 5px -4px var(--primary)",
      },
    },
  },
  plugins: [],
};

export default config;
