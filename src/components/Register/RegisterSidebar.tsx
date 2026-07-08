"use client";

import { sections } from "@/utils/constants";
import { User, ContactRound, Landmark, FileText } from "lucide-react";
import { useEffect, useState } from "react";

export default function RegisterSidebar() {
  const [active, setActive] = useState("personal");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);

        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goto = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside className="sticky top-28 h-fit rounded border border-[#e3e8ef] dark:border-slate-700 dark:bg-slate-900">
      {/* <div className="border-b border-[#d9d9d9] p-5">
        <h3 className="text-[22px] font-medium">Registration</h3>

        <p className="mt-1 text-[13px] tracking-wider text-gray-500 uppercase">
          Step 1 of 3
        </p>
      </div> */}

      <div className="">
        {sections.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => goto(item.id)}
              className={`flex w-full cursor-pointer items-center gap-3 px-5 py-3 text-left transition ${
                active === item.id
                  ? "text-primary-blue bg-[#dceaff] dark:bg-[#1b3554] dark:text-[#66c5ff]"
                  : "hover:bg-[#eef4ff] dark:hover:bg-slate-800"
              }`}
            >
              <Icon size={17} />

              <span className="text-[15px]">{item.title}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
