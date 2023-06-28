import sharedConfig from "@onivue/ui/tailwind.config.js";
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  presets: [sharedConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    ...sharedConfig.daisyui,
    styled: true,
    base: true,
    utils: true,
    themes: [...sharedConfig.daisyui.themes, "cyberpunk"],
  },
};
