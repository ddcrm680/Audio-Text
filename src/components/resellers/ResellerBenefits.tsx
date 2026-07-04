"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
interface ResellerBenefitsProps {
  icon: ReactNode;
  title: string;
  description: string;
  points: string[];
  animateDescription?: boolean;
  animatePoints?: boolean;
  columns?: 1 | 2;
}

export default function ResellerBenefits({
  icon,
  animateDescription,
  title,
  description,
  animatePoints,
  points,
  columns = 1,
}: ResellerBenefitsProps) {
  const descriptionVariants = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn" as const,
      },
    },
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
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
    <section className="px-6 py-[35px]">
      <div className="mt-1 mb-5 flex items-start gap-4 sm:items-center">
        <div className="bg-primary-blue mt-2 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full text-white md:mt-0">
          {icon}
        </div>

        <h2 className="text-primary-blue text-4xl leading-[46px] font-light uppercase md:text-4xl dark:text-sky-400">
          {title}
        </h2>
      </div>

      <motion.h5
        variants={itemVariants}
        initial={animateDescription ? "hidden" : false}
        whileInView={animateDescription ? "visible" : undefined}
        viewport={{ once: true, amount: 0.3 }}
        className='mb-3 font-["Aileron_Thin"] text-[21px] leading-[1.8] font-light text-black dark:text-gray-300'
      >
        {description}
      </motion.h5>

      <motion.ul
        variants={listVariants}
        initial={animatePoints ? "hidden" : false}
        whileInView={animatePoints ? "visible" : undefined}
        viewport={{ once: true, amount: 0.3 }}
        className={`list-disc pl-8 text-[15px] leading-[1.8] font-light text-black dark:text-gray-300 ${
          columns === 2 ? "grid gap-x-20 md:grid-cols-2" : ""
        }`}
      >
        {points.map((point) => (
          <motion.li key={point} variants={itemVariants}>
            {point}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
