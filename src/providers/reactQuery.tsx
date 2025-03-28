"use client";

import type { FunctionComponent, ReactNode } from "react";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";

const isPersianText = (text?: string): boolean => {
  if (!text) {
    return false;
  }

  const persianRegex = /^[\u0600-\u06FF\uFB50-\uFDFF\uFE70-\uFEFF\s]+$/;

  return persianRegex.test(text);
};

interface ReactQueryProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: async (e: unknown) => {
        const error = e as AxiosError;

        const errorMessage = (error.response?.data as { message?: string })
          ?.message;

        if (isPersianText(errorMessage)) {
          toast.error(errorMessage);
        } else if (error.status === 401) {
          toast.error("شما دسترسی لازم برای انجام این عملیات را ندارید - 401");
        } else if (error.status === 403) {
          toast.error("شما دسترسی لازم برای انجام این عملیات را ندارید - 403");
        } else if (error.status === 404) {
          toast.error("موردی یافت نشد - 404");
        } else if (Number(error.status) >= 500) {
          toast.error("خطای سرور - 500");
        } else if (Number(error.status) >= 400) {
          toast.error("اطلاعات ارسال شده اشتباه است");
        }
      },
    },
  },
});

const ReactQueryProvider: FunctionComponent<ReactQueryProviderProps> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <div id="react-query" className="z-50">
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
