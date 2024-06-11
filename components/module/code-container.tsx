"use client";
import { CopyBlock } from "react-code-blocks";

export default function CodeContainer({
  item,
}: {
  item: {
    code: string;
    language: string;
    showLineNumbers: boolean;
  };
}) {
  return (
    <CopyBlock
      text={item.code}
      language={item.language}
      showLineNumbers={item.showLineNumbers}
    />
  );
}
