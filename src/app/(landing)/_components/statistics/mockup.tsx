import React from "react";
// packages dependencies
import {
  DirectInbox,
  MessageText1,
  SmsNotification,
  Messenger,
} from "iconsax-react";

const Mockup: React.FC = () => {
  return (
    <div className="flex flex-col bg-white rounded-[8.5px] shadow-lg mx-5 py-[25px] px-[18px] select-none lg:px-6 lg:py-[35px] xl:mx-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="p-1.5 rounded-full bg-[#FFAF63]">
            <DirectInbox color="#fff" size="20" />
          </span>

          <h3 className="text-primaryText text-xs ml-1.5">Inbox</h3>
        </div>

        <div className="flex gap-[10px]">
          <span className="rounded-full bg-[#F3F3F3] w-3 h-3"></span>
          <span className="rounded-full bg-[#F3F3F3] w-3 h-3"></span>
          <span className="rounded-full bg-[#F3F3F3] w-3 h-3"></span>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 mt-2.5 bg-[#F3F3F3] rounded-[8.5px] p-3 lg:p-[18px]">
        {/* message card */}
        <div className="flex bg-[#FAFAFA] rounded p-[8.5px] lg:p-3">
          <span className="rounded-full p-1.5 bg-[#77F393]">
            <MessageText1 size="24" color="#fff" variant="Bold" />
          </span>

          <div className="flex flex-col justify-around ml-3 lg:ml-[17px]">
            <h3 className="text-primaryText text-[8.5px]  font-extrabold lg:text-xs">
              New Message
            </h3>

            <p className="text-gray-500 text-[8.5px] lg:text-xs font-light">
              Hey Alex, Are you free now?
            </p>
          </div>
        </div>
        <div className="flex bg-[#FAFAFA] rounded p-[8.5px] lg:p-3">
          <span className="rounded-full p-1.5 bg-[#ED4546]">
            <SmsNotification size="24" color="#fff" variant="Bold" />
          </span>

          <div className="flex flex-col justify-around ml-3 lg:ml-[17px]">
            <h3 className="text-primaryText text-[8.5px]  font-extrabold lg:text-xs">
              New Email
            </h3>

            <p className="text-gray-500 text-[8.5px] lg:text-xs font-light">
              Alex, your order replaced ID #45231
            </p>
          </div>
        </div>
        <div className="flex bg-[#FAFAFA] rounded p-[8.5px] lg:p-3">
          <span className="rounded-full p-1.5 bg-[#008EFF]">
            <Messenger size="24" color="#fff" variant="Bold" />
          </span>

          <div className="flex flex-col justify-around ml-3 lg:ml-[17px]">
            <h3 className="text-primaryText text-[8.5px] font-extrabold lg:text-xs">
              Facebook Messenger
            </h3>

            <p className="text-gray-500 text-[8.5px] lg:text-xs font-light">
              How can i see the tracking number?
            </p>
          </div>
        </div>
        <div className="flex bg-[#FAFAFA] rounded p-[8.5px] lg:p-3">
          <span className="rounded-full p-1.5 bg-[#77F393]">
            <MessageText1 size="24" color="#fff" variant="Bold" />
          </span>

          <div className="flex flex-col justify-around ml-3 lg:ml-[17px]">
            <h3 className="text-primaryText text-[8.5px]  font-extrabold lg:text-xs">
              New Message
            </h3>

            <p className="text-gray-500 text-[8.5px] lg:text-xs font-light">
              How can I renew my subscription?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mockup;
