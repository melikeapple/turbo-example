"use client";

import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {}

export const DEFAULT_CLASS = "text-sm";

const Text = forwardRef<HTMLParagraphElement, Props>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={twMerge(DEFAULT_CLASS, className)} {...props} />
  )
);

Text.displayName = "Typography.Text";
export default Text;
