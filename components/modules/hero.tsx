import { ArrowBigRight } from "lucide-react";
import Link from "next/link";
import GradualSpacing from "../magicui/gradual-spacing";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-50px)] ">
        {/* //New Compoent cta */}
        <Link href="/kitty-cli">
          <div className="flex justify-center items-center bg-cyan-400 rounded-full px-4 text-cyan-900 font-bold">
            <h2>Introducing Kitty Cli</h2>
            <ArrowBigRight className="ml-2" />
          </div>
        </Link>

        <div className="flex">
          <GradualSpacing
            className="text-6xl  font-extrabold tracking-[-0.02em] text-blue-700  dark:text-slate-200 md:text-[6rem] md:leading-[7.0rem]"
            text="Kitty Kit, "
          />
          <GradualSpacing
            className="text-6xl  font-extrabold tracking-[-0.02em] text-black dark:text-slate-200 md:text-[6rem] md:leading-[7.0rem]"
            text="a frontend"
            delayMultiple={0.04}
          />
        </div>
        <div>
          <GradualSpacing
            className="text-6xl  font-extrabold tracking-[-0.02em] text-black dark:text-slate-200 md:text-[6rem] md:leading-[7.0rem]"
            text="toolkit for the web"
            delayMultiple={0.04}
          />
        </div>
        <p className="text-center">
          It is a collection of tools, code snippets components, and templates{" "}
          <br />
          to help you build your next project faster.
        </p>
        <Link href="/features/miscellaneous">
          <Button className="mt-10 bg-cyan-700 text-cyan-50 rounded-full">
            Get Started
            <ArrowBigRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </>
  );
}
