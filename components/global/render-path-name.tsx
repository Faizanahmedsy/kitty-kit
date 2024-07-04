"use client";

import { usePathname } from "next/navigation";

type Props = {};

export default function RenderPathName({}: Props) {
  const pathname = usePathname();
  function transformPath(path) {
    return path
      .replace("/features/", "") // Remove the leading '/features/'
      .split("/") // Split by '/'
      .map(
        (
          part // Transform each part
        ) =>
          part
            .replace(/-/g, " ") // Replace hyphens with spaces
            .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize the first letter of each word
      )
      .join(" -> "); // Join with ' -> '
  }

  return <div>{transformPath(pathname)}</div>;
}
