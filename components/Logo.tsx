import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="inline-flex w-full max-w-[120px] text-black focus:outline-none sm:text-white xl:max-w-[125px] 2xl:max-w-[135px] 3xl:max-w-[150px]"
    >
      <Image src="/logo-demo.svg" alt="Logo" width={200} height={60}/>
    </Link>
  );
};

export default Logo;
