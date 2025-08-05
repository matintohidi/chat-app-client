"use client";

import React from "react";
import { Navbar } from "@/app/(chat)/chat/components";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default LandingLayout;
