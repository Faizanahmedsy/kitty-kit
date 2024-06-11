import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  return (
    <>
      <div className="px-32 py-10 gap-2 flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <Accordion type="single" collapsible key={i}>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </>
  );
}
