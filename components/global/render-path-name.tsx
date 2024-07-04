"use client";

import { usePathname } from "next/navigation";

type Props = {};

export default function RenderPathName({}: Props) {
  const pathname = usePathname();

  function transformPath(path: string): string {
    return path
      .replace("/features/", "")
      .split("/")
      .map((part: string) =>
        part
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char: string) => char.toUpperCase())
      )
      .join(" -> ");
  }

  return <div>{transformPath(pathname)}</div>;
}
