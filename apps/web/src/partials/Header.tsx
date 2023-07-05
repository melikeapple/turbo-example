import React from "react";
import Image from "next/image";

export default function Header({ ...props }) {
  return (
    <div
      {...props}
      className="fixed right-0 top-0 flex items-stretch h-[var(--app-header-height)] left-[var(--app-sidebar-width)] bg-white shadow"
    >
      <div className="flex justify-between items-center grow px-8">
        <div className="">
          <Image
            src="/media/icons/caret-circle-down.svg"
            width={18}
            height={18}
            alt=""
          />
        </div>
        <div className="">
          <Image src="/media/icons/bell.svg" width={17} height={20} alt="" />
        </div>
      </div>
    </div>
  );
}
