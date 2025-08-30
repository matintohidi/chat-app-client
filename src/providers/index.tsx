"use client";

import { Notifications } from "@/app/_components/notification/notifications";
import AuthProvider from "@/providers/auth-provider";
import QueryProvider from "@/providers/react-query-provider";
import StoreProvider from "@/providers/storeProvider";
import { CookiesProvider } from "react-cookie";

type Props = {
  children: React.ReactNode;
};

const Providers = (props: Props) => {
  const { children } = props;

  return (
    <AuthProvider>
      <QueryProvider>
        <CookiesProvider>
          <StoreProvider>
            <Notifications />
            {children}
          </StoreProvider>
        </CookiesProvider>
      </QueryProvider>
    </AuthProvider>
  );
};

export default Providers;
