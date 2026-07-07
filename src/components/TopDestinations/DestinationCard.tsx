"use client";

import Image from "next/image";
import { Share2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ShareMenu from "./ShareMenu";
import { DestinationCardProps } from "@/types/destination";
import shareIcon from "../../../public/images/destination/share.png";
export default function DestinationCard({
  image,
  onToggle,
  onImageClick,
  onClose,
  title,
  open,
  share,
}: DestinationCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);
  console.log(image, "imageimage");

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden bg-white shadow-sm dark:bg-slate-700"
    >
      <Image
        src={image}
        alt={title}
        width={370}
        height={210}
        onClick={onImageClick}
        className="h-[210px] w-full cursor-pointer object-cover"
      />
      {/* Blue Overlay */}
      <div
        className={`bg-primary-blue/40 pointer-events-none absolute inset-0 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="flex h-[60px]">
        <div className="flex flex-1 items-center px-8 text-[16px] uppercase md:text-[18px]">
          {title}
        </div>

        {!open && (
          <button
            onClick={onToggle}
            className="flex w-[60px] cursor-pointer items-center justify-center bg-[#3b5578] text-white"
          >
            <Image src={shareIcon} alt={"Share"} width={20} height={20} />
          </button>
        )}
      </div>

      <div
        onMouseLeave={() => {
          if (open) {
            onClose();
          }
        }}
        className={`absolute bottom-0 left-0 overflow-hidden transition-all duration-300 ${
          open ? "w-[100%]" : "w-0"
        }`}
      >
        <ShareMenu share={share} />
      </div>
    </div>
  );
}
