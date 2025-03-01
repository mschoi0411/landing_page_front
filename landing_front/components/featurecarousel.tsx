"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // next/image 사용

const uiScreens = [
  "/images/landing1.png",
  "/images/landing2.png",
  "/images/landing3.png",
  "/images/landing4.png",
  "/images/landing5.png",
];

export default function FeatureCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % uiScreens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto max-w-4xl aspect-[2/1] overflow-hidden rounded-lg shadow-lg">
      <Image
        src={uiScreens[index]}
        alt="JUD.GG UI"
        width={800} 
        height={400} 
        layout="responsive" // 반응형 크기 조정 (Vercel 최적화)
        className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
      />
      {/* 인디케이터 (하단 점 표시) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {uiScreens.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-gray-500 opacity-50"}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
