"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import woman from "../../../public/images/hero/tech_girl.webp";
import { useState } from "react";

export default function SlideTwo() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();

    setMouse({
      x: (e.clientX - left - width / 2) / 30,
      y: (e.clientY - top - height / 2) / 30,
    });
  };
  return (
    <section
      onMouseMove={handleMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
      className="relative h-[470px] overflow-hidden bg-gradient-to-b from-white to-[#f6f8fb]"
    >
      {/* Floating circles */}

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-[35px] left-[62%] h-4 w-4 rounded-full bg-[#48AFDB]"
      />

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-[120px] left-[64%] h-2.5 w-2.5 rounded-full bg-[#48AFDB]"
      />

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-[250px] right-[14%] h-7 w-7 rounded-full bg-[#48AFDB]"
      />

      <motion.div
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-[260px] left-[60%] h-7 w-7 rounded-full bg-white"
      />

      {/* Content */}

      <div className="mx-auto flex h-[470px] items-center justify-center gap-4 px-10">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          // className="max-w-[640px]"
        >
          <motion.h2
            initial={{
              opacity: 0,
              x: -120,
              y: 50,
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
            className="text-[80px] leading-none font-extralight text-[#48AFDB]"
          >
            Be Our Reseller
          </motion.h2>

          <motion.h3
            initial={{
              opacity: 0,
              x: -150,
              y: 70,
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
            className="mt-4 text-[80px] leading-none font-extralight text-[#98C93C]"
          >
            Let the WORLD
            <span className="font-extralight text-[#98C93C]"> know you</span>
          </motion.h3>

          <motion.p
            initial={{
              opacity: 0,
              x: -80,
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
            className="mt-4 text-[28px] leading-tight font-light text-[#4d4d4d]"
          >
            Now creating a reseller account is
            <br />
            absolutely
            <span className="text-[#48AFDB]"> Hassle-Free!</span>
          </motion.p>

          <motion.button
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: mouse.y * 0.8,
            }}
            transition={{
              delay: 0.9,
              duration: 0.8,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="mt-2 cursor-pointer rounded-full bg-[#48AFDB] px-[12px] py-[6px] text-lg font-light text-white transition hover:bg-sky-500"
          >
            Register Now
          </motion.button>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{
            opacity: 0,
            x: 180,
            scale: 0.9,
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
          className="relative h-full w-[30%]"
        >
          <Image
            src={woman}
            alt="Reseller"
            fill
            priority
            className="object-contain object-bottom"
          />
        </motion.div>
      </div>
    </section>
  );
}
