import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  variant?: "primary";
  size?: "md";
  isInvalid?: any;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

export const VARIANT = {
  primary: "border-neutral-200 focus:border-neutral-200",
};

export const SIZE = {
  md: "text-xs rounded py-3 px-4 leading-normal",
};

export const DEFAULT_CLASS = "border outline-0";
export const INVALID_CLASS = "border-red-500";
export const DEFAULT_SIZE = "md";
export const DEFAULT_VARIANT = "primary";

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      size = DEFAULT_SIZE,
      variant = DEFAULT_VARIANT,
      isInvalid,
      ...props
    },
    ref
  ) => (
    <input
      ref={ref}
      autoComplete="off"
      className={twMerge(
        DEFAULT_CLASS,
        SIZE[size],
        className,
        isInvalid ? INVALID_CLASS : VARIANT[variant]
      )}
      {...props}
    />
  )
);

Input.displayName = "FormInput";
export default Input;
