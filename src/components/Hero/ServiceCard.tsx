"use client";

import { useRouter } from "next/navigation";
import { ServiceCardProp } from "@/types/services";

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  color,
}: ServiceCardProp) {
  const router = useRouter();

  return (
    <div
      className="group mx-auto flex h-full cursor-pointer flex-col items-center text-center md:max-w-[275px]"
      onClick={() => router.push("/services")}
    >
      <div
        className="mb-[25px] flex h-42 w-42 items-center justify-center rounded-full transition duration-300 group-hover:scale-105"
        style={{ backgroundColor: color }}
      >
        <Icon className="h-21 w-21 text-white" strokeWidth={1.8} />
      </div>

      <h3 className="mb-[15px] max-w-[220px] text-[18px] font-light text-[#2d3550] uppercase md:text-[23px] dark:text-white">
        {title}
      </h3>

      <p className="text-[15px] leading-6 text-[#606d85] dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}
