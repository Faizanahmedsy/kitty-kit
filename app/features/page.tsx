import UnderConstruction from "@/components/modules/under-construction";
import React from "react";

export default function Page() {
  return (
    <>
      {/* <div>
        <div className="flex flex-col lg:flex-row">
          <div className="hidden lg:block w-[20%] min-h-screen bg-rose-300">
            {Array.from({ length: 10 }).map((item, index) => (
              <>
                <div className="m-2 p-2 border rounded-md">{index}</div>
              </>
            ))}
          </div>
          <div className="w-full ld:w-[80%] min-h-screen bg-blue-300">
            <h1>Content</h1>
          </div>
        </div>
      </div> */}

      <UnderConstruction />
    </>
  );
}
