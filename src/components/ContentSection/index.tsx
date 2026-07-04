"use client";

import Image from "next/image";
import Link from "next/link";
import { ContentSectionProps } from "@/types/contentSection";
import { ChevronRight } from "lucide-react";

export default function ContentSection({
  title,
  description,
  image,
  imageAlt,
  imagePosition = "right",
  titleIcon,
  buttonText,
  buttonLink,
  padding = "p-[50px]",
  bg = "bg-white",
  className = "",
}: ContentSectionProps) {
  return (
    <section className={`${bg} ${padding} dark:bg-slate-900 ${className}`}>
      <div
        className={`mx-auto flex flex-col items-center gap-[30px] px-6 md:max-w-4xl md:gap-[30px] lg:max-w-5xl xl:max-w-7xl ${
          imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Content */}

        <div className="flex-2">
          <div className="mt-1 mb-5 flex items-start gap-4 md:items-center">
            {titleIcon && (
              <div className="bg-primary-blue mt-2 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full text-white md:mt-0">
                {titleIcon}
              </div>
            )}

            <h2 className="text-primary-blue text-4xl leading-[46px] font-light uppercase md:text-4xl dark:text-sky-400">
              {title}
            </h2>
          </div>

          <div className="text-[15px] leading-[1.8] font-light text-black dark:text-gray-300">
            {description}
          </div>

          {buttonText && buttonLink && (
            <Link
              href={buttonLink}
              className="bg-primary-blue mt-10 inline-flex items-center gap-4 px-8 py-4 text-[18px] font-light text-white uppercase transition-all duration-300 hover:bg-[#3aa3d3]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white">
                <ChevronRight size={22} strokeWidth={1.5} />
              </span>

              <span>{buttonText}</span>
            </Link>
          )}
        </div>

        {/* Image */}

        {image && (
          <div className="w-full flex-1">
            <Image
              src={image}
              alt={imageAlt ?? title}
              width={700}
              height={500}
              className="w-full border border-gray-200 object-cover p-[20px] dark:border-slate-700"
            />
          </div>
        )}
      </div>
    </section>
  );
}
