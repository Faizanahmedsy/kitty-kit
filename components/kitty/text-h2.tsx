import React from "react";

export default function TextH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="scroll-m-20 pb-5 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}
