import React from 'react';
// react router dom
import { Outlet } from "react-router-dom";
// components
import { HeaderSetting as Header , NavbarSetting as Navbar } from "../../../components";

const Setting : React.FC = () => {
    return (
        <section className="w-full bg-primary bg-opacity-5 px-2.5 py-4 sm:py-12 sm:px-10">
            <Header />

            <section className="mt-4 sm:mt-0 bg-white rounded flex p-3.5">
                <Navbar />

                <Outlet />
            </section>

        </section>
    )
}

export default Setting;