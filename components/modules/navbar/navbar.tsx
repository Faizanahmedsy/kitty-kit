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

export function Logo() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="font-bold text-blue-800 text-2xl">Kitty Kit</div>
        <div className="border-2 rounded-sm mx-2 text-xs p-1 bg-zinc-200">
          beta
        </div>
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
      href: "/features/miscellaneous",
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
                  <div key={index} className="">
                    <Link href={link.href} legacyBehavior passHref>
                      <div
                        className={cn(
                          "text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-blue-100 hover:text-accent-foreground focus:bg-blue-50 focus:text-accent-foreground px-4 py-2 rounded-2xl cursor-pointer select-none",
                          pathname === link.href
                            ? "bg-blue-100  text-accent-foreground"
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
