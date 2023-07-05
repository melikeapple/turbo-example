import React from "react";
interface Props {
  children: React.ReactNode;
}

export default function Content({ children, ...props }: Props) {
  return (
    <div {...props} className="p-8 bg-gray-light h-full w-full overflow-y-auto">
      {children}
    </div>
  );
}
