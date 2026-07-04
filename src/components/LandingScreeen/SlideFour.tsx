"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import statics from "../../../public/images/hero/statics2.png";

export default function SlideFour() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMouse({
      x: (e.clientX - rect.left - rect.width / 2) / 30,
      y: (e.clientY - rect.top - rect.height / 2) / 30,
    });
  };

  return (
    <section
      className="relative h-[380px] overflow-hidden bg-[#f8fbff] xl:h-[470px]"
      onMouseMove={handleMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
    >
      {/* Background Dot */}

      <motion.div
        animate={{
          y: [-6, 6, -6],
          x: mouse.x * 0.4,
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="bg-primary-blue absolute bottom-[100px] left-[60%] h-4 w-4 rounded-full"
      />

      <div className="mx-auto flex h-[380px] items-center justify-center gap-0 px-10 md:h-[470px]">
        {/* Left */}
        <div className="absolute inset-0 xl:hidden">
          <Image
            src={statics}
            alt=""
            fill
            className="scale-110 object-cover blur-[3px]"
          />

          <div className="absolute inset-0 bg-black/45" />

          {/* Optional blue tint */}
          <div className="bg-primary-blue/15 absolute inset-0" />
        </div>
        <motion.div
          initial={{
            opacity: 0,
            x: -180,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mouse.x * 0.8,
            y: mouse.y * 0.8 + Math.sin(Date.now()) * 2,
          }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 18,
          }}
          className="absolute bottom-0 hidden w-[100%] xl:top-0 xl:left-[5rem] xl:block xl:w-[50%] 2xl:left-[8rem]"
        >
          <Image
            src={statics}
            alt="Statistics"
            priority
            className="w-full object-contain"
          />
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{
            opacity: 0,
            x: 120,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mouse.x * 0.8,
            y: mouse.y * 0.8 + Math.sin(Date.now()) * 2,
          }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 18,
          }}
          className="absolute top-1/2 left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 md:w-[520px] xl:top-[55px] xl:right-[5rem] xl:left-auto xl:translate-x-0 xl:translate-y-0 2xl:right-[10rem]"
        >
          <h2
            className="text-center text-[35px] leading-none font-thin tracking-tight text-white md:text-left md:text-[50px] lg:text-black xl:-ml-[20px] xl:text-[78px] dark:text-white dark:xl:text-black"
            style={{ fontFamily: "Aileron UltraLight" }}
          >
            We let you VIEW
          </h2>

          <h3
            className="mt-2 text-center text-[35px] leading-none font-thin tracking-tight text-white md:ml-28 md:text-left md:text-[50px] lg:text-black xl:text-[74px] dark:text-white dark:xl:text-black"
            style={{ fontFamily: "Aileron UltraLight" }}
          >
            What we DO
          </h3>

          <div className="mt-8 flex flex-col justify-center space-y-1 text-[14px] leading-[24px] font-light text-[#bababa] md:space-y-3 md:text-[22px] md:leading-[26px] xl:mt-14 xl:text-[29px] xl:text-[#5b5b5b]">
            <span className="text-center md:ml-28 md:text-left">
              Analyse your{" "}
              <span className="text-primary-blue">live statistics</span>
            </span>

            <p className="text-center md:ml-40 md:text-left">
              Keep track of your <span className="">live traffic</span>
            </p>

            <div className="words flex items-center justify-center gap-5 md:ml-50 md:justify-start">
              <span className="text-center md:text-left">
                Follow our latest updates
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
