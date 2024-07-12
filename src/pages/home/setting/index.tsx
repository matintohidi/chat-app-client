import React from 'react';
// react router dom
import { Outlet } from "react-router-dom";
// components
import { HeaderSetting as Header } from "../../../components";

const Setting : React.FC = () => {
    return (
        <section className="w-full bg-primary bg-opacity-5 px-3.5 py-6 sm:py-16 sm:px-10">
            <Header />
            <Outlet />
        </section>
    )
}

export default Setting;