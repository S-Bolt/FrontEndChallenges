/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ['"DM Sans"', "sans-serif"],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        neutral: {
          white: "var(--neutral-white)",
          slate: {
            100: "var(--neutral-slate-100)",
            200: "var(--neutral-slate-200)",
            300: "var(--neutral-slate-300)",
            500: "var(--neutral-slate-500)",
            600: "var(--neutral-slate-600)",
            700: "var(--neutral-slate-700)",
            800: "var(--neutral-slate-800)",
            900: "var(--neutral-slate-900)",
          },
        },
        accent: {
          orange: {
            light: "var(--accent-orange-light)",
            dark: "var(--accent-orange-dark)",
          },
          purple: {
            light: "var(--accent-purple-light)",
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
