import Textv3 from "@/components/module/textv3";
import React from "react";
import CodeContainer from "./code-container";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/helpers`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch helpers");
  }

  if (res.ok) {
    // console.log(res);
  }

  return res.json();
}

export default async function HelpersCards() {
  const { data } = await getData();

  return (
    <main>
      <div className="flex">
        {data.map((item: any, i: number) => (
          <div key={i}>
            <Textv3>{item.title}</Textv3>
            <CodeContainer item={item} />
          </div>
        ))}
      </div>
    </main>
  );
}
