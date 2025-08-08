import React from "react";
import { ProfileImage, ProfileDefault } from "./profile";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import {
  CalendarDays,
  ChartArea,
  House,
  Mail,
  Search,
  Settings2,
} from "lucide-react";

const Navbar: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);
  const { loading } = useAppSelector((state) => state.loading);

  return (
    <div
      className={` lg:flex flex-col justify-between items-center shadow-xl px-2 py-4 md:p-4`}
    >
      <div className="flex flex-col items-center">
        {loading ? (
          <div className="w-14 h-14 bg-slate-200 rounded-[14px]"></div>
        ) : user?.profile === null ? (
          <ProfileDefault name={user?.name} />
        ) : (
          <ProfileImage profile={user?.profile} name={user?.name} />
        )}

        <div className="flex flex-col items-center gap-7 mt-14">
          <Link className="navbarButton" href="/">
            <House size={24} color="#000" />
          </Link>

          <Link className="navbarButton" href="/chat/">
            <Mail size={24} color="#000" />
          </Link>

          <button className="navbarButton">
            <ChartArea size={24} color="#000" />
          </button>

          <button className="navbarButton">
            <Search size={24} color="#000" />
          </button>

          <button className="navbarButton">
            <CalendarDays size={24} color="#000" />
          </button>
        </div>
      </div>

      <Link className="mb-2 navbarButton" href="/chat/setting">
        <Settings2 size={24} color="#000" />
      </Link>
    </div>
  );
};

export default Navbar;
