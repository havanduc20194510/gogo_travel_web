/* eslint-disable @next/next/no-img-element */
"use client";

import { Tour } from "@/models/tour/get";
import { formatPrice } from "@/utils/price";
import Link from "next/link";

type Props = {
  tour: Tour;
  colSpan?: string;
};

export default function TourItem({ tour, colSpan = "1" }: Props) {
  return (
    <Link
      href={`tours/${tour.tourId}`}
      className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 col-span-${colSpan}`}
    >
      <img
        src={tour.images?.[0]?.url}
        loading="lazy"
        alt="Product"
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />
      <div className="relative w-full bg-black bg-opacity-40 backdrop-filter backdrop-blur-md p-3">
        <b className="text-emerald-500 text-lg">{tour.name}</b>
        <div>
          <span className="font-bold text-lg text-white">
            {formatPrice(tour.adultPrice)}
          </span>
          <span className="text-emerald-500 font-bold text-xs ml-2">
            Price stars from
          </span>
        </div>
      </div>
    </Link>
  );
}
