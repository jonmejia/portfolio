"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Header = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center pl-4 pb-2">
      <Image
        className="flex ml-8"
        onClick={() => router.push("/")}
        src="/greentea.svg"
        alt="green tea cup"
        width={60}
        height={60}
      />
      <div className="pr-8">
        <span className="px-4" onClick={() => router.push("/")}>
          Home
        </span>
        <span className="px-4" onClick={() => router.push("/About")}>
          About
        </span>
        <span className="px-4" onClick={() => router.push("/Projects")}>
          Projects
        </span>
        <span className="px-4" onClick={() => router.push("/Contact")}>
          Contact Me
        </span>
      </div>
    </div>
  );
};

export default Header;
