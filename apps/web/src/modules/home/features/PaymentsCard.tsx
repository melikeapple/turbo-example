import Image from "next/image";
import { Card } from "ui";
import CardContent from "./CardContent";

export default function PaymentsCard() {
  return (
    <Card variant="warning" rounded="md" className="shadow-md">
      <CardContent
        image={
          <Image
            src="/media/icons/usd-square-35x40.svg"
            width={35}
            height={40}
            alt=""
          />
        }
        title="Payments"
        text="556,000₺"
      />
    </Card>
  );
}
