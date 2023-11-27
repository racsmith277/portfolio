"use client";
import SectionHeader from "@/components/SectionHeader";
import { projectsConfig } from "./projects";
import ProjectCard from "@/components/Projects/ProjectCard";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";

const visibleProjects = projectsConfig.slice(0, 4);
const hiddenProjects = projectsConfig.slice(4);

function Work() {
  const [viewAll, setViewAll] = useState(false);
  const isMobile = useIsMobile();

  const projects = isMobile ? projectsConfig : visibleProjects

  console.log(isMobile)

  return (
    <div className="min-h-screen bg-neutral-100 md:flex md:flex-col">
      <SectionHeader color="emerald" title="My Work" />
      <div className="mx-auto max-w-4xl p-4 md:flex md:flex-1 md:items-center md:px-0">
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
          <Transition
            className='w-full col-span-1 hidden md:block'
            show={viewAll}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {hiddenProjects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </Transition>
          <div className="col-span-2 hidden md:block">
            <button className="w-full pt-4" onClick={()=>setViewAll(!viewAll)}>
              <h2 className="text-center">{viewAll ? 'See Less': 'See More' }</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
