"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import icon_traingle from "../../assets/images/icon_traingle.svg";

export default function Loader() {
  const [active, setActive] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // 2 sec baad fade-out start
    const timer1 = setTimeout(() => {
      setActive(true);
    }, 1000);

    // transition complete hone ke baad loader hatana
    const timer2 = setTimeout(() => {
      setHide(true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (hide) return null;

  return (
    <div
      className={`loader d-flex align-items-center justify-content-center ${active ? "loader-active" : ""}`}
    >
      <Image src={icon_traingle} alt="loader" />
    </div>
  );
}
