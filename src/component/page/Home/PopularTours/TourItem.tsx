/* eslint-disable @next/next/no-img-element */
"use client";

import { Tour } from "@/models/tour";

type Props = {
  tour: Tour;
  colSpan?: string;
};

export default function TourItem({ tour, colSpan = "1" }: Props) {
  return (
    <a
      href="#"
      className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 col-span-${colSpan}`}
    >
      <img
        src="/product.jpeg"
        loading="lazy"
        alt="Product"
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />
      <div className="relative w-full bg-black bg-opacity-40 backdrop-filter backdrop-blur-md p-3">
        <b className="text-emerald-500 text-lg">Tour Phú Quốc</b>
        <div>
          <span className="font-bold text-lg text-white">1000.000vnđ</span>
          <span className="text-emerald-500 font-bold text-xs">
            Price stars from
          </span>
        </div>
      </div>
    </a>
  );
}
