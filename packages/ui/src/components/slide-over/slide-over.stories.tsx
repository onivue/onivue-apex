import type { Meta, StoryObj } from "@storybook/react";
import { SlideOver } from "./slide-over";

const meta = {
  // eslint-disable-next-line storybook/no-title-property-in-meta
  title: "Components/SlideOver",
  component: SlideOver,
} satisfies Meta<typeof SlideOver>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
