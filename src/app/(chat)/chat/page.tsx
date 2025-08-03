"use client";

import { Chat, Contacts, Directory } from "@/app/(chat)/chat/components";
import React from "react";

const ChatPage: React.FC = () => {
  return (
    <>
      <Contacts />
      <Chat />
      <Directory />
    </>
  );
};

export default ChatPage;
