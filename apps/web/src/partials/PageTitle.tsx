import React from "react";
import { Typography } from "ui";

interface Props {
  title?: React.ReactNode;
  children?: React.ReactNode;
}

export default function PageTitle({ children, title, ...props }: Props) {
  return (
    <div {...props} className="flex items-center justify-between mb-5">
      {title && <Typography.Title level={3}>{title}</Typography.Title>}
      {children && <div>{children}</div>}
    </div>
  );
}
