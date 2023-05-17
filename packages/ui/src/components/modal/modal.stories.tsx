import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./modal";

const meta = {
  // eslint-disable-next-line storybook/no-title-property-in-meta
  title: "Components/Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "info",
    title: "title",
    isOpen: true,
  },
};
