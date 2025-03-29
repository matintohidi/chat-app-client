import React from "react";
import { Navbar } from "./_components";

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex h-screen overflow-hidden">
      <Navbar />
      {children}
    </section>
  );
};

export default ChatLayout;
