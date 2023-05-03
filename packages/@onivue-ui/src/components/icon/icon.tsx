import { MouseEventHandler } from 'react'
import {
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
  HiOutlineInformationCircle,
  HiOutlineX,
  HiOutlineXCircle,
} from 'react-icons/hi'

export type IIconProps = {
  variant: keyof typeof iconMapping
  color?: keyof typeof iconColors
  className?: string
  onClick?: MouseEventHandler
}

const iconMapping = {
  info: HiOutlineInformationCircle,
  success: HiOutlineCheckCircle,
  warning: HiOutlineExclamationCircle,
  xCircle: HiOutlineXCircle,
  x: HiOutlineX,
} satisfies Record<string, unknown>

const iconColors = {
  default: '',
  info: 'text-blue-500',
  success: 'text-green-500',
  warning: 'text-yellow-500',
  danger: 'text-red-500',
} satisfies Record<string, string>

export const Icon: React.FC<IIconProps> = ({
  variant,
  color = 'default',
  className,
  onClick,
}) => {
  const Comp = iconMapping[variant]

  return (
    <Comp
      className={className || `h-6 w-6 ${iconColors[color]}`}
      onClick={onClick}
    />
  )
}
