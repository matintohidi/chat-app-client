import React from 'react';

const Header : React.FC = () => {
    return (
        <header className="flex items-center justify-between">
            <h1 className="text-xl sm:text-3xl font-InterExtraBold">Setting</h1>

            <div className="flex">
                <button className="rounded-[6px] sm:rounded-lg lg:rounded-xl text-xs font-InterRegular bg-primary text-white px-2.5 py-1.5 sm:px-5 sm:py-3 mr-2 sm:mr-4">Save Change</button>
                <button className="rounded-[6px] sm:rounded-lg lg:rounded-xl text-xs font-InterRegular border-2 text-primary border-primary px-2.5 py-1.5 sm:px-5 sm:py-3">Cancel</button>
            </div>
        </header>
    )
}

export default Header;