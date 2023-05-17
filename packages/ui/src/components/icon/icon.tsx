import type { MouseEventHandler } from "react";
import {
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
  HiOutlineInformationCircle,
  HiOutlineX,
  HiOutlineXCircle,
} from "react-icons/hi";

export interface IIconProps {
  variant: keyof typeof iconMapping;
  color?: keyof typeof iconColors;
  className?: string;
  onClick?: MouseEventHandler;
  "data-cy"?: string;
}

const iconMapping = {
  info: HiOutlineInformationCircle,
  checkCircle: HiOutlineCheckCircle,
  exclamationCircle: HiOutlineExclamationCircle,
  xCircle: HiOutlineXCircle,
  x: HiOutlineX,
} satisfies Record<string, unknown>;

const iconColors = {
  default: "",
  info: "text-blue-500",
  success: "text-green-500",
  warning: "text-yellow-500",
  error: "text-red-500",
} satisfies Record<string, string>;

export const Icon: React.FC<IIconProps> = ({
  variant,
  color = "default",
  className = "",
  onClick,
  "data-cy": dataCy = "icon",
}) => {
  const IconComponent = iconMapping[variant];

  return (
    <IconComponent
      className={className || `h-6 w-6 ${iconColors[color]}`}
      onClick={onClick}
      data-cy={dataCy}
    />
  );
};
