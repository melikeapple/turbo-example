import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLLabelElement> {
  size?: "md";
  block?: boolean;
  required?: boolean;
}

export const SIZE = {
  md: "text-sm",
};

export const DEFAULT_CLASS = "block mb-2.5 font-medium text-gray-dark";
export const DEFAULT_SIZE = "md";

const Label = forwardRef<HTMLLabelElement, Props>(
  (
    {
      children,
      className,
      size = DEFAULT_SIZE,
      block = true,
      required,
      ...props
    },
    ref
  ) => (
    <label
      ref={ref}
      className={twMerge(
        DEFAULT_CLASS,
        className,
        block && "w-full",
        SIZE[size]
      )}
      {...props}
    >
      {required && (
        <span className="text-sm text-dust-red-5 mr-1 leading-5.5">*</span>
      )}
      {children}
    </label>
  )
);

Label.displayName = "FormLabel";
export default Label;
