const defaultTheme = require("tailwindcss/defaultTheme");

const hocusPlugin = require("./hocus.plugin");

module.exports = {
  content: ["src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "414px",
      ...defaultTheme.screens,
    },
  },
  extend: {
    colors: {
      mycolor: {
        50: "#fdf8f6",
        100: "#f2e8e5",
        200: "#eaddd7",
        300: "#e0cec7",
        400: "#d2bab0",
        500: "green",
        600: "#a18072",
        700: "#977669",
        800: "#846358",
        900: "#43302b",
      },
    },
  },
  plugins: [hocusPlugin],
};
