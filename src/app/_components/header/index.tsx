"use client";

import React from "react";
import { useAppSelector } from "@/store/hooks";
import MenuDropDown from "./menuDropDown";
import ProfileDropDown from "./profileDropDown";
import { NavLinkInterface } from "../../../contracts/landing";
import { UserValuesInterface } from "../../../contracts/auth";
import Link from "next/link";

// navbar links
const navLinks: NavLinkInterface[] = [
  { name: "Home", path: "/", id: 0 },
  { name: "About", path: "/about", id: 1 },
  { name: "Contact", path: "/contact", id: 2 },
];

const Header: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <nav className="flex items-center justify-between px-[17.25px] lg:px-[6.5rem] 2xl:px-[9.5rem] py-6 lg:py-3 sticky top-0 z-50 bg-white shadow-md">
      <h1 className="text-sm tracking-wider select-none">
        <span className="text-xl text-primary font-asap font-semibold">C</span>
        hat Life
      </h1>

      {/* mobile menu dropdown */}
      <MenuDropDown user={user} />

      {/* desktop menu */}
      <div className="hidden lg:flex gap-6">
        {navLinks.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.path}
              className="text-primaryText   nav-link"
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {user ? (
        <ProfileDropDown user={user} />
      ) : (
        <div className="hidden lg:flex gap-8 items-center">
          <Link href="/login" className="text-primaryText   focus:text-primary">
            Login
          </Link>

          <Link
            href="/register"
            className="px-5 py-3.5   bg-primary text-white rounded-lg border border-primary hover:bg-white hover:text-primary transition"
          >
            Get Started Free
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
