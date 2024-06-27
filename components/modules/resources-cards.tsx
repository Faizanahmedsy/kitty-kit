"use client";
import { Card, CardTitle } from "@/components/ui/card";
import { PostData } from "@/lib/database";
import { BASEURL } from "@/services/endPoints";
import { Link as LucidLinkIcon } from "lucide-react";
import Link from "next/link";

export default function ResourcesCards() {
  return (
    <main>
      <div className="grid grid-cols-4 gap-4">
        {PostData.map((item: any, i: number) => (
          <Card key={i}>
            <div className="p-5">
              <CardTitle>{item.title}</CardTitle>
              {item.des && <p className="text-sm text-gray-500">{item.des}</p>}
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
