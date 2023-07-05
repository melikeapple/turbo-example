import AddNewStudent from "@/modules/students/features/student-add";
import PageTitle from "@/partials/PageTitle";

export const metadata = {
  title: "Add New Student | Manage Courses",
  description: "Add New Student | Manage Courses",
};

export default function Page() {
  return (
    <>
      <PageTitle title="Add New Student" />
      <AddNewStudent />
    </>
  );
}
