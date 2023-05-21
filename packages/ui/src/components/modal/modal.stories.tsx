import type { Meta } from "@storybook/react";
import { useState } from "react";
import { Button } from "../button";
import { Modal, type IModalProps } from "./modal";

const meta = {
  // eslint-disable-next-line storybook/no-title-property-in-meta
  title: "Components/Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

const Template = (args: IModalProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setShow((e) => !e)}>Open Modal</Button>
      <Modal {...args} isOpen={show} onClose={() => setShow(false)} />
    </>
  );
};

export const Default = Template.bind({
  args: {
    variant: "info",
    title: "title",
  },
});
