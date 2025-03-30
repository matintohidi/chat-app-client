import React from "react";
import { Paperclip, Send2 } from "iconsax-react";

const SendMessage: React.FC = () => {
  return (
    <div className="flex p-6 gap-6">
      <button>
        <Paperclip size={24} color="#000000" />
      </button>

      <div className="relative w-full">
        <textarea
          className="pl-5 pr-14 py-2.5 outline-0 text-gray-700 placeholder:text-sm placeholder-gray-400 border-2 rounded-xl w-full scroll-smooth resize-none"
          placeholder="Type a message"
        ></textarea>
        <button className="absolute right-5 top-3">
          <Send2 variant="Bold" color="#615EF0" size={24} />
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
