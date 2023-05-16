const sharedConfig = require("tailwindcss-config/tailwind.config.js");

module.exports = {
  presets: [sharedConfig],
  daisyui: {
    ...sharedConfig.daisyui,
    themes: [...sharedConfig.daisyui.themes, "cyberpunk"],
  },
};
