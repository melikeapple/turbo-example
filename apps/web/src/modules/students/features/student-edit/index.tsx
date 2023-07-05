"use client";

import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { Card } from "ui";
import { getStudent, updateStudent } from "../../data-access/service";
import StudentForm from "../../components/StudentForm";
import ContentLoader from "@/components/ContentLoader";

export default function EditStudent() {
  const { push } = useRouter();
  const { slug } = useParams();
  const getStudentQuery = useQuery({
    queryKey: ["getStudent", slug],
    queryFn: () => getStudent(slug),
  });
  const updateStudentMutation = useMutation({
    mutationFn: updateStudent,
    onSuccess: () => {
      enqueueSnackbar("User has been successfully updated.", {
        variant: "success",
      });
      push("/students");
    },
  });

  function onSubmit(payload) {
    updateStudentMutation.mutate({ id: slug, body: payload });
  }
  function onCancel() {
    push("/students");
  }

  return (
    <Card variant="white" rounded="lg" className="p-8 drop-shadow-sm">
      <ContentLoader
        isLoading={getStudentQuery.isLoading}
        error={getStudentQuery.error}
      >
        <StudentForm
          defaultValues={{
            firstName: getStudentQuery.data?.firstName,
            lastName: getStudentQuery.data?.lastName,
            email: getStudentQuery.data?.email,
            phone: getStudentQuery.data?.phone,
            domain: getStudentQuery.data?.domain,
            company: { name: getStudentQuery.data?.company.name },
          }}
          isLoading={updateStudentMutation.isLoading}
          error={updateStudentMutation.error}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
      </ContentLoader>
    </Card>
  );
}
