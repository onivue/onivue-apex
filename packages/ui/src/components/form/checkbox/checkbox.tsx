"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import clsx from "clsx";
import * as React from "react";
import { FiCheck } from "react-icons/fi";

export interface ICheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, "asChild"> {
  label?: string;
}
const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, ICheckboxProps>(
  ({ className, id, label, ...props }, ref) => (
    <div className="flex items-center space-x-2">
      <CheckboxPrimitive.Root
        ref={ref}
        className={clsx(
          "border-primary data-[state=checked]:bg-primary ring-offset-red-400 focus-visible:ring-green-400 data-[state=checked]:text-white",
          "peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        id={id}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={clsx("flex items-center justify-center text-current")}
        >
          <FiCheck className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  )
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
