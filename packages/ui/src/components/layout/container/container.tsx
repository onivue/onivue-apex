import clsx from "clsx";
import { FunctionComponent, HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLElement>;

export const Container: FunctionComponent<ContainerProps> = (props) => {
  const { className, ...rest } = props;
  return <div className={clsx("mx-auto max-w-7xl px-4", className)} {...rest} />;
};
