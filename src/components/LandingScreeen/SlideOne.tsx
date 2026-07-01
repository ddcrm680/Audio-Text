"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import logo from "../../../public/images/logo/GATS.png";
import heroBg from "../../../public/images/hero/slider_1.webp";
import { useState } from "react";
export default function SlideOne() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - left - width / 2) / 30;
    const y = (e.clientY - top - height / 2) / 30;

    setMouse({ x, y });
  };
  return (
    <section
      className="relative h-[470px] overflow-hidden"
      onMouseMove={handleMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
    >
      {/* Background */}

      <motion.div
        className="absolute inset-0"
        initial={{
          scale: 2,
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
      >
        <Image src={heroBg} alt="" fill priority className="object-cover" />
      </motion.div>

      {/* Blur */}

      <motion.div
        className="absolute inset-0"
        initial={{
          scale: 1.22,
        }}
        animate={{
          scale: 1.08,
          x: mouse.x * 0.35,
          y: mouse.y * 0.35,
        }}
        transition={{
          scale: {
            duration: 10,
            ease: "easeOut",
          },
          x: {
            type: "spring",
            stiffness: 35,
            damping: 20,
          },
          y: {
            type: "spring",
            stiffness: 35,
            damping: 20,
          },
        }}
      >
        <Image src={heroBg} alt="" fill priority className="object-cover" />
      </motion.div>
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#07182632]/35" />

      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#04182d]/65 via-transparent to-[#a23f6f]/30" /> */}
      {/* Content */}

      <div className="relative z-10 flex h-[470px] flex-col items-center justify-center px-6 text-center">
        {/* Logo */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            y: -40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mouse.x * 0.8,
            y: mouse.y * 0.8 + Math.sin(Date.now()) * 2,
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
            y: -40,
          }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 18,
          }}
        >
          <Image src={logo} alt="GATS" width={300} priority />
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.7,
            y: -40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mouse.x * 0.8,
            y: mouse.y * 0.8 + Math.sin(Date.now()) * 2,
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
            y: -40,
          }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 18,
          }}
          className="mt-3 -ml-[25%] text-[64px] font-thin tracking-normal text-white uppercase md:text-[52px]"
        >
          AUDIO TEXT SOLUTIONS LTD.
        </motion.h1>

        {/* Subtitle */}

        <motion.h2
          initial={{
            opacity: 0,
            scale: 0.7,
            y: -40,
          }}
          exit={{
            opacity: 0,
            scale: 0.7,
            y: -40,
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
          className="mt-6 -ml-[10%] text-[20px] font-light text-white md:text-[33px]"
        >
          A Giant <span className="text-[#48AFDB]">Telecom Partner</span> that
          understands your <span className="text-[#48AFDB]">Business</span> well
        </motion.h2>

        {/* Caption */}

        <motion.p
          initial={{
            opacity: 0,
            scale: 0.7,
            y: -40,
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
          exit={{
            opacity: 0,
            scale: 0.7,
            y: -40,
          }}
          className="mt-5 -ml-[5%] text-[18px] font-light text-white md:text-[26px]"
        >
          Connecting the <span className="text-[#48AFDB]">World</span> with
          highly acquiescent{" "}
          <span className="text-[#48AFDB]">Premium Rate Numbers</span>
        </motion.p>
      </div>
    </section>
  );
}
