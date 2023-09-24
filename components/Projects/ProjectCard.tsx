"use client";
import Image from "next/image";
import { ChevronRightIcon, ExternalLinkIcon } from "../Icons";
import { Project } from "@/app/_content/projects";
import { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import CometModal from "./CometModal";
import VoicebarModal from "./VoicebarModal";
import { useRouter } from "next/navigation";

function ProjectCard(props: Project) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [cometModalOpen, setCometModalOpen] = useState(false);
  const [voicebarModalOpen, setVoicebarModalOpen] = useState(false);
  const router = useRouter();

  function openInNewTab(url: string) {
    var win = window.open(url, "_blank");
    win?.focus();
  }

  function handleProjectSelection() {
    if (isDesktop) {
      if (props.externalLink) {
        openInNewTab(props.externalLink);
      }
      if (props.id === "comet") {
        setCometModalOpen(true);
      }
      if (props.id === "voicebar") {
        setVoicebarModalOpen(true);
      }
    } else {
      router.push("projects/" + props.id);
    }
  }

  return (
    <>
      {isDesktop && props.id === "comet" && (
        <CometModal
          isOpen={cometModalOpen}
          close={() => {
            setCometModalOpen(false);
          }}
        />
      )}
      {isDesktop && props.id === "voicebar" && (
        <VoicebarModal
          isOpen={voicebarModalOpen}
          close={() => {
            setVoicebarModalOpen(false);
          }}
        />
      )}
      <button
        onClick={handleProjectSelection}
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
            {props.externalLink && (
              <div
                className={"hidden pt-1 text-black hover:opacity-70 md:block"}
              >
                <Link href={props.externalLink} target={"_blank"}>
                  <ExternalLinkIcon />
                </Link>
              </div>
            )}
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
