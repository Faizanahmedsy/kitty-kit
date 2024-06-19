"use client";
import { Card, CardTitle } from "@/components/ui/card";
import { PostData } from "@/lib/database";
import { BASEURL } from "@/services/endPoints";
import { Link as LucidLinkIcon } from "lucide-react";
import Link from "next/link";

// async function getData() {
//   const res = await fetch(`${BASEURL}api/resources`);

//   // console.log("res: ", process.env.NEXT_PUBLIC_API_ENDPOINT);

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch resources");
//   }

//   if (res.ok) {
//     // console.log(res);
//   }

//   return res.json();
// }

export default function ResourcesCards() {
  return (
    <main>
      <div className="grid grid-cols-4 gap-4">
        {PostData.map((item: any, i: number) => (
          <Card key={i}>
            <div className="p-5">
              <CardTitle>{item.title}</CardTitle>
              <div>
                <div className="flex items-center justify-end">
                  <Link href={item.href}>
                    <LucidLinkIcon />
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
