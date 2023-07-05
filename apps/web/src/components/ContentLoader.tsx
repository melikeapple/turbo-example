"use client";

import { Alert } from "ui";
import Loader from "./Loader";

interface Props {
  children: React.ReactNode;
  isLoading?: boolean;
  error?: unknown;
}

export default function ContentLoader({ children, isLoading, error }: Props) {
  if (isLoading) return <Loader />;
  if (error instanceof Error)
    return <Alert variant="danger">{error.message}</Alert>;
  return <>{children}</>;
}
