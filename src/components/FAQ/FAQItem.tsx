"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface Props {
  number: number;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function FAQItem({
  number,
  question,
  answer,
  defaultOpen = false,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#d9d9d9] py-[30px] dark:border-slate-700">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-start gap-5 text-left md:items-center"
      >
        <div className="bg-primary-blue flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-white">
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </div>

        <h5 className="text-primary-blue text-[21px] uppercase transition dark:text-sky-400">
          {number}. {question}
        </h5>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <p className="pt-[15px] pl-[56px] text-[17px] leading-[25px] text-[#444] dark:text-gray-300">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
