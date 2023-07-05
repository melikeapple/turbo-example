import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children, ...props }: Props) {
  return (
    <div {...props} className="flex flex-1 flex-col w-full h-full">
      {children}
    </div>
  );
}
