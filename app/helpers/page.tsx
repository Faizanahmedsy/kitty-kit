import HelpersCards from "@/components/module/helper-data-block";
import { SquareArrowOutUpRight } from "lucide-react";

export default function HelpersPage() {
  return (
    <div className="px-32 py-10 gap-2 min-h-[calc(100vh-150px)]">
      <div className="grid grid-cols-4">
        <div className="bg-blue-300 text-blue-800 font-extrabold rounded-lg p-4 flex justify-between">
          <div>Next Js Project Skeleton</div>
          <div>
            <SquareArrowOutUpRight />
          </div>
        </div>
      </div>
      <HelpersCards />
    </div>
  );
}
