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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
  const navLinks: { title: string; href: string }[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Helpers",
      href: "/helpers",
    },
    {
      title: "Tricks",
      href: "/tricks",
    },
    {
      title: "Features",
      href: "/features",
    },
  ];

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
      <div className="p-7 flex justify-between items-center ">
        <Logo />
        <div className="w-[40%]">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link, index) => (
                <>
                  <NavigationMenuItem key={index}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
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
      </div>
    </>
  );
}
