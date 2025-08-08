import { Clock, Wallet, Wifi } from "lucide-react";
import React from "react";

const Features: React.FC = () => {
  return (
    <section className="px-12 py-11 lg:py-16 sm:px-14 md:px-32 lg:px-[6.5rem] 2xl:px-[9.5rem]">
      <h1 className="font-poppins font-bold text-primary-content text-3xl text-center lg:text-4xl">
        Features for a better experience
      </h1>

      {/*feature cards*/}
      <div className="flex flex-col gap-8 mt-11 lg:mt-19 lg:flex-row xl:gap-[52px]">
        <div className="flex flex-col items-center lg:flex-row lg:gap-[22px] lg:items-start">
          <span className="p-3.5 rounded-full bg-[rgba(186,65,65,0.09);]">
            <Wallet color="#BA4141" size="32" />
          </span>

          <div className="flex flex-col items-center mt-[15px] lg:items-start lg:mt-0">
            <h1 className="text-[22px] text-primary-content  font-extrabold lg:text-secondary-content xl:text-[22px]">
              Free communicate
            </h1>

            <p className="text-primary-content leading-6 mt-[10px] text-center lg:text-left lg:text-xs xl:text-secondary-content">
              Stay connected with friends and family for free with our
              easy-to-use communicate chat app. Download now!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:gap-[22px] lg:items-start">
          <span className="p-3.5 rounded-full bg-[rgba(0,117,255,0.09);]">
            <Wifi color="#0075FF" size="32" />
          </span>

          <div className="flex flex-col items-center mt-[15px] lg:items-start lg:mt-0">
            <h1 className="text-[22px] text-primary-content  font-extrabold lg:text-secondary-content xl:text-[22px]">
              Keep safe & private
            </h1>

            <p className="text-primary-content leading-6 mt-[10px] text-center lg:text-left lg:text-xs xl:text-secondary-content">
              Keep your chats safe and private with our encrypted chat app.
              Download now for secure messaging!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:gap-[22px] lg:items-start">
          <span className="p-3.5 rounded-full bg-[rgba(234,204,45,0.09);]">
            <Clock color="#EACC2D" size="32" />
          </span>

          <div className="flex flex-col items-center mt-[15px] lg:items-start lg:mt-0">
            <h1 className="text-[22px] text-primary-content  font-extrabold lg:text-secondary-content xl:text-[22px]">
              Save your time
            </h1>

            <p className="text-primary-content leading-6 mt-[10px] text-center lg:text-left lg:text-xs xl:text-secondary-content">
              Chat efficiently and save time with our app's pre-written messages
              and templates. Download now!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
