import { cometScreenshots, projectsConfig } from "@/app/_content/projects";
import { redirect } from "next/navigation";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import { ExternalLinkIcon } from "@/components/Icons";

export async function generateStaticParams() {
  return projectsConfig.map((project) => ({
    id: project.id,
  }));
}

export default function CometProjectPage({}) {
  const id = 'comet'
  const data = projectsConfig.find((p) => p.id === id);
  const screenshots = cometScreenshots;

  if (!data) {
    return redirect("/");
  }

  return (
    <div className={"mx-auto max-w-screen-sm"}>
      <div className="flex gap-4 border-b border-b-neutral-200 p-4 md:px-0">
        <div>
          <Image src={data.icon} height={48} width={48} alt="company logo" />
        </div>
        <div className="flex-1">
          <h2 className="text-base">{data.title}</h2>
          <p className="text-xs text-neutral-400">{data.subtitle}</p>
        </div>
        {data.externalLink && (
          <div
            className={
              "pt-1 text-black hover:drop-shadow-[0px_0px_6px_rgba(110,231,183,0.75)] active:opacity-70"
            }
          >
            <Link href={data.externalLink} target={"_blank"}>
              <ExternalLinkIcon />
            </Link>
          </div>
        )}
      </div>
      <div className="p-4 md:px-0">
        <p className="pb-4 text-sm font-semibold">
          {data.year} • <span className="text-rose-300">{data.role}</span>
        </p>
        <p className="text-sm">{data.description}</p>
        <p className="text-xs text-neutral-400 pt-4">Stack: {data.stack}</p>
      </div>
      <div className="p-4 pb-1 text-sm">
        <p className="font-semibold">Comet: First Iteration</p>
        <p>Audio Roulette</p>
      </div>
      <div className="hidden grid-cols-4 gap-2 md:grid">
        {screenshots[0].map((src, i) => (
            <div key={i} className={"col-span1"}>
              <Image
                className={`rounded-2xl ${
                  data.id === "fypm" && "border border-black"
                }`}
                src={src}
                alt={"Voicebar app promotional screenshot"}
              />
            </div>
          ))}
      </div>
      <div className="flex py-4 md:hidden">
      
          <Carousel
            slides={screenshots[0].map((src, i) => (
              <div className={i === 0 ? "pl-1 pr-1" : "px-1"} key={i}>
                <Image
                  className={`rounded-2xl`}
                  src={src}
                  alt={"screenshots of comet app"}
                />
              </div>
            ))}
          />
        ) 
       
      </div>
      <div className="p-4 pb-1 text-sm">
        <p className="font-semibold">Comet: Final Iteration</p>
        <p>Drag-and-drop Scrapbook Photo Editor</p>
      </div>
      <div className="hidden grid-cols-4 gap-2 md:grid">
        {screenshots[1].map((src, i) => (
            <div key={i} className={"col-span1"}>
              <Image
                className={`rounded-2xl`}
                src={src}
                alt={"Screenshots of comet app"}
              />
            </div>
          ))}
      </div>
      <div className="flex py-4 md:hidden">
    
          <Carousel
            slides={screenshots[1].map((src, i) => (
              <div className={i === 0 ? "pl-1 pr-1" : "px-1"} key={i}>
                <Image
                  className={`rounded-2xl`}
                  src={src}
                  alt={"screenshot of petcasso landing page"}
                />
              </div>
            ))}
          />
       
      </div>
    </div>
  );
}
