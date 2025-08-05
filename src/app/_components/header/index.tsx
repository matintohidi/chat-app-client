"use client";

import React, { useState, useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { NavLinkInterface } from "../../../contracts/landing";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";

// navbar links
const navLinks: NavLinkInterface[] = [
  { name: "Home", path: "/", id: 0 },
  { name: "About", path: "/about", id: 1 },
  { name: "Contact", path: "/contact", id: 2 },
];

const Header: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
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
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 z-50">
              <MessageCircle className="w-8 h-8 text-[#615EF0]" />
              <span className="text-xl font-semibold text-gray-900">
                Chat Life
              </span>
            </Link>

            {/* Desktop Navigation */}
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

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                className="text-gray-600 hover:text-[#615EF0] transition-colors duration-200 font-medium"
                href="/login"
              >
                Login
              </Link>
              <Link
                className="bg-[#615EF0] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#5048e6] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                href="/register"
              >
                Get Started Free
              </Link>
            </div>

            {/* Mobile Menu Button */}
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

              {/* Mobile Dropdown Menu */}
              <div
                className={`absolute top-full right-1.5 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-top-right ${
                  isMenuOpen
                    ? "opacity-100 scale-100 translate-y-2"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                {/* Menu Header */}
                <div className="bg-gradient-to-r from-[#615EF0] to-[#5048e6] p-4">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-8 h-8 text-white" />
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        Chat Life
                      </h3>
                      <p className="text-white/80 text-sm">Connect globally</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="py-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={link.path}
                      onClick={closeMenu}
                      className="flex items-center px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-[#615EF0] transition-all duration-200 group"
                    >
                      <span className="font-medium">{link.name}</span>
                      <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100"></div>

                {/* Action Buttons */}
                <div className="p-4 space-y-3 flex flex-col">
                  <Link
                    href="/login"
                    onClick={closeMenu}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={closeMenu}
                    className="w-full bg-[#615EF0] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#5048e6] transition-all duration-200 hover:shadow-lg"
                  >
                    Get Started Free
                  </Link>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 text-center">
                  <p className="text-sm text-gray-500">
                    Join 2,291+ happy members
                  </p>
                  <div className="flex justify-center items-center mt-2 space-x-1">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 bg-[#615EF0] rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-sm text-gray-600 ml-2">4.8/5 ⭐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
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
