import type { FunctionComponent } from "react";

import LoginView from "@/app/(auth)/login/_components";

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  return (
    <>
      <LoginView />
    </>
  );
};

export default LoginPage;
