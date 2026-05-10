/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "usacs-red-light": "#A52A21",
        "usacs-red-dark": "#7B1915",

        cream: "#F7F2E4",
        "cream-light": "#FBF4E4",

        "text-dark": "#2B2B2B",
        "text-muted": "#6B6B6B",

        "border-light": "#E6E2D6",
      },
    },
  },
  plugins: [],
};
