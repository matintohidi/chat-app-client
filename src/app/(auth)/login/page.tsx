import type { FunctionComponent } from "react";

import LoginView from "@/views/(auth)/login";

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  return (
    <>
      <LoginView />
    </>
  );
};

export default LoginPage;
