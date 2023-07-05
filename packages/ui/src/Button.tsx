"use client";

import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends React.HTMLAttributes<HTMLButtonElement | HTMLLinkElement> {
  variant?: "primary" | "transparent" | "light" | "link";
  size?: "md";
  block?: boolean;
  disabled?: boolean;
  icon?: boolean;
  href?: string;
  type?: string;
  as?: React.ElementType;
}

export const VARIANT = {
  primary:
    "enabled:bg-primary enabled:border-primary enabled:text-white disabled:opacity-75 active:opacity-75 border",
  light:
    "enabled:bg-white enabled:border-gray-medium disabled:opacity-75 active:opacity-75 border",
  transparent:
    "enabled:bg-transparent enabled:border-transparent enabled:text-black enabled:hover:bg-primary disabled:opacity-75 enabled:active:opacity-75 border-none",
  link: "enabled:bg-transparent enabled:hover:border-primary enabled:border-transparent enabled:text-black disabled:opacity-75 enabled:active:opacity-75 border",
};

export const SIZE = {
  md: "text-sm rounded font-medium px-4 py-2.5 leading-normal",
};

export const DEFAULT_CLASS = "";
export const DEFAULT_VARIANT = "primary";
export const DEFAULT_SIZE = "md";

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      as: Component = "button",
      children,
      variant = DEFAULT_VARIANT,
      size = DEFAULT_SIZE,
      icon = false,
      block = false,
      disabled = false,
      href,
      type,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        href={href}
        type={type}
        disabled={disabled}
        className={twMerge(
          DEFAULT_CLASS,
          VARIANT[variant],
          SIZE[size],
          block && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";
export default Button;
