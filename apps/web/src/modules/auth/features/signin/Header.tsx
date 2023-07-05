import { Typography } from "ui";

export default function Header() {
  return (
    <div className="text-center my-10">
      <Typography.Title level={4}>SIGN IN</Typography.Title>
      <Typography.Text className="text-gray-dark">
        Enter your credentials to access your account
      </Typography.Text>
    </div>
  );
}
