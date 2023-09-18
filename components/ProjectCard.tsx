import Image, { StaticImageData } from "next/image";
import { ChevronRightIcon } from "./Icons";
export interface ProjectCardProps {
  icon: string | StaticImageData;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  description: string;
  stack: string;
}

function ProjectCard(props: ProjectCardProps) {
  return (
    <button className='bg-black hover:gradient p-[1px] text-left focus:opacity-70'>
    <div className="flex gap-4 p-4 bg-white hover:gradient-transparent ">
      <div>
        <Image src={props.icon} height={48} width={48} alt="company logo" />
      </div>
      <div className="flex-1">
        <h2 className="text-base">{props.title}</h2>
        <p className="text-xs text-neutral-400">
          {props.subtitle}
        </p>
      </div>
      <div className={'text-orange-300 self-center'}>
        <ChevronRightIcon />
      </div>
    </div>
    </button>
  );
}

export default ProjectCard
