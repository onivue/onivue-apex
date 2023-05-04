const colors = require("tailwindcss/colors");

module.exports = {
  content: [`src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      colors: {
        brandblue: "#ffeb00",
        brandred: colors.red[500],
      },
    },
  },
  plugins: [],
};
