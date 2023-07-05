import React from "react";
import Image from "next/image";

export default function Loader({ ...props }) {
  return (
    <div {...props}>
      <Image
        className="mx-auto"
        src="/media/loader.svg"
        width={50}
        height={50}
        alt=""
      />
    </div>
  );
}
