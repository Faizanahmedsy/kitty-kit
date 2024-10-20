import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight, Package, Terminal, Zap } from "lucide-react";
import Link from "next/link";
import { roboto } from "../layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {};

export default function KittyCliPage({}: Props) {
  return (
    <>
      <div className="min-h-screen mt-6 bg-gradient-to-br from-black via-teal-950/50 to-black text-white font-sans">
        <div className="container mx-auto px-4 py-16">
          <nav className="flex justify-between items-center mb-16">
            <div className="text-2xl font-bold">Kitty CLI</div>
            {/* <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 flex items-center">
              Get Started <ChevronRight className="ml-2" size={18} />
            </button> */}
          </nav>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pb-10">
            {/* Left side */}
            <div className="lg:w-1/2 space-y-8">
              <h1 className={cn("text-7xl font-bold leading-tight ")}>
                <span className="bg-clip-text text-teal-300 ">Build More</span>
                <br />
                <span className="bg-clip-text  text-cyan-300 ">Type Less</span>
              </h1>
              <p className="text-xl text-gray-300">
                Streamline your workflow with our powerful CLI. Build robust
                React modules in seconds, and take your development speed to the
                next level.
              </p>
              <div className="flex space-x-4">
                <Link href="https://faizanahmed-main.notion.site/Kitty-Cli-v0-1-2-Demo-49a04039730f40aab5820c32c9652878">
                  <Button className="rounded-full text-white bg-teal-800">
                    Learn More
                  </Button>
                </Link>
                <Button className="rounded-full text-white" variant={"outline"}>
                  <Link href="https://github.com/faizanahmedsy/kitty-kit">
                    {" "}
                    Help Me Cook
                  </Link>
                </Button>
              </div>
            </div>

            <Card className="lg:w-1/2 bg-teal-900 bg-opacity-5 backdrop-filter backdrop-blur-lg  shadow-2xl">
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-8">
                  {[
                    {
                      icon: Terminal,
                      title: "Automated Module Creation",
                      description:
                        "Generate complete React modules with a single command.",
                    },
                    {
                      icon: Zap,
                      title: "Intelligent Templating",
                      description:
                        "Customizable templates that adapt to your project structure.",
                    },
                    {
                      icon: Package,
                      title: "Modular Architecture",
                      description:
                        "Create organized, scalable file structures automatically.",
                    },
                    {
                      icon: Terminal,
                      title: "Language and Framework Agnostic",
                      description:
                        "Works with all languages and frameworks, Kitty CLI is designed to work with any stack you throw at it.",
                    },
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-4 p-2 bg-teal-500 rounded-full">
                        <feature.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* How It Works Section */}
          <div className="mt-32">
            <h3 className="text-3xl font-bold mb-8 text-slate-300">
              How It Works
            </h3>
            <ol className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <div className="mr-4 p-2 bg-teal-500 rounded-full">
                  <Terminal className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">
                    Step 1: Add this function in your project
                  </h4>
                  <Link
                    href={
                      "https://github.com/Faizanahmedsy/kitty-kit/blob/main/cli/generate-module-v4.mjs"
                    }
                    className={cn(buttonVariants({ variant: "outline" }))}
                  >
                    Github Link
                  </Link>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 p-2 bg-teal-500 rounded-full">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">
                    Step 2: Prepare Templates
                  </h4>
                  <p>
                    Place your template JSON files in the{" "}
                    <strong>module-templates</strong> directory.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 p-2 bg-teal-500 rounded-full">
                  <Package className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">
                    Step 3: Run the Script
                  </h4>
                  <p>
                    Use the terminal to navigate to your project directory and
                    run:
                  </p>
                  <pre className="bg-slate-800 p-2 rounded mt-2">
                    node createModule.js &lt;module-name&gt;
                  </pre>
                  <p>
                    Replace <strong>&lt;module-name&gt;</strong> with the name
                    of your module.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 p-2 bg-teal-500 rounded-full">
                  <Terminal className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">
                    Step 4: Enjoy Your Module
                  </h4>
                  <p>
                    Your new module will be created with all the necessary files
                    and structure.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
