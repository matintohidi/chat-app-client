import React from 'react';

const Header : React.FC = () => {
    return (
        <header className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <h1 className="text-xl sm:text-3xl font-InterExtraBold">Setting</h1>

            <div className="flex mt-2 sm:mt-0">
                <button className="rounded-[6px] sm:rounded-lg lg:rounded-xl text-xs lg:text-sm font-InterRegular bg-primary text-white px-2.5 py-1.5 sm:px-5 sm:py-3 mr-2 sm:mr-4">Save Change</button>
                <button className="rounded-[6px] sm:rounded-lg lg:rounded-xl text-xs lg:text-sm font-InterRegular border-2 text-primary border-primary px-2.5 py-1.5 sm:px-5 sm:py-3">Cancel</button>
            </div>
        </header>
    )
}

export default Header;