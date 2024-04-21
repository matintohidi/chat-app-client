import React from 'react';
// components
import { Navbar } from '../../components';
import {Outlet} from "react-router-dom";

const Home : React.FC = () => {
    return (
        <section className="flex h-screen overflow-hidden">
            <Navbar/>
            <Outlet />
        </section>
    )
}

export default Home;