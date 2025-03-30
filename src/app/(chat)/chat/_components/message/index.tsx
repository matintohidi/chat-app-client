import React from "react";
import Header from "./header";
import SendMessage from "./sendMessage";

const Chat: React.FC = () => {
  return (
    <div
      className={` w-full lg:w-1/2 lg:flex lg:border-r lg:border-gray-300 flex-col justify-between`}
    >
      <Header />

      <main></main>

      <SendMessage />
    </div>
  );
};

export default Chat;
