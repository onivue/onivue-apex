import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useEffect, useState } from 'react'
import { IModalProps, Modal } from './modal'

export default {
  title: 'onivue/Modal',
  component: Modal,
  parameters: {
    backgrounds: { default: 'surface' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    setIsOpen(args.isOpen)
  }, [args.isOpen])

  return <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
}

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  title: 'title',
  variant: 'warning',
  children: 'test',
  onSubmit: () => {
    console.log('🔥')
  },
} as IModalProps

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/files/project/47817947/logos?fuid=957381129848322762',
  },
}
