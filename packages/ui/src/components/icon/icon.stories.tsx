import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./icon";

const meta = {
  // eslint-disable-next-line storybook/no-title-property-in-meta
  title: "Components/Icon",
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "info",
  },
};
