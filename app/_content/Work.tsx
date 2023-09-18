import SectionHeader from "@/components/SectionHeader";
import { projectsConfig } from "./projects";
import ProjectCard from "@/components/ProjectCard";


function Work() {
  return (
    <div className="h-screen bg-neutral-100">
      <SectionHeader color="emerald" title="My Work" />
      <div className="flex flex-col gap-3 p-4">
        {projectsConfig.map( (p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </div>
  );
}

export default Work;
