/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.amber[300],
        dbg: "#252234",
        dcard: "#070E44",
        btn: colors.cyan[500],
      },
    },
  },
  plugins: [],
};
