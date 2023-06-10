import React from 'react';

const Statistics : React.FC = () => {
    return (
        <section className="flex flex-col gap-y-10 m-8">
            <img
                src="/static/images/mockup.png"
                alt="mockup"
                className="w-full"
            />

            <div className="flex flex-col gap-y-4">
                <h1 className="font-PoppinsBold text-primaryText text-[26px]">
                    Get direct message from your friends
                </h1>

                <p className="font-InterRegular text-primaryText text-xs">
                    Great software that allows you to chat from any place at any time without any interruption.
                </p>

                <div className="flex gap-x-5">
                    <div className="flex items-center gap-x-2">
                        <span className="font-InterExtraBold text-base text-primaryText">4.3K+</span>

                        <h2 className="flex flex-col font-InterRegular text-primaryText text-[10px]">
                            <span>Registered</span>
                            <span>user</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-x-2">
                        <span className="font-InterExtraBold text-base text-primaryText">7M+</span>

                        <h2 className="flex flex-col font-InterRegular text-primaryText text-[10px]">
                            <span>Chats in</span>
                            <span>last 2023</span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistics;