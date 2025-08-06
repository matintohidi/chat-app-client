import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col">
      <h1 className="text-xl sm:text-3xl font-extrabold">Setting</h1>
      <p className="text-sm">Manage your account setting</p>
    </header>
  );
};

export default Header;
