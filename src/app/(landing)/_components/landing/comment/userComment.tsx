import React from "react";
import Image from "next/image";

const userComment: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <div>
        <div className="bg-white rounded-xl flex flex-col items-center px-4 py-[26px] lg:px-8 xl:px-[50px] xl:py-8">
          <h2 className="text-primary text-lg lg:text-xl">
            “Incredible Experience”
          </h2>

          <p className="text-center mt-2.5 text-secondary-content lg:text-lg font-light">
            We had an incredible experience working with Mixland and were
            impressed they made such a big difference in only three weeks. Our
            team is so grateful for the wonderful improvements they made and
            their ability to get familiar with the concept so quickly.
          </p>
        </div>

        {/* a triangle on bottom of card */}
        <div className="relative">
          <span className="triangle absolute top-0 right-1/2"></span>
        </div>
      </div>

      <div className="flex gap-x-[18px] mt-5">
        <Image
          src="https://images.unsplash.com/photo-1685538856162-fd6d87a1f3ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover ring-2 ring-offset-2 ring-offset-primary ring-white"
          width={64}
          height={64}
        />

        <div className="text-white space-y-2">
          <h1 className="text-lg   font-medium">Wade Warren</h1>

          <h2 className="text-sm font-light">CEO, ABC Corporation</h2>
        </div>
      </div>
    </section>
  );
};

export default userComment;
