"use client";

import React from "react";
import {
  HeaderSetting as Header,
  NavbarSetting as Navbar,
} from "@/app/(chat)/chat/setting/_components";

const SettingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full border border-gray-200 px-2.5 py-4 sm:py-12 sm:px-10 overflow-y-auto lg:overflow-hidden">
      <Header />

      <div className="lg:h-full lg:pb-10">
        <section className="mt-4 bg-white rounded flex p-4 h-full">
          <Navbar />

          {children}
        </section>
      </div>
    </section>
  );
};

export default SettingLayout;
