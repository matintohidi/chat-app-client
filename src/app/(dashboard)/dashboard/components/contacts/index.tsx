import React from "react";
import Contact from "./contact";
import { ChevronDown, Plus } from "lucide-react";

const Contacts: React.FC = () => {
  return (
    <section
      className={`w-full lg:border-r lg:border-gray-300 lg:flex flex-col items-center lg:w-1/4`}
    >
      <div className="flex justify-between items-center border-b border-gray-300 p-5 xl:p-6 w-full">
        <div className="flex items-center gap-3">
          <h2 className="text-lg md:text-xl select-none font-semibold text-primaryText">
            Messages
          </h2>
          <ChevronDown size="18" color="#383a47" />
          <span className="text-xs px-2 py-0.5 bg-gray-200 rounded-3xl select-none">
            13
          </span>
        </div>

        <button className="w-7 h-7 xl:w-8 xl:h-8 bg-primary rounded-full flex items-center justify-center">
          <Plus color="#fff" size="30" />
        </button>
      </div>

      <div className="w-full h-screen flex flex-col">
        <div className="px-6 mt-4">
          <input
            className="w-full py-2.5 md:py-3.5 px-5 outline-primary rounded-xl bg-[#F3F3F3] text-sm"
            placeholder="Search Messages"
          />
        </div>

        <div className="px-2 sm:px-4 my-4 h-screen overflow-y-auto contactsScroll scroll-smooth">
          <div className="flex flex-col gap-y-2 items-start h-screen">
            <Contact />

            <Contact />

            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
