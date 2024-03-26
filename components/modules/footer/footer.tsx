import { Separator } from "@/components/ui/separator";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <Separator />
      <div className="flex justify-center items-center w-full">
        <div className="text-md py-6">Made with 💘 By Faizanahmed</div>
      </div>
    </footer>
  );
}
