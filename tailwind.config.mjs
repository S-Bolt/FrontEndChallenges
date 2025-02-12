/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "icon-sm": "0.875rem", // Custom small icon size
        "icon-md": "1.25rem", // Custom medium icon size
        "icon-lg": "2rem", // Custom large icon size
      },
    },
  },
  plugins: [],
};
