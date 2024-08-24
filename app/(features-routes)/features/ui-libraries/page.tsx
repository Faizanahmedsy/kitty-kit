import { componentData, uiLibrariesData } from "@/lib/database";
import { Link2 } from "lucide-react";
import Link from "next/link";

type Props = {};

export default function Page({}: Props) {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-3 my-5">
        {uiLibrariesData.map((item, index) => {
          return (
            <>
              <div key={index} className="border p-4 rounded-lg ">
                <div className="flex justify-between">
                  <div className="font-bold text-xl">{item.title}</div>
                  {item.fav && (
                    <div className="text-sm font-bold p-1 rounded-sm bg-orange-100 px-2 dark:bg-orange-800 h-fit">
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
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
