import React from 'react';
// react router dom
import { Link } from 'react-router-dom';
// components
import MessageCards from './messageCards';

const Banner : React.FC = () => {
    return (
        <section className="flex flex-col lg:flex-row lg:px-[6.5rem] 2xl:px-[9.5rem] lg:py-12 lg:items-center">
            <section className="px-8 py-12 flex flex-col items-start lg:p-0">
                <h1 className="font-PoppinsBold text-3xl text-primaryText lg:w-[509px] xl:text-5xl">
                    Freedom communicate to world with people and especially for iranian people
                </h1>

                <h2 className="font-InterRegular text-sm mt-4 xl:text-lg">
                    Great software that allows you to chat from any place at any time without any interruption.
                </h2>

                <Link
                    to="/register"
                    className="mt-[22px] mb-4 px-3 py-2 rounded-lg bg-primary text-xs text-white font-InterRegular border border-primary hover:bg-white hover:text-primary transition lg:text-base lg:px-6 lg:py-3"
                >
                    Start chatting now
                </Link>

                <section className="flex items-center py-1 space-x-6">
                    <div className="flex -space-x-2 overflow-hidden">
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white xl:w-[60px] xl:h-[60px]"
                             src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                             alt=""
                        />
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white xl:w-[60px] xl:h-[60px]"
                             src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                             alt=""
                        />
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white xl:w-[60px] xl:h-[60px]"
                             src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                             alt=""
                        />
                    </div>

                    <div>
                        <span className="font-InterExtraBold text-sm xl:text-xl">2,291</span>
                        <h3 className="font-InterRegular text-customGrayText text-xs xl:text-base">Happy members</h3>
                    </div>

                    <div>
                        <span className="font-InterExtraBold text-sm xl:text-xl">4.8/5</span>
                        <h3 className="font-InterRegular text-customGrayText text-xs xl:text-base">Rating</h3>
                    </div>
                </section>
            </section>

            <section className="flex justify-center relative">
                <div className="relative">
                    <img
                        src="/static/images/banner-mobile.png"
                        alt="Banner Mobile"
                        className="z-20 lg:hidden relative"
                    />

                    <img
                        src="/static/images/banner.png"
                        alt="Banner"
                        className="z-20 hidden lg:block relative"
                    />

                    {/* Circles */}
                    <span className="w-[314px] h-[314px] absolute border-2 border-black rounded-full top-12 -right-4 z-10 xl:w-[485px] xl:h-[485px]"></span>
                    <span className="w-[314px] h-[314px] absolute bg-primary rounded-full top-16 right-0 xl:w-[500px] xl:h-[500px] xl:top-4"></span>

                    {/* Static message card */}
                    <MessageCards />
                </div>
            </section>
        </section>
    )
}

export default Banner;