import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight, Package, Terminal, Zap } from "lucide-react";
import Link from "next/link";
import { roboto } from "../layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { title } from "process";
import { Icon } from "@radix-ui/react-select";

type Props = {};

export default function LearnPage({}: Props) {
  return (
    <>
      <div className="min-h-screen mt-6 bg-gradient-to-br from-black via-violet-950/50 to-black text-white font-sans">
        <div className="container mx-auto px-4 py-16">
          <nav className="flex justify-between items-center mb-16">
            <div className="text-2xl font-bold">Kitty Start</div>
          </nav>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pb-10">
            {/* Left side */}
            <div className="lg:w-1/2 space-y-8">
              <h1 className={cn("text-7xl font-bold leading-tight ")}>
                <span className="bg-clip-text text-violet-300 ">
                  Ship Faster
                </span>
                <br />
                <span className="bg-clip-text  text-cyan-300 ">
                  Ship Sexier
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Kickstart your project with our Next.js Shadcn UI boilerplate.
                Create beautiful, responsive UIs with ease and speed.
              </p>
              <div className="flex space-x-4">
                <Button
                  className="rounded-full text-white bg-blue-700"
                  variant={"default"}
                  size={"lg"}
                >
                  <Link href="https://github.com/Faizanahmedsy/kitty-start">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>

            {/* Card for Key Features */}
            <Card className="lg:w-1/2 bg-violet-900 bg-opacity-5 backdrop-filter backdrop-blur-lg shadow-2xl">
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-8">
                  {[
                    {
                      icon: Terminal,
                      title: "Next JS",
                      description: "",
                    },
                    {
                      icon: Zap,
                      title: "Shadcn + Tailwind CSS",
                      description: "",
                    },
                    {
                      icon: Package,
                      title: "TypeScript",
                      description: "",
                    },
                    {
                      icon: Terminal,
                      title: "Tanstack Query",
                      description: "",
                    },
                    {
                      icon: Terminal,
                      title: "Zustand",
                      description: "",
                    },
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-4 p-2 bg-violet-500 rounded-full">
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

          {/* New Section for Admin Panel Template */}
          <div className="mt-16">
            <h2 className="text-5xl font-bold mb-8 text-center">
              Powerful Web App Template
            </h2>
            <p className="text-center text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Get a sleek and modern web app right out of the box. Manage users,
              analyze data, and streamline your app management with a UI built
              for efficiency.
            </p>

            <div className="relative w-full flex justify-center items-center rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/kitty-start-img.png"
                alt="Admin Panel Template"
                // layout="fill"
                // objectFit="cover"
                width={1200}
                height={800}
                className="rounded-xl"
              />
            </div>

            <div className="flex justify-center mt-8">
              <Link href="https://github.com/faizanahmedsy/kitty-start">
                <Button className="rounded-full text-white bg-cyan-900 hover:bg-cyan-800">
                  Explore the Template
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
