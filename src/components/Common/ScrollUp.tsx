"use client";

import { useEffect } from "react";

export default function ScrollUp() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // or remove this line
    });
  }, []);

  return null;
}
