"use client";

import { useRouter } from "next/navigation";
import { Phone, Smartphone, SlidersHorizontal, PenTool } from "lucide-react";
import { ServiceCardProp } from "@/types/services";
import { iconMap } from "@/utils/constants";
import React from "react";
import { motion } from "framer-motion";
import { logger } from "@/utils/helpers";
export default function ServiceCard({
  description,
  icon,
  cardVariant,
  cardClassName,
  descriptionClassName,
  iconWrapperClassName,
  color,

  title,
  iconClassName = "h-21 w-21",
  imageContainerClassName = "h-42 w-42",
  parentClassName,
  enableScrollAnimation = false,
  animationDirection = "left",
  enableHoverScale = true,
  descClassName = "text-[15px]",
}: ServiceCardProp) {
  const router = useRouter();

  const Icon = icon ? iconMap[icon] : null;
  logger.log("ServiceCard icon:", icon, "Icon component:", Icon);
  const iconVariants = {
    hidden: {
      opacity: 0,
      x:
        animationDirection === "left"
          ? -80
          : animationDirection === "right"
            ? 80
            : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const, // custom cubic bezier
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 25,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.25,
        ease: "easeOut" as const,
      },
    },
  };
  return (
    <div
      className={`group h-full w-full ${
        cardVariant === "feature"
          ? `rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-[#171a1f] dark:hover:border-[#1cc7ec]/40`
          : "flex cursor-pointer flex-col items-center"
      } ${cardClassName ?? ""} ${parentClassName}`}
      onClick={() => cardVariant === "default" && router.push("/services")}
    >
      {Icon && (
        <motion.div
          variants={iconVariants}
          initial={enableScrollAnimation ? "hidden" : false}
          whileInView={enableScrollAnimation ? "visible" : undefined}
          viewport={{ once: true, amount: 0.4 }}
          className={` ${
            cardVariant === "feature"
              ? `mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#12c9ea]/10 transition-all duration-300 group-hover:bg-[#39a6d6] ${iconWrapperClassName ?? ""}`
              : `mb-[25px] flex items-center justify-center rounded-full ${color ? `${color}` : "bg-[#12c9ea]"} transition duration-300 ${
                  enableHoverScale ? "group-hover:scale-105" : ""
                } ${imageContainerClassName}`
          } `}
        >
          <Icon
            className={
              cardVariant === "feature"
                ? "dark:text-primary-blue h-7 w-7 text-white"
                : `text-white ${iconClassName}`
            }
            strokeWidth={1.8}
          />
        </motion.div>
      )}

      {title}
      <motion.div
        variants={textVariants}
        initial={enableScrollAnimation ? "hidden" : false}
        whileInView={enableScrollAnimation ? "visible" : undefined}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p
          className={
            cardVariant === "feature"
              ? `text-left text-[15px] leading-7 text-slate-500 dark:text-slate-400 ${descriptionClassName ?? ""} `
              : `leading-6 font-light text-black dark:text-gray-300 ${descClassName}`
          }
        >
          {description}
        </p>
      </motion.div>
    </div>
  );
}
