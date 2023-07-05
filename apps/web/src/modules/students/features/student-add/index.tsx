"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { Card } from "ui";
import { addNewStudent } from "../../data-access/service";
import StudentForm from "../../components/StudentForm";

export default function AddNewStudent() {
  const router = useRouter();
  const { mutate, error, isLoading } = useMutation({
    mutationFn: addNewStudent,
    onSuccess: () => {
      enqueueSnackbar("New user has been successfully created.", {
        variant: "success",
      });
      router.push("/students");
    },
  });

  function onSubmit(data) {
    mutate(data);
  }
  function onCancel() {
    router.push("/students");
  }

  return (
    <Card variant="white" rounded="lg" className="p-8 drop-shadow-sm">
      <StudentForm
        isLoading={isLoading}
        error={error}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </Card>
  );
}
