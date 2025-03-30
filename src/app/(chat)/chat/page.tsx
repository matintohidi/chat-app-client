"use client";

import React from "react";
import { Contacts, Directory, Chat } from "./_components";

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
