import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Icon, IIconProps } from './icon'

export default {
  title: 'onivue/Icon',
  component: Icon,
  // parameters: {
  //   backgrounds: { default: 'surface' },
  //   layout: 'centered',
  // },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => {
  return <Icon {...args} />
}

export const Default = Template.bind({})
Default.args = {
  variant: 'info',
} as IIconProps

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/files/project/47817947/logos?fuid=957381129848322762',
  },
}
