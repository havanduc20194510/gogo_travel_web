/* eslint-disable @next/next/no-img-element */
"use client";

import { Tour } from "@/models/tour/get";
import { formatPrice } from "@/utils/price";

type Props = {
  tour: Tour;
};

export default function DestinationItem({ tour }: Props) {
  return (
    <div className=" rounded-md overflow-hidden shadow-md hover:shadow-lg">
      <div className="relative p-4">
        <img className="w-full" src={tour.images[0].url} alt="Product Image" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{tour.name}</h3>
        <div className="flex items-center justify-between">
          <span className="font-bold">{formatPrice(tour.adultPrice)}</span>
          <div className="flex items-center">
            <img className="m-3" src="/icons/location.svg" alt="" />
            <p>7 days for trips</p>
          </div>
        </div>
      </div>
    </div>
  );
}
