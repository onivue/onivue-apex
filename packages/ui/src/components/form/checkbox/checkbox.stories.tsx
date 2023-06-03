import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

const meta = {
  // eslint-disable-next-line storybook/no-title-property-in-meta
  title: "Components/Form/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Checkbox",
    disabled: false,
  },
};
