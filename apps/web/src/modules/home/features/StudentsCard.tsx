import Image from "next/image";
import { Card } from "ui";
import CardContent from "./CardContent";

export default function StudentsCard() {
  return (
    <Card variant="info" rounded="md" className="shadow-md">
      <CardContent
        image={
          <Image
            src="/media/icons/graduation-cap_48x38.svg"
            width={48}
            height={38}
            alt=""
          />
        }
        title="Students"
        text="243"
      />
    </Card>
  );
}
