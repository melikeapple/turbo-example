import Image from "next/image";
import { Card } from "ui";
import CardContent from "./CardContent";

export default function CourseCard() {
  return (
    <Card variant="danger" rounded="md" className="shadow-md">
      <CardContent
        image={
          <Image
            src="/media/icons/bookmark-28x35.svg"
            width={28}
            height={35}
            alt=""
          />
        }
        title="Course"
        text="13"
      />
    </Card>
  );
}
