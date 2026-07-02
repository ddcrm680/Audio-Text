"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slideList } from "@/utils/constants";
import Autoplay from "embla-carousel-autoplay";

export default function LandingSlide() {
  const autoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      duration: 45, // try 40-60
    },
    [autoplay.current],
  );
  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);
  return (
    <div className="relative">
      {/* Previous */}

      <button
        onClick={scrollPrev}
        className="group absolute top-1/2 left-3 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/20 md:h-12 md:w-12 lg:left-6 lg:h-16 lg:w-16"
      >
        <ChevronLeft className="transition-transform duration-300 group-hover:-translate-x-2" />
      </button>

      {/* Next */}
      <button
        onClick={scrollNext}
        className="group absolute top-1/2 right-3 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/20 md:h-12 md:w-12 lg:right-6 lg:h-16 lg:w-16"
      >
        <ChevronRight className="transition-transform duration-300 group-hover:translate-x-2" />
      </button>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slideList.map((Slide, index) => (
            <div key={index} className="min-w-0 flex-[0_0_100%]">
              <Slide />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
