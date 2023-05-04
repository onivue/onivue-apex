import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FC } from 'react'
import {
  Paragraph,
  ParagraphSize,
} from '../../../components/typography/paragraph'
import { BorderRadiusType, Card, CardProps } from './card'

interface CardWithContainerWidth extends FC<CardProps> {
  /**
   * Specifies the width of the parent component. It's not a property of the TextButton Component and only
   * for demo purposes.
   */
  containerWidth: number
}

export default {
  title: 'onivue/Layouts/Card',
  component: Card,
  parameters: {
    backgrounds: { default: 'background' },
    layout: 'centered',
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<CardWithContainerWidth> = (args) => (
  <div
    style={{
      width: (args as unknown as CardWithContainerWidth).containerWidth + 'px',
    }}
  >
    <Card
      borderRadiusType={args.borderRadiusType}
      isInteractive={args.isInteractive}
    >
      <div className="text-slate-900">
        <Paragraph size={ParagraphSize.m}>
          Paragraph – Quia aut et aut. Sunt et eligendi similique enim qui quo
          minus. Aut aut error velit voluptatum optio sed quis cumque error
          magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et
          recusandae quos excepturi ut deleniti ut repellat magni.
        </Paragraph>
      </div>
    </Card>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  borderRadiusType: BorderRadiusType.roundedFull,
  // containerWidth: 680,
  isInteractive: false,
}

export const Interactive = Template.bind({})
Interactive.args = {
  borderRadiusType: BorderRadiusType.roundedFull,
  containerWidth: 680,
  isInteractive: true,
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/files/project/47817947/logos?fuid=957381129848322762',
  },
}
