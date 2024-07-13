"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Props = {};

export default function MobileNavbar({}: Props) {
  const pathname = usePathname();
  return (
    <Drawer>
      <DrawerTrigger>
        <Button variant="outline" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem] " />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="py-6 px-4 grid grid-cols-2 gap-4">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link href={link.href}>
                <div
                  className={cn(
                    "py-4 flex justify-center items-center border rounded-2xl ",
                    pathname === link.href ? "bg-blue-300 dark:bg-blue-800" : ""
                  )}
                >
                  {link.title}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
