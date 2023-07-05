import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLAttributes<HTMLFormElement> {}

const Form = forwardRef<HTMLFormElement, Props>(
  ({ className, ...props }, ref) => (
    <form ref={ref} className={twMerge(className)} {...props} />
  )
);

Form.displayName = "Form";
export default Form;
