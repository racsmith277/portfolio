"use client";
import Image from "next/image";
import { ChevronRightIcon } from "../Icons";
import { Project } from "@/app/_content/projects";
import { useState } from "react";
import FullScreenModal from "./FullScreenModal";
import Carousel from "../Carousel";

function ProjectCard(props: Project) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <FullScreenModal isOpen={open} close={() => setOpen(false)}>
        <div>
          <div className="flex gap-4 border-b border-b-neutral-200 p-4">
            <div>
              <Image
                src={props.icon}
                height={48}
                width={48}
                alt="company logo"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-base">{props.title}</h2>
              <p className="text-xs text-neutral-400">{props.subtitle}</p>
            </div>
          </div>
          <div className="p-4">
            <p className="pb-4 text-xs font-semibold">
              {props.year} • <span className="text-rose-300">{props.role}</span>
            </p>
            <p className="text-xs">{props.description}</p>
          </div>
          <div className="flex py-4">
            {!!props.images && props.images.length === 1 ? (
              <div className="flex justify-center">
                <Image
                  className={"w-1/2 rounded-lg"}
                  src={props.images[0]}
                  alt={"screenshot of petcasso landing page"}
                />
              </div>
            ) : null}
            {!!props.images && props.images.length > 1 ? (
              <Carousel
                slides={props.images.map((src, i) => (
                  <div className="px-3" key={i}>
                    <Image
                      className={`rounded-2xl ${props.id === 'fypm' && 'border border-black'}`}
                      src={src}
                      alt={"screenshot of petcasso landing page"}
                    />
                  </div>
                ))}
              />
            ) : null}
          </div>
        </div>
      </FullScreenModal>
      <button
        onClick={() => setOpen(true)}
        className="hover:gradient bg-black p-[1px] text-left focus:opacity-70"
      >
        <div className="hover:gradient-transparent bg-white p-4">
          <div className="flex gap-4">
            <div>
              <Image
                src={props.icon}
                height={48}
                width={48}
                alt="company logo"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-base">{props.title}</h2>
              <p className="text-xs text-neutral-400">{props.subtitle}</p>
            </div>
            <div className={"self-center text-orange-300 md:hidden"}>
              <ChevronRightIcon />
            </div>
          </div>
          <div className="hidden flex-col gap-4 md:flex">
            <div className="border-b border-neutral-200 pt-4" />
            <div>
              <p className="pb-2 text-xs font-semibold">
                {props.year} •{" "}
                <span className="text-rose-300">{props.role}</span>
              </p>
              <p className="line-clamp-6 h-[96px] text-xs">
                {props.description}
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-400">Stack: {props.stack}</p>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}

export default ProjectCard;