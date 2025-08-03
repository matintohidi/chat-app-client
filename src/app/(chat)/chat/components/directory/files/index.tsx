import File from "@/app/(chat)/chat/components/directory/files/file";
import React from "react";

const Files: React.FC = () => {
  return (
    <div className="py-[26px] px-4">
      <div className="flex gap-x-2 items-center">
        <h2 className="text-sm font-medium">Files</h2>
        <span className="flex items-center justify-center bg-gray-200 text-xs rounded-full px-2 py-0.5">
          125
        </span>
      </div>

      <div className="flex flex-col gap-y-2 mt-2">
        <File />
        <File />
        <File />
        <File />
      </div>
    </div>
  );
};

export default Files;
