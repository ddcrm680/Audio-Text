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
  imageClassName,
  contentClassName,
  descriptionClassName,
  imageWrapperClassName,
  buttonLink,
  padding = "p-[50px]",
  titleClassName,
  bg = "bg-white",
  subParentClassName,
  className = "",
}: ContentSectionProps) {
  return (
    <section
      className={` ${bg ?? "dark:bg-slate-900"} ${padding} ${className}`}
    >
      <div
        className={`mx-auto flex flex-col items-center gap-[30px] px-5 md:gap-[30px] ${
          imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
        } ${subParentClassName}`}
      >
        {/* Content */}

        <div className={`w-full flex-2 md:w-auto ${contentClassName ?? ""}`}>
          {" "}
          <div
            className={`mt-1 mb-5 flex items-start gap-4 md:items-center ${titleClassName}`}
          >
            {titleIcon && (
              <div className="bg-primary-blue mt-2 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full text-white md:mt-0">
                {titleIcon}
              </div>
            )}

            <h2
              className={`text-primary-blue text-4xl leading-[46px] uppercase md:text-4xl xl:whitespace-nowrap dark:text-sky-400 ${titleClassName}`}
            >
              {title}
            </h2>
          </div>
          <div
            className={`text-[15px] leading-[1.8] font-light text-black dark:text-gray-300 ${
              descriptionClassName ?? ""
            }`}
          >
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
          <div className={`w-full flex-1 ${imageWrapperClassName ?? ""}`}>
            <Image
              src={image}
              alt={imageAlt ?? title}
              width={700}
              height={500}
              className={`w-full object-cover ${
                imageClassName ??
                "border border-gray-200 p-5 dark:border-slate-700"
              }`}
            />
          </div>
        )}
      </div>
    </section>
  );
}
