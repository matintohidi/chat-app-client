import React from 'react';
// react router dom
import { Outlet } from "react-router-dom";
// components
import { HeaderSetting as Header , NavbarSetting as Navbar } from "../../../components";

const Setting: React.FC = () => {
    return (
        <section className="w-full bg-primary bg-opacity-5 px-2.5 py-4 sm:py-12 sm:px-10 overflow-y-auto lg:overflow-hidden">
            <Header />

            <div className="lg:h-full lg:pb-10">
                <section className="mt-4 bg-white rounded flex p-4 h-full">
                    <Navbar/>

                    <Outlet/>
                </section>
            </div>
        </section>
    )
}

export default Setting;