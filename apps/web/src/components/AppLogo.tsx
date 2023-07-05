import React from "react";
import Image from "next/image";

interface Props {
  width?: number;
  height?: number;
  className?: string;
}

export default function AppLogo({
  width = 335,
  height = 40,
  className,
  ...props
}: Props) {
  return (
    <Image
      {...props}
      src="/media/logo_light.svg"
      width={width}
      height={height}
      className={className}
      alt="logo"
    />
  );
}
