import Link from "next/link";
import React from "react";

export function Logo() {
  return (
    <>
      <div>
        <div className="font-bold text-blue-800 text-2xl">Kitty Kit</div>
        {/* <div className="text-sm">By Faizanahmed</div> */}
      </div>
    </>
  );
}

export default function Navbar() {
  return (
    <>
      <div className="p-7 flex justify-between items-center ">
        <Logo />
        <ul className="flex gap-6">
          <Link href="/">
            <li>Home</li>
          </Link>
          {/* <Link href="/">
          <li>Buttons</li>
        </Link> */}
          <Link href="/calender">
            <li>Calender</li>
          </Link>
          <li className="text-gray-400">Forms</li>
          <li className="text-gray-400">Dashboard</li>
        </ul>
      </div>
    </>
  );
}
