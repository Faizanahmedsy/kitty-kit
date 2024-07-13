"use client";
import { a11yDark, CopyBlock } from "react-code-blocks";

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
      theme={a11yDark}
      text={item.code}
      language={item.language}
      showLineNumbers={item.showLineNumbers}
    />
  );
}
