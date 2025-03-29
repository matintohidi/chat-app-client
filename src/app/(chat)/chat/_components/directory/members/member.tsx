import React from "react";
import Image from "next/image";

const Member: React.FC = () => {
  return (
    <button className="flex gap-4 p-3">
      <Image
        src="/images/Frame 10.png"
        alt="profile"
        className="w-14 h-14 rounded-xl object-cover"
        width={56}
        height={56}
      />

      <div className="text-start">
        <h1 className="capitalize text-sm">florencio dorrance</h1>
        <h2 className="capitalize text-gray-400 text-xs">
          market development nanager
        </h2>
      </div>
    </button>
  );
};

export default Member;
