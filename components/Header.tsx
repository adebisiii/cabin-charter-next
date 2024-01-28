import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import ToggleMenu from "./ToggleMenu";

const Header = () => {
  return (
    <header className="transparent-header fixed left-0 top-0 z-10 transition-all flex w-full justify-between bg-white px-4 py-3.5 sm:bg-transparent sm:px-6 lg:py-6 2xl:px-7 3xl:px-8 4xl:px-16 4xl:py-9">
      <Logo />
      <div className="flex items-center">
        <Navbar />
      </div>
      <ToggleMenu />
    </header>
  );
};

export default Header;
