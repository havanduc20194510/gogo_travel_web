/* eslint-disable @next/next/no-img-element */
"use client";

import { Place } from "@/models/place/get";
import Link from "next/link";

type Props = {
  place: Place;
};

export default function DestinationItem({ place }: Props) {
  return (
    <Link href={`destination/${place.id}`}>
      <div
        className=" rounded-md overflow-hidden shadow-md hover:shadow-lg relative"
        style={{ height: "420px" }}
      >
        <div className="relative p-4">
          <img
            className="w-full"
            src={place.images?.[0]?.url ?? ""}
            style={{ minHeight: "245px", maxHeight: "245px" }}
            alt="Product Image"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2 limited-text">
            {place.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-bold">{place.location}</span>
            <div className="flex items-center">
              <img className="m-3" src="/icons/clock.svg" alt="" />
              <p>
                {place.timeOpen} - {place.timeClose}
              </p>
            </div>
          </div>
        </div>
        {/* <View totalView={place.totalView} /> */}
      </div>
    </Link>
  );
}
