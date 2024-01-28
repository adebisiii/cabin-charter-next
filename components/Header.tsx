"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import ToggleMenu from "./ToggleMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Belirli bir scroll değerine göre durumu kontrol et
      const shouldChangeStyle = scrollTop > 100; // Örneğin, 100 piksel'den sonra değişiklik yap

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
      className={`fixed left-0 top-0 z-[5] transition-all flex w-full justify-between px-4 py-2 sm:px-6 lg:py-5 2xl:px-7 3xl:px-8 4xl:px-16 4xl:py-6 ${
        isScrolled ? "is-scrolling" : ""
      }`}
    >
      <Logo/>
      <div className="flex items-center">
        <Navbar />
      </div>
      <ToggleMenu />
    </header>
  );
};

export default Header;
