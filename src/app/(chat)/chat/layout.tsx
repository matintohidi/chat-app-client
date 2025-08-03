"use client";

import { Navbar } from "@/app/(chat)/chat/components";
import React from "react";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex h-screen overflow-hidden">
      <Navbar />
      {children}
    </section>
  );
};

export default ChatLayout;
