"use client";
import UnderConstruction from "@/components/modules/under-construction";
import UnderConstructionV2 from "@/components/UnderConstructionV2";
import { PRODUCTION_MODE } from "@/constants";
type Props = {};

//TODO : added 6 step conunte
// drag and drop todo list for the toopics

// step 1 : learn important concepts
//step 2:

export default function LearnPage({}: Props) {
  const projects = [
    {
      title: "Todo List",
      description: "Simple todo list app with frontend only",
      steps: [
        "Input form to take todo title",
        "Add todos in an array and display result",
        "Remove todo",
        "Handle the local storage",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-[calc(100vh-150px)]">
        <div className="flex justify-center items-center bg-gradient-to-t from-blue-100 to-white  dark:from-blue-900 dark:to-black md:rounded-b-full ">
          <h3 className="md:text-4xl text-2xl md:py-24 py-10 pt-20 md:pt-auto px-32 text-center md:px-auto font-bold bg-gradient-to-t from-slate-800 to-slate-50 dark:from-slate-50 dark:to-slate-400 bg-clip-text text-transparent">
            Learn by completing real word projects, with proper and easy to
            understand step
          </h3>
        </div>
        {PRODUCTION_MODE ? (
          <UnderConstruction />
        ) : (
          <div className="py-10 md:px-32 px-10">
            <div className="grid md:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <div key={index} className="border-2 rounded-2xl ">
                  <div className="bg-gradient-to-t    from-emerald-50 to-emerald-300 dark:from-emerald-400 dark:to-emerald-700 py-4 px-10 flex items-center rounded-t-2xl ">
                    <h3 className="text-2xl font-bold dark:text-yellow-50 text-emerald-900">
                      {project.title}
                    </h3>
                  </div>
                  <div className="px-10 py-4">
                    <p className="pb-2">{project.description}</p>
                    <ol>
                      {project.steps.map((step, index) => (
                        <li key={index}>
                          {index + 1} {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
