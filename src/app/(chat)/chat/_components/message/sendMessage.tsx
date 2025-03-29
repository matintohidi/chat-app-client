import React from 'react';
// packages dependencies
import { Paperclip , Send2 } from 'iconsax-react';

const SendMessage : React.FC = () => {
    return (
        <div className="flex p-6 gap-6">
            <button>
                <Paperclip />
            </button>

            <div className="relative w-full">
                <textarea className="pl-5 pr-14 py-2.5 outline-0 text-gray-700 placeholder:text-sm placeholder-gray-400 placeholder:font-InterRegular border-2 rounded-xl w-full scroll-smooth resize-none" placeholder="Type a message">

                </textarea>
                <button className="absolute right-5 top-3">
                    <Send2 variant="Bold" color="#615EF0" />
                </button>
            </div>
        </div>
    )
}

export default SendMessage;