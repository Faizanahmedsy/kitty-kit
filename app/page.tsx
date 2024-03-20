import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-32 flex justify-center items-center h-screen">
      <Button
        style={{
          background:
            "linear-gradient(91.44deg, #FFC501 4.3%, #FF7F1B 105.87%)",
          color: "#841912",
        }}
      >
        Hello world
      </Button>
    </div>
  );
}
