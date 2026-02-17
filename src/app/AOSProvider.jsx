"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Aos from "aos";

export default function AOSProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    Aos.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    Aos.refreshHard(); // IMPORTANT: reset on route change
  }, [pathname]);

  return children;
}
