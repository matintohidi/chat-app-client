import React from 'react';
// react router dom
import { NavLink , useLocation } from "react-router-dom";
// contracts
import { NavLinkSettingInterface } from "../../../../../contracts/chat";
// components
import { Bill, Notepad2 , Personalcard , SecuritySafe } from "iconsax-react";

const navLinks : NavLinkSettingInterface[] = [
    { name: "Personal Info" , path: "/chat/setting/personal-info" , id: 0 , icon:<Personalcard size={20} /> },
    { name: "Security" , path: "/chat/setting/security" , id: 1 , icon:<SecuritySafe size={20} /> },
    { name: "Billing & Tax" , path: "/chat/setting/bill" , id: 2 , icon:<Bill size={20} /> },
    { name: "Plans" , path: "/chat/setting/plans" , id: 3 , icon:<Notepad2 size={20} /> }
]

const NavbarSetting : React.FC = () => {
    const path: string = useLocation().pathname.toLowerCase();

    return (
        <nav className={`flex-col gap-y-6 sm:flex ${path === "/chat/setting" ? "flex" : "hidden"}`}>
            {
                navLinks.map(link => {
                    return (
                        <NavLink
                            key={link.id}
                            to={link.path}
                            className="flex items-center gap-2 text-lg font-InterRegular text-primaryText nav-link-setting hover:text-primary/80"
                        >
                            {link.icon}
                            {link.name}
                        </NavLink>
                    )
                })
            }
        </nav>
    )
}

export default NavbarSetting;