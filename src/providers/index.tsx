import QueryProvider from "@/providers/react-query-provider";
import StoreProvider from "@/providers/storeProvider";

type Props = {
  children: React.ReactNode;
};

const Providers = async (props: Props) => {
  const { children } = props;

  return (
    <>
      <QueryProvider>
        <StoreProvider>{children}</StoreProvider>
      </QueryProvider>
    </>
  );
};

export default Providers;
