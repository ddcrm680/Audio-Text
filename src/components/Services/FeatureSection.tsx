"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FeatureSectionProps } from "@/types/ServiceFeature";

export default function FeatureSection({
  title,
  description,
  icon,
  image,
  imageAlt,
  imagePosition = "right",
  layout = "horizontal",
  buttonText,
  buttonLink,
  padding = "py-5",
  className = "",
}: FeatureSectionProps) {
  return (
    <section className={`${padding} ${className}`}>
      <div
        className={`mx-auto flex max-w-6xl gap-12 px-6 md:px-0 ${
          imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
        } flex-col`}
      >
        {/* Content */}

        <div
          className={`flex-1 ${
            layout === "vertical"
              ? ""
              : "flex flex-col items-start gap-8 md:flex-row"
          }`}
        >
          <div
            className={`${layout === "vertical" ? "mx-auto mb-[35px]" : "mx-auto h-full"} flex w-[40%] items-center justify-center`}
          >
            <div className="flex h-[103px] w-[103px] items-center justify-center rounded-full border border-gray-200">
              <div className="text-[#48AFDB]">{icon}</div>
            </div>
          </div>

          <div>
            <h2
              className={`mb-5 ${layout === "vertical" ? "text-center" : ""} text-4xl leading-[46px] font-light text-[#48AFDB] uppercase md:text-4xl dark:text-sky-400`}
            >
              {title}
            </h2>

            <div className="text-[15px] leading-[1.8] font-light text-black dark:text-gray-300">
              {description}
            </div>

            {buttonText && (
              <Link
                href={buttonLink!}
                className="mt-8 inline-flex items-center gap-4 bg-[#48AFDB] px-8 py-4 text-white"
              >
                <ChevronRight />

                {buttonText}
              </Link>
            )}
          </div>
        </div>

        {/* Image */}
        {image && (
          <div className="flex-1">
            <Image
              src={image}
              alt={imageAlt ?? title}
              width={650}
              height={500}
              className="w-full"
            />
          </div>
        )}
      </div>
    </section>
  );
}
