import { withThemeByClassName } from "@storybook/addon-styling";
import { MINIMAL_VIEWPORTS as viewports } from "@storybook/addon-viewport";
import "../src/styles.css";
import "./preview.css";

import * as themes from "./themes";

/** @type { import('@storybook/react').Preview } */
const config = {
  decorators: [
    (Story) => {
      return <Story />;
    },
    withThemeByClassName({
      themes: {
        Light: "",
        Dark: "dark",
      },
      defaultTheme: "Dark",
    }),
  ],
  parameters: {
    actions: {
      argTypesRegex: "^on[A-Z].*",
    },
    backgrounds: {
      default: "Theme",
      values: [
        {
          name: "Theme",
          value: "var(--storybook-background-color)",
        },
        {
          name: "Light",
          value: "var(--storybook-background-color-light)",
        },
        {
          name: "Dark",
          value: "var(--storybook-background-color-dark)",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
    viewport: {
      viewports,
    },
  },
};

// export const decorators = [];

export default config;
