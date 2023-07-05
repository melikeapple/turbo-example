import React from "react";
import { Button, Form, Typography } from "ui";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function TableHeader({ value, onChange, onClick }: Props) {
  return (
    <div className="flex items-center justify-between grow border-b pb-3">
      <Typography.Title level={3} className="font-bold">
        Student List
      </Typography.Title>
      <div>
        <Form.DebouncedInput
          value={value}
          onChange={onChange}
          placeholder="Search..."
        />
        <Button className="ml-6" onClick={onClick}>
          ADD NEW STUDENT
        </Button>
      </div>
    </div>
  );
}
