import Textv3 from "@/components/modules/textv3";
import CodeContainer from "./code-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BASEURL } from "@/services/endPoints";
import { HelpersData } from "@/lib/database";

// async function getData() {
//   const res = await fetch(`${BASEURL}api/helpers`);

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch helpers");
//   }

//   if (res.ok) {
//     // console.log(res);
//   }

//   return res.json();
// }

export default function HelpersCards() {
  return (
    <>
      {HelpersData.map((item: any, i: any) => (
        <Accordion type="single" collapsible key={i}>
          <AccordionItem value={"item-1"}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              <CodeContainer item={item} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
}
