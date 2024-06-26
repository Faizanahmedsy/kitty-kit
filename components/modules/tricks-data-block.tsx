import Textv3 from "@/components/modules/textv3";
import CodeContainer from "./code-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BASEURL } from "@/services/endPoints";
import { TricksData } from "@/lib/database";

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

export default function TricksCards() {
  return (
    <>
      {TricksData.map((item: any, i: any) => (
        <Accordion type="single" collapsible key={i}>
          <AccordionItem value={"item-1"}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              <div className=" flex  flex-col justify-center">
                <div className="border rounded-2xl p-4 font-bold mb-3">
                  <div>Explaination</div>
                  <div className="text-blue-700 text-lg pr-[30%] text-start">
                    {item.explain}
                  </div>
                </div>
                <CodeContainer item={item.codeblock} />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
}
