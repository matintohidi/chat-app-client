import React from "react";
import Link from "next/link";
import { NavLinkSettingInterface } from "@/contracts/chat";
import {
  NotepadText,
  ReceiptCent,
  ReceiptText,
  Shield,
  UserPen,
} from "lucide-react";

const navLinks: NavLinkSettingInterface[] = [
  {
    name: "Personal Information",
    path: "/chat/setting/personal-info",
    id: 0,
    icon: <UserPen size={20} />,
  },
  {
    name: "Security",
    path: "/chat/setting/security",
    id: 1,
    icon: <Shield size={20} />,
  },
  {
    name: "Billing",
    path: "/chat/setting/bill",
    id: 2,
    icon: <ReceiptText size={20} />,
  },
  {
    name: "Plans",
    path: "/chat/setting/plan",
    id: 3,
    icon: <NotepadText size={20} />,
  },
];

const NavbarSetting: React.FC = () => {
  return (
    <nav className={`flex-col gap-y-3.5 sm:border-r sm:pr-4 sm:flex`}>
      {navLinks.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.path}
            className="flex items-center w-52 sm:w-36 h-12 lg:w-60 sm:font-semibold sm:rounded-md sm:px-7 sm:py-3 gap-2 text-lg sm:text-sm text-primaryText nav-link-setting hover:text-primary/80 transition"
          >
            {link.icon}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavbarSetting;
