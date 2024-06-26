import TricksCards from "@/components/modules/tricks-data-block";
import Textv2 from "@/components/modules/textv2";
import UnderConstruction from "@/components/modules/under-construction";

export default function TricksPage() {
  return (
    <div className="px-[20%] py-10 gap-2 min-h-[calc(100vh-150px)]">
      <div className="grid grid-cols-4">
        {/* <div className="bg-blue-300 text-blue-800 font-extrabold rounded-lg p-4 flex justify-between">
          <div>Next Js Project Skeleton</div>
          <div>
            <SquareArrowOutUpRight />
          </div>
        </div> */}
      </div>
      <TricksCards />
    </div>
  );
}
