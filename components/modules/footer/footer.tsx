import { Separator } from "@/components/ui/separator";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <Separator />
      <div className="flex justify-center items-center w-full font-extrabold">
        <div className="text-md py-6">
          Made By Faizanahmed for{" "}
          <span className="text-blue-800">devstree</span>
        </div>
      </div>
    </footer>
  );
}
