"use client";
import { useEffect } from "react";

export default function ScrollWatcher() {
  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("main-container");
      const navbar = document.getElementById("navbar-div");
      if (!container) return;
      if(!navbar) return;

      const rect = container.getBoundingClientRect();
      if (rect.top <= 0) {
        navbar?.classList.add('bg-[#f1f5f8]');
    } else{
        navbar?.classList.remove('bg-[#f1f5f8]');

      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
