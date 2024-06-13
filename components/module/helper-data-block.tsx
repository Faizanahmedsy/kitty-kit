import Textv3 from "@/components/module/textv3";
import React from "react";
import CodeContainer from "./code-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

async function getData() {
  const res = await fetch(`http://https://kitty-kit.vercel.app/api/helpers`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch helpers");
  }

  if (res.ok) {
    // console.log(res);
  }

  return res.json();
}

export default async function HelpersCards() {
  const { data } = await getData();

  return (
    <div className="">
      {data.map((item: any, i: any) => (
        <Accordion type="single" collapsible key={i}>
          <AccordionItem value={"item-1"}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              <CodeContainer item={item} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}
