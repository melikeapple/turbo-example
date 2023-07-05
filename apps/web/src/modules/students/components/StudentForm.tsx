"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Button } from "ui";
import ErrorBoundary from "@/components/ErrorBoundry";
import { REGEX_URL, REGEX_PHONE } from "utils";
import { Student } from "../models/StudentModel";

interface Props {
  defaultValues?: Omit<Student, "id" | "image">;
  isLoading?: boolean;
  onSubmit: (data) => void;
  onCancel: () => void;
  error: unknown;
}

const schema = yup.object({
  firstName: yup.string().required("This field is required"),
  lastName: yup.string().required("This field is required"),
  email: yup.string().email().required("This field is required"),
  phone: yup
    .string()
    .matches(REGEX_PHONE, "Must be a valid phone")
    .required("This field is required"),
  domain: yup
    .string()
    .matches(REGEX_URL, "Must be a valid URL")
    .required("This field is required"),
  company: yup.object({
    name: yup.string().required("This field is required"),
  }),
});

export default function StudentForm({
  defaultValues,
  onSubmit,
  onCancel,
  error,
  isLoading,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  return (
    <>
      <ErrorBoundary error={error} />
      <div className="grid lg:grid-cols-2 xl:grid-cols-3">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group isInvalid={errors.firstName?.message}>
            <Form.Label>First Name</Form.Label>
            <Form.Input
              {...register("firstName")}
              placeholder="Enter your first name"
              className="w-full"
              isInvalid={errors.firstName?.message}
            />
          </Form.Group>
          <Form.Group isInvalid={errors.lastName?.message}>
            <Form.Label>Last Name</Form.Label>
            <Form.Input
              {...register("lastName")}
              placeholder="Enter your last name"
              className="w-full"
              isInvalid={errors.lastName?.message}
            />
          </Form.Group>
          <Form.Group isInvalid={errors.email?.message}>
            <Form.Label>Email</Form.Label>
            <Form.Input
              {...register("email")}
              placeholder="Enter your email"
              className="w-full"
              isInvalid={errors.email?.message}
            />
          </Form.Group>
          <Form.Group isInvalid={errors.phone?.message}>
            <Form.Label>Phone</Form.Label>
            <Form.Input
              {...register("phone")}
              placeholder="Enter your phone"
              className="w-full"
              isInvalid={errors.phone?.message}
            />
          </Form.Group>
          <Form.Group isInvalid={errors.domain?.message}>
            <Form.Label>Website</Form.Label>
            <Form.Input
              {...register("domain")}
              placeholder="Enter your website"
              className="w-full"
              isInvalid={errors.domain?.message}
            />
          </Form.Group>
          <Form.Group isInvalid={errors.company?.name?.message}>
            <Form.Label>Company Name</Form.Label>
            <Form.Input
              {...register("company.name")}
              placeholder="Enter your company name"
              className="w-full"
              isInvalid={errors.company?.name?.message}
            />
          </Form.Group>
          <Button disabled={isLoading} type="submit">
            SAVE
          </Button>
          <Button
            type="button"
            disabled={isLoading}
            variant="light"
            className="ml-2"
            onClick={onCancel}
          >
            CANCEL
          </Button>
        </Form>
      </div>
    </>
  );
}
