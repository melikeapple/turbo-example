import { Card } from "ui";
import AppLogo from "@/components/AppLogo";
import Header from "./Header";
import SignInForm from "./Form";
import ResetPassword from "./ResetPassword";

export default function SignIn() {
  return (
    <Card className="max-w-[475px] w-full shadow-lg" rounded="lg">
      <div className="px-3.5 py-6">
        <AppLogo className="mx-auto" />
        <Header />
        <SignInForm />
        <ResetPassword />
      </div>
    </Card>
  );
}
