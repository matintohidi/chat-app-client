import { ChildrenType } from "@/@core/type";
import ReactQueryProvider from "@/providers/reactQuery";
import StoreProvider from "@/providers/storeProvider";
import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";

type Props = ChildrenType;

const Providers = async (props: Props) => {
  const { children } = props;

  const reqHeaders = await headers();
  const userAgent = reqHeaders.get("user-agent") || undefined;
  const deviceType = UAParser(userAgent).device.type || "desktop";

  return (
    <>
      <ReactQueryProvider>
        <StoreProvider>{children}</StoreProvider>
      </ReactQueryProvider>
    </>
  );
};

export default Providers;
