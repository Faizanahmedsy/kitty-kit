import Textv2 from "@/components/module/textv2";
import ResourcesCards from "./resources-cards";

export default function Resources() {
  return (
    <div className="px-32 py-10">
      <Textv2 className="py-4">Resources</Textv2>
      <ResourcesCards />
    </div>
  );
}
