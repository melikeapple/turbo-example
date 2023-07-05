"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";

export default function Logout() {
  const { push } = useRouter();

  useEffect(() => {
    push("/auth/signin");
  }, [push]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Loader />
      <div>Logging out</div>
    </div>
  );
}
