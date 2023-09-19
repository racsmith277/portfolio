import SectionHeader from "@/components/SectionHeader";
import { projectsConfig } from "./projects";
import ProjectCard from "@/components/Projects/ProjectCard";

function Work() {
  return (
    <div className="min-h-screen bg-neutral-100 md:flex md:flex-col">
      <SectionHeader color="emerald" title="My Work" />
      <div className="mx-auto max-w-4xl p-4 md:flex md:flex-1 md:items-center md:px-0">
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2">
          {projectsConfig.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
