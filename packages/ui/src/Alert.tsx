"use client";

import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  variant?: "primary" | "danger";
}

export const VARIANT = {
  primary: "",
  danger: "text-pink-medium bg-pink-light",
};

export const DEFAULT_CLASS = "text-sm rounded px-4 py-3 mb-4";
export const DEFAULT_VARIANT = "primary";

export const Alert = forwardRef<HTMLDivElement, Props>(
  ({ children, className, variant = DEFAULT_VARIANT, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge(DEFAULT_CLASS, VARIANT[variant], className)}
      {...props}
    >
      {children}
    </div>
  )
);

Alert.displayName = "Alert";
export default Alert;
