"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Button } from "ui";

const schema = yup
  .object({
    email: yup.string().email().required("This field is required"),
    password: yup.string().required("This field is required"),
  })
  .required();

export default function SignInForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "admin@example.com",
      password: "123456",
    },
  });

  function onSubmit(data) {
    console.log("form data:", data);
    router.push("/dashboard");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group isInvalid={errors.email?.message}>
        <Form.Label>Email</Form.Label>
        <Form.Input
          className="w-full"
          placeholder="Enter your email"
          isInvalid={errors.email?.message}
          {...register("email")}
        />
      </Form.Group>
      <Form.Group isInvalid={errors.password?.message}>
        <Form.Label>Password</Form.Label>
        <Form.Input
          className="w-full"
          placeholder="Enter your password"
          type="password"
          isInvalid={errors.password?.message}
          {...register("password")}
        />
      </Form.Group>
      <Button type="submit" block>
        SIGN IN
      </Button>
    </Form>
  );
}
