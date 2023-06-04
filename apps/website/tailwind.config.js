import sharedConfig from "@onivue/ui/tailwind.config.js";

module.exports = {
  presets: [sharedConfig],
  daisyui: {
    ...sharedConfig.daisyui,
    styled: true,
    base: true,
    utils: true,
    themes: [...sharedConfig.daisyui.themes, "cyberpunk"],
  },
};
