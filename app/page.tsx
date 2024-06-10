import Hero from "@/components/module/hero";
import Textv2 from "@/components/module/textv2";
import { Card, CardTitle } from "@/components/ui/card";

export default function Home() {
  const Data = [
    {
      title: "Magic Ui",
      href: "https://magicui.design/",
    },
    {
      title: "Shadcn",
      href: "https://ui.shadcn.com/",
    },
  ];

  return (
    <>
      <Hero />

      <div className="px-32">
        <Textv2 className="py-4">Resources</Textv2>
        <div className="grid grid-cols-4 gap-4">
          {Data.map((item, i) => (
            <Card key={i}>
              <div className="p-5">
                <CardTitle>{item.title}</CardTitle>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
