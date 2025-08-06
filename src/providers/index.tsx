"use client";

import QueryProvider from "@/providers/react-query-provider";
import StoreProvider from "@/providers/storeProvider";
import { CookiesProvider } from "react-cookie";

type Props = {
  children: React.ReactNode;
};

const Providers = (props: Props) => {
  const { children } = props;

  return (
    <>
      <QueryProvider>
        <CookiesProvider>
          <StoreProvider>{children}</StoreProvider>
        </CookiesProvider>
      </QueryProvider>
    </>
  );
};

export default Providers;
