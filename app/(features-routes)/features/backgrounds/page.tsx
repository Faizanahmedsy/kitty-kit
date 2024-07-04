import { BackgroundData, LandingComponentsData } from "@/lib/database";
import { Link2 } from "lucide-react";
import Link from "next/link";

type Props = {};

export default function Page({}: Props) {
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-3 my-5">
        {BackgroundData.map((item, index) => {
          return (
            <>
              <div key={index} className="border p-4 rounded-lg ">
                <div className="flex justify-between gap-4">
                  <div className="font-bold text-xl">{item.title}</div>
                </div>
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
    </div>
  );
}
