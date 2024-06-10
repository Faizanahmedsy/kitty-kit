import Textv2 from "@/components/module/textv2";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Link as LucidLinkIcon } from "lucide-react";
import Link from "next/link";

export default function Resources() {
  const Data = [
    {
      title: "Magic Ui",
      href: "https://magicui.design/",
    },
    {
      title: "Shadcn",
      href: "https://ui.shadcn.com/",
    },
    {
      title: "Aceternity Ui",
      href: "https://ui.aceternity.com/",
    },
    {
      title: "Lottie Files",
      href: "https://lottiefiles.com/",
    },
    {
      title: "Ui Colors",
      href: "https://uicolors.app/create?ref=producthunt",
    },
  ];
  return (
    <div className="px-32 py-10">
      <Textv2 className="py-4">Resources</Textv2>
      <div className="grid grid-cols-4 gap-4">
        {Data.map((item, i) => (
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
    </div>
  );
}
