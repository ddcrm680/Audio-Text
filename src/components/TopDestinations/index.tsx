"use client";

import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { destinations } from "@/utils/constants";
import DestinationCard from "./DestinationCard";
import Lightbox from "yet-another-react-lightbox";

export default function TopDestinations() {
  const [openShare, setOpenShare] = useState<number | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-[#e8ecef] py-16 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className='mb-10 text-center font-["Aileron_UltraLight"] text-5xl text-[#48AFDB] uppercase'>
          Top Destinations
        </h2>

        <div className="relative">
          {/* Previous */}
          <button
            onClick={scrollPrev}
            className="group absolute top-1/2 left-[-70px] z-20 hidden h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#48AFDB] lg:flex"
          >
            <ChevronLeft className="transition-transform duration-300 group-hover:-translate-x-2" />
          </button>

          {/* Next */}
          <button
            onClick={scrollNext}
            className="group absolute top-1/2 right-[-70px] z-20 hidden h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#48AFDB] lg:flex"
          >
            <ChevronRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {destinations.map((item, index) => (
                <div
                  key={item.title}
                  className="min-w-0 flex-[0_0_100%] px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
                >
                  <DestinationCard
                    {...item}
                    open={openShare === index}
                    onToggle={() =>
                      setOpenShare(openShare === index ? null : index)
                    }
                    onClose={() => setOpenShare(null)}
                    onImageClick={() => setPreviewImage(item.image)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="mt-8 flex justify-center gap-5 lg:hidden">
            <button
              onClick={scrollPrev}
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#48AFDB]"
            >
              <ChevronLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            </button>

            <button
              onClick={scrollNext}
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#48AFDB]"
            >
              <ChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
      <Lightbox
        open={!!previewImage}
        close={() => setPreviewImage(null)}
        slides={previewImage ? [{ src: previewImage }] : []}
        controller={{ closeOnBackdropClick: true }}
        carousel={{ finite: true }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </section>
  );
}
