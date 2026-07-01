"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import coffee from "../../../public/images/hero/coffee.webp";
import book from "../../../public/images/hero/book.webp";
import idCardPaperPen from "../../../public/images/hero/paper-pen.webp";
import eraserTablet from "../../../public/images/hero/pen-drive.webp";
import screw_1 from "../../../public/images/hero/screw_1.png";
import screw from "../../../public/images/hero/screw.png";

import laptop from "../../../public/images/hero/laptop.webp";
import analyticsPaperPen from "../../../public/images/hero/Slide5_El1.png";
import scaleCalculator from "../../../public/images/hero/Slide5_El8 (1).webp";
import specs from "../../../public/images/hero/specs.webp";
import { useState } from "react";

export default function SlideFive() {
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
      className="relative h-[470px] overflow-hidden bg-[linear-gradient(180deg,#4d88b6_0%,#5d99bf_18%,#72b8c7_42%,#98c8c9_60%,#98c8c9_78%,#98c8c9_100%)]"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 0% 180%, rgba(180,95,145,.70) 0%, rgba(203,120,168,.45) 28%, rgba(223,165,190,.20) 48%, transparent 72%)",
        }}
      />
      {/* Background Overlay */}
      {/* Floating Images */}
      <motion.div
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
        // top-[45px] left-[16%]"
        className="absolute -top-12 left-[30%]"
      >
        <Image src={book} alt="" width={150} />
      </motion.div>
      <div className="absolute bottom-[15px] -left-[5%]">
        <Image src={idCardPaperPen} alt="" width={180} />
      </div>
      <motion.div
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
        className="absolute bottom-[15px] left-[15%]"
      >
        <Image src={idCardPaperPen} alt="" width={180} />
      </motion.div>
      <motion.div
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
        className="absolute bottom-[25%] left-[32%]"
      >
        <Image src={laptop} alt="" width={250} />
      </motion.div>
      <motion.div
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
        className="absolute -bottom-[25%] left-[38%]"
      >
        <Image src={analyticsPaperPen} alt="" width={210} />
      </motion.div>
      <motion.div
        // animate={{
        //   rotate: [-1, 1, -1],
        //   y: [-5, 5, -5],
        // }}
        // transition={{
        //   duration: 8,
        //   repeat: Infinity,
        // }}
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
        className="absolute top-[20px] left-[16%]"
      >
        <Image src={eraserTablet} alt="" width={130} />
      </motion.div>
      <motion.div
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
        className="absolute right-[43%] bottom-[15%]"
      >
        <Image src={screw_1} alt="" width={60} />
      </motion.div>
      <motion.div
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
        className="absolute right-[25%] -bottom-[5px]"
      >
        <Image src={screw} alt="" width={230} />
      </motion.div>
      <motion.div
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
        className="absolute top-[175px] left-[13%]"
      >
        <Image src={coffee} alt="" width={65} />
      </motion.div>
      <motion.div
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
        className="absolute -top-[5px] left-[5%]"
      >
        <Image src={scaleCalculator} alt="" width={90} />
      </motion.div>
      <motion.div
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
        className="absolute bottom-[38px] left-[30%]"
      >
        <Image src={specs} alt="" width={95} />
      </motion.div>
      {/* Floating Dots */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-[18px] left-[63%] h-4 w-4 rounded-full bg-[#48AFDB]"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-[30px] right-[15%] h-3 w-3 rounded-full bg-gray-500"
      />
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-[150px] left-[68%] h-3 w-3 rounded-full bg-[#48AFDB]"
      />
      {/* Right Content */}
      <motion.div className="absolute top-[20%] right-[15%] z-20 flex flex-col items-end text-center">
        <motion.h2
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
          className="text-[72px] leading-none font-extralight text-white"
        >
          Resilient
          <span className="text-[#8e285c]"> Admin Panel</span>
        </motion.h2>

        <motion.div
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
          className="mt-5 space-y-2 leading-[35px]"
        >
          <div className="text-end text-[28px] font-light text-[#1738ff]">
            High Database Storage Capacity
          </div>

          <div className="text-end text-[28px] font-light text-white">
            User Friendly GUI
          </div>

          <div className="text-end text-[28px] font-light text-[#1738ff]">
            Customized IVR
          </div>

          <div className="text-end text-[28px] font-light text-white">
            100% Uptime
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-2 rounded-full bg-[#7d2d67] px-[12px] py-[6px] text-lg font-light text-white transition hover:bg-[#63214f]"
        >
          Sign Up Now
        </motion.button>
      </motion.div>
    </section>
  );
}
