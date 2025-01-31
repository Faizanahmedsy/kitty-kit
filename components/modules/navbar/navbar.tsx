"use client";
import Link from "next/link";
import React from "react";
import { Icons } from "@/components/icons";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/global/theme-toggle";
import { Menu } from "lucide-react";
const MobileNavbar = dynamic(
  () => import("@/components/modules/navbar/mobile-navbar"),
  { ssr: false }
);
import { navLinks } from "@/constants";
import dynamic from "next/dynamic";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Logo() {
  return (
    <>
      <div className="flex justify-start items-center w-[200px]">
        <div className="font-bold text-blue-800 text-2xl dark:text-blue-300">
          Kitty Kit
        </div>
        <Tooltip>
          <TooltipTrigger>
            <div className="border-2 rounded-sm mx-2 text-xs p-1 bg-zinc-200 dark:bg-zinc-800">
              beta
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>This app is under development, expect a lot of bugs</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  const pathname = usePathname();
  console.log("pathname", pathname, props.href);
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            pathname === props.href ? "bg-rose-800 text-accent-foreground" : "",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Navbar() {
  const pathname = usePathname();

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Calender",
      href: "/calender",
      description: "",
    },
    {
      title: "Buttons",
      href: "/buttons",
      description: "",
    },
  ];

  return (
    <>
      <div className="px-7 md:py-2 py-4 flex justify-between items-center fixed  w-full top-0 left-0 bg-white dark:bg-background z-50">
        <Logo />

        <div className="md:block hidden">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link, index) => (
                <>
                  <div key={index} className="">
                    <Link href={link.href} legacyBehavior passHref>
                      <div
                        className={cn(
                          `text-sm font-medium  leading-none no-underline outline-none transition-colors hover:border-blue-100 dark:hover:border-blue-800  hover:text-accent-foreground focus:border-blue-50   dark:focus:border-blue-800   
                      
                          hover:bg-blue-950/80
                         
                          focus:text-accent-foreground  px-5 py-2 rounded-2xl cursor-pointer select-none`,
                          pathname === link.href
                            ? "bg-blue-100 dark:bg-blue-700  text-accent-foreground"
                            : ""
                        )}
                      >
                        {link.title}
                      </div>
                    </Link>
                  </div>
                </>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Others</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component: any) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="md:flex justify-end hidden  w-[200px]">
          <ThemeToggle />
        </div>
        <div className="md:hidden flex justify-center items-center gap-4">
          <ThemeToggle />
          <MobileNavbar />
        </div>
      </div>
    </>
  );
}
