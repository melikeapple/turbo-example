import React from "react";
interface Props {
  children: React.ReactNode;
}

export default function ContentWrapper({ children, ...props }: Props) {
  return (
    <div
      {...props}
      className="flex flex-1 flex-col h-full ml-[var(--app-sidebar-width)] mt-[var(--app-header-height)]"
    >
      {children}
    </div>
  );
}
