"use client";

import React, { useState, useEffect } from "react";
import { NavLinkInterface } from "../../../contracts/landing";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";
import DropdownMenu from "@/app/_components/header/dropdown-menu";
import User from "@/app/_components/header/user";

// navbar links
const navLinks: NavLinkInterface[] = [
  { name: "Home", path: "/", id: 0 },
  { name: "About", path: "/about", id: 1 },
  { name: "Contact", path: "/contact", id: 2 },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session } = useSession();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 z-50">
              <MessageCircle className="w-8 h-8 text-[#615EF0]" />
              <span className="text-xl font-semibold text-gray-900">
                Chat Life
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.path}
                  className="text-gray-600 hover:text-[#615EF0] transition-colors duration-200 font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#615EF0] transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            <User
              setIsMenuOpen={setIsMenuOpen}
              isMenuOpen={isMenuOpen}
              user={session?.user}
            />

            <div className="md:hidden mobile-menu-container">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-gray-600 hover:text-[#615EF0] hover:bg-gray-50 transition-all duration-200 z-50 relative"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            <DropdownMenu
              isOpen={isMenuOpen}
              onClose={closeMenu}
              user={session?.user}
              navLinks={navLinks}
            />
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Header;
