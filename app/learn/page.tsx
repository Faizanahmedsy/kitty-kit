import React from "react";

type Props = {};

export default function LearnPage({}: Props) {
  return (
    <>
      <div className="min-h-[calc(100vh-150px)]">
        <div className="flex justify-center items-center bg-gradient-to-t from-blue-900 to-black rounded-b-full">
          <h3 className="text-4xl py-24 font-bold bg-gradient-to-t from-slate-50 to-slate-400 bg-clip-text text-transparent">
            Learn by completing real word projects, with proper and easy to
            understand step
          </h3>
        </div>
        <div className="py-10 px-32"></div>
      </div>
    </>
  );
}
