import React from "react";

const GrowCommunication: React.FC = () => {
  return (
    <section className="px-6 py-10 flex flex-col items-center sm:px-14 md:px-32 lg:px-[6.5rem] 2xl:px-[9.5rem] lg:py-24">
      <h1 className="text-2xl font-poppins font-bold text-center text-primaryText lg:text-[2rem] lg:w-[740px] lg:gap-y-1 lg:flex lg:flex-col">
        <span>Ready to grow your communication?</span>
        <span> Start with ChatLife, become faster every second</span>
      </h1>

      <button className="px-5 py-3.5 border border-primary text-white bg-primary rounded-[10px] mt-[30px] transition hover:bg-white hover:text-primary">
        Start Chatting Now
      </button>
    </section>
  );
};

export default GrowCommunication;
