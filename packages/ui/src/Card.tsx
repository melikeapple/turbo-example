"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "white" | "primary" | "info" | "danger" | "warning";
  rounded?: "sm" | "md" | "lg";
}

export const VARIANT = {
  white: "bg-white",
  primary: "bg-gradient-to-r from-primary to-orange-medium",
  info: "bg-blue-light",
  danger: "bg-pink-light",
  warning: "bg-yellow-light",
};

export const ROUNDED = {
  sm: "rounded",
  md: "rounded-lg",
  lg: "rounded-2xl",
};

export const DEFAULT_CLASS = "p-3";
export const DEFAULT_VARIANT = "white";
export const DEFAULT_ROUNDED = "sm";

export default function Card({
  children,
  className,
  variant = DEFAULT_VARIANT,
  rounded = DEFAULT_ROUNDED,
  ...props
}: Props) {
  return (
    <div
      className={twMerge(
        DEFAULT_CLASS,
        VARIANT[variant],
        ROUNDED[rounded],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
