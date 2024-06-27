import HelpersCards from "@/components/modules/helper-data-block";
import { SquareArrowOutUpRight } from "lucide-react";

export default function HelpersPage() {
  return (
    <div className="px-[30%] py-10 gap-2 min-h-[calc(100vh-150px)]">
      <div className="grid grid-cols-4"></div>
      <HelpersCards />
    </div>
  );
}
