import React from "react";
import Image from "next/image";

const MessageCards: React.FC = () => {
  return (
    <>
      <div className="px-3 py-1.5 absolute bg-white z-30 rounded-[4.5px] w-40 h-17 top-[55%] left-0 select-none shadow xl:w-[274px] xl:h-[106px] xl:px-[13px] xl:py-[14px] xl:rounded-xl">
        <div className="flex gap-3">
          <Image
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt="Profile message card"
            width={22}
            height={22}
            className="w-[22px] h-[22px] rounded-full xl:h-[50px] xl:w-[50px]"
          />

          <div className="flex flex-col gap-1">
            <h2 className="font-inter font-extrabold text-[8px] text-primaryText xl:text-xs">
              Eli json
            </h2>

            <p className="font-inter  text-[8px] text-left text-primaryText xl:text-xs">
              I commented on Figma, I want to add some fancy icons. Do you have
              any icon set?
            </p>
          </div>
        </div>
      </div>

      <div className="px-3 py-1.5 absolute bg-white z-30 rounded w-32 h-13 bottom-4 right-8 select-none shadow xl:w-[264px] xl:h-[86px] xl:px-[13px] xl:py-[14px] xl:rounded-xl">
        <div className="flex gap-3">
          <Image
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile message card"
            width={16}
            height={16}
            className="w-4 h-4 rounded-full xl:h-[50px] xl:w-[50px]"
          />

          <div className="flex flex-col gap-1">
            <h2 className="font-inter font-extrabold text-[5.3px] text-primaryText xl:text-xs">
              Eli json
            </h2>

            <p className="font-inter  text-[5.3px] text-left text-primaryText xl:text-xs">
              One of the best chatting app I have ever used.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageCards;
