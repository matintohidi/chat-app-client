import React from 'react';

const userComment : React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <div>
                <div className="bg-white rounded-xl flex flex-col items-center px-4 pt-[26px] pb-3.5">
                    <h2 className="text-primary text-lg">“Incredible Experience”</h2>

                    <p className="text-center mt-2.5 text-customGrayText font-InterRegular">
                        We had an incredible experience working with ChatLife and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.
                    </p>
                </div>

                {/* a triangle on bottom of card */}
                <div className="relative">
                    <span className="triangle absolute top-0 right-1/2"></span>
                </div>
            </div>

            <div className="flex gap-x-[18px] mt-5">
                <img
                    src="https://images.unsplash.com/photo-1685538856162-fd6d87a1f3ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
                    alt="profile"
                    className="w-16 h-16 rounded-full object-cover"
                />

                <div className="text-white space-y-2">
                    <h1 className="text-lg">Wade Warren</h1>

                    <h2 className="text-sm font-InterRegular">CEO, ABC Corporation</h2>
                </div>
            </div>
        </div>
    )
}

export default userComment;