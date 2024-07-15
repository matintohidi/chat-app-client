import React from 'react';

const Header : React.FC = () => {
    return (
        <header className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <div className="flex flex-col justify-between lg:gap-4">
                <h1 className="text-xl sm:text-3xl font-InterExtraBold">Setting</h1>
                <p className="text-sm font-InterRegular">Manage your account setting</p>
            </div>

            <div className="flex mt-4 sm:mt-0">
                <button className="rounded-[6px] sm:rounded-lg lg:rounded-xl text-xs lg:text-sm font-InterRegular bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 mr-2 sm:mr-4">Save Change</button>
                <button className="rounded-[6px] sm:rounded-lg lg:rounded-xl text-xs lg:text-sm font-InterRegular border text-primary border-primary px-4 py-2 sm:px-6 sm:py-3">Cancel</button>
            </div>
        </header>
    )
}

export default Header;