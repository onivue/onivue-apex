import clsx from "clsx";
import { forwardRef, type MouseEventHandler, type ReactNode } from "react";
import { ImSpinner2 } from "react-icons/im";

export interface IButtonProps {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary";
  title?: string;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: JSX.IntrinsicElements["button"]["type"];
  children?: ReactNode;
  onClick?: MouseEventHandler;
}

export const Button = forwardRef(
  (
    {
      size = "md",
      variant = "primary",
      loading = false,
      disabled = false,
      title,
      className,
      type,
      children,
      onClick,
    }: IButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!loading && !disabled) onClick?.(event);
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={handleClick}
        title={title}
        className={clsx(
          "btn gap-2 normal-case",
          [
            size === "xs" && "btn-xs px-3",
            size === "sm" && "btn-sm px-4",
            size === "md" && "px-6",
            size === "lg" && "btn-lg px-6",
          ],
          //#region  //*=========== Variants ===========
          [
            variant === "primary" && ["btn-primary"],
            variant === "secondary" && ["btn-secondary"],
            variant === "tertiary" && ["btn-ghost"],
          ],
          //#endregion  //*======== Variants ===========
          loading && "relative px-8 text-transparent transition-none disabled:cursor-wait",
          className
        )}
      >
        {loading ? (
          <>
            <ImSpinner2 className="animate-spin" />
          </>
        ) : (
          <>{children}</>
        )}
      </button>
    );
  }
);

if (process.env["NODE_ENV"] !== "production") {
  Button.displayName = "Button";
}
