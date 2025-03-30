import React from "react";
import Mockup from "./mockup";
import Image from "next/image";

const Index: React.FC = () => {
  return (
    <section className="flex flex-col py-10 px-4 bg-[#F8F8FA] sm:px-14 md:px-32 lg:px-[6.5rem] 2xl:px-[9.5rem] xl:flex-row lg:py-28 lg:justify-between">
      <div className="relative">
        <Mockup />

        {/*3 circle image*/}
        <Image
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="w-11 h-11 rounded-full ring-2 ring-offset-2 ring-primary absolute left-0 top-1/3 z-10 lg:w-[60px] lg:h-[60px] xl:-left-10"
          width={44}
          height={44}
          alt=""
        />
        <Image
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="w-11 h-11 rounded-full ring-2 ring-offset-2 ring-primary absolute -bottom-6 left-1/4 z-10 lg:w-[60px] lg:h-[60px] xl:-bottom-8"
          width={44}
          height={44}
          alt=""
        />
        <Image
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          className="w-11 h-11 rounded-full ring-2 ring-offset-2 ring-primary absolute right-0 bottom-1/4 z-10 lg:w-[60px] lg:h-[60px] xl:-right-10"
          width={44}
          height={44}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-4 mt-16 z-10 xl:w-[500px] xl:mt-0 xl:justify-center">
        <h1 className="font-poppins font-bold text-primaryText text-[26px] lg:text-5xl">
          Get direct message from your friends
        </h1>

        <p className="font-inter  text-primaryText text-xs lg:text-base">
          Great software that allows you to chat from any place at any time
          without any interruption.
        </p>

        <div className="flex gap-x-5">
          <div className="flex items-center gap-x-2">
            <span className="font-inter font-extrabold text-[32px] text-primaryText">
              4.3K+
            </span>

            <h2 className="flex flex-col font-inter  text-primaryText text-sm">
              <span>Registered</span>
              <span>user</span>
            </h2>
          </div>

          <div className="flex items-center gap-x-2">
            <span className="font-inter font-extrabold text-[32px] text-primaryText">
              7M+
            </span>

            <h2 className="flex flex-col font-inter  text-primaryText text-sm">
              <span>Chats in</span>
              <span>last 2023</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
