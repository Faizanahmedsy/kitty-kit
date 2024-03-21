import { Button } from "@/components/ui/button";
import { Button as Button2 } from "@/components/ui/duo-button";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";

export default function ButtonsModule() {
  return (
    <div className="p-32 flex justify-center flex-col items-center h-screen gap-5">
      <div>ShadCn Defaults</div>
      <Separator />
      <div className="flex gap-7">
        <Button>Hello World</Button>
        <Button variant={"destructive"}>Hello World</Button>
        <Button variant={"ghost"}>Hello World</Button>
        <Button variant={"outline"}>Hello World</Button>
        <Button variant={"secondary"}>Hello World</Button>
        <Button variant={"link"}>Hello World</Button>
        <Button variant={"custom"}>Hello World</Button>
      </div>

      <div>ShadCn Defaults</div>
      <Separator />

      <div className="grid grid-cols-5 gap-7">
        {/* <Button2 variant={"locked"}>Hello World</Button2> */}
        <Button2 variant={"default"}>Hello World</Button2>
        <Button2 variant={"primary"}>Hello World</Button2>
        <Button2 variant={"primaryOutline"}>Hello World</Button2>
        <Button2 variant={"secondary"}>Hello World</Button2>{" "}
        <Button2 variant={"secondaryOutline"}>Hello World</Button2>{" "}
        <Button2 variant={"secondary"}>Hello World</Button2>{" "}
        <Button2 variant={"danger"}>Hello World</Button2>{" "}
        <Button2 variant={"dangerOutline"}>Hello World</Button2>{" "}
        <Button2 variant={"super"}>Hello World</Button2>{" "}
        <Button2 variant={"superOutline"}>Hello World</Button2>{" "}
        <Button2 variant={"ghost"}>Hello World</Button2>{" "}
      </div>
    </div>
  );
}
