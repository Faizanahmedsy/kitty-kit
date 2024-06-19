import { cn } from "@/lib/utils";
import React from "react";

export default function Textv2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-purple-900 font-bold text-2xl py-2", className)}>
      {children}
    </p>
  );
}
