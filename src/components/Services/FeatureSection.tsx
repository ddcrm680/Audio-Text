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
  descClassName,
  buttonText,
  buttonLink,
  imageContainerClassName,
  padding = "py-5",
  titleClassName,
  className = "",
  childPadding = "",
}: FeatureSectionProps) {
  return (
    <section className={`${padding} ${className}`}>
      <div
        className={`mx-auto flex max-w-6xl gap-12 ${
          imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
        } flex-col ${childPadding}`}
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
            <div
              className={`flex h-[103px] w-[103px] items-center justify-center rounded-full border border-gray-200 ${imageContainerClassName}`}
            >
              <div className="text-primary-blue">{icon}</div>
            </div>
          </div>

          <div>
            <h2
              className={`mb-5 ${layout === "vertical" ? "text-center" : ""} text-primary-blue text-4xl leading-[46px] font-light uppercase md:text-4xl dark:text-sky-400 ${titleClassName}`}
            >
              {title}
            </h2>

            <div
              className={`text-[15px] leading-[1.8] font-light text-black dark:text-gray-300 ${descClassName}`}
            >
              {description}
            </div>

            {buttonText && (
              <Link
                href={buttonLink!}
                className="bg-primary-blue mt-8 inline-flex items-center gap-4 px-8 py-4 text-white"
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
