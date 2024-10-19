"use client";

import Lottie from "lottie-react";
import Animation from "@/public/lottie/maintinace.json";

export default function UnderConstructionV2() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-slate-100 p-4">
      <div className="mb-8">
        <Lottie
          animationData={Animation}
          loop={true}
          className="w-[65vw] h-[65vh]"
        />
      </div>
      <div className="flex justify-center items-center flex-col space-y-4">
        <p className="text-lg text-cyan-700 text-center font-medium">
          Our website is currently undergoing maintenance. We apologize for any
          inconvenience and appreciate your patience.
        </p>
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold text-gray-700">
            Contact us at{" "}
            <a
              href="mailto:info@zikasha.com"
              className="text-violet-600 underline hover:text-violet-800 transition-colors"
            >
              info@zikasha.com
            </a>
          </h2>
          <h2 className="text-xl font-semibold text-gray-700">
            For careers, contact us at{" "}
            <a
              href="mailto:work@zikasha.com"
              className="text-violet-600 underline hover:text-violet-800 transition-colors"
            >
              work@zikasha.com
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
