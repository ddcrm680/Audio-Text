"use client";

import { useEffect, useRef, useState } from "react";
import TeamCard from "./TeamCard";
import { TEAM_MEMBERS } from "@/utils/constants";
import { useMediaQuery } from "@/hook/useMediaQuery";

export default function TeamSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // lg breakpoint
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside (mobile/tablet only)
  useEffect(() => {
    if (isDesktop) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setActiveCard(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDesktop]);

  // When switching to desktop, clear active card
  useEffect(() => {
    if (isDesktop) {
      setActiveCard(null);
    }
  }, [isDesktop]);

  return (
    <div
      ref={containerRef}
      className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
    >
      {TEAM_MEMBERS.map((member, index) => (
        <TeamCard
          key={member.title}
          {...member}
          index={index}
          active={!isDesktop && activeCard === index}
          onClick={() => {
            if (isDesktop) return;

            setActiveCard((prev) => (prev === index ? null : index));
          }}
        />
      ))}
    </div>
  );
}
