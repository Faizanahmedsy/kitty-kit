import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, MailOpen } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <Separator />
      <div className="flex flex-col justify-center items-center w-full font-extrabold gap-2">
        <div className="text-md pt-6">
          Made with ❤️ by
          <span className="text-blue-800  dark:text-blue-200 ml-1">
            <Link href="https://www.linkedin.com/in/faizanahmed-saiyed/">
              Faizanahmed
            </Link>
          </span>
        </div>
        <div className="pb-6 flex gap-6 text-sm">
          <Link
            href={"https://www.linkedin.com/in/faizanahmed-saiyed/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex justify-center items-center gap-1">
              <Linkedin size={15} />
              Linkedin
            </div>
          </Link>
          <Link
            href={"https://github.com/Faizanahmedsy/kitty-kit"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex justify-center items-center gap-1">
              <Github size={15} />
              Github
            </div>
          </Link>
          <Link
            href={"mailto:saiyed.faizanahmed1@gmail.com"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex justify-center items-center gap-1">
              <MailOpen size={15} />
              Mail
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
