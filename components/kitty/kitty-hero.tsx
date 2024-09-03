import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { poppins } from "@/lib/fonts";
import Link from "next/link";

const KittyHero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full md:h-[calc(100vh-80px)] text-center p-16 pt-24 md:p-40 bg-gradient-to-b from-white to-violet-200 ">
      <h1
        className={cn(
          "animate-fade-in [--ani-delay:200ms] opacity-0 translate-y-[-1rem] text-4xl  md:text-6xl font-bold py-7",
          poppins.className
        )}
      >
        An <span className="text-brand-primary ">Intellectual</span> perspective{" "}
        <br /> towards understanding{" "}
        <span className="text-brand-primary">Islam</span>
      </h1>

      <p
        className={cn(
          "animate-fade-in [--ani-delay:400ms] opacity-0 translate-y-[-1rem] md:text-2xl font-semibold text-zinc-500 md:px-40"
        )}
      >
        Next Gen Muslims is an initiative to provide a authentic Islamic
        education to the youth and to help them translate Islam into their daily
        lives.
      </p>

      <div className="animate-fade-in justify-center [--ani-delay:600ms] opacity-0 translate-y-[-1rem] flex-col md:flex-row w-full flex gap-6 md:gap-4 m-4">
        {/* <Button variant="outline">Explore</Button> */}
        {/* <Link href="#favorites">
          <Button>Get Started</Button>
        </Link> */}
      </div>
    </div>
  );
};

export default KittyHero;
