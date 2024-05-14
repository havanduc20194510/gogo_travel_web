/* eslint-disable @next/next/no-img-element */
"use client";

import { Place } from "@/models/place/get";
import Link from "next/link";

type Props = {
  place: Place;
};

export default function Card({ place }: Props) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
      <img
        className="h-48 w-full object-cover object-end"
        src={place.images[0]?.url}
        alt="Home in Countryside"
      />
      <div className="p-6">
        <h4 className="my-2 font-semibold text-lg leading-tight truncate ">
          {place.name}
        </h4>
        <div className="flex items-center gap-1 mb-2 text-sm">
          <img src="/icons/clock.svg" alt="" />
          <span className="limited-text">{place.timeOpen}</span>
        </div>
        <div className="flex items-center gap-1 mb-2 text-sm">
          <img src="/icons/clock.svg" alt="" />
          <span className="limited-text">{place.timeClose}</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <img src="/icons/location.svg" alt="" />
          <span className="limited-text"> {place.location}</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <img src="/icons/car.svg" alt="" />
          <span className="limited-text">{place.activities}</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <img src="/icons/detail.svg" alt="" />
          <span className="limited-text">{place.note}</span>
        </div>
        <div className="text-right mt-2 flex items-center justify-end">
          <img src="/icons/map-color.svg" alt="" />
          <Link
            className="text-blue-600 italic"
            href={`/map?address=${place.address}`}
          >
            Xem vị trí
          </Link>
        </div>
      </div>
    </div>
  );
}
