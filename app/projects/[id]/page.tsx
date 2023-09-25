import { projectsConfig } from "@/app/_content/projects";
import { redirect } from "next/navigation";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import { ExternalLinkIcon } from "@/components/Icons";

export async function generateStaticParams() {
 
  return projectsConfig.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = projectsConfig.find((p) => p.id === id);

  if (!data) {
    return redirect("/");
  }

  return (
    <div className={"max-w-screen-sm mx-auto"}>
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
        <p className="pb-4 text-xs font-semibold">
          {data.year} • <span className="text-rose-300">{data.role}</span>
        </p>
        <p className="text-xs">{data.description}</p>
      </div>
      <div className="hidden md:grid grid-cols-4 gap-2">
          {data.images && data.images.map((src, i) => (
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
        {!!data.images && data.images.length === 1 ? (
          <div className="flex justify-center">
            <Image
              className={"w-1/2 rounded-lg"}
              src={data.images[0]}
              alt={"screenshot of petcasso landing page"}
            />
          </div>
        ) : null}
        {!!data.images && data.images.length > 1 ? (
          <Carousel
            slides={data.images.map((src, i) => (
              <div className={i === 0 ? "pl-1 pr-1" : "px-1"} key={i}>
                <Image
                  className={`rounded-2xl ${
                    data.id === "fypm" && "border border-black"
                  }`}
                  src={src}
                  alt={"screenshot of petcasso landing page"}
                />
              </div>
            ))}
          />
        ) : null}
      </div>
    </div>
  );
}
