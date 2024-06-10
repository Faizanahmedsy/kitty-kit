import React from "react";
import WordPullUp from "../magicui/word-pull-up";
import GradualSpacing from "../magicui/gradual-spacing";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-150px)]">
      {/* <h1 className="text-6xl font-extrabold ">
          <span className="text-blue-700 mr-6">Kitty Kit</span>
       
        </h1> */}
      <div className="flex">
        <GradualSpacing
          className="text-6xl  font-extrabold tracking-[-0.02em] text-blue-700  dark:text-white md:text-7xl md:leading-[5rem]"
          text="Kitty Kit, "
        />
        <GradualSpacing
          className="text-6xl  font-extrabold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="a frontend"
          delayMultiple={0.04}
        />
      </div>
      <div>
        <GradualSpacing
          className="text-6xl  font-extrabold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="toolkit for the web"
          delayMultiple={0.04}
        />
      </div>
    </div>
  );
}
