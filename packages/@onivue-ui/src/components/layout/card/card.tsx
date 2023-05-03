import { FC, ReactNode } from 'react'
import { mergeClassNames } from '../../../helpers/public-api'

export enum BorderRadiusType {
  none = 'none',
  roundedFull = 'roundedFull',
  roundedTop = 'roundedTop',
  roundedBottom = 'roundedBottom',
}

export type CardProps = {
  /**
   * Specifies the content of the card.
   */
  children: ReactNode
  /**
   * Specifies if the card has rounded corners.
   */
  borderRadiusType?: BorderRadiusType
  /**
   * Specifies if the card has a hover effect.
   */
  isInteractive?: boolean
}

export const Card: FC<CardProps> = ({
  children,
  borderRadiusType = BorderRadiusType.roundedFull,
  isInteractive = false,
}) => {
  const cardBaseStyle = ['relative', 'bg-white', 'py-l', 'px-xl']

  const cardInteractiveStyle = [
    'transition-all',
    'duration-300',
    'ease-in-out',
    'outline-slate-200',
    'hover:outline',
    'hover:outline-2',
  ]

  const cardBorderRadiusStyles: Record<BorderRadiusType, string[]> = {
    none: ['rounded-none'],
    roundedFull: ['rounded-box'],
    roundedTop: ['rounded-t-box'],
    roundedBottom: ['rounded-b-box'],
  }

  const classes = [cardBaseStyle, cardBorderRadiusStyles[borderRadiusType]]

  isInteractive && classes.push(cardInteractiveStyle)

  return <div className={mergeClassNames(classes)}>{children}</div>
}
