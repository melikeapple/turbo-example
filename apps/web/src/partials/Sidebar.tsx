"use client";

import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import AppLogo from "@/components/AppLogo";
import { Button, Typography } from "ui";
import { isActive } from "utils";

const NAVS = [
  {
    id: 1,
    title: "Home",
    to: "/dashboard",
    icon: "home-lg-alt.svg",
    width: 19,
    height: 17,
  },
  {
    id: 2,
    title: "Course",
    to: "/course",
    icon: "bookmark.svg",
    width: 12,
    height: 15,
  },
  {
    id: 3,
    title: "Students",
    to: "/students",
    icon: "graduation-cap.svg",
    width: 20,
    height: 16,
  },
  {
    id: 4,
    title: "Payment",
    to: "/payment",
    icon: "usd-square.svg",
    width: 15,
    height: 17,
  },
  {
    id: 5,
    title: "Report",
    to: "/report",
    icon: "file-chart-line.svg",
    width: 13,
    height: 17,
  },
  {
    id: 6,
    title: "Settings",
    to: "/settings",
    icon: "sliders-v-square.svg",
    width: 15,
    height: 17,
  },
];

export default function Sidebar({ ...props }) {
  return (
    <div
      {...props}
      className="flex flex-col fixed bottom-0 left-0 top-0 h-full w-[var(--app-sidebar-width)] bg-orange-light"
    >
      <Logo />
      <div className="flex flex-col items-center justify-between grow pb-8 pt-5 overflow-y-auto">
        <Profile />
        <Nav />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center justify-center h-[var(--app-header-height)]">
      <AppLogo width={213} height={24} />
    </div>
  );
}

function Profile() {
  return (
    <div className="mb-20 text-center">
      <Image
        src={`/media/avatar.jpg`}
        width={128}
        height={128}
        className="rounded-full mb-4"
        alt=""
      />
      <Typography.Title level={5} className="mb-2.5">
        John Doe
      </Typography.Title>
      <div className="text-sm font-medium text-primary">Admin</div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex flex-col justify-between grow">
      <ul>
        {NAVS.map(({ id, ...nav }) => (
          <NavLink key={id} {...nav} />
        ))}
      </ul>
      <ul>
        <NavLink
          title="Logout"
          to="/logout"
          icon="sign-out-alt.svg"
          width={17}
          height={17}
        />
      </ul>
    </div>
  );
}

function NavLink({ title, to, icon, width, height }) {
  const router = useRouter();
  const pathname = usePathname();
  const active = isActive(pathname, to);
  return (
    <li className="mb-4">
      <Button
        block
        variant="transparent"
        className={twMerge(
          "flex items-center justify-center",
          active && "enabled:bg-primary"
        )}
        onClick={() => router.push(to)}
      >
        {icon && (
          <Image
            src={`/media/icons/${icon}`}
            width={width}
            height={height}
            alt=""
          />
        )}
        <span className="ml-4">{title}</span>
      </Button>
    </li>
  );
}
