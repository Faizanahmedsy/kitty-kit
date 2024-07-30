import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, MailOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <Separator />
      <div className="flex flex-col justify-center items-center w-full font-extrabold gap-2">
        <div className="text-md p-6">
          Made with ❤️ by
          <span className="text-blue-800 ml-1">
            <Link href="https://www.devstree.ca/">Devstree IT</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
