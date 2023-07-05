import CourseCard from "@/modules/home/features/CourseCard";
import PaymentsCard from "@/modules/home/features/PaymentsCard";
import StudentsCard from "@/modules/home/features/StudentsCard";
import UsersCard from "@/modules/home/features/UsersCard";

export const metadata = {
  title: "Home | Manage Courses",
  description: "Home | Manage Courses",
};

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-8">
      <StudentsCard />
      <CourseCard />
      <PaymentsCard />
      <UsersCard />
    </div>
  );
}
