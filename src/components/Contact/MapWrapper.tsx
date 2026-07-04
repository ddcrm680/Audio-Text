"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="h-[180px] w-full animate-pulse rounded-lg bg-gray-200 md:h-[500px] dark:bg-slate-800" />
  ),
});

export default function MapWrapper() {
  return <Map />;
}
