import Hero from "@/components/modules/hero";
import NewProjectTemplate from "@/components/modules/new-project-template/new-project-template";
import Resources from "@/components/modules/resources";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-t from-black to-blue-900/45">
        <Hero />
        <NewProjectTemplate />
        {/* <Resources /> */}
      </div>
    </>
  );
}
