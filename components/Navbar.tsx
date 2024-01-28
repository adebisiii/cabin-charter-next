import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="primary-nav hidden items-center justify-between md:flex md:gap-4">
      <ul className="hidden flex-wrap md:flex">
        <li>
          <Link href="/" className="px-5 capitalize text-white">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="px-5 capitalize text-white">
            Explore
          </Link>
        </li>
        <li>
          <Link href="/" className="px-5 capitalize text-white">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/" className="px-5 capitalize text-white">
            Help
          </Link>
        </li>
      </ul>
      <button className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90 px-4 py-2 text-sm rounded-md border border-transparent text-white bg-gray-900 hover:enabled:bg-gray-1000 focus:ring-gray-900/30 text-gray-0 ml-5 capitalize md:text-base 4xl:px-8 4xl:py-2.5">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
