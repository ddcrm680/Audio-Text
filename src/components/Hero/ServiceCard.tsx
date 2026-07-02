"use client";

import { useRouter } from "next/navigation";
import { Phone, Smartphone, SlidersHorizontal, PenTool } from "lucide-react";
import { ServiceCardProp } from "@/types/services";
import { iconMap } from "@/utils/constants";
import React from "react";

export default function ServiceCard({
  description,
  icon,
  color,
  title,
  iconClassName = "h-21 w-21",
  imageContainerClassName = "h-42 w-42",
  parentClassName,
  enableHoverScale = true,
  descClassName = "text-[15px]",
}: ServiceCardProp) {
  const router = useRouter();

  const Icon = icon ? iconMap[icon] : null;

  return (
    <div
      className={`group mx-auto flex h-full cursor-pointer flex-col items-center text-center md:max-w-[275px] ${parentClassName}`}
      onClick={() => router.push("/services")}
    >
      {Icon && (
        <div
          style={{ backgroundColor: color }}
          className={`mb-[25px] flex items-center justify-center rounded-full transition duration-300 ${enableHoverScale ? "group-hover:scale-105" : ""} ${imageContainerClassName} `}
        >
          <Icon className={`text-white ${iconClassName}`} strokeWidth={1.8} />
        </div>
      )}
      {title}
      <p className={`leading-6 text-black dark:text-gray-300 ${descClassName}`}>
        {description}
      </p>
    </div>
  );
}
