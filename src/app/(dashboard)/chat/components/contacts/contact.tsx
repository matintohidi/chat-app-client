import React from "react";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <div className="flex p-3 gap-4 w-full cursor-pointer shadow-sm rounded-lg">
      <Image
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="profile"
        className="w-12 h-12 rounded-lg object-cover"
        width={48}
        height={48}
      />

      <div className="flex justify-between w-full gap-5">
        <div>
          <h1 className="text-sm capitalize font-medium">lavern laboy</h1>
          <p className="text-xs text-gray-400 line-clamp-1">
            Haha oh man Haha oh man Haha oh man Haha oh man Haha oh man
          </p>
        </div>

        <span className="text-gray-400 text-sm font-light">12m</span>
      </div>
    </div>
  );
};

export default Contact;
