import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta = {
  // eslint-disable-next-line storybook/no-title-property-in-meta
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};
