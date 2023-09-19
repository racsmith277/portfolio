"use client"
import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";

const Carousel = ({slides}: {slides: React.ReactElement[]}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    const scrollTo = useCallback(
      (index: number) => emblaApi && emblaApi.scrollTo(index),
      [emblaApi],
    );
  
    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
      setScrollSnaps(emblaApi.scrollSnapList());
    }, []);
  
    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);
  
    useEffect(() => {
      if (!emblaApi) return;
  
      onInit(emblaApi);
      onSelect(emblaApi);
      emblaApi.on("reInit", onInit);
      emblaApi.on("reInit", onSelect);
      emblaApi.on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);
  
    return (
      <div className="overflow-hidden">
        <div ref={emblaRef}>
          <div className="flex">
            {slides.map((Slide, index) => <div className="min-w-0 flex-[0_0_60%]" key={index}>
              {Slide}
            </div>)}
          </div>
        </div>
        <div className='w-full flex justify-center pt-4 md:pt-8'>
          <div className="flex gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={'h-2 w-2 bg-neutral-200 rounded-full '.concat(
                  index === selectedIndex ? 'opacity-50' : 'opacity-20'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Carousel;
  