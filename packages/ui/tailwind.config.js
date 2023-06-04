const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {},
  extend: {
    screens: {
      xs: "414px",
    },
    colors: {},
  },
  plugins: [require("daisyui")],

  // https://github.com/saadeghi/daisyui/blob/master/src/colors/themes.js
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],

          // primary: 'blue',
          // secondary: '#f6d860',
          // accent: '#37cdbe',
          // neutral: '#3d4451',
          // 'base-100': '#ffffff',

          "--rounded-box": "8px", // border radius rounded-box utility class, used in card and other large boxes
          // '--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
          // '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          // '--animation-btn': '0.25s', // duration of animation when you click on button
          // '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          // '--btn-text-case': 'uppercase', // set default text transform for buttons
          // '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          // '--border-btn': '1px', // border width of buttons
          // '--tab-border': '1px', // border width of tabs
          // '--tab-radius': '0.5rem', // border radius of tabs
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          // '.btn': {
          //   'padding-left': '24px',
          //   'padding-right': '24px',
          // },
          // primary: 'red',
          // secondary: '#f6d860',
          // accent: '#37cdbe',
          // neutral: '#3d4451',
          // 'base-100': '#ffffff',

          "--rounded-box": "8px", // border radius rounded-box utility class, used in card and other large boxes
          // '--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
          // '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          // '--animation-btn': '0.25s', // duration of animation when you click on button
          // '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          // '--btn-text-case': 'uppercase', // set default text transform for buttons
          // '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          // '--border-btn': '1px', // border width of buttons
          // '--tab-border': '1px', // border width of tabs
          // '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
    ],
  },
};
