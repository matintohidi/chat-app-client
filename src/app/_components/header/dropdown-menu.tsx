import { UserSession } from "@/types/user.interface";
import { NavLinkInterface } from "../../../contracts/landing";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  user?: UserSession;
  navLinks?: NavLinkInterface[];
  className?: string;
}

const DropdownMenu = ({
  isOpen,
  onClose,
  user,
  navLinks = [],
  className = "",
}: DropdownMenuProps) => {
  return (
    <div
      className={`absolute top-full right-1.5 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-top-right z-50 ${
        isOpen
          ? "opacity-100 scale-100 translate-y-2 pointer-events-auto"
          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
      } ${className}`}
    >
      <div className="p-4">
        {user ? (
          // Authenticated user header
          <div className="flex items-center space-x-3">
            {user.profile && (
              <img
                src={user.profile}
                alt={user.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
              />
            )}
            <div>
              <h3 className="text-secondary-content font-semibold text-lg">
                {user.name}
              </h3>
              <p className="text-secondary-content/70 text-sm">{user.email}</p>
            </div>
          </div>
        ) : (
          // Guest user header
          <div className="flex items-center space-x-3">
            <MessageCircle className="w-8 h-8 text-white" />
            <div>
              <h3 className="text-white font-semibold text-lg">Chat Life</h3>
              <p className="text-white/80 text-sm">Connect globally</p>
            </div>
          </div>
        )}
      </div>

      <div className="py-2">
        {user ? (
          // Authenticated user navigation
          <>
            <Link
              href="/dashboard"
              onClick={onClose}
              className="flex items-center px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-[#615EF0] transition-all duration-200 group"
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#615EF0]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"
                />
              </svg>
              <span className="font-medium">Dashboard</span>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                →
              </span>
            </Link>
            <Link
              href="/chat"
              onClick={onClose}
              className="flex items-center px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-[#615EF0] transition-all duration-200 group"
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#615EF0]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="font-medium">Chat</span>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                →
              </span>
            </Link>
            <Link
              href="/set-profile"
              onClick={onClose}
              className="flex items-center px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-[#615EF0] transition-all duration-200 group"
            >
              <svg
                className="w-5 h-5 mr-3 text-gray-400 group-hover:text-[#615EF0]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="font-medium">Profile Settings</span>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                →
              </span>
            </Link>
          </>
        ) : (
          // Guest user navigation
          <>
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                onClick={onClose}
                className="flex items-center px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-[#615EF0] transition-all duration-200 group"
              >
                <span className="font-medium">{link.name}</span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  →
                </span>
              </Link>
            ))}
          </>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100"></div>

      {/* Action Buttons */}
      <div className="p-4 space-y-3 flex flex-col">
        {user ? (
          // Authenticated user actions
          <Link
            href="/logout"
            onClick={onClose}
            className="w-full bg-red-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-red-600 transition-all duration-200 hover:shadow-lg flex items-center justify-center"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Sign Out
          </Link>
        ) : (
          // Guest user actions
          <>
            <Link
              href="/login"
              onClick={onClose}
              className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={onClose}
              className="w-full bg-[#615EF0] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#5048e6] transition-all duration-200 hover:shadow-lg"
            >
              Get Started Free
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
