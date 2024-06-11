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
  const navLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Calender",
      url: "/calender",
    },
    {
      title: "Buttons",
      url: "/",
    },
    {
      title: "Forms",
      url: "/",
    },
    {
      title: "Dashboard",
      url: "/",
    },
  ] as { title: string; url: string }[];

  return (
    <>
      <div className="p-7 flex justify-between items-center ">
        <Logo />
        <ul className="flex gap-6">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/tricks">
            <li>Tricks</li>
          </Link>
          <Link href="/helpers">
            <li>Helpers</li>
          </Link>

          <Link href="/buttons">
            <li>Buttons</li>
          </Link>
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
