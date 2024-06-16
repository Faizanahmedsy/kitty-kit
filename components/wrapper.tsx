import { cn } from "@/lib/utils";
import React from "react";

export default function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("py-10 md:px-32 px-10", className)}>{children}</div>
  );
}
