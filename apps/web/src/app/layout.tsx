import { Montserrat } from "next/font/google";
import Providers from "@/utils/provider";
import SnackbarProvider from "@/utils/SnackbarProvider";
import "../global.css";

export const metadata = {
  title: "Manage Courses | Manage Courses",
  description: "Manage Courses | Manage Courses",
};

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SnackbarProvider />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
