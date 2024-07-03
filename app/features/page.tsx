import UnderConstruction from "@/components/modules/under-construction";
import { Separator } from "@/components/ui/separator";
import { MissalinousFeaturedData } from "@/lib/database";
import { Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <div className=" min-h-screen flex">
        <aside className="lg:min-w-[20%] min-h-screen border">
          <div className="p-10">
            <h2 className="text-3xl font-bold">Features</h2>

            <div className="my-5">
              <div className="bg-blue-100 rounded-md p-2">Miscullenious</div>
            </div>
          </div>
        </aside>

        <div className="lg:min-w-[80%] p-10 border">
          <div>
            <h2 className="text-2xl font-bold">Miscullenious</h2>
            <Separator />

            <div className="grid md:grid-cols-3 gap-3 my-5">
              {MissalinousFeaturedData.map((item, index) => {
                return (
                  <>
                    <div key={index} className="border p-4 rounded-lg">
                      <div className="font-bold text-xl">{item.title}</div>
                      <div className="">{item.sub}</div>
                      <div className="flex gap-6">
                        <Link
                          href={item.github}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="text-blue-600 flex gap-2">
                            <Link2 />
                            Github
                          </div>
                        </Link>
                        <Link
                          href={item.liveDemo}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="text-blue-600 flex gap-2">
                            <Link2 />
                            Livedemo
                          </div>
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
