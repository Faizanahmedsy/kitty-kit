import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <Separator />
      <div className="flex justify-center items-center w-full font-extrabold">
        <div className="text-md py-6">
          Made with ❤️ by
          <span className="text-blue-800 ml-1">
            <Link href="https://www.linkedin.com/in/faizanahmed-saiyed/">
              Faizanahmed
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
