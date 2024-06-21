"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, monoBlue } from "react-code-blocks";
import { toast } from "sonner";
import CopyBtn from "../copy-btn";

export const codeText = `git clone https://github.com/Faizanahmedsy/next-starter-v1.git`;
export default function NewProjectTemplate() {
  function copyToClipboard() {
    toast.success("Copied to clipboard");
    navigator.clipboard.writeText(codeText);
  }

  return (
    <div className="px-32 py-10">
      <div className="border-[4px]  rounded-3xl p-14">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-4xl font-bold">New Project Template</h2>
            <p className="py-4">
              This template is already preconfigured with all the necessary
              tools and configurations to get you started with your next
              project.
            </p>
          </div>
          <div>
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold text-muted-foreground my-2">
                Clone the template repo
              </h2>
              <CopyBtn />
            </div>
            <Code text={codeText} language="shell" theme={monoBlue} />
          </div>
        </div>
        <p className="py-4 font-semibold text-muted-foreground">Tech Stack</p>
        <div className="flex gap-2">
          <Badge>Next.js</Badge>
          <Badge>Typescript</Badge>
          <Badge>Tailwind</Badge>
          <Badge>Next Themes</Badge>
          <Badge>Shadcn UI</Badge>
          <Badge>React Query</Badge>
          <Badge>Zustand</Badge>
          <Badge>axios</Badge>
          <Badge>react-hook-form</Badge>
          <Badge>Zod</Badge>
        </div>
      </div>
    </div>
  );
}
