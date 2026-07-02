"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface SkillItem {
  label: string;
  value: number;
  color: string;
}

interface SkillsChartProps {
  items: SkillItem[];
}

const SIZE = 280;
const CENTER = SIZE / 2;

const STROKE = 16;
const GAP = 8;

export default function SkillsChart({ items }: SkillsChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const active =
    activeIndex !== null
      ? items[activeIndex]
      : {
          label: "Our\nSkill-scale",
          value: null,
          color: "#666",
        };
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setActiveIndex(null);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  const rings = useMemo(() => {
    return items.map((item, index) => {
      const OUTER_RADIUS = 120;
      const INNER_GAP = 22;

      const radius = OUTER_RADIUS - index * INNER_GAP;
      const circumference = 2 * Math.PI * radius;

      const progress = circumference - (circumference * item.value) / 100;

      return {
        ...item,
        radius,
        circumference,
        progress,
      };
    });
  }, [items]);

  return (
    <div
      ref={wrapperRef}
      onMouseLeave={() => {
        if (window.innerWidth >= 1024) setActiveIndex(null);
      }}
      className="flex flex-col items-center"
    >
      <div className="relative h-[280px] w-[280px]">
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          {rings.map((ring, index) => (
            <g key={index}>
              {/* Hit Area */}
              <circle
                cx={CENTER}
                cy={CENTER}
                r={ring.radius}
                fill="none"
                stroke="transparent"
                strokeWidth={STROKE + 12}
                pointerEvents="stroke"
                onMouseEnter={() => {
                  console.log(index);
                  setActiveIndex(index);
                }}
                onClick={() => setActiveIndex(index)}
              />

              {/* Visible Ring */}
              <circle
                cx={CENTER}
                cy={CENTER}
                r={ring.radius}
                fill="none"
                stroke={ring.color}
                strokeWidth={activeIndex === index ? STROKE + 2 : STROKE}
                strokeLinecap="round"
                strokeDasharray={`${ring.circumference - 42} 42`}
                transform={`rotate(-135 ${CENTER} ${CENTER})`}
              />
            </g>
          ))}
        </svg>

        {/* Center Circle */}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-[88px] w-[88px] scale-100 flex-col items-center justify-center rounded-full bg-white shadow transition-all duration-300">
            {" "}
            {active.value === null ? (
              <>
                <span className="text-[15px] text-gray-500">Our</span>

                <span className="text-[14px] text-gray-500">Skill-scale</span>
              </>
            ) : (
              <>
                <span
                  className="fade-in px-2 text-center text-[15px] leading-5 duration-300"
                  style={{
                    color: active.color,
                  }}
                >
                  {active.label}
                </span>

                <span
                  className="mt-2 text-[14px] font-light transition-all duration-300"
                  style={{
                    color: active.color,
                  }}
                >
                  {active.value}%
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Legend */}

      <div className="mt-8 space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center gap-3 transition-all duration-300"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(index)}
          >
            <div
              className="h-4 w-4 rounded-sm transition-all duration-300"
              style={{
                background: item.color,
              }}
            />

            <span
              className={`transition-all duration-300 ${
                activeIndex === index ? "font-medium" : ""
              }`}
              style={{
                color: "text-[#3f4248] dark:text-white",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
