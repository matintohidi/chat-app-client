"use client";

import type { FunctionComponent } from "react";

import dynamic from "next/dynamic";

// import { Toaster } from 'react-hot-toast'

const ToastContainer = dynamic(
  () => import("react-toastify").then((mod) => mod.ToastContainer),
  { ssr: false } // Ensure it's only rendered on the client
);

interface ToasterProviderProps {}

const ToasterProvider: FunctionComponent<ToasterProviderProps> = ({}) => {
  return (
    <>
      <ToastContainer position="top-right" />
    </>
  );
};

export default ToasterProvider;
