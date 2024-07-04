import { LandingComponentsData } from "@/lib/database";
import { Link2 } from "lucide-react";
import Link from "next/link";

type Props = {};

export default function Page({}: Props) {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-3 my-5">
        {LandingComponentsData.map((item, index) => {
          return (
            <>
              <div key={index} className="border p-4 rounded-lg ">
                <div className="flex justify-between">
                  <div className="font-bold text-xl">{item.title}</div>
                </div>
                <div className="h-20 overflow-y-auto">{item.sub}</div>

                {item.tech && item.tech.length > 0 && (
                  <div className="flex gap-4 mb-3">
                    {item.tech.map((techItem, index) => (
                      <div
                        key={index}
                        className="text-sm font-bold p-1 rounded-sm bg-zinc-200 px-2"
                      >
                        {techItem}
                      </div>
                    ))}
                  </div>
                )}

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
  );
}
