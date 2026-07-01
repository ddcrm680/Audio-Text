"use client";

import { SERVICES } from "@/utils/constants";
import ServiceCard from "./ServiceCard";

export function Services() {
  return (
    <section className="bg-[#eef5fb] py-[50px] dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-center">
          <h2 className="mb-[42px] text-center text-[25px] leading-snug font-light text-[#48AFDB] md:text-4xl lg:w-full dark:text-sky-400">
            A range of tremendous applications to offer you outstanding
            services!
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-16 xl:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
