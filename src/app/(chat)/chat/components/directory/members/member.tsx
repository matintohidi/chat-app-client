import React from "react";
import Image from "next/image";

const Member: React.FC = () => {
  return (
    <button className="flex gap-4 p-3">
      <Image
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        alt="profile"
        className="w-14 h-14 rounded-lg object-cover"
        width={56}
        height={56}
      />

      <div className="text-start">
        <h1 className="capitalize text-sm font-medium">florencio dorrance</h1>
        <h2 className="capitalize text-gray-400 text-xs">
          market development nanager
        </h2>
      </div>
    </button>
  );
};

export default Member;
