import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useEffect, useState } from 'react'
import { SlideOver } from './slide-over'

export default {
  title: 'onivue/SlideOver',
  component: SlideOver,
  parameters: {
    backgrounds: { default: 'background' },
    layout: 'centered',
  },
} as ComponentMeta<typeof SlideOver>

const Template: ComponentStory<typeof SlideOver> = (args) => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    setIsOpen(args.isOpen)
  }, [args.isOpen])

  return (
    <SlideOver {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
  )
}

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/',
  },
}
