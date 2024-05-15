/* eslint-disable @next/next/no-img-element */
"use client";

import { PlaceSuggestion } from "@/models/place/get";
import Link from "next/link";

type Props = {
  place: PlaceSuggestion;
};

export default function Card({ place }: Props) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
      <img
        className="h-48 w-full object-cover object-end"
        src={place.img}
        alt="Home in Countryside"
      />
      <div className="p-6">
        <h4 className="my-2 font-semibold text-lg leading-tight truncate">
          {place.location}
        </h4>
        <div className="flex items-center gap-1 mb-2 text-sm">
          <span>{place.description}</span>
        </div>
        <div className="flex justify-end mt-2">
          <Link
            className="text-blue-600 italic"
            href={`/map?address=${place.location}`}
          >
            Xem vị trí
          </Link>
        </div>
      </div>
    </div>
  );
}
