import React from 'react';
// components
import Mockup from './mockup';

const Index : React.FC = () => {
    return (
        <section className="flex flex-col py-10 px-4 bg-[#F8F8FA] sm:px-14 md:px-32 lg:px-[6.5rem] 2xl:px-[9.5rem] xl:flex-row lg:py-28 lg:justify-between">
            <div className="relative">
                <Mockup />

                {/*3 circle image*/}
                <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                     className="w-11 h-11 rounded-full ring ring-white absolute left-0 top-1/3 z-10 lg:w-[60px] lg:h-[60px] xl:-left-10"
                     alt=""
                />
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                     className="w-11 h-11 rounded-full ring ring-white absolute -bottom-6 left-1/4 z-10 lg:w-[60px] lg:h-[60px] xl:-bottom-8"
                     alt=""
                />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                     className="w-11 h-11 rounded-full ring ring-white absolute right-0 bottom-1/4 z-10 lg:w-[60px] lg:h-[60px] xl:-right-10"
                     alt=""
                />
            </div>

            <div className="flex flex-col gap-y-4 mt-16 z-10 xl:w-[500px]">
                <h1 className="font-PoppinsBold text-primaryText text-[26px] lg:text-5xl">
                    Get direct message from your friends
                </h1>

                <p className="font-InterRegular text-primaryText text-xs lg:text-base">
                    Great software that allows you to chat from any place at any time without any interruption.
                </p>

                <div className="flex gap-x-5">
                    <div className="flex items-center gap-x-2">
                        <span className="font-InterExtraBold text-[32px] text-primaryText">4.3K+</span>

                        <h2 className="flex flex-col font-InterRegular text-primaryText text-sm">
                            <span>Registered</span>
                            <span>user</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-x-2">
                        <span className="font-InterExtraBold text-[32px] text-primaryText">7M+</span>

                        <h2 className="flex flex-col font-InterRegular text-primaryText text-sm">
                            <span>Chats in</span>
                            <span>last 2023</span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index;