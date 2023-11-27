"use client";
import { CometArrowLeftIcon, CometArrowRightIcon, CometLogo } from "../Icons";
import DesktopModal, { DesktopModalProps } from "./DesktopModal";
import { CloseIcon } from "../Icons";
import background from "@/public/images/comet-bg.png";
import Image from "next/image";
import { cometScreenshots } from "@/app/_content/projects";
import { useState, useCallback } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";

function CometModal(props: DesktopModalProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );


  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );

  return (
    <DesktopModal {...props} dark>
      <div className="sticky z-20 flex flex-col items-center gap-10 ">
        <div className="flex w-full items-center justify-between">
          <CometLogo />
          <button className="p-2" onClick={props.close}>
            <div
              className={
                "rounded-full bg-white  p-2 hover:shadow-[0px_0px_10px_rgba(132,130,208,1)] "
              }
            >
              <CloseIcon size={20} />
            </div>
          </button>
        </div>
        <h1 className="font-comet text-center text-3xl font-medium text-white">
          Make Friends, Not Followers
        </h1>
        <div className="max-w-xl">
          <h2 className="font-comet text-md text-center leading-6 text-white">
            {`Comet is a space where you can be yourself and meet other curious souls roaming the universe. There’s no mindless scrolling or swiping here — just real, authentic conversations ✌️ Here’s how it works:`}
          </h2>
        </div>
        <div className="flex w-full items-center justify-between">
          <button onClick={scrollPrev} className="absolute z-10 mb-[36px] hover:drop-shadow-[0px_0px_10px_rgba(132,130,208,1)]">
            <CometArrowLeftIcon />
          </button>
          <div className="overflow-hidden w-full">
            <div ref={emblaRef}>
              <div className="flex">
                <div className="min-w-0 flex-[0_0_100%]" key={0}>
                  <div className="w-full mx-auto">
                    <div className="grid max-w-2xl grid-cols-4 grid-rows-1 gap-3 pb-4 mx-auto">
                      {cometScreenshots[0].map((src, i) => (
                        <div key={i} className={"col-span1 row-span-1"}>
                          <Image
                            className={
                              "rounded-2xl object-cover shadow-[0px_0px_10px_rgba(86,76,155,0.75)]"
                            }
                            src={src}
                            alt={"Comet app promotional screenshot"}
                          />
                        </div>
                      ))}
                    </div>
                    <p className="font-comet text-center text-sm text-[rgba(86,76,155,1)]">
                      Comet V1: Audio Roulette
                    </p>
                  </div>
                </div>
                <div className="min-w-0 flex-[0_0_100%]" key={0}>
                  <div className="w-full mx-auto">
                    <div className="grid max-w-2xl grid-cols-4 grid-rows-1 gap-3 pb-4 mx-auto">
                      {cometScreenshots[1].map((src, i) => (
                        <div key={i} className={"col-span1 row-span-1"}>
                          <Image
                            className={
                              "rounded-2xl object-cover shadow-[0px_0px_10px_rgba(86,76,155,0.75)]"
                            }
                            src={src}
                            alt={"Comet app promotional screenshot"}
                          />
                        </div>
                      ))}
                    </div>
                    <p className="font-comet text-center text-sm text-[rgba(86,76,155,1)]">
                      Comet V3: Drag & Drop Scrapbook Photo Editor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button onClick={scrollNext} className="absolute right-0 mb-[36px] hover:drop-shadow-[0px_0px_10px_rgba(132,130,208,1)]">
            <CometArrowRightIcon />
          </button>
        </div>
      </div>

      <Image className="absolute top-0" src={background} alt="gradient" />
    </DesktopModal>
  );
}

export default CometModal;
