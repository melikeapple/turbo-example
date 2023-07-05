"use client";

import { SnackbarProvider as NotistackProvider } from "notistack";

export default function SnackbarProvider() {
  return (
    <NotistackProvider
      maxSnack={3}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={3000}
    />
  );
}
