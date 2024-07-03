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
              <div className="bg-blue-100 rounded-md p-2">Miscellaneous</div>
            </div>
          </div>
        </aside>

        <div className="lg:min-w-[80%] p-10 border">
          <div>
            <h2 className="text-2xl font-bold">Miscellaneous</h2>
            <Separator />

            <div className="grid md:grid-cols-3 gap-3 my-5">
              {MissalinousFeaturedData.map((item, index) => {
                return (
                  <>
                    <div key={index} className="border p-4 rounded-lg ">
                      <div className="flex justify-between">
                        <div className="font-bold text-xl">{item.title}</div>
                        {item.fav && (
                          <div className="text-sm font-bold p-1 rounded-sm bg-orange-100 px-2">
                            Fav
                          </div>
                        )}
                      </div>
                      <div className="h-20 overflow-y-auto">{item.sub}</div>
                      <div className="flex gap-6">
                        {item.link && (
                          <Link
                            href={item.link}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <div className="text-blue-600 flex gap-2">
                              <Link2 />
                              website
                            </div>
                          </Link>
                        )}
                        {item.github && (
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
                        )}
                        {item.liveDemo && (
                          <div className="flex gap-6">
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
                        )}
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
