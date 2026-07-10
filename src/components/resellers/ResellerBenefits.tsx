"use client";

import { ReactNode } from "react";

interface ResellerBenefitsProps {
  icon: ReactNode;
  title: string;
  variant?: "light" | "primary";
  description: string;
  points: string[];
  columns?: 1 | 2;
}

export default function ResellerBenefits({
  icon,
  variant,
  title,
  description,
  points,
  columns = 1,
}: ResellerBenefitsProps) {
  return (
    <section className="flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">
      {/* Header */}
      <div
        className={`flex items-center gap-4 px-7 py-5 ${
          variant === "primary"
            ? "bg-primary-blue text-white"
            : "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-white"
        }`}
      >
        <div className="text-primary-blue flex h-11 w-11 items-center justify-center rounded-lg bg-white shadow">
          {icon}
        </div>

        <h2 className="text-xl font-semibold tracking-wide uppercase">
          {title}
        </h2>
      </div>

      {/* Body */}
      <div className="space-y-6 p-4">
        <p className="text-[16px] leading-6 text-gray-600 dark:text-gray-300">
          {description}
        </p>

        <ul
          className={`gap-x-8 gap-y-4 ${
            columns === 2 ? "grid md:grid-cols-2" : "space-y-4"
          }`}
        >
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <div className="border-primary-blue mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border">
                <svg
                  className="text-primary-blue h-2.5 w-2.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </div>

              <span className="text-[15px] leading-[22px] text-gray-700 dark:text-gray-300">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
