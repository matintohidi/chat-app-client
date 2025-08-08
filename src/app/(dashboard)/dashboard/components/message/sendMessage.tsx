"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Mic, Paperclip, Send } from "lucide-react";

const VoiceRecorder = dynamic(
  () => import("@/app/(dashboard)/dashboard/components/message/voiceRecorder"),
  {
    ssr: false,
    loading: () => (
      <button
        className="rounded-lg w-10 h-10 flex items-center justify-center animate-pulse disabled:bg-gray-200"
        disabled
      >
        <Mic size={24} color="#383a47" />
      </button>
    ),
  }
);

const SendMessage: React.FC = () => {
  console.log("render");

  return (
    <div className="flex p-6 gap-4 items-center h-36">
      <div className="flex flex-col justify-between h-full">
        <VoiceRecorder />

        <button className="bg-secondary rounded-lg w-10 h-10 flex items-center justify-center transition duration-125 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2 hover:bg-primary/15">
          <Paperclip size={24} color="#615EF0" />
        </button>
      </div>

      <div className="relative w-full h-full">
        <textarea
          className="pl-5 pr-14 py-2.5 outline-0 text-primary-content placeholder:text-sm placeholder-gray-400 border-gray-200 border-2 rounded-xl w-full scroll-smooth resize-none h-full"
          placeholder="Type a message"
        ></textarea>
        <button className="absolute right-4 top-4 bg-secondary rounded-lg w-10 h-10 flex items-center justify-center transition duration-125 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2 hover:bg-primary/15">
          <Send color="#615EF0" size={24} />
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
