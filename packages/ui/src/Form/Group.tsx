import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  isInvalid?: any;
}

export const DEFAULT_CLASS = "mb-5 input:border-";

const Group = forwardRef<HTMLDivElement, Props>(
  ({ children, className, isInvalid, ...props }, ref) => (
    <div ref={ref} className={twMerge(DEFAULT_CLASS, className)} {...props}>
      {children}
      {isInvalid && (
        <div className="text-xs text-red-500 pt-px block">{isInvalid}</div>
      )}
    </div>
  )
);

Group.displayName = "FromGroup";
export default Group;
