import React from 'react';
// components
import UserComment from "./userComment";

const Comment : React.FC = () => {


    return (
        <section className="bg-primary py-10 px-4 relative">
            {/* three bows */}
            <span className="absolute -top-20 -left-20 border-white border-[5px] border-opacity-20 rounded-full p-12"></span>
            <span className="absolute -top-20 -left-20 border-white border-[5px] border-opacity-20 rounded-full p-20"></span>
            <span className="absolute -top-20 -left-20 border-white border-[5px] border-opacity-20 rounded-full p-28"></span>

            <div className="flex flex-col items-center z-10">
                <h1 className="text-white font-PoppinsBold text-3xl text-center px-[34px]">What our users are saying</h1>

                <div className="flex flex-col space-y-6 mt-[30px]">
                    <UserComment />
                    <UserComment />
                </div>
            </div>
        </section>
    )
}

export default Comment;