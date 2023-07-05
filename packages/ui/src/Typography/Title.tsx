"use client";

import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const LEVEL_LIST = [1, 2, 3, 4, 5] as const;

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  level: (typeof LEVEL_LIST)[number];
}

export const LEVELS = {
  1: "text-[38px] font-medium leading-[46px]",
  2: "text-3xl font-medium leading-10",
  3: "text-2xl font-medium leading-8",
  4: "text-xl font-medium leading-7",
  5: "text-base font-medium leading-6",
};

const Title = forwardRef<HTMLHeadingElement, Props>(
  ({ level = LEVEL_LIST[0], children, className, ...props }, ref) => {
    let Component: keyof JSX.IntrinsicElements = "h1";

    if (LEVEL_LIST.includes(level)) {
      Component = `h${level}`;
    } else {
      Component = "h1";
    }

    return (
      <Component
        ref={ref}
        className={twMerge(className, LEVELS[level])}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Title.displayName = "Typography.Title";
export default Title;
