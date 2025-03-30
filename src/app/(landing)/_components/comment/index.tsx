import React from "react";
import UserComment from "./userComment";

const Comment: React.FC = () => {
  return (
    <section className="bg-primary py-10 px-4 relative sm:px-14 md:px-32 lg:px-[6.5rem] lg:py-20 2xl:px-[9.5rem] -z-20">
      {/* three bows */}
      <span className="absolute -top-20 -left-20 border-white border-[5px] border-opacity-30 rounded-full p-16 lg:p-48 lg:-left-60 lg:-top-60 -z-10"></span>
      <span className="absolute -top-20 -left-20 border-white border-[5px] border-opacity-30 rounded-full p-20 lg:p-56 lg:-left-60 lg:-top-60 -z-10"></span>
      <span className="absolute -top-20 -left-20 border-white border-[5px] border-opacity-30 rounded-full p-24 lg:p-64 lg:-left-60 lg:-top-60 -z-10"></span>

      <div className="flex flex-col items-center z-10">
        <h1 className="text-white font-poppins font-bold text-3xl text-center px-[34px] lg:text-4xl xl:text-5xl xl:w-[446px]">
          What our users are saying
        </h1>

        <div className="flex flex-col gap-6 mt-[30px] lg:flex-row xl:gap-24">
          <UserComment />
          <UserComment />
        </div>
      </div>
    </section>
  );
};

export default Comment;
