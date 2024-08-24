"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};
export const sideMenuItems = [
  {
    title: "Miscellaneous",
    icon: "",
    href: "/features/miscellaneous",
  },
  {
    title: "Landing Page Components",
    href: "/features/landing-components",
  },
  {
    title: "Website Backgrounds",
    href: "/features/backgrounds",
  },
  {
    title: "Components",
    href: "/features/components",
  },
  {
    title: "Modern UI Libraries",
    href: "/features/ui-libraries",
  },
  {
    title: "Tools",
    href: "/features/useful-websites",
  },
];

export default function FeaturesSidebar({}: Props) {
  const pathname = usePathname();
  return (
    <>
      <aside className="lg:min-w-[20%] min-h-screen border">
        <div className="p-10">
          <h2 className="text-3xl font-bold">Features</h2>
          <div className="my-5">
            {sideMenuItems.map((item, i) => (
              <Link key={item.href} href={item.href} passHref>
                <div
                  className={cn(
                    "text-blue-900 font-medium bg-white rounded-md p-2 my-2 transition-all duration-300 ease-in-out transform hover:scale-105 dark:bg-background dark:text-blue-300",
                    item.href == pathname &&
                      "bg-blue-100 font-bold dark:bg-blue-800 dark:text-white"
                  )}
                >
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
