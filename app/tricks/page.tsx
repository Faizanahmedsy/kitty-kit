"use client";
import Textv2 from "@/components/module/textv2";

export default function TricksPage() {
  return (
    <div className="flex  px-32  py-10  h-[calc(100vh-150px)] gap-5">
      <div>
        {/* <CopyBlock
          text={props.code}
          language={props.language}
          showLineNumbers={props.showLineNumbers}
        /> */}
      </div>
      <Textv2>Hello</Textv2>
      <Textv2>Hello</Textv2>
    </div>
  );
}
