import Image from "next/image";
import { Card } from "ui";
import CardContent from "./CardContent";

export default function UsersCard() {
  return (
    <Card variant="primary" rounded="md" className="shadow-md">
      <CardContent
        image={
          <Image
            src="/media/icons/user-34x34.svg"
            width={34}
            height={34}
            alt=""
          />
        }
        title="Users"
        text="3"
      />
    </Card>
  );
}
