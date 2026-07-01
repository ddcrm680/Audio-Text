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
      className="relative h-[470px] overflow-hidden bg-[#f8fbff]"
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
        className="absolute bottom-[100px] left-[60%] h-4 w-4 rounded-full bg-[#48AFDB]"
      />

      <div className="mx-auto flex h-[470px] items-center justify-center gap-0 px-10">
        {/* Left */}

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
          className="absolute top-0 left-[130px] w-[50%]"
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
          className="absolute top-[55px] right-[13%] w-[520px]"
        >
          <h2
            className="-ml-[20px] text-[78px] leading-none font-thin tracking-tight text-black"
            style={{ fontFamily: "Aileron UltraLight" }}
          >
            We let you VIEW
          </h2>

          <h3
            className="mt-2 ml-28 text-[74px] leading-none font-thin tracking-tight text-black"
            style={{ fontFamily: "Aileron UltraLight" }}
          >
            What we DO
          </h3>

          <div className="mt-14 space-y-3 text-[29px] leading-[26px] font-light text-[#5b5b5b]">
            <p className="ml-28">
              Analyse your{" "}
              <span className="text-[#48AFDB]">live statistics</span>
            </p>

            <p className="ml-40">
              Keep track of your <span className="">live traffic</span>
            </p>

            <div className="words ml-50 flex items-center gap-5">
              <span>Follow our latest updates</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
