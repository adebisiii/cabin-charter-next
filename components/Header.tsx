"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import ToggleMenu from "./ToggleMenu";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const pathName = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Belirli bir scroll değerine göre durumu kontrol et
      const shouldChangeStyle = scrollTop > 5; // Örneğin, 100 piksel'den sonra değişiklik yap

      setIsScrolled(shouldChangeStyle);
    };

    // Scroll olayını dinle
    window.addEventListener("scroll", handleScroll);

    // Temizleme
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };




  }, []);

  return (
    <header
      className={`transparent-header items-center fixed left-0 top-0 z-[50] transition-all flex w-full justify-between bg-white px-4 py-3.5 sm:bg-transparent sm:px-6 lg:py-6 2xl:px-7 3xl:px-8 4xl:px-16 4xl:py-9 ${isScrolled ? "is-scrolling" : ""
        } ${pathName !== '/' ?  "text-black" : "text-white"}`}
    >
      <Logo />
      <div className="flex items-center">
        <Navbar />
      </div>
      <ToggleMenu />
    </header>
  );
};

export default Header;