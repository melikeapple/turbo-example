import EditStudent from "@/modules/students/features/student-edit";
import PageTitle from "@/partials/PageTitle";

export const metadata = {
  title: "Edit Student | Manage Courses",
  description: "Edit Student | Manage Courses",
};

export default function Page() {
  return (
    <>
      <PageTitle title="Edit Student" />
      <EditStudent />
    </>
  );
}
