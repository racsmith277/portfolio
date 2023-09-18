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
    <button className="hover:gradient bg-black p-[1px] text-left focus:opacity-70">
      <div className="hover:gradient-transparent bg-white p-4">
        <div className="flex gap-4">
          <div>
            <Image src={props.icon} height={48} width={48} alt="company logo" />
          </div>
          <div className="flex-1">
            <h2 className="text-base">{props.title}</h2>
            <p className="text-xs text-neutral-400">{props.subtitle}</p>
          </div>
          <div className={"self-center text-orange-300 md:hidden"}>
            <ChevronRightIcon />
          </div>
        </div>
        <div className='hidden md:flex flex-col gap-4'>
          <div className='border-b border-neutral-200 pt-4' />
          <div>
            <p className='text-xs line-clamp-6 h-[96px]'>{props.description}</p>
          </div>
          <div>
            <p className='text-xs text-neutral-400'>Stack: {props.stack}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default ProjectCard;
