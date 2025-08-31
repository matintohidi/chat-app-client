import { UserSession } from "@/types/user.interface";
import Link from "next/link";

interface UserProps {
  setIsMenuOpen: (isOpen: boolean) => void;
  isMenuOpen: boolean;
  user?: UserSession;
}

const User = ({ setIsMenuOpen, isMenuOpen, user }: UserProps) => {
  return user ? (
    <UserExist
      user={user}
      setIsMenuOpen={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    />
  ) : (
    <UserNotExist />
  );
};

interface UserExistProps {
  user: UserSession;
  setIsMenuOpen: (isOpen: boolean) => void;
  isMenuOpen: boolean;
}

const UserExist = ({ user, setIsMenuOpen, isMenuOpen }: UserExistProps) => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg px-4 py-2 hover:shadow-md transition-all duration-200"
        >
          <div className="relative">
            {user.profile ? (
              <img
                src={user.profile}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover border-2 border-gray-100"
              />
            ) : (
              <div className="w-8 h-8 bg-gradient-to-br from-[#615EF0] to-[#5048e6] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                {user.name}
              </div>
            )}
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
          </div>

          <div className="text-left">
            <p className="text-sm font-semibold text-gray-900 truncate max-w-24 capitalize">
              {user.name}
            </p>
            <p className="text-xs truncate text-gray-500">{user.email}</p>
          </div>

          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
              isMenuOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const UserNotExist = () => {
  return (
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
  );
};

export default User;
