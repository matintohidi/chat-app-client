import React from 'react';
// react router dom
import { Link , NavLink } from "react-router-dom";
// components
import MenuDropDown from './menuDropDown';
// contracts
import { NavLinkInterface } from '../../../contracts/landing';
// navbar links
const navLinks : NavLinkInterface[] = [
    { name: "Home", path: "/" , id: 0 },
    { name: "About", path: "/about" , id: 1 },
    { name: "Contact", path: "/contact" , id: 2 },
];

const Navbar : React.FC = () => {
    return (
        <nav className="flex items-center justify-between px-[17.25px] lg:px-[6.5rem] 2xl:px-[9.5rem] py-6 lg:py-3 sticky top-0 z-50 bg-white rounded-b-md shadow-md">
            <h1 className="text-sm tracking-wider select-none">
                <span className="text-xl text-primary font-Asap">C</span>hat Life
            </h1>

            {/* mobile menu dropdown */}
            <MenuDropDown />

            {/* desktop menu */}
            <div className="hidden lg:flex gap-6">
                {
                    navLinks.map(link => {
                        return (
                            <NavLink
                                key={link.id}
                                to={link.path}
                                className="text-primaryText font-InterRegular nav-link"
                            >
                                {link.name}
                            </NavLink>
                        )
                    })
                }
            </div>

            <div className="hidden lg:flex gap-8 items-center">
                <Link
                    to="/login"
                    className="text-primaryText font-InterRegular focus:text-primary"
                >
                    Login
                </Link>

                <Link
                    to="/register"
                    className="px-5 py-3.5 font-InterRegular bg-primary text-white rounded-lg border border-primary hover:bg-white hover:text-primary transition"
                >
                    Get Started Free
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;