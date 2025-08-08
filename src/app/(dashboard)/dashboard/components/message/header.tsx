import React from "react";
import Image from "next/image";
import { ChevronLeft, Phone } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between px-3 sm:px-6 py-4 border-b border-gray-300">
      <div className="flex gap-2 items-center">
        <ChevronLeft className="text-gray-400 hover:text-gray-800 transition lg:hidden" />

        <div className="flex gap-2 sm:gap-4">
          <Image
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="profile"
            className="w-12 h-12 rounded-lg object-cover"
            width={48}
            height={48}
          />

          <div className="flex flex-col justify-between">
            <h1 className="text-md lg:text-xl capitalize font-semibold text-primary-content">
              lavern laboy
            </h1>

            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full"> </span>
              <span className="text-xs text-gray-500">Online</span>
            </div>
          </div>
        </div>
      </div>

      <button className="flex gap-2 justify-center items-center rounded-lg bg-secondary px-3 py-1.5 lg:px-4 lg:py-2.5">
        <Phone color="#615ef0" size={24} />

        <span className="text-primary">Call</span>
      </button>
    </header>
  );
};

export default Header;
