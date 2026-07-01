"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import paymentImage from "../../../public/images/hero/slider_3.webp";
import euroStamp from "../../../public/images/hero/EURO.png";
import { useState } from "react";

export default function SlideThree() {
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
      onMouseMove={handleMove}
      onMouseLeave={() => setMouse({ x: 0, y: 0 })}
      className="relative h-[470px] overflow-hidden"
    >
      {/* Floating Euro Stamps */}

      <motion.div
        animate={{
          rotate: [0, 6, 0],
          x: mouse.x * 0.15,
          y: mouse.y * 0.15,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute -top-[40px] left-[18%] z-10"
      >
        <Image src={euroStamp} alt="" width={110} />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 6, 0], // or 40, 45, etc.
          x: mouse.x * 0.15,
          y: mouse.y * 0.15,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-[60px] right-[12%]"
      >
        <Image src={euroStamp} alt="" width={110} />
      </motion.div>

      {/* Floating Dots */}

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-[200px] left-[50%] h-4 w-4 rounded-full bg-[#48AFDB]"
      />

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-[18%] bottom-[110px] h-3 w-3 rounded-full bg-[#48AFDB]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-1 h-10 bg-gradient-to-r from-red-300/59 via-cyan-300/59 to-lime-300/59 blur-xl" />
      {/* Content */}

      <div className="mx-auto flex h-[470px] items-center justify-center gap-0 px-10">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-20"
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
            className="text-[74px] leading-none font-extralight text-[#48AFDB]"
          >
            Fast Payment Terms
          </motion.h2>

          <motion.h3
            initial={{
              opacity: 0,
              x: -150,
              y: 60,
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
            className="mt-4 text-[62px] leading-none font-extralight text-[#1b1b1b]"
          >
            Secured Payment Methods
          </motion.h3>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
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
            className="mt-2 text-[28px] font-light text-[#48AFDB]"
          >
            Making your payment your way!
          </motion.p>

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
            className="mt-6 max-w-[620px] text-[26px] leading-snug font-light text-[#4b4b4b]"
          >
            Now choose your payment term and get your payment processed in a{" "}
            <span className="text-[#48AFDB]">Highly Protected</span> way.
          </motion.p>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{
            opacity: 0,
            x: 220,
            y: 25,
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
          className="relative"
        >
          <Image
            src={paymentImage}
            alt="Payment"
            width={560}
            priority
            className="-mt-[100px] -ml-[100px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
