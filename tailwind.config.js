/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#0F3A91",
      gray: "#919191",
      lightblue: "#218CFF",
    },

    extend: {
      boxShadow: {
        "icon-shadow":
          "-15px -15px 35px rgba(0, 0, 0, 0.1), 15px 15px 20px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
