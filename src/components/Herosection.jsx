"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function HeroSection({ data }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % data.length);
  };

  const currentSlide = data[current];

  return (
    <div className="relative w-full h-[250px] md:h-[600px] overflow-hidden">

      {data?.map((item, index) => (
        <div
          key={item.slug || index}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${index === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div
          className="
    bg-[#c1c0b4]/85
    h-full w-[65%] md:w-[50%] lg:w-[45%]
    flex flex-col items-center justify-center
    text-center
    px-4 py-3 md:px-10 md:py-8
  "
        >
          <h2
            style={{ fontFamily: "var(--font-merriweather), Georgia, serif" }}
            className="text-[11px] md:text-[26px] text-[#222] font-bold tracking-tight md:mb-4 mb-1.5 leading-[1.3]"
          >
            {currentSlide.title}
          </h2>
          <svg
            width="100%"
            height="6"
            viewBox="0 0 48 6"
            className="mx-auto max-w-[30px] md:max-w-[240px] mb-2 md:mb-5 shrink-0"
            fill="none"
            stroke="#e6e6e1"
            strokeWidth="2"
          >
            <path d="M0 3 L3 0 L6 6 L9 0 L12 6 L15 0 L18 6 L21 0 L24 6 L27 0 L30 6 L33 0 L36 6 L39 0 L42 6 L45 0 L48 3" />
          </svg>

          <h3 className="opacity-90 text-[7px] md:text-[14px] font-normal text-[#2f2f2f] font-serif mb-2 md:mb-6 leading-[1.45] line-clamp-3">
            {currentSlide.shortdescription}
          </h3>
          <div
            className="cursor-pointer text-white text-[8px] md:text-xl md:mb-5 mb-2"
            onClick={nextSlide}
          >
            ✕
          </div>
          <Link
            href={`/${currentSlide.category}/${currentSlide.slug}`}
            title={`Read full article: ${currentSlide.title}`}
            aria-label={`Read full article: ${currentSlide.title}`}
            className="cursor-pointer relative group text-[8px] md:text-[13px]
             px-2 py-1 md:px-4 md:py-2 font-bold text-gray-200
             bg-[#2f2f2f] border-[1px] md:border-[4px] border-[#2f2f2f]
             hover:bg-white hover:border-white transition-all duration-300
             md:mb-6 mb-2 inline-block"
          >
            <span className="absolute inset-0 border md:border-[2px] border-white group-hover:border-[#2f2f2f] pointer-events-none"></span>
            <span className="relative group-hover:text-[#2f2f2f]">
              Read article
            </span>
          </Link>

      <div className="flex justify-center ">
  {data.map((_, i) => (
    <button
      key={i}
      onClick={() => setCurrent(i)}
      aria-label={`Go to slide ${i + 1}`}
      className="w-8 h-8 flex items-center justify-center"
    >
      <span
        className={`w-3 h-3 rotate-45 border border-white transition ${
          current === i ? "bg-white" : "bg-transparent"
        }`}
      />
    </button>
  ))}
</div>

        </div>
      </div>
    </div>
  );
}
