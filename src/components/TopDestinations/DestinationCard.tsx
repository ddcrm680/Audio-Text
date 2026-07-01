"use client";

import Image from "next/image";
import { Share2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ShareMenu from "./ShareMenu";
import { DestinationCardProps } from "@/types/destination";
import share from "../../../public/images/destination/share.png";
export default function DestinationCard({
  image,
  onToggle,
  onImageClick,
  onClose,
  title,
  open,
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
  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden bg-white shadow-sm dark:bg-slate-700"
    >
      <img
        src={image}
        onClick={onImageClick}
        alt={title}
        className="h-[210px] w-full cursor-pointer object-cover"
      />
      {/* Blue Overlay */}
      <div
        className={`pointer-events-none absolute inset-0 bg-[#48AFDB]/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="flex h-[60px]">
        <div className="flex flex-1 items-center px-8 text-[16px] uppercase md:text-[21px]">
          {title}
        </div>

        {!open && (
          <button
            onClick={onToggle}
            className="flex w-[60px] cursor-pointer items-center justify-center bg-[#3b5578] text-white"
          >
            <Image src={share} alt={"Share"} width={20} height={20} />
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
        <ShareMenu />
      </div>
    </div>
  );
}
