import { notFound } from "next/navigation";

export const metadata = {
  title: "Not Found | Manage Courses",
  description: "Not Found | Manage Courses",
};

const NotFoundCatchAll = () => notFound();

export default NotFoundCatchAll;
